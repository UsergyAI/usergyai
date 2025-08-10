import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const ServicesFinalCTA = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="py-16 sm:py-20 brand-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-primary-foreground mb-6">
          Ready to Unlock Your AI's Full Potential?
        </h2>
        <p className="text-lg font-semibold text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Don't leave your innovation to chance. Partner with Usergy's expert team to gain the traction, insights, and community your AI product deserves.
        </p>
        <div className="flex justify-center px-4">
          <Button 
            size="lg"
            onClick={handleCalendlyRedirect}
            className="btn-primary w-full sm:w-auto max-w-md font-bold text-base sm:text-lg py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 min-h-[56px]"
          >
            <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <span className="truncate">Book Your Strategy Call Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesFinalCTA;
