import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const SignupVerifySuccess = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleEmailConfirmation = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error || !data.session) {
          console.error('Email verification error:', error);
          setError('Email verification failed. Please check your email and try the link again, or contact support.');
          setIsProcessing(false);
          return;
        }

        console.log('Email verification successful, user authenticated');
        
        // Immediate redirect to profile page for seamless flow
        navigate('/signup/profile');
        
      } catch (err) {
        console.error('Error handling email confirmation:', err);
        setError('Something went wrong during verification.');
      } finally {
        setIsProcessing(false);
      }
    };

    handleEmailConfirmation();
  }, [navigate]);

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-usergy-light flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Loader2 className="h-12 w-12 text-usergy-turquoise mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-bold text-usergy-dark mb-2">Verifying Your Email...</h2>
            <p className="text-gray-600">Please wait while we confirm your account.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-usergy-light">
        <Header />
        <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-red-500 text-4xl mb-4">⚠️</div>
                <h2 className="text-xl font-bold text-usergy-dark mb-4">Verification Failed</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <Link to="/signup/account">
                  <Button className="bg-usergy-turquoise hover:bg-usergy-skyblue">
                    Try Again
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-usergy-light">
      <Helmet>
        <title>Email Verified Successfully - Usergy AI Explorer</title>
        <meta name="description" content="Your email has been verified! Continue to complete your AI Explorer profile." />
      </Helmet>
      
      <Header />
      
      <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
        <AnimatedBackground particleCount={30} enableFloatingBubbles={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-usergy-dark mb-4">Email Verified!</h2>
              <p className="text-gray-600 mb-6">
                Great! Your email has been verified. Now let's complete your AI Explorer profile.
              </p>
              <p className="text-sm text-gray-500">Redirecting you to profile setup...</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignupVerifySuccess;