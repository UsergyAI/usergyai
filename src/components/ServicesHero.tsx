
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const ServicesHero = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-28 md:pt-32">
      <AnimatedBackground particleCount={50} />
      
      {/* Enhanced Floating Bubbles - Hero Section Only */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-usergy-turquoise/30 rounded-full animate-float-enhanced opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-usergy-coral/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-usergy-gold/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
        <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-usergy-turquoise/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
        <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-usergy-coral/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-usergy-dark mb-6 leading-tight animate-fade-in">
            Invest in Momentum: 
            <span className="block gradient-text mt-2">Your AI's Growth Starts Here</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Explore our integrated traction services designed to provide clear insights, activate vibrant communities, and generate undeniable buzz for your AI innovation.
          </h2>

          <Button 
            size="lg"
            onClick={handleCalendlyRedirect}
            className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 will-change-transform animate-scale-in"
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
