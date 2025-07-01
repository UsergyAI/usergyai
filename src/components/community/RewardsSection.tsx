
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const RewardsSection = () => {
  const CustomIcons = {
    ShoppingCart: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    PayPal: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z"/>
      </svg>
    ),
    Software: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
    Star: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  };

  const rewardTiers = [
    {
      tier: 'Starter',
      points: '0-250',
      color: 'from-gray-400 to-gray-600',
      rewards: ['Community access', 'Basic testing'],
      badge: 'Bronze'
    },
    {
      tier: 'Explorer',
      points: '250-750',
      color: 'from-usergy-turquoise to-usergy-skyblue',
      rewards: ['$10-25 gift cards', 'Premium testing'],
      badge: 'Silver'
    },
    {
      tier: 'Influencer',
      points: '750-1500',
      color: 'from-usergy-coral to-usergy-turquoise',
      rewards: ['$50-100 rewards', 'Exclusive access'],
      badge: 'Gold'
    },
    {
      tier: 'Pioneer',
      points: '1500+',
      color: 'from-yellow-400 to-yellow-600',
      rewards: ['Premium software', 'Founder connections'],
      badge: 'Platinum'
    }
  ];

  const impactMetrics = [
    { label: 'AI Products Improved', value: '150+', icon: '🚀' },
    { label: 'Startups Supported', value: '80+', icon: '🏢' },
    { label: 'Community Members', value: '2.5K+', icon: '👥' },
    { label: 'Total Rewards Distributed', value: '$50K+', icon: '💰' }
  ];

  const rewardExamples = [
    {
      title: 'Amazon Gift Cards',
      range: '$10 - $100',
      icon: CustomIcons.ShoppingCart,
      popularity: 'Most Popular'
    },
    {
      title: 'Direct PayPal',
      range: 'Instant payments',
      icon: CustomIcons.PayPal,
      popularity: 'Fast & Easy'
    },
    {
      title: 'Premium Software',
      range: 'Exclusive licenses',
      icon: CustomIcons.Software,
      popularity: 'High Value'
    },
    {
      title: 'Exclusive Merch',
      range: 'Limited edition',
      icon: CustomIcons.Star,
      popularity: 'Collector Items'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-white via-usergy-light/20 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-usergy-coral/10 text-usergy-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CustomIcons.Star className="h-4 w-4" />
            <span>Rewards & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6 leading-tight">
            Your Impact Creates
            <span className="block bg-gradient-to-r from-usergy-coral to-usergy-turquoise bg-clip-text text-transparent">
              Real Value & Rewards
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Every insight you share, every bug you catch, every improvement you suggest 
            builds points toward meaningful rewards and recognition in our community.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-black text-usergy-dark">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Progress Simulation */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-r from-usergy-turquoise/5 via-usergy-skyblue/5 to-usergy-coral/5 border-2 border-usergy-turquoise/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-black text-usergy-dark">Your Journey Progress</h3>
                  <p className="text-sm text-gray-600">Explorer Level • Next: Influencer</p>
                </div>
                <Badge className="bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue text-white">
                  580 Points
                </Badge>
              </div>
              <Progress value={65} className="h-6 mb-4 bg-gray-200" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Explorer (250)</span>
                <span className="font-semibold text-usergy-turquoise">170 points to Influencer</span>
                <span>Influencer (750)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tier System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-usergy-dark mb-8">Unlock Higher Tiers, Better Rewards</h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${tier.color} text-white text-xs font-bold mb-4`}>
                    {tier.badge}
                  </div>
                  <h4 className="text-lg font-bold text-usergy-dark mb-2">{tier.tier}</h4>
                  <p className="text-sm text-gray-600 mb-4">{tier.points} points</p>
                  <div className="space-y-2">
                    {tier.rewards.map((reward, idx) => (
                      <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        {reward}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reward Examples */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rewardExamples.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-coral/30 bg-white/95 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    {reward.popularity}
                  </Badge>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-usergy-coral to-usergy-skyblue rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-usergy-dark mb-2">
                    {reward.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {reward.range}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Features Preview */}
        <div className="text-center bg-gradient-to-r from-usergy-light/50 to-white/50 p-8 rounded-2xl border border-usergy-turquoise/20 shadow-lg">
          <h3 className="text-2xl font-bold text-usergy-dark mb-6">Coming Soon: Enhanced Recognition</h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-600 max-w-4xl mx-auto">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Achievement System</h4>
              <p className="text-sm">Unlock special badges and recognition for your contributions</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-usergy-skyblue to-usergy-coral rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
                </svg>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Leaderboards</h4>
              <p className="text-sm">Compete with peers and showcase your expertise</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-usergy-coral to-usergy-turquoise rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Hall of Fame</h4>
              <p className="text-sm">Get featured as a top contributor in our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
