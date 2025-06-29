
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-usergy-turquoise/20 via-transparent to-usergy-skyblue/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            Beyond Testing: Your Opportunity to Influence & Discover
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Are you fascinated by AI? Do you love discovering new technology months before it hits the mainstream? 
            At Usergy, you don't just 'test' products – you become a vital contributor, a respected voice, 
            and a privileged explorer shaping the future of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-usergy-dark mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-turquoise/30 to-transparent"></div>
    </section>
  );
};

export default WhyUsergy;
