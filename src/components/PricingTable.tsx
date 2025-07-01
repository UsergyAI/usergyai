
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Check, Star } from 'lucide-react';

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
      subtitle: 'Basic Insight',
      price: prices.feedback,
      color: 'coral',
      gradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200/50',
      hoverBorder: 'hover:border-red-300',
      buttonGradient: 'from-usergy-coral to-red-500',
      buttonHover: 'hover:from-red-500 hover:to-usergy-coral',
      iconColor: 'text-usergy-coral',
      features: [
        'Recruit & incentivize high-quality users; all incentives included',
        'Comprehensive feedback analysis report with actionable insights',
        'Dedicated email support throughout campaign'
      ]
    },
    {
      name: 'Feedback + Community',
      subtitle: 'Core Activation',
      price: prices.community,
      color: 'turquoise',
      gradient: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200/50',
      hoverBorder: 'hover:border-usergy-gold',
      buttonGradient: 'from-usergy-turquoise to-teal-500',
      buttonHover: 'hover:from-teal-500 hover:to-usergy-turquoise',
      iconColor: 'text-usergy-turquoise',
      popular: true,
      features: [
        'Everything in Feedback Only package',
        'Expert community setup & nurturing strategies',
        'Real-time engagement tracking & optimization'
      ]
    },
    {
      name: 'Full Traction',
      subtitle: 'Amplify & Buzz',
      price: prices.full,
      color: 'skyblue',
      gradient: 'from-blue-50 to-sky-50',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300',
      buttonGradient: 'from-usergy-skyblue to-blue-500',
      buttonHover: 'hover:from-blue-500 hover:to-usergy-skyblue',
      iconColor: 'text-usergy-skyblue',
      features: [
        'Everything in Community package included',
        'Strategic social media task management & execution',
        'Comprehensive UGC analysis report with market insights'
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
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-usergy-gold/30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-yellow-500 text-usergy-dark px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-usergy-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-usergy-dark">
                    ${plan.price.toLocaleString()}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">for {selectedUsers} users</p>
                </div>
              </div>

              <div className="mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 mb-3">
                    <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookCall(plan.name)}
                className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base`}
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
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-usergy-gold/30 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-yellow-500 text-usergy-dark px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-usergy-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-usergy-dark">
                      ${plan.price.toLocaleString()}
                    </span>
                    <p className="text-gray-500 mt-2">for {selectedUsers} users</p>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBookCall(plan.name)}
                  className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-lg ${
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
