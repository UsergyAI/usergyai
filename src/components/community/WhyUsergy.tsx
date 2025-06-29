
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyUsergy = () => {
  const benefits = [
    {
      icon: '🌟',
      title: 'Exclusive Early Access',
      description: 'Be among the very first to experiment with cutting-edge AI products before anyone else.'
    },
    {
      icon: '🗣️',
      title: 'Direct Influence',
      description: 'Your honest feedback goes straight to founders, directly impacting product development and innovation.'
    },
    {
      icon: '🎁',
      title: 'Tangible Rewards',
      description: 'Earn points for every valuable contribution, redeemable for gift cards and more.'
    },
    {
      icon: '🤝',
      title: 'Vibrant Community',
      description: 'Connect with a global network of passionate AI enthusiasts, learn, and grow together.'
    },
    {
      icon: '📈',
      title: 'Grow Your Expertise',
      description: 'Sharpen your skills and build your reputation as a respected AI scout and pioneer.'
    },
    {
      icon: '✨',
      title: 'Make a Real Impact',
      description: 'Your insights accelerate innovation, helping brilliant AI ideas truly thrive.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
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
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-usergy-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsergy;
