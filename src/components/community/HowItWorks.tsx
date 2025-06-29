
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: '📝',
      title: 'Register & Vet',
      description: 'Join our vetted community by completing a quick profile. Tell us about your interests and skills for expert matching and impactful participation.'
    },
    {
      number: '2',
      icon: '📨',
      title: 'Get Invited & Test',
      description: 'Receive personalized invitations from our team to test groundbreaking AI tools that match your interests. Dive in, explore, and provide your honest experience.'
    },
    {
      number: '3',
      icon: '💬',
      title: 'Contribute & Earn',
      description: 'Submit your valuable feedback and complete engaging tasks. Watch your points grow and redeem them for fantastic rewards!'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            Your Path to Contribution: Simple, Rewarding, Impactful
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've designed a streamlined process that makes exploring AI and contributing your valuable insights effortless. 
            Our team guides you every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue"></div>
            <div className="hidden md:block absolute top-24 left-2/3 right-0 h-0.5 bg-gradient-to-r from-usergy-skyblue to-usergy-coral"></div>

            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30"
              >
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-usergy-turquoise text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-usergy-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
