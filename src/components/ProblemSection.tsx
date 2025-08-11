
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Users, TrendingDown, MessageSquareX } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: 'Generic Feedback',
      description: 'Most user testing platforms provide shallow, generic responses from disinterested participants who don\'t understand or care about AI innovation.',
      impact: 'Wasted budget on meaningless insights'
    },
    {
      icon: Users,
      title: 'Community Challenges',
      description: 'Building an engaged user community from scratch is expensive, time-consuming, and requires specialized expertise most founders lack.',
      impact: 'Slow growth and poor retention rates'
    },
    {
      icon: TrendingDown,
      title: 'Social Silence',
      description: 'Without strategic amplification, even great AI products remain invisible in the noise, struggling to gain the social momentum needed for market breakthrough.',
      impact: 'Limited visibility and missed opportunities'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Traction Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Why Most AI Startups Struggle to Gain Traction
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Despite having groundbreaking technology, AI founders face three critical barriers that prevent them 
            from achieving the market momentum their innovations deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-200 bg-gradient-to-br from-red-50/50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold">
                    Result: {problem.impact}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Problem stats */}
        <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 border-2 border-red-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            The Cost of Poor Traction Strategy
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-red-600 mb-2">90%</div>
              <div className="text-lg font-semibold text-foreground mb-1">of AI startups</div>
              <div className="text-sm text-muted-foreground">fail to achieve product-market fit within 18 months</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-600 mb-2">$50K+</div>
              <div className="text-lg font-semibold text-foreground mb-1">average cost</div>
              <div className="text-sm text-muted-foreground">of fragmented marketing and feedback tools</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-600 mb-2">6 months</div>
              <div className="text-lg font-semibold text-foreground mb-1">time wasted</div>
              <div className="text-sm text-muted-foreground">on ineffective traction strategies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
