import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Star, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityHero = () => {
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    navigate('/user-signup');
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/usergy-ai', '_blank');
  };

  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-gradient-to-br from-usergy-light via-white to-usergy-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-usergy-turquoise rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-usergy-skyblue rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-usergy-coral rounded-full blur-md animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-usergy-dark mb-4 sm:mb-6 md:mb-8 leading-tight animate-fade-in px-2">
            Join the AI Explorer Community
          </h1>

          {/* Sub-header */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-usergy-turquoise mb-6 sm:mb-8 md:mb-10 animate-pulse-glow px-2">
            Shape Tomorrow's AI While Earning Today
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4">
            Connect with passionate AI enthusiasts, test cutting-edge tools, and earn rewards while helping shape the future of artificial intelligence. Your curiosity becomes your contribution.
          </p>

          {/* Fixed CTA Buttons with improved mobile layout */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 animate-scale-in px-4 max-w-4xl mx-auto">
            {/* Primary CTA Button - Updated to redirect to user-signup */}
            <Button 
              size="lg"
              onClick={handleJoinCommunity}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[350px] bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="truncate">Join Our AI Explorer Community</span>
            </Button>
            
            {/* Secondary CTA Button - Discord link remains unchanged */}
            <Button 
              size="lg"
              variant="outline"
              onClick={handleJoinDiscord}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[350px] border-2 border-usergy-skyblue bg-white hover:bg-usergy-skyblue hover:text-white text-usergy-skyblue font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-xl hover:shadow-usergy-skyblue/30 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="truncate">Join Our Discord</span>
            </Button>
          </div>

          {/* Community Stats with enhanced mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-turquoise/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-turquoise/20 text-usergy-turquoise mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-usergy-dark mb-2">75,000+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Active AI Explorers</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-skyblue/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-skyblue/20 text-usergy-skyblue mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-usergy-dark mb-2">1,200+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">AI Tools Tested</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-coral/20 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-coral/20 text-usergy-coral mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-usergy-dark mb-2">$2.5M+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Rewards Distributed</div>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-2xl p-6 sm:p-8 border border-usergy-turquoise/30 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-usergy-dark mb-6 sm:mb-8">What You'll Get as an AI Explorer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-usergy-turquoise rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-usergy-dark mb-1">Early Access to AI Tools</div>
                  <div className="text-sm text-gray-600">Test cutting-edge AI applications before public release</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-usergy-skyblue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-usergy-dark mb-1">Earn Real Rewards</div>
                  <div className="text-sm text-gray-600">Get paid for your feedback and participation</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-usergy-coral rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-usergy-dark mb-1">Shape AI Development</div>
                  <div className="text-sm text-gray-600">Your input directly influences product roadmaps</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-usergy-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-usergy-dark mb-1">Connect with Innovators</div>
                  <div className="text-sm text-gray-600">Network with AI founders and fellow enthusiasts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
