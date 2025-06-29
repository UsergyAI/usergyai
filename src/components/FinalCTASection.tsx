import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-usergy-turquoise via-usergy-skyblue to-usergy-coral relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full blur-md animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight px-2">
            Stop Waiting. 
            <span className="block text-usergy-gold animate-pulse-glow mt-1 sm:mt-2">Start Building with Expert Guidance.</span>
          </h2>

          {/* Sub-header */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Whether you're an AI founder ready to make your mark or eager to shape the future of technology, 
            <span className="font-bold"> our expert team is your strategic advantage</span>. Join the movement that's transforming AI development through professional guidance.
          </p>

          {/* Fixed Dual CTAs with proper mobile spacing */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-4 max-w-3xl mx-auto">
            {/* Primary CTA */}
            <Button 
              size="lg"
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] bg-white text-usergy-turquoise hover:bg-usergy-light font-black text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-110 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="truncate">Book Your Strategy Call</span>
            </Button>
            
            {/* Secondary CTA */}
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('how-it-works')}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] border-2 sm:border-3 border-white bg-white/20 text-white hover:bg-white hover:text-usergy-coral font-black text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="truncate">See Our Founder Process</span>
            </Button>
          </div>

          {/* Urgency Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-white/80 px-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-usergy-gold rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">Join 1,200+ Success Stories</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">Expert Guidance from Day One</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-usergy-gold rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">Strategic Consultation Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
