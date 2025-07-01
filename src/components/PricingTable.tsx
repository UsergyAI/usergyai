
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Check, Award, Zap } from 'lucide-react';

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
      borderColor: 'border-red-200',
      hoverBorder: 'hover:border-red-300',
      buttonGradient: 'from-usergy-coral to-red-500',
      buttonHover: 'hover:from-red-500 hover:to-usergy-coral',
      iconColor: 'text-usergy-coral',
      shadowColor: 'hover:shadow-red-100',
      features: [
        'Recruit & incentivize premium users (all incentives included)',
        'Comprehensive feedback analysis with actionable insights',
        'Dedicated email support throughout your campaign'
      ]
    },
    {
      name: 'Feedback + Community',
      subtitle: 'Growth Accelerator',
      price: prices.community,
      color: 'turquoise',
      gradient: 'from-teal-50 via-cyan-50 to-teal-50',
      borderColor: 'border-teal-200',
      hoverBorder: 'hover:border-teal-400',
      buttonGradient: 'from-usergy-turquoise to-teal-500',
      buttonHover: 'hover:from-teal-500 hover:to-usergy-turquoise',
      iconColor: 'text-usergy-turquoise',
      shadowColor: 'hover:shadow-teal-100',
      popular: true,
      features: [
        'Everything in Feedback Only package included',
        'Expert community setup & advanced nurturing strategies',
        'Real-time engagement tracking with optimization insights'
      ]
    },
    {
      name: 'Full Traction',
      subtitle: 'Market Domination',
      price: prices.full,
      color: 'skyblue',
      gradient: 'from-blue-50 via-sky-50 to-blue-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-300',
      buttonGradient: 'from-usergy-skyblue to-blue-500',
      buttonHover: 'hover:from-blue-500 hover:to-usergy-skyblue',
      iconColor: 'text-usergy-skyblue',
      shadowColor: 'hover:shadow-blue-100',
      features: [
        'Everything in Community package included',
        'Strategic social media execution & task management',
        'Comprehensive UGC analysis with market intelligence'
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Mobile and Tablet: Card Stack */}
      <div className="block lg:hidden">
        <div className="space-y-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-3xl p-8 shadow-xl ${plan.shadowColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                plan.popular ? 'ring-4 ring-usergy-gold/20 scale-[1.02]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-usergy-gold text-usergy-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-white">
                    <Award className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-usergy-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 font-medium mb-6">{plan.subtitle}</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-usergy-dark tracking-tight">
                    ${plan.price.toLocaleString()}
                  </span>
                  <p className="text-gray-500 font-medium mt-2">for {selectedUsers} users</p>
                </div>
              </div>

              <div className="mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.buttonGradient} flex items-center justify-center mt-0.5`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookCall(plan.name)}
                className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-lg group`}
              >
                <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
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
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-3xl overflow-hidden shadow-xl ${plan.shadowColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-usergy-gold/20 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-usergy-gold text-usergy-dark px-5 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 border-2 border-white transform rotate-12">
                    <Award className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black text-usergy-dark mb-3">{plan.name}</h3>
                  <p className="text-gray-600 font-medium text-lg mb-8">{plan.subtitle}</p>
                  <div className="mb-8">
                    <span className="text-6xl font-black text-usergy-dark tracking-tight">
                      ${plan.price.toLocaleString()}
                    </span>
                    <p className="text-gray-500 font-medium text-lg mt-3">for {selectedUsers} users</p>
                  </div>
                </div>

                <div className="mb-10 space-y-5">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r ${plan.buttonGradient} flex items-center justify-center mt-0.5`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBookCall(plan.name)}
                  className={`w-full bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonHover} text-white font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-xl group ${
                    plan.popular ? 'ring-2 ring-usergy-gold/50' : ''
                  }`}
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
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
