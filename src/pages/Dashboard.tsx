import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { User } from '@supabase/supabase-js';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication and get user data
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/login');
          return;
        }
        
        setUser(session.user);
      } catch (error) {
        console.error('Error checking auth:', error);
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          title: "Error signing out",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed out successfully",
          description: "You've been signed out of your account.",
        });
        navigate('/login');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-usergy-turquoise mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const getUserName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'Explorer';
  };

  return (
    <>
      <SEOHead 
        title="Dashboard - Usergy"
        description="Your personalized Usergy dashboard"
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-usergy-light via-white to-blue-50">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-24">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-usergy-dark mb-6">
              Welcome Back, {getUserName()}!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your personalized dashboard is coming soon! Get ready to track your projects, 
              explore new opportunities, and see your impact.
            </p>
            
            {/* Abstract AI Visual */}
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-usergy-turquoise via-usergy-skyblue to-usergy-coral rounded-full flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full opacity-90 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-usergy-gold rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-usergy-coral rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="max-w-4xl mx-auto">
            {/* Account Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-semibold text-usergy-dark mb-6">Account Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                  <p className="text-lg text-gray-900">{user?.email}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Account Status</label>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-lg text-green-600">Active</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Member Since</label>
                  <p className="text-lg text-gray-900">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Account Type</label>
                  <p className="text-lg text-gray-900">AI Explorer</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-usergy-dark mb-4">Explore Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with fellow AI explorers and discover new opportunities.
                </p>
                <Link to="/community">
                  <Button className="bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-semibold rounded-xl transition-all duration-300">
                    Explore Community →
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-usergy-dark mb-4">Join Discord</h3>
                <p className="text-gray-600 mb-4">
                  Join our vibrant Discord community for real-time discussions.
                </p>
                <a 
                  href="https://discord.com/invite/jkeSnkm5ww" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-usergy-coral hover:bg-usergy-gold text-white font-semibold rounded-xl transition-all duration-300">
                    Join Discord 💬
                  </Button>
                </a>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-2xl p-8 border border-usergy-turquoise/20 mb-8">
              <h3 className="text-2xl font-semibold text-usergy-dark mb-4">Coming Soon</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 bg-usergy-turquoise/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-usergy-turquoise text-xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Project Dashboard</h4>
                  <p className="text-sm text-gray-600">Track your AI exploration projects</p>
                </div>
                
                <div className="p-4">
                  <div className="w-12 h-12 bg-usergy-skyblue/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-usergy-skyblue text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personalized Matches</h4>
                  <p className="text-sm text-gray-600">AI-powered project recommendations</p>
                </div>
                
                <div className="p-4">
                  <div className="w-12 h-12 bg-usergy-coral/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-usergy-coral text-xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Impact Metrics</h4>
                  <p className="text-sm text-gray-600">See your contribution impact</p>
                </div>
              </div>
            </div>

            {/* Sign Out */}
            <div className="text-center">
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;