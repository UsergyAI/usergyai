
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-usergy-turquoise via-usergy-skyblue to-usergy-coral relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full blur-md animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Stop Waiting. 
            <span className="block text-usergy-gold animate-pulse-glow">Start Building Momentum.</span>
          </h2>

          {/* Sub-header */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're an AI founder ready to make your mark or an enthusiast eager to shape the future of technology, 
            <span className="font-bold"> Usergy is your next step</span>. Join the movement that's transforming AI development.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-usergy-turquoise hover:bg-usergy-light font-black text-xl py-6 px-12 rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-110 transition-all duration-300 animate-pulse-glow"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Launch Your AI Campaign Now! 🚀
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white hover:text-usergy-coral font-black text-xl py-6 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Gamepad className="mr-3 h-6 w-6" />
              Explore Groundbreaking AI Projects! 🎮
            </Button>
          </div>

          {/* Urgency Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-usergy-gold rounded-full animate-pulse"></div>
              <span className="font-semibold">Join 1,200+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">Start Building Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-usergy-gold rounded-full animate-pulse"></div>
              <span className="font-semibold">Risk-Free Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
