import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Crown, Sparkles, TrendingDown } from 'lucide-react';

const NewTieredPricingSection = () => {
  const handleBookCall = (tier: string) => {
    console.log(`Booking call for: ${tier}`);
    const calendlyUrl = `https://calendly.com/swaroop-usergy/30min?a1=${encodeURIComponent(tier)}`;
    window.open(calendlyUrl, '_blank');
  };

  const handleClaimFreeOffer = () => {
    const calendlyUrl = 'https://calendly.com/swaroop-usergy/30min?a1=Launch%20Special&a2=Free%20Pilot';
    window.open(calendlyUrl, '_blank');
  };

  const handleCustomPlan = () => {
    const calendlyUrl = 'https://calendly.com/swaroop-usergy/30min?a1=Custom%20Plan&a2=100+%20participants';
    window.open(calendlyUrl, '_blank');
  };

  const tiers = [
    {
      id: 'tier1',
      campaignSize: '0 – 9 participants',
      price: '$35',
      description: 'Perfect for a quick pilot and early validation',
      isLaunchOffer: true,
      cta: 'Claim Your Free Pilot →',
      action: handleClaimFreeOffer,
      bgGradient: 'from-yellow-50 via-amber-50 to-orange-50',
      borderColor: 'border-yellow-300/60',
      hoverBorder: 'hover:border-amber-400/80',
      buttonGradient: 'from-yellow-500 via-amber-500 to-orange-500',
      buttonHover: 'hover:from-amber-500 hover:via-orange-500 hover:to-red-500',
      priceColor: 'text-amber-600',
      highlightRing: 'ring-2 ring-yellow-300/50 shadow-xl'
    },
    {
      id: 'tier2',
      campaignSize: '10 – 19 participants',
      price: '$33',
      description: 'Best for deeper feedback with built-in savings',
      cta: 'Book Your Strategy Call →',
      action: () => handleBookCall('10-19 participants'),
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
      borderColor: 'border-emerald-200/40',
      hoverBorder: 'hover:border-emerald-300/60',
      buttonGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      buttonHover: 'hover:from-teal-500 hover:via-emerald-500 hover:to-teal-500',
      priceColor: 'text-emerald-600'
    },
    {
      id: 'tier3',
      campaignSize: '20 – 50 participants',
      price: '$31',
      description: 'Ideal for refining features before a full launch',
      cta: 'Book Your Strategy Call →',
      action: () => handleBookCall('20-50 participants'),
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      borderColor: 'border-blue-200/40',
      hoverBorder: 'hover:border-blue-300/60',
      buttonGradient: 'from-blue-500 via-indigo-500 to-purple-500',
      buttonHover: 'hover:from-indigo-500 hover:via-blue-500 hover:to-indigo-500',
      priceColor: 'text-blue-600'
    },
    {
      id: 'tier4',
      campaignSize: '51 – 100 participants',
      price: '$29',
      description: 'Scale your insights affordably for serious validation',
      cta: 'Book Your Strategy Call →',
      action: () => handleBookCall('51-100 participants'),
      bgGradient: 'from-purple-50 via-pink-50 to-rose-50',
      borderColor: 'border-purple-200/40',
      hoverBorder: 'hover:border-purple-300/60',
      buttonGradient: 'from-purple-500 via-pink-500 to-rose-500',
      buttonHover: 'hover:from-pink-500 hover:via-purple-500 hover:to-pink-500',
      priceColor: 'text-purple-600'
    },
    {
      id: 'tier5',
      campaignSize: '100+ participants',
      price: 'Custom',
      description: 'Tailored pricing, dedicated community manager, SLA guarantees',
      cta: 'Design My Custom Plan →',
      action: handleCustomPlan,
      isCustom: true,
      bgGradient: 'from-gray-50 via-slate-50 to-zinc-50',
      borderColor: 'border-gray-300/60',
      hoverBorder: 'hover:border-gray-400/80',
      buttonGradient: 'from-gray-600 via-slate-600 to-zinc-600',
      buttonHover: 'hover:from-slate-600 hover:via-gray-600 hover:to-slate-600',
      priceColor: 'text-gray-700',
      isEnterprise: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-usergy-dark mb-4">
            Unlock Your Growth: Choose Your User Impact
          </h2>
          <p className="text-lg font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Select your desired participant count below to see how Usergy delivers comprehensive growth, tailored to your needs. 
            Our transparent pricing scales with your ambition.
          </p>
          
          {/* Volume Discount Callout */}
          <div className="mb-12 flex items-center justify-center gap-3 bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-full px-6 py-3 border border-usergy-turquoise/20 max-w-md mx-auto">
            <TrendingDown className="w-5 h-5 text-usergy-turquoise" />
            <span className="text-usergy-turquoise font-semibold">
              Volume discounts unlock greater savings—scale with confidence.
            </span>
          </div>
        </div>

        {/* Mobile: Card Stack */}
        <div className="block lg:hidden">
          <div className="space-y-6 max-w-md mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-gradient-to-br ${tier.bgGradient} border-2 ${tier.borderColor} ${tier.hoverBorder} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                  tier.isLaunchOffer ? tier.highlightRing : ''
                } ${tier.isEnterprise ? 'ring-2 ring-gray-300/40' : ''}`}
              >
                {tier.isLaunchOffer && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-white">
                      <Sparkles className="w-4 h-4" />
                      <span className="whitespace-nowrap">FREE for Launch</span>
                    </div>
                  </div>
                )}
                
                {tier.isEnterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-white">
                      <Crown className="w-4 h-4 fill-current" />
                      <span className="whitespace-nowrap">Enterprise</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-lg font-bold text-usergy-dark mb-4">{tier.campaignSize}</h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-black ${tier.priceColor}`}>
                      {tier.price}
                    </span>
                    {tier.price !== 'Custom' && (
                      <span className="text-sm text-gray-500 ml-1">/ participant</span>
                    )}
                    {tier.isLaunchOffer && (
                      <div className="text-sm text-gray-500 mt-1 line-through">
                        Normally $35/participant
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{tier.description}</p>
                </div>

                <Button
                  onClick={tier.action}
                  className={`w-full bg-gradient-to-r ${tier.buttonGradient} ${tier.buttonHover} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base border-2 border-white/20`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden lg:block">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue text-white py-6 px-8">
                <div className="grid grid-cols-4 gap-8 items-center">
                  <div className="text-xl font-bold">Campaign Size</div>
                  <div className="text-xl font-bold text-center">Price / Participant</div>
                  <div className="text-xl font-bold">What You Get</div>
                  <div className="text-xl font-bold text-center">Action</div>
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {tiers.map((tier, index) => (
                  <div
                    key={tier.id}
                    className={`relative grid grid-cols-4 gap-8 items-center py-6 px-8 bg-gradient-to-r ${tier.bgGradient} hover:shadow-lg transition-all duration-300 group ${
                      tier.isLaunchOffer ? 'ring-2 ring-yellow-300/50 bg-gradient-to-r from-yellow-50 to-amber-50' : ''
                    } ${tier.isEnterprise ? 'ring-2 ring-gray-300/40' : ''}`}
                  >
                    {tier.isLaunchOffer && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white px-3 py-1 rounded-r-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          FREE
                        </div>
                      </div>
                    )}
                    
                    <div className="font-bold text-usergy-dark text-lg">
                      {tier.campaignSize}
                    </div>
                    
                    <div className="text-center">
                      <span className={`text-3xl font-black ${tier.priceColor}`}>
                        {tier.price}
                      </span>
                      {tier.isLaunchOffer && (
                        <div className="text-sm text-gray-500 line-through mt-1">
                          $35
                        </div>
                      )}
                    </div>
                    
                    <div className="text-gray-700 font-medium leading-relaxed">
                      {tier.description}
                    </div>
                    
                    <div className="text-center">
                      <Button
                        onClick={tier.action}
                        size="sm"
                        className={`bg-gradient-to-r ${tier.buttonGradient} ${tier.buttonHover} text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20`}
                      >
                        {tier.isLaunchOffer ? (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Claim Free
                          </>
                        ) : tier.isCustom ? (
                          <>
                            <Crown className="w-4 h-4 mr-2" />
                            Get Custom
                          </>
                        ) : (
                          <>
                            <Phone className="w-4 h-4 mr-2" />
                            Book Call
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Credits Never Expire Notice */}
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-usergy-coral bg-gradient-to-r from-usergy-coral/10 to-usergy-coral/5 px-6 py-3 rounded-full inline-block border border-usergy-coral/20">
                <strong>Credits never expire. Buy only what you need, when you need it.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTieredPricingSection;