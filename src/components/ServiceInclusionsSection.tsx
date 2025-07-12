
import React, { useState } from 'react';
import { MessageCircle, Users, Rocket, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServiceInclusionsSection = () => {
  const sections = [
    {
      id: 'feedback',
      title: 'Feedback Only',
      subtitle: 'Essential insights for product refinement',
      icon: MessageCircle,
      color: 'usergy-coral',
      bgGradient: 'from-usergy-coral/15 to-usergy-coral/5',
      borderColor: 'border-usergy-coral/20',
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
      subtitle: 'Build engaged user communities that drive growth',
      icon: Users,
      color: 'usergy-turquoise',
      bgGradient: 'from-usergy-turquoise/15 to-usergy-turquoise/5',
      borderColor: 'border-usergy-turquoise/20',
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
      subtitle: 'Complete market dominance strategy',
      icon: Rocket,
      color: 'usergy-skyblue',
      bgGradient: 'from-usergy-skyblue/15 to-usergy-skyblue/5',
      borderColor: 'border-usergy-skyblue/20',
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-usergy-dark mb-4">
            What's Included in Each Service Tier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your AI product's growth at every stage
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={section.id}
                  className={`relative bg-gradient-to-br ${section.bgGradient} rounded-2xl border ${section.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 group`}
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${section.color} to-${section.color}/80 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-black text-${section.color} mb-2`}>
                      {section.title}
                    </h3>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{section.subtitle}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300"
                      >
                        <ChevronRight className={`w-5 h-5 text-${section.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Accordion */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <AccordionItem 
                    key={section.id} 
                    value={section.id}
                    className={`bg-gradient-to-br ${section.bgGradient} rounded-2xl border ${section.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline">
                      <div className="flex items-center space-x-4 w-full">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${section.color} to-${section.color}/80 rounded-full flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-grow">
                          <h3 className={`text-xl font-black text-${section.color} mb-1`}>
                            {section.title}
                          </h3>
                          <p className="text-gray-600 font-medium text-sm">{section.subtitle}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-3 mt-4">
                        {section.items.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-start space-x-3 p-3 bg-white/60 rounded-lg"
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
      </div>
    </section>
  );
};

export default ServiceInclusionsSection;
