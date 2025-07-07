import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const SignupWelcome = () => {
  return (
    <div className="min-h-screen bg-usergy-light">
      <Helmet>
        <title>Welcome to Usergy! - AI Explorer Community</title>
        <meta name="description" content="Welcome to the Usergy AI Explorer community! Your adventure in AI innovation begins now." />
      </Helmet>
      
      <Header />
      
      <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
        <AnimatedBackground particleCount={40} enableFloatingBubbles={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-5xl md:text-6xl font-black text-usergy-dark mb-6 animate-scale-in">
                Welcome to the Usergy Explorer Community!
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-usergy-turquoise mb-4">
                Your Adventure Awaits!
              </h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto animate-slide-up">
                Your profile is complete! You're officially an AI Explorer. Get ready to receive exciting project invitations and connect with fellow innovators.
              </p>
            </div>

            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm mb-8 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <span className="text-lg font-semibold text-usergy-dark">Profile Complete!</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <h3 className="font-bold text-usergy-dark flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-usergy-turquoise" />
                      What's Next?
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Get exclusive invitations to test cutting-edge AI tools</li>
                      <li>• Connect with fellow AI explorers in our community</li>
                      <li>• Provide feedback that shapes the future of AI</li>
                      <li>• Access early previews and beta features</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-usergy-dark flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-usergy-turquoise" />
                      Stay Connected
                    </h3>
                     <div className="space-y-3">
                      <a 
                        href="https://discord.com/invite/jkeSnkm5ww" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Join Our Discord Community! 💬
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      
                      <a 
                        href="/community" 
                        className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue text-white rounded-lg hover:from-usergy-skyblue hover:to-usergy-turquoise transition-all duration-300 font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Explore Future Projects (Coming Soon!) →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/'}
              >
                Explore Usergy Services
              </Button>
              
              <p className="text-sm text-gray-500">
                Keep an eye on your inbox for exclusive AI tool invitations!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignupWelcome;