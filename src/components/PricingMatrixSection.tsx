
import React from 'react';
import PricingTable from '@/components/PricingTable';

const PricingMatrixSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-usergy-dark mb-3 sm:mb-4 px-2">
            Find Your Perfect Traction Plan
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed">
            Choose the right campaign size to get actionable insights and build meaningful traction for your product.
          </h3>
          
          <PricingTable />
        </div>
      </div>
    </section>
  );
};

export default PricingMatrixSection;
