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
      campaignSize: '0 – 9 users',
      price: 'FREE',
      description: 'Perfect for quick validation & essential insights',
      isLaunchOffer: true,
      cta: 'Claim Your Free Pilot →',
      action: handleClaimFreeOffer,
      bgGradient: 'from-yellow-50 via-amber-50 to-orange-50',
      borderColor: 'border-yellow-300/60',
      hoverBorder: 'hover:border-amber-400/80',
      buttonGradient: 'bg-primary',
      buttonHover: '',
      priceColor: 'text-primary',
      highlightRing: 'ring-2 ring-primary/40 shadow-xl'
    },
    {
      id: 'tier2',
      campaignSize: '10 – 19 users',
      price: '$33',
      description: 'Ideal for deeper feedback & building core community',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      priceColor: 'text-primary'
    },
    {
      id: 'tier3',
      campaignSize: '20 – 50 users',
      price: '$31',
      description: 'Great for refining features & igniting early buzz',
      isMostPopular: true,
      bgGradient: '',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      priceColor: 'text-primary'
    },
    {
      id: 'tier4',
      campaignSize: '51 – 100 users',
      price: '$29',
      description: 'Optimal for scaling insights & widespread advocacy',
      bgGradient: '',
      borderColor: 'border-border',
      hoverBorder: 'hover:border-primary/40',
      priceColor: 'text-primary'
    },
    {
      id: 'tier5',
      campaignSize: '100+ users',
      price: 'Custom',
      description: 'Tailored for strategic growth & dedicated partnership',
      cta: 'Design My Custom Plan →',
      action: handleCustomPlan,
      isCustom: true,
      bgGradient: 'from-gray-50 via-slate-50 to-zinc-50',
      borderColor: 'border-gray-300/60',
      hoverBorder: 'hover:border-gray-400/80',
      buttonGradient: 'bg-muted',
      buttonHover: '',
      priceColor: 'text-foreground',
      isEnterprise: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Unlock Your Growth: Choose Your User Impact
          </h2>
          <p className="text-lg font-semibold text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Select your desired user count below to see how Usergy delivers comprehensive growth, tailored to your needs. 
            Our transparent pricing scales with your ambition.
          </p>
          
          {/* Volume Discount Callout */}
          <div className="mb-12 flex items-center justify-center gap-3 bg-muted rounded-full px-6 py-3 border border-border max-w-md mx-auto">
            <TrendingDown className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">
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
                className={`relative bg-card border-2 ${tier.borderColor} ${tier.hoverBorder} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                  tier.isLaunchOffer ? tier.highlightRing : ''
                } ${tier.isEnterprise ? 'ring-2 ring-muted/60' : ''} ${tier.isMostPopular ? 'ring-2 ring-primary/40 shadow-xl' : ''}`}
              >
                {tier.isLaunchOffer && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-primary/20">
                      <Sparkles className="w-4 h-4" />
                      <span className="whitespace-nowrap">Launch Offer</span>
                    </div>
                  </div>
                )}
                
                {tier.isMostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-primary/20">
                      <Crown className="w-4 h-4 fill-current" />
                      <span className="whitespace-nowrap">Most Popular</span>
                    </div>
                  </div>
                )}
                
                {tier.isEnterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-muted text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border-2 border-border">
                      <Crown className="w-4 h-4 fill-current" />
                      <span className="whitespace-nowrap">Enterprise</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-4">{tier.campaignSize}</h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-black ${tier.priceColor}`}>
                      {tier.price}
                    </span>
                      {tier.price !== 'Custom' && tier.price !== 'FREE' && (
                        <span className="text-sm text-muted-foreground ml-1">/ user</span>
                      )}
                      {tier.isLaunchOffer && (
                        <div className="text-sm text-muted-foreground mt-1 line-through">
                          Normally $35/user
                        </div>
                      )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{tier.description}</p>
                </div>

                {(tier.isLaunchOffer || tier.isCustom) && (
                  <Button
                    onClick={tier.action}
                    className={`w-full ${tier.buttonGradient} text-primary-foreground font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base border-2 border-primary/20`}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {tier.cta}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden lg:block">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-border">
              {/* Table Header */}
              <div className="bg-primary-gradient text-primary-foreground py-6 px-8">
                <div className="grid grid-cols-3 gap-8 items-center">
                  <div className="text-xl font-bold">Campaign Size</div>
                  <div className="text-xl font-bold text-center">Price / User</div>
                  <div className="text-xl font-bold">What You Get</div>
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-border">
                {tiers.map((tier, index) => (
                  <div
                    key={tier.id}
                    className={`relative grid grid-cols-3 gap-8 items-center py-6 px-8 bg-card transition-all duration-300 group ${
                      tier.isLaunchOffer ? 'ring-2 ring-primary/40' : ''
                    } ${tier.isEnterprise ? 'ring-2 ring-muted/60' : ''} ${tier.isMostPopular ? 'ring-2 ring-primary/40' : ''}`}
                  >
                    {tier.isLaunchOffer && (
                      <div className="absolute -top-3 right-4 z-10">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          LAUNCH
                        </div>
                      </div>
                    )}
                    
                    {tier.isMostPopular && (
                      <div className="absolute -top-3 right-4 z-10">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <Crown className="w-3 h-3 fill-current" />
                          POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="font-bold text-foreground text-lg">
                      {tier.campaignSize}
                    </div>
                    
                    <div className="text-center">
                      <span className={`text-3xl font-black ${tier.priceColor}`}>
                        {tier.price}
                      </span>
                      {tier.isLaunchOffer && (
                        <div className="text-sm text-muted-foreground line-through mt-1">
                          $35
                        </div>
                      )}
                    </div>
                    
                    <div className="text-muted-foreground font-medium leading-relaxed">
                      {tier.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Consolidated CTA */}
            <div className="text-center mt-12">
              <Button
                onClick={() => handleBookCall('Strategy Call')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 border-2 border-primary/20"
              >
                <Phone className="mr-3 h-6 w-6" />
                Ready to Accelerate Your AI? Book a Strategy Call!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTieredPricingSection;