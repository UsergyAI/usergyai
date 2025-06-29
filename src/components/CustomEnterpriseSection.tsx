
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const CustomEnterpriseSection = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-usergy-gold rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-usergy-coral rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-usergy-dark mb-4 sm:mb-6 px-2">
              Scale Beyond Tiers: Custom Enterprise Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4 max-w-3xl mx-auto">
              Need more than 100 participants or custom features? Our enterprise solutions are tailored to your unique requirements, 
              with dedicated account management and premium support.
            </p>
          </div>

          {/* Enterprise Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Custom Scale Feature */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-gold/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-gold/20 text-usergy-gold mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-3 text-center">Custom Scale</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                From 100+ to 10,000+ participants. We scale with your ambitions.
              </p>
            </div>

            {/* Dedicated Support Feature */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-turquoise/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-turquoise/20 text-usergy-turquoise mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-3 text-center">Dedicated Support</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Priority access to our expert team with dedicated account management.
              </p>
            </div>

            {/* Custom Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-usergy-coral/20 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-usergy-coral/20 text-usergy-coral mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-3 text-center">Custom Features</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Tailored integrations, custom reporting, and specialized workflows.
              </p>
            </div>
          </div>

          {/* CTA Section - Fixed mobile alignment */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-usergy-gold/10 to-usergy-coral/10 rounded-2xl p-6 sm:p-8 border border-usergy-gold/30">
              <h3 className="text-xl sm:text-2xl font-bold text-usergy-dark mb-4 sm:mb-6">
                Ready for Enterprise-Level Growth?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
                Let's discuss your unique requirements and design a custom solution that delivers exceptional results at scale.
              </p>
              
              {/* Fixed button container for mobile */}
              <div className="flex justify-center px-2 sm:px-4">
                <Button
                  size="lg"
                  onClick={handleCalendlyRedirect}
                  className="w-full sm:w-auto max-w-xs sm:max-w-md bg-gradient-to-r from-usergy-gold to-usergy-coral hover:from-usergy-coral hover:to-usergy-gold text-white font-bold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg min-h-[48px] sm:min-h-[56px]"
                >
                  <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="truncate">Design My Custom Plan</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomEnterpriseSection;
