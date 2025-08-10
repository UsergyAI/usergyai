
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const ServicesHero = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5 pt-28 md:pt-32">
      <AnimatedBackground particleCount={50} enableFloatingBubbles={true} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight animate-fade-in">
            Invest in Momentum: 
            <span className="block gradient-text mt-2">Your AI's Growth Starts Here</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Explore our integrated traction services designed to provide clear insights, activate vibrant communities, and generate undeniable buzz for your AI innovation.
          </h2>

          <Button 
            size="lg"
            onClick={handleCalendlyRedirect}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 will-change-transform animate-scale-in focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="mr-3 h-6 w-6" />
            Book Your Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
