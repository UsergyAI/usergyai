import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useRateLimit } from '@/hooks/useRateLimit';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const SignupAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Rate limiting for security
  const rateLimit = useRateLimit({
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    lockoutMs: 30 * 60 * 1000, // 30 minutes lockout
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateField = (field: string) => {
    const newErrors: Record<string, string> = {};

    if (field === 'email' && formData.email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (field === 'password' && formData.password) {
      if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password must contain uppercase, lowercase and number';
      }
    }

    if (field === 'confirmPassword' && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (field === 'fullName') {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      } else if (formData.fullName.length > 100) {
        newErrors.fullName = 'Full name must be less than 100 characters';
      }
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = 'Full name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 128) {
      newErrors.password = 'Password must be less than 128 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase and number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service';
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'You must agree to the Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Check rate limiting
    if (!rateLimit.checkRateLimit()) {
      toast({
        title: "Too Many Attempts",
        description: `Please wait ${rateLimit.isLocked ? '30 minutes' : 'a moment'} before trying again. This helps keep accounts secure.`,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/signup/verify-success`
        }
      });

      if (authError) {
        if (authError.message.includes('already registered')) {
          setErrors({ email: 'This email is already registered. Please try signing in instead.' });
        } else {
          toast({
            title: "Signup Failed",
            description: "Unable to create account. Please try again or contact support.",
            variant: "destructive"
          });
        }
        return;
      }

      if (authData.user) {
        // Create initial profile record - use upsert for better error handling
        try {
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
              user_id: authData.user.id,
              full_name: formData.fullName,
              agreed_to_terms: formData.agreeToTerms,
              agreed_to_privacy: formData.agreeToPrivacy
            }, {
              onConflict: 'user_id'
            });

          if (profileError) {
            console.error('Profile creation error:', profileError);
            // Silent error handling - don't disrupt user experience
            // The profile can be completed later in Part 2
          }
        } catch (profileErr) {
          console.error('Silent profile creation error:', profileErr);
          // Continue to success page regardless - user can complete profile later
        }

        setIsSubmitted(true);
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      toast({
        title: "Signup Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-usergy-light">
        <Helmet>
          <title>Check Your Email - Usergy AI Explorer Signup</title>
          <meta name="description" content="Verify your email to complete your Usergy AI Explorer account setup" />
        </Helmet>
        
        <Header />
        
        <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
          <AnimatedBackground particleCount={30} enableFloatingBubbles={true} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-md mx-auto">
              <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <CheckCircle className="h-16 w-16 text-usergy-turquoise mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-usergy-dark mb-2">
                      Great! Now, Check Your Email!
                    </h2>
                    <p className="text-gray-600">
                      We've sent a verification link to{' '}
                      <span className="font-semibold text-usergy-dark">{formData.email}</span>
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Please click the link in that email to confirm your account and proceed to set up your full Explorer profile.
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-usergy-turquoise">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm font-medium">Verification email sent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-usergy-light">
        <Helmet>
          <title>Create Your AI Explorer Account - Join Usergy Today</title>
          <meta name="description" content="Join the Usergy AI Explorer community and shape the future of AI innovation. Create your account to get exclusive access to cutting-edge AI tools and feedback opportunities." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
      
      <Header />
      
      <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
        <AnimatedBackground particleCount={30} enableFloatingBubbles={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-lg mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-usergy-dark mb-4 animate-fade-in">
                Your AI Adventure Begins Here
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 animate-slide-up">
                Just a few quick steps to unlock exclusive access and shape the future of AI.
              </h2>
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-usergy-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="ml-2 text-sm font-medium text-usergy-turquoise">Create Account</span>
                </div>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Verify Email</span>
                </div>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Complete Profile</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-usergy-dark text-center">
                  Let's Get Your Explorer Account Set Up
                </CardTitle>
                <p className="text-center text-gray-600">
                  This is quick and secure. We'll send a verification link to your email.
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="question-text">
                      <strong>Full Name</strong> <span className="text-red-500">*</span>
                    </Label>
                    <div className="form-field-focus">
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onBlur={() => validateField('fullName')}
                        className={`placeholder-enhanced form-transition ${
                          errors.fullName 
                            ? 'form-field-error' 
                            : formData.fullName && !errors.fullName 
                              ? 'form-field-success animate-success-pulse' 
                              : ''
                        }`}
                        required
                      />
                      {formData.fullName && !errors.fullName && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 animate-check-in" />
                      )}
                    </div>
                    {errors.fullName && (
                      <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
                        <span>⚠️</span> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-3">
                    <Label htmlFor="email" className="question-text">
                      <strong>Email Address</strong> <span className="text-red-500">*</span>
                    </Label>
                    <div className="form-field-focus relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => validateField('email')}
                        className={`placeholder-enhanced form-transition ${
                          errors.email 
                            ? 'form-field-error' 
                            : formData.email && !errors.email 
                              ? 'form-field-success animate-success-pulse' 
                              : ''
                        }`}
                        required
                      />
                      {formData.email && !errors.email && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 animate-check-in" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 opacity-60">This will be your Usergy account email</p>
                    {errors.email && (
                      <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
                        <span>⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-3">
                    <Label htmlFor="password" className="question-text">
                      <strong>Password</strong> <span className="text-red-500">*</span>
                    </Label>
                    <div className="form-field-focus relative">
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        onBlur={() => validateField('password')}
                        className={`placeholder-enhanced form-transition ${
                          errors.password 
                            ? 'form-field-error' 
                            : formData.password && !errors.password 
                              ? 'form-field-success animate-success-pulse' 
                              : ''
                        }`}
                        required
                      />
                      {formData.password && !errors.password && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 animate-check-in" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 opacity-60">Min. 8 characters, 1 uppercase, 1 number</p>
                    {errors.password && (
                      <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
                        <span>⚠️</span> {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-3">
                    <Label htmlFor="confirmPassword" className="question-text">
                      <strong>Confirm Password</strong> <span className="text-red-500">*</span>
                    </Label>
                    <div className="form-field-focus relative">
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Re-enter your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        onBlur={() => validateField('confirmPassword')}
                        className={`placeholder-enhanced form-transition ${
                          errors.confirmPassword 
                            ? 'form-field-error' 
                            : formData.confirmPassword && !errors.confirmPassword 
                              ? 'form-field-success animate-success-pulse' 
                              : ''
                        }`}
                        required
                      />
                      {formData.confirmPassword && !errors.confirmPassword && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 animate-check-in" />
                      )}
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
                        <span>⚠️</span> {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Legal Consent */}
                  <div className="space-y-5">
                    <Label className="question-text">
                      <strong>Legal Consent</strong> <span className="text-red-500">*</span>
                    </Label>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                          className="mt-1"
                        />
                        <div className="space-y-1">
                          <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                            I agree to the{' '}
                            <Link 
                              to="/terms" 
                              className="text-usergy-turquoise hover:text-usergy-skyblue font-medium underline"
                              target="_blank"
                            >
                              Usergy Terms of Service
                            </Link>
                          </Label>
                          {errors.agreeToTerms && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <span>⚠️</span> {errors.agreeToTerms}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <Checkbox
                          id="agreeToPrivacy"
                          checked={formData.agreeToPrivacy}
                          onCheckedChange={(checked) => handleInputChange('agreeToPrivacy', checked)}
                          className="mt-1"
                        />
                        <div className="space-y-1">
                          <Label htmlFor="agreeToPrivacy" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                            I agree to the{' '}
                            <Link 
                              to="/privacy" 
                              className="text-usergy-turquoise hover:text-usergy-skyblue font-medium underline"
                              target="_blank"
                            >
                              Usergy Privacy Policy
                            </Link>
                          </Label>
                          {errors.agreeToPrivacy && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <span>⚠️</span> {errors.agreeToPrivacy}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create My Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignupAccount;