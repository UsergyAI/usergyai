import React from 'react';
import { MessageCircle, Users, Rocket, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CampaignInclusionsSection = () => {
  const inclusions = [
    {
      icon: MessageCircle,
      title: 'High-Quality User Recruitment',
      description: 'We source, screen, and incentivize premium users perfectly matched to your AI product',
      color: 'primary',
      bgGradient: '',
      borderColor: 'border-primary/20'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Feedback Analysis',
      description: 'Expert analysis and actionable insights delivered in clear, strategic reports',
      color: 'primary',
      bgGradient: '',
      borderColor: 'border-primary/20'
    },
    {
      icon: Users,
      title: 'Strategic Community Building',
      description: 'Professional community setup, moderation, and growth strategies that drive engagement',
      color: 'primary',
      bgGradient: '',
      borderColor: 'border-primary/20'
    },
    {
      icon: Rocket,
      title: 'Strategic Social Media Amplification',
      description: 'Expert-designed campaigns that generate authentic buzz and user-generated content',
      color: 'primary',
      bgGradient: '',
      borderColor: 'border-primary/20'
    }
  ];

  return (
    <section className="py-20 bg-site-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
            What Your Usergy Campaign Always Includes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your AI product's growth at every stage
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-8">
            {inclusions.map((inclusion, index) => {
              const IconComponent = inclusion.icon;
              return (
              <div 
                  key={index}
                  className={`relative bg-card rounded-2xl border ${inclusion.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-xl font-black text-foreground mb-3`}>
                        {inclusion.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">{inclusion.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Accordion */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              {inclusions.map((inclusion, index) => {
                const IconComponent = inclusion.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className={`bg-card rounded-2xl border ${inclusion.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline">
                      <div className="flex items-center space-x-4 w-full">
                        <div className={`w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="text-left flex-grow">
                          <h3 className={`text-lg font-black text-foreground`}>
                            {inclusion.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="mt-4 ml-16">
                        <p className="text-muted-foreground font-medium leading-relaxed">{inclusion.description}</p>
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

export default CampaignInclusionsSection;