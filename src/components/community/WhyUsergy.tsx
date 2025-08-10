
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User, Gift, Handshake, TrendingUp, Lightbulb } from 'lucide-react';

const WhyUsergy = () => {
  const benefits = [
    {
      icon: Star,
      title: 'Exclusive Early Access',
      description: 'Be among the very first to experiment with cutting-edge AI products before anyone else.'
    },
    {
      icon: User,
      title: 'Direct Influence',
      description: 'Your honest feedback goes straight to founders, directly impacting product development and innovation.'
    },
    {
      icon: Gift,
      title: 'Tangible Rewards',
      description: 'Earn points for every valuable contribution, redeemable for gift cards and more.'
    },
    {
      icon: Handshake,
      title: 'Vibrant Community',
      description: 'Connect with a global network of passionate AI enthusiasts, learn, and grow together.'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Expertise',
      description: 'Sharpen your skills and build your reputation as a respected AI scout and pioneer.'
    },
    {
      icon: Lightbulb,
      title: 'Make a Real Impact',
      description: 'Your insights accelerate innovation, helping brilliant AI ideas truly thrive.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-usergy-turquoise/20 via-transparent to-usergy-skyblue/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Beyond Testing: Your Opportunity to Influence & Discover
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Are you fascinated by AI? Do you love discovering new technology months before it hits the mainstream? 
            At Usergy, you don't just 'test' products – you become a vital contributor, a respected voice, 
            and a privileged explorer shaping the future of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-white/80 backdrop-blur-sm h-full"
              >
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="mb-4 flex justify-center flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-gradient text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex-shrink-0">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default WhyUsergy;
