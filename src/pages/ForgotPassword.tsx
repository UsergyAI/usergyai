import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: "Error sending reset link",
          description: "Please try again later.",
          variant: "destructive",
        });
      } else {
        setIsSubmitted(true);
        toast({
          title: "Reset link sent",
          description: "Please check your email for the password reset link.",
        });
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
        title="Forgot Password - Usergy"
        description="Reset your Usergy account password"
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-usergy-light via-white to-blue-50">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-usergy-dark mb-4">
                Forgot Your Password? No Problem.
              </h1>
              <h2 className="text-lg text-gray-600 mb-6">
                Enter your email and we'll send you a link to reset it
              </h2>
              
              {/* Abstract AI Visual */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-usergy-coral to-usergy-gold rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
              </div>
            </div>

            {/* Form or Success Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-semibold text-usergy-dark mb-6 text-center">
                    Reset Your Access
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.account@example.com"
                        className={`h-[52px] px-4 py-3 border-2 rounded-xl transition-all duration-300
                          hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10
                          ${error ? 'border-red-500' : 'border-gray-200'}`}
                      />
                      {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-[52px] bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? 'Sending Reset Link...' : 'Send Reset Link →'}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-usergy-dark">
                    Check Your Email
                  </h3>
                  
                  <p className="text-gray-600">
                    If an account with that email exists, a password reset link has been sent to your inbox. 
                    Please check your email and follow the instructions to reset your password.
                  </p>
                  
                  <div className="pt-4">
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail('');
                      }}
                      variant="outline"
                      className="mr-4"
                    >
                      Send Another Link
                    </Button>
                  </div>
                </div>
              )}

              {/* Back to Login */}
              <div className="mt-8 text-center border-t border-gray-200 pt-6">
                <p className="text-gray-600">
                  Remember your password?{' '}
                  <Link 
                    to="/login" 
                    className="text-usergy-turquoise hover:text-usergy-skyblue font-medium transition-colors"
                  >
                    Back to Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ForgotPassword;