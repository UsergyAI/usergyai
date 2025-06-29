
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Award, Zap } from 'lucide-react';

const RewardsSection = () => {
  const rewards = [
    {
      icon: Gift,
      title: 'Gift Cards',
      description: 'Amazon, Apple, Google Play, and more popular retailers',
      points: '500+ points',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      icon: CreditCard,
      title: 'Cash Payments',
      description: 'Direct PayPal or bank transfers for higher-tier rewards',
      points: '1000+ points',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'Premium AI tools, beta programs, and founder meetups',
      points: '750+ points',
      color: 'from-usergy-coral to-usergy-gold'
    },
    {
      icon: Zap,
      title: 'Special Perks',
      description: 'Early access passes, conference tickets, and swag',
      points: '300+ points',
      color: 'from-usergy-gold to-usergy-turquoise'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-32 sm:w-40 h-32 sm:h-40 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 sm:w-32 h-24 sm:h-32 bg-usergy-coral rounded-full blur-2xl animate-float opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-20 sm:w-24 h-20 sm:h-24 bg-usergy-skyblue rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-usergy-dark mb-4 sm:mb-6">
            Earn Real Rewards for Real Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Your feedback is valuable, and we believe in rewarding quality contributions. 
            From gift cards to exclusive access, there's something for every level of participation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {rewards.map((reward, index) => {
              const IconComponent = reward.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/90 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reward.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-6 sm:p-8 text-center relative z-10">
                    {/* Points badge */}
                    <div className="absolute -top-2 -right-2 bg-usergy-gold text-usergy-dark text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {reward.points}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${reward.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-3 sm:mb-4">
                      {reward.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {reward.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* How points work section */}
          <div className="mt-12 sm:mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-usergy-turquoise/20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-usergy-dark text-center mb-6 sm:mb-8">
              How You Earn Points
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-4 bg-gradient-to-br from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-usergy-turquoise mb-2">50-200</div>
                <div className="text-sm sm:text-base font-semibold text-gray-700">Basic Testing</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-usergy-skyblue/10 to-usergy-coral/10 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-usergy-skyblue mb-2">100-400</div>
                <div className="text-sm sm:text-base font-semibold text-gray-700">Detailed Feedback</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-usergy-coral/10 to-usergy-gold/10 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-usergy-coral mb-2">200-600</div>
                <div className="text-sm sm:text-base font-semibold text-gray-700">Long-term Testing</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-usergy-gold/10 to-usergy-turquoise/10 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-usergy-gold mb-2">500+</div>
                <div className="text-sm sm:text-base font-semibold text-gray-700">Premium Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-gold/30 to-transparent"></div>
    </section>
  );
};

export default RewardsSection;
