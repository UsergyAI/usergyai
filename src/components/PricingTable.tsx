
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Check, Crown } from 'lucide-react';

interface PricingTableProps {
  selectedUsers: number;
}

const PricingTable = ({ selectedUsers }: PricingTableProps) => {
  const pricingData = {
    5: { feedback: 299, community: 399, full: 499 },
    10: { feedback: 499, community: 699, full: 899 },
    20: { feedback: 899, community: 1199, full: 1499 },
    50: { feedback: 1999, community: 2499, full: 2999 },
    100: { feedback: 3499, community: 4499, full: 5499 }
  };

  const prices = pricingData[selectedUsers as keyof typeof pricingData];

  const handleBookCall = (packageType: string) => {
    console.log(`Booking call for: ${selectedUsers} users - ${packageType}`);
    const calendlyUrl = `https://calendly.com/swaroop-usergy/30min?a1=${selectedUsers}%20users&a2=${packageType}`;
    window.open(calendlyUrl, '_blank');
  };

  const plans = [
    {
      name: 'Feedback Only',
      subtitle: 'Essential Insights',
      price: prices.feedback,
      color: 'coral',
      gradient: 'from-red-50 via-orange-50 to-red-50',
      borderColor: 'border-red-200/40',
      hoverBorder: 'hover:border-red-300/60',
      buttonGradient: 'from-usergy-coral via-red-500 to-usergy-coral',
      buttonHover: 'hover:from-red-500 hover:via-usergy-coral hover:to-red-500',
      iconColor: 'text-usergy-coral',
      features: [
        'Recruit & incentivize premium users with all costs included',
        'Deep feedback analysis with actionable strategic insights',
        'Dedicated expert support throughout your campaign'
      ]
    },
    {
      name: 'Feedback + Community',
      subtitle: 'Growth Catalyst',
      price: prices.community,
      color: 'turquoise',
      gradient: 'from-teal-50 via-cyan-50 to-emerald-50',
      borderColor: 'border-teal-200/40',
      hoverBorder: 'hover:border-usergy-gold/60',
      buttonGradient: 'from-usergy-turquoise via-teal-500 to-usergy-turquoise',
      buttonHover: 'hover:from-teal-500 hover:via-usergy-turquoise hover:to-teal-500',
      iconColor: 'text-usergy-turquoise',
      popular: true,
      features: [
        'Everything in Feedback Only package included',
        'Expert community building & engagement strategies',
        'Real-time analytics with optimization recommendations'
      ]
    },
    {
      name: 'Full Traction',
      subtitle: 'Market Domination',
      price: prices.full,
      color: 'skyblue',
      gradient: 'from-blue-50 via-sky-50 to-indigo-50',
      borderColor: 'border-blue-200/40',
      hoverBorder: 'hover:border-blue-300/60',
      buttonGradient: 'from-usergy-skyblue via-blue-500 to-usergy-skyblue',
      buttonHover: 'hover:from-blue-500 hover:via-usergy-skyblue hover:to-blue-500',
      iconColor: 'text-usergy-skyblue',
      features: [
        'Everything in Community package plus premium features',
        'Strategic social media amplification & viral content creation',
        'Comprehensive market analysis with competitive intelligence'
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Mobile and Tablet: Card Stack */}
      <div className="block lg:hidden">
        <div className="space-y-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                plan.popular ? 'ring-2 ring-usergy-gold/40 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-amber-400 text-usergy-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-white">
                    <Crown className="w-4 h-4 fill-current" />
                    <span className="whitespace-nowrap">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-usergy-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-usergy-dark">
                    ${plan.price.toLocaleString()}
                  </span>
                  <p className="text-sm text-gray-500 mt-1 font-medium">for {selectedUsers} users</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700 text-sm leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookCall(plan.name)}
                className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base border-2 border-white/20`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Strategy Call
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                plan.popular ? 'ring-2 ring-usergy-gold/40 scale-105 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-amber-400 text-usergy-dark px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 border-2 border-white">
                    <Crown className="w-4 h-4 fill-current" />
                    <span className="whitespace-nowrap">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8 pt-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-usergy-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 font-medium">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-usergy-dark">
                      ${plan.price.toLocaleString()}
                    </span>
                    <p className="text-gray-500 mt-2 font-medium">for {selectedUsers} users</p>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBookCall(plan.name)}
                  className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-lg border-2 border-white/20 ${
                    plan.popular ? 'ring-2 ring-usergy-gold/50' : ''
                  }`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Strategy Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
