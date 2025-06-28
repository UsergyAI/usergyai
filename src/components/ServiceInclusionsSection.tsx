
import React, { useState } from 'react';
import { MessageCircle, Users, Rocket, ChevronRight } from 'lucide-react';

const ServiceInclusionsSection = () => {
  const [activeTab, setActiveTab] = useState('feedback');

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

  const activeSection = sections.find(section => section.id === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-usergy-dark text-center mb-16">
          What's Included in Each Pillar of Service
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    activeTab === section.id
                      ? `bg-gradient-to-r ${section.bgGradient} border-2 ${section.borderColor} text-${section.color} shadow-lg`
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 ${activeTab === section.id ? `text-${section.color}` : 'text-gray-500'}`} />
                  <div className="text-left">
                    <div className="font-bold">{section.title}</div>
                    <div className="text-sm font-normal opacity-80">{section.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Content */}
          {activeSection && (
            <div className={`bg-gradient-to-br ${activeSection.bgGradient} rounded-2xl p-8 border-2 ${activeSection.borderColor} shadow-xl animate-fade-in`}>
              <div className="flex items-center justify-center mb-8">
                <activeSection.icon className={`w-12 h-12 text-${activeSection.color} mr-4`} />
                <div>
                  <h3 className={`text-2xl font-black text-${activeSection.color} mb-1`}>
                    {activeSection.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{activeSection.subtitle}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {activeSection.items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                  >
                    <ChevronRight className={`w-5 h-5 text-${activeSection.color} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceInclusionsSection;
