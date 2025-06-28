
import React from 'react';

const PricingPsychologySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-usergy-dark text-center mb-12">
          Our Pricing is Designed for Your Growth
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-usergy-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-bold text-usergy-dark mb-2">Charm Pricing</h4>
            <p className="text-sm text-gray-600">Our pricing uses charm pricing to make plans feel more approachable and accessible for early-stage budgets, maximizing your growth potential.</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-usergy-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h4 className="font-bold text-usergy-dark mb-2">Tier Anchoring</h4>
            <p className="text-sm text-gray-600">The 'Full Traction' column anchors perceived value, making our 'Feedback + Community' plan an incredibly attractive sweet spot for core activation.</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-usergy-skyblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="font-bold text-usergy-dark mb-2">Volume Discounts</h4>
            <p className="text-sm text-gray-600">Benefit from built-in volume discounts: per-participant costs decrease as you invest in more users, ensuring scalability for your growth.</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-usergy-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h4 className="font-bold text-usergy-dark mb-2">Complete Transparency</h4>
            <p className="text-sm text-gray-600">All incentives included means no hidden fees or unexpected costs. Your investment directly funds real human insights and engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPsychologySection;
