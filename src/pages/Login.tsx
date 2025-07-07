import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    checkUser();

    // Show success message if redirected from password reset
    if (location.state?.message) {
      toast({
        title: "Success",
        description: location.state.message,
      });
      // Clear the state to prevent repeated messages
      navigate(location.pathname, { replace: true });
    }
  }, [navigate, location, toast]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: "Invalid credentials",
            description: "Please check your email and password and try again.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Sign in failed",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in to your account.",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Sign In - Usergy"
        description="Sign in to your Usergy account to continue your AI exploration journey"
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-usergy-light via-white to-blue-50 relative overflow-hidden">
        <Header />
        
        {/* Enhanced Background with subtle animations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-usergy-turquoise/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-usergy-skyblue/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-usergy-coral/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-usergy-gold/10 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
        </div>
        
        <main className="flex-1 flex items-center justify-center px-4 py-24 relative z-10">
          <div className="w-full max-w-md">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-usergy-dark mb-4 animate-fade-in">
                Welcome Back, Explorer!
              </h1>
              <h2 className="text-lg text-gray-600 mb-6 animate-slide-up">
                Sign in to continue your journey and explore groundbreaking AI
              </h2>
              
              {/* Enhanced Abstract AI Visual */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-usergy-turquoise via-usergy-skyblue to-usergy-coral rounded-full flex items-center justify-center animate-pulse-glow relative">
                <div className="w-10 h-10 bg-white rounded-full opacity-90 animate-pulse"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-usergy-gold rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-usergy-coral rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Enhanced Login Form */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-100/50 animate-scale-in hover:shadow-3xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-usergy-dark mb-6 text-center">
                Access Your Usergy Account
              </h3>
              
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className={`h-[52px] px-4 py-3 border-2 rounded-xl transition-all duration-300
                      hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10
                      ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      className={`h-[52px] px-4 py-3 pr-12 border-2 rounded-xl transition-all duration-300
                        hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10
                        ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[52px] bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? 'Signing In...' : 'Sign In →'}
                </Button>
              </form>

              {/* Secondary Actions */}
              <div className="mt-8 space-y-4 text-center">
                <p className="text-gray-600">
                  <Link 
                    to="/forgot-password" 
                    className="text-usergy-turquoise hover:text-usergy-skyblue font-medium transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600">
                    New to Usergy?{' '}
                    <Link 
                      to="/signup/account" 
                      className="text-usergy-turquoise hover:text-usergy-skyblue font-medium transition-colors"
                    >
                      Create an account here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Login;