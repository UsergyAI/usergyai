
import React from 'react';

const PricingPsychologySection = () => {
  const principles = [
    {
      title: 'Charm Pricing',
      icon: '💰',
      description: 'Our pricing uses charm pricing to make plans feel more approachable and accessible for early-stage budgets, maximizing your growth potential.',
      color: 'usergy-turquoise',
      gradient: 'from-usergy-turquoise/20 to-usergy-turquoise/5'
    },
    {
      title: 'Tier Anchoring',
      icon: '⚖️',
      description: 'The \'Full Traction\' column anchors perceived value, making our \'Feedback + Community\' plan an incredibly attractive sweet spot for core activation.',
      color: 'usergy-coral',
      gradient: 'from-usergy-coral/20 to-usergy-coral/5'
    },
    {
      title: 'Volume Discounts',
      icon: '📈',
      description: 'Benefit from built-in volume discounts: per-participant costs decrease as you invest in more users, ensuring scalability for your growth.',
      color: 'usergy-skyblue',
      gradient: 'from-usergy-skyblue/20 to-usergy-skyblue/5'
    },
    {
      title: 'Complete Transparency',
      icon: '🔍',
      description: 'All incentives included means no hidden fees or unexpected costs. Your investment directly funds real human insights and engagement.',
      color: 'usergy-gold',
      gradient: 'from-usergy-gold/20 to-usergy-gold/5'
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
              className={`text-center bg-gradient-to-b ${principle.gradient} rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 hover:border-${principle.color}/30 transform group cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${principle.color} to-${principle.color}/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl filter drop-shadow-sm">{principle.icon}</span>
              </div>
              <h4 className={`font-bold text-${principle.color} mb-3 text-lg group-hover:text-usergy-dark transition-colors`}>
                {principle.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPsychologySection;
