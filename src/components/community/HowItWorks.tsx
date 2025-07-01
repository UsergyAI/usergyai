
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: 'user-profile',
      title: 'Join & Get Verified',
      subtitle: 'Quick Setup, Expert Matching',
      description: 'Create your profile in under 2 minutes. Our AI matches you with projects that fit your expertise and interests.',
      benefits: ['AI-powered matching', 'Instant verification', 'Quality community'],
      timeEstimate: '2 min setup',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      number: '02',
      icon: 'invitation',
      title: 'Explore & Test',
      subtitle: 'Exclusive Early Access',
      description: 'Get invited to test cutting-edge AI tools before they launch. Your feedback shapes the future of AI.',
      benefits: ['Pre-launch access', 'Influence development', 'Learn from founders'],
      timeEstimate: '15-30 min per test',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      number: '03',
      icon: 'trophy',
      title: 'Impact & Earn',
      subtitle: 'Meaningful Contributions',
      description: 'Transform your insights into rewards. Every piece of feedback helps build better AI for everyone.',
      benefits: ['Real rewards', 'Skill development', 'Network growth'],
      timeEstimate: 'Ongoing rewards',
      color: 'from-usergy-coral to-usergy-turquoise'
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
            <path d="M9 11l3 3 6-6" />
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

  const handleDiscordJoin = () => {
    window.open('https://discord.com/invite/jkeSnkm5ww', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-usergy-light/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-usergy-skyblue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-usergy-coral rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-usergy-turquoise/10 text-usergy-turquoise px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            <span>Your Journey to AI Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6 leading-tight">
            From Curious Explorer to 
            <span className="block bg-gradient-to-r from-usergy-turquoise to-usergy-coral bg-clip-text text-transparent">
              AI Influence Leader
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Join a community where your curiosity drives innovation. Every test, every insight, 
            every connection moves AI forward—and rewards you for it.
          </p>
        </div>

        {/* Enhanced Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection arrows for desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-usergy-turquoise via-usergy-skyblue to-usergy-coral z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/95 backdrop-blur-sm h-full overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                  <CardContent className="p-8">
                    {/* Step number and time */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`text-3xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {step.timeEstimate}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <CustomIcon type={step.icon} className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-black text-usergy-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-semibold text-usergy-turquoise mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 mr-2 text-usergy-turquoise flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-usergy-turquoise/10 via-usergy-skyblue/10 to-usergy-coral/10 rounded-2xl p-8 max-w-3xl mx-auto border border-usergy-turquoise/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-usergy-dark mb-4">
                Ready to Start Your AI Journey?
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Join our Discord community for real-time discussions, exclusive updates, and connect with fellow AI explorers.
              </p>
              <Button 
                size="lg"
                onClick={handleDiscordJoin}
                className="bg-gradient-to-r from-usergy-skyblue to-usergy-turquoise hover:from-usergy-turquoise hover:to-usergy-skyblue text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Our Discord Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
