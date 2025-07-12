
import React from 'react';
import { Plus, Search, Gift } from 'lucide-react';

const AddOnServicesSection = () => {
  const addOns = [
    {
      title: 'Extra Participant',
      price: '$35 each',
      description: 'Scale insights with quality participants',
      icon: Plus,
      color: 'usergy-turquoise',
      gradient: 'from-usergy-turquoise/20 to-usergy-turquoise/5'
    },
    {
      title: 'Advanced Analytics',
      price: '+$499',
      subtitle: '(one-time)',
      description: 'Deep analysis with predictive insights',
      icon: Search,
      color: 'usergy-coral',
      gradient: 'from-usergy-coral/20 to-usergy-coral/5'
    },
    {
      title: 'Retainer Bundle',
      price: '10% off',
      subtitle: '3+ projects',
      description: 'Maximize investment with ongoing partnerships',
      icon: Gift,
      color: 'usergy-skyblue',
      gradient: 'from-usergy-skyblue/20 to-usergy-skyblue/5'
    }
  ];

  return (
    <section className="py-20 lg:py-20 py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-usergy-dark mb-8">
          Enhance Your Traction: Add-On Services
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {addOns.map((addOn, index) => {
            const IconComponent = addOn.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-b ${addOn.gradient} rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-${addOn.color}/40 transform group cursor-pointer`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${addOn.color} to-${addOn.color}/80 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-bold text-${addOn.color} group-hover:text-usergy-dark transition-colors text-lg`}>
                    {addOn.title}
                  </h4>
                </div>
                <p className="text-2xl font-black text-usergy-dark mb-2 group-hover:scale-105 transition-transform">
                  {addOn.price} {addOn.subtitle && <span className="text-sm text-gray-600">{addOn.subtitle}</span>}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">
                  {addOn.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;
