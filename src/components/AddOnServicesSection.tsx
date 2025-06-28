
import React from 'react';

const AddOnServicesSection = () => {
  const addOns = [
    {
      title: 'Extra Participant',
      price: '$35 each',
      description: 'Scale your insights with additional high-quality participants',
      icon: '➕',
      color: 'usergy-turquoise'
    },
    {
      title: 'Advanced Analytics',
      price: '+$499',
      subtitle: '(one-time)',
      description: 'Deep-dive analysis with predictive insights and recommendations',
      icon: '🔍',
      color: 'usergy-coral'
    },
    {
      title: 'Retainer Bundle',
      price: '10% off',
      subtitle: '3+ projects',
      description: 'Maximize your investment with ongoing partnership discounts',
      icon: '🎁',
      color: 'usergy-skyblue'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-usergy-dark mb-8">
          Enhance Your Traction: Add-On Services
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {addOns.map((addOn, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-2">{addOn.icon}</span>
                <h4 className={`font-bold text-${addOn.color}`}>{addOn.title}</h4>
              </div>
              <p className="text-2xl font-black text-usergy-dark">
                {addOn.price} {addOn.subtitle && <span className="text-sm text-gray-600">{addOn.subtitle}</span>}
              </p>
              <p className="text-sm text-gray-600 mt-2">{addOn.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;
