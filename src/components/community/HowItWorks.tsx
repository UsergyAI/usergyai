
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, Trophy, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: User,
      title: 'Join & Get Verified',
      description: 'Quick registration with smart matching based on your interests and expertise. Our AI-powered system connects you with relevant opportunities.',
      highlight: 'Takes 2 minutes',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      number: '2',
      icon: Mail,
      title: 'Receive Invitations',
      description: 'Get personalized invitations to test cutting-edge AI tools. Each opportunity is hand-picked based on your profile and preferences.',
      highlight: 'Weekly opportunities',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      number: '3',
      icon: Trophy,
      title: 'Test & Earn Rewards',
      description: 'Share your insights, complete engaging tasks, and earn points. Convert your contributions into valuable rewards and recognition.',
      highlight: 'Instant rewards',
      color: 'from-usergy-coral to-usergy-gold'
    }
  ];

  const handleDiscordJoin = () => {
    window.open('https://discord.com/invite/jkeSnkm5ww', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-usergy-light/30 relative overflow-hidden">
      {/* Minimal background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-usergy-turquoise rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-usergy-coral rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Redesigned Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-usergy-turquoise to-transparent w-12"></div>
            <div className="mx-4 w-3 h-3 bg-usergy-turquoise rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-usergy-turquoise to-transparent w-12"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-usergy-dark mb-4">
            Your Journey to Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Three simple steps to start shaping the future of AI while earning rewards for your valuable contributions.
          </p>
        </div>

        {/* Redesigned Steps with Flow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection arrows for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-2/3 flex items-center justify-center z-10">
              <ArrowRight className="h-8 w-8 text-usergy-turquoise animate-pulse" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/3 right-0 flex items-center justify-center z-10">
              <ArrowRight className="h-8 w-8 text-usergy-skyblue animate-pulse" />
            </div>

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white/80 backdrop-blur-sm"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    {/* Step number badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className={`w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4 flex justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-usergy-dark mb-3">
                      {step.title}
                    </h3>
                    
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-bold rounded-full mb-4 shadow-sm`}>
                      {step.highlight}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Redesigned Discord CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-usergy-skyblue/10 via-white to-usergy-turquoise/10 rounded-3xl p-8 max-w-2xl mx-auto border border-usergy-turquoise/20 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-usergy-skyblue mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <h3 className="text-xl font-bold text-usergy-dark">Connect with Fellow AI Explorers</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our vibrant Discord community for real-time discussions, exclusive updates, and direct access to our team.
            </p>
            <Button 
              size="lg"
              onClick={handleDiscordJoin}
              className="bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-usergy-skyblue/30 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Our Discord Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
