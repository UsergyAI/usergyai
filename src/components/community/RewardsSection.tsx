
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Gift, Target, Users, TrendingUp, Award, Zap } from 'lucide-react';

const RewardsSection = () => {
  const rewardTiers = [
    {
      tier: 'Starter',
      points: '0-250',
      color: 'from-gray-400 to-gray-600',
      rewards: ['Community access', 'Basic testing'],
      badge: 'Bronze',
      icon: Users
    },
    {
      tier: 'Explorer',
      points: '250-750',
      color: 'from-usergy-turquoise to-usergy-skyblue',
      rewards: ['$10-25 gift cards', 'Premium testing'],
      badge: 'Silver',
      icon: Target
    },
    {
      tier: 'Influencer',
      points: '750-1500',
      color: 'from-usergy-coral to-usergy-turquoise',
      rewards: ['$50-100 rewards', 'Exclusive access'],
      badge: 'Gold',
      icon: Award
    },
    {
      tier: 'Pioneer',
      points: '1500+',
      color: 'from-yellow-400 to-yellow-600',
      rewards: ['Premium software', 'Founder connections'],
      badge: 'Platinum',
      icon: Trophy
    }
  ];

  const impactMetrics = [
    { label: 'AI Products Improved', value: '150+', icon: TrendingUp, color: 'text-primary' },
    { label: 'Startups Supported', value: '80+', icon: Zap, color: 'text-primary' },
    { label: 'Community Members', value: '2.5K+', icon: Users, color: 'text-primary' },
    { label: 'Total Rewards Distributed', value: '$50K+', icon: Gift, color: 'text-primary' }
  ];

  const rewardExamples = [
    {
      title: 'Amazon Gift Cards',
      range: '$10 - $100',
      icon: Gift,
      popularity: 'Most Popular',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      title: 'Direct PayPal',
      range: 'Instant payments',
      icon: Zap,
      popularity: 'Fast & Easy',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      title: 'Premium Software',
      range: 'Exclusive licenses',
      icon: Star,
      popularity: 'High Value',
      color: 'from-usergy-coral to-usergy-turquoise'
    },
    {
      title: 'Exclusive Merch',
      range: 'Limited edition',
      icon: Award,
      popularity: 'Collector Items',
      color: 'from-usergy-gold to-usergy-coral'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-usergy-light/20 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Trophy className="h-4 w-4" />
            <span>Rewards & Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
            Your Impact Creates
            <span className="block bg-gradient-to-r from-[#00C6FB] to-[#005BEA] bg-clip-text text-transparent">
              Real Value & Rewards
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every insight you share, every bug you catch, every improvement you suggest 
            builds points toward meaningful rewards and recognition in our community.
          </p>
        </div>

        {/* Compact Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:shadow-lg transition-all duration-300">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-muted mx-auto mb-2 ${metric.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-xl font-black text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Progress Simulation */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-6 bg-gradient-to-r from-[#00C6FB]/5 via-[#00C6FB]/5 to-[#005BEA]/5 border-2 border-primary/20 hover:shadow-xl transition-all duration-300"> 
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-black text-foreground">Your Journey Progress</h3>
                  <p className="text-sm text-muted-foreground">Explorer Level • Next: Influencer</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  580 Points
                </Badge>
              </div>
              <Progress value={65} className="h-4 mb-3 bg-muted" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Explorer (250)</span>
                <span className="font-semibold text-primary">170 points to Influencer</span>
                <span>Influencer (750)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compact Tier System */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-foreground mb-6">Unlock Higher Tiers, Better Rewards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {rewardTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${tier.color} text-primary-foreground mb-3`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-1">{tier.tier}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{tier.points} points</p>
                    <div className="space-y-1">
                      {tier.rewards.map((reward, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {reward}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compact Reward Examples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {rewardExamples.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-white/95 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="text-xs">
                {reward.popularity}
              </Badge>
            </div>
            <CardContent className="p-4 text-center">
              <div className="mb-3 flex justify-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${reward.color} text-primary-foreground rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                  </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {reward.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reward.range}
              </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compact Future Features Preview */}
        <div className="text-center bg-gradient-to-r from-white/50 to-white/50 p-6 rounded-xl border border-primary/20 shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">Coming Soon: Enhanced Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6 text-muted-foreground max-w-3xl mx-auto">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-gradient text-primary-foreground rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-1">Achievement System</h4>
              <p className="text-sm">Unlock special badges and recognition for your contributions</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-gradient text-primary-foreground rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-1">Leaderboards</h4>
              <p className="text-sm">Compete with peers and showcase your expertise</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-gradient text-primary-foreground rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-1">Hall of Fame</h4>
              <p className="text-sm">Get featured as a top contributor in our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
