
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTASection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const handleJoinCommunity = () => {
    navigate('/user-signup');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-primary-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-primary-foreground rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-foreground rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-foreground rounded-full blur-md animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4 sm:mb-6 leading-tight px-2">
            Stop Waiting. 
            <span className="block text-primary-foreground animate-pulse-glow mt-1">Start Building with Expert Guidance.</span>
          </h2>

          {/* Compact Sub-header */}
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Whether you're an AI founder or eager to shape the future, 
            <span className="font-bold"> our expert team is your strategic advantage</span>.
          </p>

          {/* Compact Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 max-w-2xl mx-auto">
            {/* Primary CTA */}
            <Button 
              size="lg"
              onClick={handleCalendlyRedirect}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto sm:min-w-[240px] font-black text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-8 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow focus-visible:ring-2 focus-visible:ring-primary-foreground"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Book Strategy Call</span>
            </Button>
            
            {/* Secondary CTA */}
            <Button 
              size="lg"
              variant="outline"
              onClick={handleJoinCommunity}
              className="w-full sm:w-auto sm:min-w-[240px] border border-primary-foreground bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-black text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Join AI Community</span>
            </Button>
          </div>

          {/* Compact Urgency Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-primary-foreground/80 px-4 text-xs sm:text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="font-semibold">1,200+ Success Stories</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="font-semibold">Expert Guidance</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="font-semibold">Strategic Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
