
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const RewardsSection = () => {
  const rewards = [
    {
      title: 'Amazon Gift Cards',
      description: '$10 - $100',
      icon: '🛒'
    },
    {
      title: 'PayPal Credit',
      description: 'Direct payments',
      icon: '💰'
    },
    {
      title: 'Premium Software',
      description: 'Exclusive licenses',
      icon: '💻'
    },
    {
      title: 'Usergy Merchandise',
      description: 'Limited edition',
      icon: '👕'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            Your Insights, Your Influence, Your Rewards
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every thoughtful insight, every bug report, every supportive social share earns you points. 
            Watch your contributions add up and unlock exciting rewards from our exclusive store!
          </p>
        </div>

        {/* Mock Progress Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 border-2">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-usergy-dark">Your Progress</h3>
                <span className="text-lg font-bold text-usergy-turquoise">750 / 1000 Points</span>
              </div>
              <Progress value={75} className="h-4 mb-4" />
              <p className="text-center text-gray-600">
                🎯 <strong>250 points</strong> to unlock <strong>Premium Tier</strong> rewards!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reward Examples */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {rewards.map((reward, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-coral/30"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reward.icon}
                </div>
                <h3 className="text-lg font-bold text-usergy-dark mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600">
                  {reward.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gamification Hint */}
        <div className="text-center bg-gradient-to-r from-usergy-light to-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-usergy-dark mb-4">Coming Soon: Enhanced Rewards!</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div>
              <div className="text-2xl mb-2">🏆</div>
              <strong>Level Up System</strong>
              <p className="text-sm">Bronze, Silver, Gold, Platinum tiers</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏅</div>
              <strong>Achievement Badges</strong>
              <p className="text-sm">Unlock special recognition badges</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⭐</div>
              <strong>Hall of Fame</strong>
              <p className="text-sm">Featured top contributors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
