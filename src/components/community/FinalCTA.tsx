
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-turquoise/10 via-usergy-skyblue/10 to-usergy-coral/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-8">
            Ready to Influence the Future of AI?
          </h2>
          
          <p className="text-lg md:text-xl font-semibold text-gray-600 mb-12 leading-relaxed">
            Your curiosity can shape tomorrow's technology. Join Usergy's community of passionate AI explorers 
            and start making a real impact today.
          </p>

          <Button 
            size="lg"
            className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            <ArrowRight className="mr-3 h-6 w-6" />
            Join Our AI Explorer Community Today! 🎮
          </Button>

          <div className="mt-12 text-gray-500">
            <p className="mb-2">🚀 <strong>Free to join</strong> • 🎯 <strong>Instant access</strong> • 🏆 <strong>Start earning immediately</strong></p>
            <p className="text-sm">Join thousands of AI enthusiasts already shaping the future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
