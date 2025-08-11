
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Users,
      title: 'Connect & Recruit',
      description: 'We identify and engage premium AI enthusiasts who match your target audience perfectly.',
      details: [
        'Precision targeting of qualified users',
        'Comprehensive user vetting process',
        'All recruitment costs included'
      ]
    },
    {
      number: '02',
      icon: MessageSquare,
      title: 'Gather & Analyze',
      description: 'Collect deep, actionable insights through structured feedback sessions and comprehensive analysis.',
      details: [
        'Strategic feedback collection',
        'Expert analysis and reporting',
        'Actionable improvement recommendations'
      ]
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Amplify & Scale',
      description: 'Transform engaged users into advocates and leverage social momentum for sustainable growth.',
      details: [
        'Community activation strategies',
        'Social media amplification',
        'Long-term growth planning'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            How Usergy Delivers
            <span className="block text-transparent bg-clip-text bg-primary-gradient">
              Undeniable Traction
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven three-step methodology transforms your AI product from unknown to unmissable, 
            creating authentic engagement that drives sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection arrows for desktop */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-primary to-primary z-0"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative z-10">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-border hover:border-primary/40 bg-card relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    {/* Step number */}
                    <div className="text-right mb-4">
                      <span className="text-4xl font-black text-muted-foreground group-hover:text-primary transition-colors">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mt-auto">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-12 border-2 border-border shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Results That Speak for Themselves
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  2-4 weeks
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">Campaign Duration</div>
                <div className="text-sm text-muted-foreground">From launch to actionable insights</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  95%
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">Completion Rate</div>
                <div className="text-sm text-muted-foreground">Users who provide comprehensive feedback</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  24-48hrs
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">Response Time</div>
                <div className="text-sm text-muted-foreground">For detailed reports and recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
