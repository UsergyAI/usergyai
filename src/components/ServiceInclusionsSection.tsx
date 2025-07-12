
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
        'Quality user recruitment included',
        'Complete screening and management',
        'Actionable feedback analysis report',
        'Dedicated email support'
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
        'Everything in Feedback Only',
        'Community platform setup',
        'Expert moderation strategies',
        'Member onboarding optimization'
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
        'Everything in Community package',
        'Social media task management',
        'User-generated content campaigns',
        'Full amplification strategy'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-20 py-10 bg-gradient-to-br from-gray-50 to-white">
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
                  className={`relative bg-gradient-to-br ${section.bgGradient} rounded-3xl border ${section.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] p-8 group cursor-pointer`}
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
                  
                  <div className="space-y-3 text-center">
                    {section.items.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-center space-x-2 p-2"
                      >
                        <ChevronRight className={`w-4 h-4 text-${section.color} flex-shrink-0`} />
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
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
                    className={`bg-gradient-to-br ${section.bgGradient} rounded-3xl border ${section.borderColor} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                  >
                    <AccordionTrigger className="px-8 py-8 hover:no-underline transition-all duration-250 ease-in-out">
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
                    <AccordionContent className="px-6 pb-6 animate-accordion-down">
                      <div className="space-y-3 mt-4 text-center">
                        {section.items.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-center space-x-2 p-2"
                          >
                            <ChevronRight className={`w-4 h-4 text-${section.color} flex-shrink-0`} />
                            <span className="text-gray-700 font-medium text-sm">{item}</span>
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
