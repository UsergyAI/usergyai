
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Dynamic animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-white rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-white rounded-full blur-2xl animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white rounded-full blur-xl animate-float opacity-20" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse opacity-25" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight animate-fade-in">
            Let's Ignite Your AI's Future:<br />
            <span className="text-usergy-gold">Connect with Our Experts</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-12 leading-relaxed animate-slide-up max-w-4xl mx-auto">
            Whether you're ready to amplify your AI product's impact or have a question about our services, 
            our dedicated team is here to guide you. Your journey to undeniable traction starts now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg"
              className="bg-white text-usergy-dark hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Free Strategy Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-usergy-dark font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Quick Inquiry Form
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
