
import React from 'react';

const PricingPsychologySection = () => {
  const principles = [
    {
      title: 'Charm Pricing',
      icon: '💰',
      description: 'Our pricing uses charm pricing to make plans feel more approachable and accessible for early-stage budgets, maximizing your growth potential.',
      color: 'usergy-turquoise'
    },
    {
      title: 'Tier Anchoring',
      icon: '⚖️',
      description: 'The \'Full Traction\' column anchors perceived value, making our \'Feedback + Community\' plan an incredibly attractive sweet spot for core activation.',
      color: 'usergy-coral'
    },
    {
      title: 'Volume Discounts',
      icon: '📈',
      description: 'Benefit from built-in volume discounts: per-participant costs decrease as you invest in more users, ensuring scalability for your growth.',
      color: 'usergy-skyblue'
    },
    {
      title: 'Complete Transparency',
      icon: '🔍',
      description: 'All incentives included means no hidden fees or unexpected costs. Your investment directly funds real human insights and engagement.',
      color: 'usergy-gold'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-usergy-dark text-center mb-12">
          Our Pricing is Designed for Your Growth
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-${principle.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{principle.icon}</span>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">{principle.title}</h4>
              <p className="text-sm text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPsychologySection;
