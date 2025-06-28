
import React from 'react';
import { Button } from '@/components/ui/button';

const CustomEnterpriseSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Abstract AI scaling visual */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white rounded-full relative">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-usergy-gold rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-usergy-coral rounded-full"></div>
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-usergy-skyblue rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <h2 className="text-4xl font-black text-usergy-dark mb-6">
              Scale Beyond Tiers: Custom Enterprise Solutions
            </h2>
            
            <p className="text-lg font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              For AI founders with ambitious growth targets, larger participant needs (100-1000+), or highly specialized market penetration requirements, our team designs bespoke strategies. Let's create a custom plan to unlock your AI's full market potential.
            </p>
            
            <Button 
              size="lg"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300"
            >
              Design My Custom Plan →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomEnterpriseSection;
