
import React, { useState } from 'react';
import { MessageCircle, Users, Rocket, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServiceInclusionsSection = () => {
  const sections = [
    {
      id: 'feedback',
      title: 'Feedback Only',
      subtitle: 'Basic Insight',
      icon: MessageCircle,
      color: 'usergy-coral',
      bgGradient: 'from-usergy-coral/10 to-usergy-coral/5',
      borderColor: 'border-usergy-coral/30',
      items: [
        'Recruit and incentivize high-quality users; all incentives included',
        'Complete participant screening and management',
        'Comprehensive feedback analysis report with actionable insights',
        'Dedicated email support throughout your campaign',
        'Raw data and insights delivered in easy-to-understand format'
      ]
    },
    {
      id: 'community',
      title: 'Feedback + Community',
      subtitle: 'Core Activation',
      icon: Users,
      color: 'usergy-turquoise',
      bgGradient: 'from-usergy-turquoise/10 to-usergy-turquoise/5',
      borderColor: 'border-usergy-turquoise/30',
      items: [
        'Everything in Feedback Only package',
        'Dedicated community platform setup and configuration',
        'Expert community moderation and nurturing strategies',
        'Real-time engagement tracking and optimization',
        'Proven member onboarding and retention strategies'
      ]
    },
    {
      id: 'full',
      title: 'Full Traction',
      subtitle: 'Amplify & Buzz',
      icon: Rocket,
      color: 'usergy-skyblue',
      bgGradient: 'from-usergy-skyblue/10 to-usergy-skyblue/5',
      borderColor: 'border-usergy-skyblue/30',
      items: [
        'Everything in Community package included',
        'Strategic social media task management and execution',
        'Expert-designed user-generated content campaigns',
        'Comprehensive UGC analysis report with market insights',
        'Full social amplification strategy and professional execution'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-usergy-dark text-center mb-16">
          What's Included in Each Pillar of Service
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <AccordionItem 
                  key={section.id} 
                  value={section.id}
                  className={`bg-gradient-to-br ${section.bgGradient} rounded-2xl border-2 ${section.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center space-x-4 w-full">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${section.color} to-${section.color}/80 rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className={`w-6 h-6 text-white`} />
                      </div>
                      <div className="text-left flex-grow">
                        <h3 className={`text-xl font-black text-${section.color} mb-1`}>
                          {section.title}
                        </h3>
                        <p className="text-gray-600 font-medium text-sm">{section.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {section.items.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-white/70 rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                        >
                          <ChevronRight className={`w-5 h-5 text-${section.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 font-medium leading-relaxed text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceInclusionsSection;
