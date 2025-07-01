
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ArrowRight, CheckCircle, Star, MessageCircle, Zap, Target, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: User,
      title: 'Join & Get Verified',
      subtitle: 'Quick Setup, Expert Matching',
      description: 'Create your profile in under 2 minutes. Our AI matches you with projects that fit your expertise and interests.',
      benefits: ['AI-powered matching', 'Instant verification', 'Quality community'],
      timeEstimate: '2 min setup',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      number: '02',
      icon: Zap,
      title: 'Explore & Test',
      subtitle: 'Exclusive Early Access',
      description: 'Get invited to test cutting-edge AI tools before they launch. Your feedback shapes the future of AI.',
      benefits: ['Pre-launch access', 'Influence development', 'Learn from founders'],
      timeEstimate: '15-30 min per test',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      number: '03',
      icon: Trophy,
      title: 'Impact & Earn',
      subtitle: 'Meaningful Contributions',
      description: 'Transform your insights into rewards. Every piece of feedback helps build better AI for everyone.',
      benefits: ['Real rewards', 'Skill development', 'Network growth'],
      timeEstimate: 'Ongoing rewards',
      color: 'from-usergy-coral to-usergy-turquoise'
    }
  ];

  const handleDiscordJoin = () => {
    window.open('https://discord.com/invite/jkeSnkm5ww', '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-usergy-light/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-usergy-skyblue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-usergy-coral rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-usergy-turquoise/10 text-usergy-turquoise px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4" />
            <span>Your Journey to AI Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-usergy-dark mb-4 leading-tight">
            From Curious Explorer to 
            <span className="block bg-gradient-to-r from-usergy-turquoise to-usergy-coral bg-clip-text text-transparent">
              AI Influence Leader
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join a community where your curiosity drives innovation. Every test, every insight, 
            every connection moves AI forward—and rewards you for it.
          </p>
        </div>

        {/* Compact Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection arrows for desktop */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-usergy-turquoise via-usergy-skyblue to-usergy-coral z-0"></div>
            
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative z-10">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/95 backdrop-blur-sm h-full overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                    <CardContent className="p-6">
                      {/* Step number and time */}
                      <div className="flex justify-between items-start mb-4">
                        <div className={`text-2xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {step.timeEstimate}
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-black text-usergy-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm font-semibold text-usergy-turquoise mb-2">
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
              );
            })}
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-usergy-turquoise/10 via-usergy-skyblue/10 to-usergy-coral/10 rounded-xl p-6 max-w-2xl mx-auto border border-usergy-turquoise/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-usergy-dark mb-3">
                Ready to Start Your AI Journey?
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Join our Discord community for real-time discussions, exclusive updates, and connect with fellow AI explorers.
              </p>
              <Button 
                size="lg"
                onClick={handleDiscordJoin}
                className="bg-gradient-to-r from-usergy-skyblue to-usergy-turquoise hover:from-usergy-turquoise hover:to-usergy-skyblue text-white font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
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
