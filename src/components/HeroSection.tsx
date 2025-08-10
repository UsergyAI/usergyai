
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5 pt-28 md:pt-32 lg:pt-36">
      {/* Enhanced Animated Background Canvas - Optimized */}
      <AnimatedBackground particleCount={30} />

      {/* Enhanced Floating Bubbles - Hero Section Only */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float-enhanced opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-primary/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
        <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-primary/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
        <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-primary/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline with better sizing and agency messaging */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight animate-fade-in px-2">
            Your Brilliant AI Tool 
            <span className="block gradient-text mt-2 md:mt-3">Deserves Expert Guidance</span>
          </h1>
          
          {/* Improved emphasis styling with better readability */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
            <span className="text-foreground drop-shadow-sm">We Deliver </span>
            <span className="text-primary drop-shadow-sm">Real Traction</span>
            <span className="text-foreground drop-shadow-sm">, </span>
            <span className="text-accent drop-shadow-sm">Fast</span>
            <span className="text-foreground drop-shadow-sm">.</span>
          </div>

          {/* Sub-headline with agency messaging */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4">
            Our expert team connects visionary AI founders with engaged enthusiasts to deliver 
            <span className="text-primary"> authentic feedback</span>, 
            <span className="text-primary"> vibrant community</span>, and 
            <span className="text-primary"> social momentum</span> that matters.
          </p>

          {/* Fixed CTA Buttons with proper mobile/tablet spacing */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 animate-scale-in px-4 max-w-4xl mx-auto">
            {/* Primary CTA - Full width on mobile, auto on larger screens */}
            <Button 
              size="lg"
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Book Your Strategy Call</span>
            </Button>
            
            {/* Secondary CTA - Updated to redirect to user-signup */}
            <Button 
              size="lg"
              variant="outline"
              onClick={handleJoinCommunity}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] border border-border text-foreground hover:bg-muted font-bold text-base sm:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Join Our AI Explorer Community</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
