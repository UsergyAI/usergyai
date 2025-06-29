
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const ServicesFinalCTA = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-white mb-6">
          Ready to Unlock Your AI's Full Potential?
        </h2>
        <p className="text-lg font-semibold text-white/90 mb-8 max-w-2xl mx-auto">
          Don't leave your innovation to chance. Partner with Usergy's expert team to gain the traction, insights, and community your AI product deserves.
        </p>
        <Button 
          size="lg"
          onClick={handleCalendlyRedirect}
          className="bg-white text-usergy-turquoise hover:bg-usergy-light font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
        >
          <Phone className="mr-3 h-6 w-6" />
          Book Your Strategy Call Now
        </Button>
      </div>
    </section>
  );
};

export default ServicesFinalCTA;
