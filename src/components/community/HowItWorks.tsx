
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: 'user-profile',
      title: 'Register & Vet',
      description: 'Join our vetted community by completing a quick profile. Tell us about your interests and skills for expert matching and impactful participation.'
    },
    {
      number: '2',
      icon: 'invitation',
      title: 'Get Invited & Test',
      description: 'Receive personalized invitations from our team to test groundbreaking AI tools that match your interests. Dive in, explore, and provide your honest experience.'
    },
    {
      number: '3',
      icon: 'trophy',
      title: 'Contribute & Earn',
      description: 'Submit your valuable feedback and complete engaging tasks. Watch your points grow and redeem them for fantastic rewards!'
    }
  ];

  const CustomIcon = ({ type, className }: { type: string; className?: string }) => {
    switch (type) {
      case 'user-profile':
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'invitation':
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'trophy':
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
          </svg>
        );
      default:
        return <User className={className} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-usergy-skyblue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-usergy-coral rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                className="relative group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-usergy-turquoise text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="mb-6 mt-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <CustomIcon type={step.icon} className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
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

        {/* Discord CTA - Primary Placement */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-usergy-skyblue/10 to-usergy-turquoise/10 rounded-2xl p-8 max-w-3xl mx-auto border border-usergy-turquoise/20">
            <h3 className="text-2xl font-bold text-usergy-dark mb-4">Ready to Connect with Fellow AI Explorers?</h3>
            <p className="text-gray-600 mb-6">Join our Discord community for real-time discussions, exclusive updates, and direct access to our team.</p>
            <Button 
              size="lg"
              className="bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-usergy-skyblue/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Our Discord Community
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-skyblue/30 to-transparent"></div>
    </section>
  );
};

export default HowItWorks;
