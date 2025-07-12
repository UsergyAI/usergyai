import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone } from 'lucide-react';

const LaunchOfferSection = () => {
  const handleClaimFreeOffer = () => {
    const calendlyUrl = 'https://calendly.com/swaroop-usergy/30min?a1=Launch%20Special&a2=Free%20Pilot';
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkle animation container */}
          <div className="relative mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-usergy-dark mb-4 relative">
              <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                ✨ Launch Special: Your First Traction Sprint is FREE! ✨
              </span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            For the first 5 visionary AI startups launching in August 2025, experience Usergy's 0-9 participants plan absolutely free. 
            Kickstart your growth with authentic insights and real user buzz, on us.
          </p>
          
          <div className="mb-6">
            <Button 
              size="lg"
              onClick={handleClaimFreeOffer}
              className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-red-500 text-white font-bold text-lg sm:text-xl py-6 sm:py-8 px-8 sm:px-12 rounded-full shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300 will-change-transform border-2 border-white/20"
            >
              <Phone className="mr-3 h-6 w-6" />
              Claim Your Free Pilot →
            </Button>
          </div>
          
          <p className="text-sm sm:text-base font-semibold text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg border border-yellow-200/50">
            (Only 5 spots available starting Aug 1st, 2025!)
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;