
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
      gradient: '',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      buttonGradient: 'bg-primary',
      buttonHover: '',
      iconColor: 'text-primary',
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
      gradient: '',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      buttonGradient: 'bg-primary',
      buttonHover: '',
      iconColor: 'text-primary',
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
      gradient: '',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      buttonGradient: 'bg-primary',
      buttonHover: '',
      iconColor: 'text-primary',
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
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-primary/20">
                    <Crown className="w-4 h-4 fill-current" />
                    <span className="whitespace-nowrap">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 font-medium">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-foreground">
                    ${plan.price.toLocaleString()}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">for {selectedUsers} users</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-muted-foreground text-sm leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookCall(plan.name)}
                className={`w-full ${plan.buttonGradient} text-primary-foreground font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base border-2 border-primary/20`}
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
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 border-2 border-primary/20">
                    <Crown className="w-4 h-4 fill-current" />
                    <span className="whitespace-nowrap">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8 pt-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6 font-medium">{plan.subtitle}</p>
                  <div className="mb-6">
                  <span className="text-5xl font-black text-foreground">
                    ${plan.price.toLocaleString()}
                  </span>
                    <p className="text-gray-500 mt-2 font-medium">for {selectedUsers} users</p>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-1`} />
                      <span className="text-muted-foreground leading-relaxed font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBookCall(plan.name)}
                  className={`w-full ${plan.buttonGradient} text-primary-foreground font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-lg border-2 border-primary/20 ${
                    plan.popular ? 'ring-2 ring-primary/40' : ''
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
