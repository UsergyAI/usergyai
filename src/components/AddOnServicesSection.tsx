
import React from 'react';

const AddOnServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-usergy-dark mb-8">
          Enhance Your Traction: Add-On Services
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-usergy-turquoise mb-2">Extra Participant</h4>
            <p className="text-2xl font-black text-usergy-dark">$35 each</p>
            <p className="text-sm text-gray-600 mt-2">Scale your insights with additional high-quality participants</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-usergy-coral mb-2">Advanced Analytics</h4>
            <p className="text-2xl font-black text-usergy-dark">+$499 <span className="text-sm text-gray-600">(one-time)</span></p>
            <p className="text-sm text-gray-600 mt-2">Deep-dive analysis with predictive insights and recommendations</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-usergy-skyblue mb-2">Retainer Bundle</h4>
            <p className="text-2xl font-black text-usergy-dark">10% off <span className="text-sm text-gray-600">3+ projects</span></p>
            <p className="text-sm text-gray-600 mt-2">Maximize your investment with ongoing partnership discounts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;
