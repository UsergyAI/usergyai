
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, TrendingUp, MessageSquare, Calendar } from 'lucide-react';

const SolutionSection = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const pillars = [
    {
      icon: MessageSquare,
      title: 'Authentic Feedback',
      description: 'Real insights from engaged users who genuinely care about AI innovation, not generic responses from disinterested testers.',
      benefits: [
        'Recruited premium users with vested interest',
        'Deep, actionable feedback analysis',
        'Strategic recommendations for improvement'
      ]
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'A thriving ecosystem of AI enthusiasts who become your most valuable advocates and early adopters.',
      benefits: [
        'Organic word-of-mouth amplification',
        'Long-term user retention strategies',
        'Community-driven feature development'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Social Momentum',
      description: 'Strategic amplification that transforms your product into a trending topic across key platforms and communities.',
      benefits: [
        'Viral content creation and distribution',
        'Influencer and thought leader engagement',
        'Cross-platform momentum building'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            The Usergy Three-Pillar Growth Framework:
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Transforming AI Startups into Market Leaders
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just provide feedback—we architect comprehensive traction ecosystems that 
            generate authentic user engagement, sustainable growth, and undeniable market momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-border hover:border-primary/40 bg-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground text-center mb-4 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="space-y-3">
                    {pillar.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                10x
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">Faster Feedback</div>
              <div className="text-muted-foreground text-sm">than traditional user research methods</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                85%
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">User Retention</div>
              <div className="text-muted-foreground text-sm">among community-built products</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                300%
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">Social Reach</div>
              <div className="text-muted-foreground text-sm">increase through strategic amplification</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-12 border-2 border-border shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your AI Startup's Trajectory?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Join successful AI founders who've leveraged our three-pillar framework to achieve 
                undeniable traction and sustainable growth.
              </p>
              <Button
                onClick={handleBookCall}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary font-bold text-xl py-6 px-12 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-primary/20"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Strategy Session
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Free consultation • No commitment required • Immediate insights guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
