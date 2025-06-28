
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const ServiceInclusionsSection = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    {
      id: 'feedback',
      title: 'Feedback Only (Basic Insight)',
      icon: '💬',
      color: 'usergy-coral',
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
      title: 'Feedback + Community (Core Activation)',
      icon: '👥',
      color: 'usergy-turquoise',
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
      title: 'Full Traction (Amplify & Buzz)',
      icon: '🚀',
      color: 'usergy-skyblue',
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
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section) => (
            <Collapsible
              key={section.id}
              open={openSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.icon}</span>
                      <h3 className={`text-xl font-bold text-${section.color}`}>
                        {section.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-${section.color} transition-transform ${
                        openSections.includes(section.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    <ul className="space-y-3 text-gray-600">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`text-${section.color} mr-2`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInclusionsSection;
