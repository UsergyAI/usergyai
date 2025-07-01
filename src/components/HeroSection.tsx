
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const handleJoinCommunity = () => {
    navigate('/user-signup');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-28 md:pt-32 lg:pt-36">
      {/* Enhanced Animated Background Canvas */}
      <AnimatedBackground particleCount={60} />

      {/* Floating Elements with improved animation */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-usergy-turquoise rounded-full opacity-60 animate-pulse"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-usergy-coral rounded-full opacity-40 animate-bounce"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue rounded-full opacity-50 animate-pulse"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-usergy-gold rounded-full opacity-70 animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline with better sizing and agency messaging */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-usergy-dark mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight animate-fade-in px-2">
            Your Brilliant AI Tool 
            <span className="block gradient-text mt-2 md:mt-3">Deserves Expert Guidance</span>
          </h1>
          
          {/* Emphasis with agency positioning */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-usergy-turquoise mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-pulse-glow px-2">
            We Deliver Real Traction, Fast.
          </div>

          {/* Sub-headline with agency messaging */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4">
            Our expert team connects visionary AI founders with engaged enthusiasts to deliver 
            <span className="text-usergy-skyblue"> authentic feedback</span>, 
            <span className="text-usergy-coral"> vibrant community</span>, and 
            <span className="text-usergy-turquoise"> social momentum</span> that matters.
          </p>

          {/* Fixed CTA Buttons with proper mobile/tablet spacing */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 animate-scale-in px-4 max-w-4xl mx-auto">
            {/* Primary CTA - Full width on mobile, auto on larger screens */}
            <Button 
              size="lg"
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-base sm:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Book Your Strategy Call</span>
            </Button>
            
            {/* Secondary CTA - Updated to redirect to user-signup */}
            <Button 
              size="lg"
              variant="outline"
              onClick={handleJoinCommunity}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold text-base sm:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Join Our AI Explorer Community</span>
            </Button>
          </div>

          {/* Trust Indicators with enhanced visibility */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-gray-600 animate-fade-in px-4">
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-turquoise rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">1,200+ Campaigns Launched</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-coral rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">75,000+ AI Enthusiasts</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-skyblue rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">92% Feedback Quality Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
