import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Eye, EyeOff } from 'lucide-react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if we have the access token from the reset link
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    
    if (!accessToken || !refreshToken) {
      toast({
        title: "Invalid reset link",
        description: "This password reset link is invalid or has expired.",
        variant: "destructive",
      });
      navigate('/forgot-password');
      return;
    }

    // Set the session with the tokens from the URL
    const setSession = async () => {
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (error) {
        console.error('Session error:', error);
        toast({
          title: "Invalid reset link",
          description: "This password reset link is invalid or has expired.",
          variant: "destructive",
        });
        navigate('/forgot-password');
      }
    };

    setSession();
  }, [searchParams, navigate, toast]);

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return minLength && hasUppercase && hasNumber;
  };

  const validateForm = () => {
    const newErrors = { password: '', confirmPassword: '' };
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters with 1 uppercase letter and 1 number';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return !newErrors.password && !newErrors.confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Password reset successful",
          description: "Your password has been updated. Please sign in with your new password.",
        });
        // Add a slight delay before redirect to ensure toast is visible
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              message: "Password reset successfully. Please sign in with your new password." 
            }
          });
        }, 1000);
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
        title="Reset Password - Usergy"
        description="Set your new Usergy account password"
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-usergy-light via-white to-blue-50">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="w-full max-w-md">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-usergy-dark mb-4">
                Set Your New Password
              </h1>
              <h2 className="text-lg text-gray-600 mb-6">
                Choose a strong, new password for your Usergy account
              </h2>
              
              {/* Abstract AI Visual */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-usergy-skyblue to-usergy-turquoise rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
              </div>
            </div>

            {/* Reset Password Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-usergy-dark mb-6 text-center">
                Update Your Credentials
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password *
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
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
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters with 1 uppercase letter and 1 number
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password *
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      className={`h-[52px] px-4 py-3 pr-12 border-2 rounded-xl transition-all duration-300
                        hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10
                        ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[52px] bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? 'Resetting Password...' : 'Reset Password →'}
                </Button>
              </form>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ResetPassword;