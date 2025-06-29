
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UsergyDifference = () => {
  const trustPoints = [
    {
      icon: '🔒',
      title: 'Data Security & Privacy',
      description: 'Your personal information is always protected; your feedback shared only with the startup you\'re helping (no personal info without permission).'
    },
    {
      icon: '✨',
      title: 'High-Quality Projects',
      description: 'We partner only with innovative AI founders, ensuring exciting and meaningful testing opportunities.'
    },
    {
      icon: '⚖️',
      title: 'Fair & Transparent Rewards',
      description: 'Our point system is clear, and rewards are always tangible and valuable.'
    },
    {
      icon: '🤝',
      title: 'Vetted Community & Moderation',
      description: 'Join genuine AI enthusiasts in a supportive, well-moderated space with clear guidelines for respectful interactions.'
    },
    {
      icon: '✉️',
      title: 'No Spam, Just Value',
      description: 'You\'ll receive only relevant project invitations directly matching your interests and skills.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            More Than Points: A Community Built on Trust & Quality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe in authentic insights and a supportive environment. Usergy is built on principles that ensure 
            every experience is valuable for both you and the founders you help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-skyblue/30"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-usergy-dark mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsergyDifference;
