
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    navigate('/user-signup');
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.com/invite/jkeSnkm5ww', '_blank');
  };

  return (
    <section className="py-16 md:py-24 section-wash relative overflow-hidden">
      {/* Subtle animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary rounded-full blur-lg animate-pulse" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
            Ready to Influence the Future of AI?
          </h2>
          
          <p className="text-lg md:text-xl font-semibold text-gray-600 mb-12 leading-relaxed">
            Your curiosity can shape tomorrow's technology. Join Usergy's community of passionate AI explorers 
            and start making a real impact today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={handleJoinCommunity}
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <ArrowRight className="mr-3 h-6 w-6" />
              Join Our AI Explorer Community Today!
            </Button>

            <Button 
              size="lg"
              variant="outline"
              onClick={handleJoinDiscord}
              className="border-2 border-usergy-skyblue bg-white hover:bg-usergy-skyblue hover:text-white text-usergy-skyblue font-bold text-xl py-8 px-16 rounded-full shadow-xl hover:shadow-usergy-skyblue/30 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Our Discord Community
            </Button>
          </div>

          <div className="mt-12 text-gray-500">
            <p className="mb-2">
              <span className="inline-flex items-center mr-6">
                <svg className="w-5 h-5 mr-2 text-usergy-turquoise" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <strong>Free to join</strong>
              </span>
              <span className="inline-flex items-center mr-6">
                <svg className="w-5 h-5 mr-2 text-usergy-skyblue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <strong>Instant access</strong>
              </span>
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2 text-usergy-coral" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <strong>Start earning immediately</strong>
              </span>
            </p>
            <p className="text-sm">Join thousands of AI enthusiasts already shaping the future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
