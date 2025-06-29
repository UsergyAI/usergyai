
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const RewardsSection = () => {
  const CustomIcons = {
    ShoppingCart: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    PayPal: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1.5-6H10l.5 2h1l.5-2h1.5L12 17zm3-6h-1l-.5 2H12l.5-2h1.5z"/>
      </svg>
    ),
    Software: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
    Merchandise: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  };

  const rewards = [
    {
      title: 'Amazon Gift Cards',
      description: '$10 - $100',
      icon: CustomIcons.ShoppingCart
    },
    {
      title: 'PayPal Credit',
      description: 'Direct payments',
      icon: CustomIcons.PayPal
    },
    {
      title: 'Premium Software',
      description: 'Exclusive licenses',
      icon: CustomIcons.Software
    },
    {
      title: 'Usergy Merchandise',
      description: 'Limited edition',
      icon: CustomIcons.Merchandise
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-56 h-56 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-25"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-35"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
          <Card className="p-8 bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 border-2 border-usergy-turquoise/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-usergy-dark">Your Progress</h3>
                <span className="text-lg font-bold text-usergy-turquoise">750 / 1000 Points</span>
              </div>
              <Progress value={75} className="h-4 mb-4" />
              <p className="text-center text-gray-600">
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-2 text-usergy-turquoise" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <strong>250 points</strong> to unlock <strong>Premium Tier</strong> rewards!
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reward Examples */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {rewards.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-coral/30 bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-usergy-coral to-usergy-skyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-usergy-dark mb-2">
                    {reward.title}
                  </h3>
                  <p className="text-gray-600">
                    {reward.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Gamification Hint */}
        <div className="text-center bg-gradient-to-r from-usergy-light to-white p-8 rounded-2xl border border-usergy-turquoise/20 shadow-lg">
          <h3 className="text-2xl font-bold text-usergy-dark mb-4">Coming Soon: Enhanced Rewards!</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto text-usergy-turquoise group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <strong>Level Up System</strong>
              <p className="text-sm">Bronze, Silver, Gold, Platinum tiers</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto text-usergy-skyblue group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
                </svg>
              </div>
              <strong>Achievement Badges</strong>
              <p className="text-sm">Unlock special recognition badges</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto text-usergy-coral group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </div>
              <strong>Hall of Fame</strong>
              <p className="text-sm">Featured top contributors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-turquoise/30 to-transparent"></div>
    </section>
  );
};

export default RewardsSection;
