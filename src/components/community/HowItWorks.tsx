
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, Search, TestTube, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Join the Community',
      description: 'Sign up for free and complete your AI interests profile to get matched with relevant testing opportunities.'
    },
    {
      icon: Search,
      number: '02',
      title: 'Get Matched',
      description: 'Our algorithm connects you with AI products that match your interests and expertise level.'
    },
    {
      icon: TestTube,
      number: '03',
      title: 'Test & Provide Feedback',
      description: 'Explore cutting-edge AI tools and share your honest insights with the founders building them.'
    },
    {
      icon: Gift,
      number: '04',
      title: 'Earn Rewards',
      description: 'Get points for valuable contributions, redeemable for gift cards, cash, and exclusive perks.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 sm:w-36 h-24 sm:w-36 bg-usergy-coral rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-usergy-dark mb-4 sm:mb-6">
            How It Works: From Explorer to AI Pioneer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Join our community in four simple steps and start shaping the future of AI innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stack vertically, Tablet+: Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/90 backdrop-blur-sm relative"
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm sm:text-base">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Connection lines for larger screens */}
          <div className="hidden lg:block relative -mt-16 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-5xl flex justify-between items-center px-20">
                <div className="w-12 h-0.5 bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-usergy-skyblue to-usergy-coral"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-usergy-coral to-usergy-turquoise"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-turquoise/30 to-transparent"></div>
    </section>
  );
};

export default HowItWorks;
