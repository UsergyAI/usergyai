
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Connect & Launch",
      description: "Founders launch campaigns, users find matching projects",
      founderActions: [
        "Create compelling campaign with clear objectives",
        "Set target audience and engagement goals",
        "Upload product demos and key materials"
      ],
      userActions: [
        "Browse curated AI projects by category",
        "Match with projects aligned to interests",
        "Join campaigns that excite you most"
      ],
      icon: "🚀",
      color: "#4ECDC4"
    },
    {
      id: 2,
      title: "Engage & Contribute",
      description: "Users interact with AI, provide feedback & social buzz",
      founderActions: [
        "Monitor real-time engagement metrics",
        "Respond to user questions and feedback",
        "Refine product based on insights"
      ],
      userActions: [
        "Test AI tools with guided workflows",
        "Provide structured, valuable feedback",
        "Share experiences on social platforms"
      ],
      icon: "🤝",
      color: "#45B7D1"
    },
    {
      id: 3,
      title: "Analyze & Reward",
      description: "Founders get actionable insights, users earn points & rewards",
      founderActions: [
        "Access detailed analytics dashboard",
        "Download actionable feedback reports",
        "Connect with top contributing users"
      ],
      userActions: [
        "Earn points for quality contributions",
        "Redeem rewards and exclusive access",
        "Level up your AI explorer status"
      ],
      icon: "📊",
      color: "#FF6B6B"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-6">
              Usergy in Action: 
              <span className="gradient-text"> Simple Steps, Powerful Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our intuitive platform streamlines the entire validation process for founders and creates 
              a rewarding experience for users. See the high-level flow below, or click for an in-depth journey.
            </p>
          </div>

          {/* Interactive Flow */}
          <div className="relative">
            {/* Flow Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0"></div>
                  )}
                  
                  {/* Step Card */}
                  <div 
                    className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                      activeStep === step.id ? 'ring-4 ring-opacity-50' : ''
                    }`}
                    style={{
                      ringColor: activeStep === step.id ? step.color : 'transparent'
                    }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Step Icon */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-white text-2xl font-bold shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>

                    {/* Step Number */}
                    <div className="text-center text-sm font-bold text-gray-400 mb-2">
                      STEP {step.id}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-center mb-3" style={{ color: step.color }}>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>

                    {/* Click Indicator */}
                    <div className="text-center mt-4">
                      <span className="text-xs text-gray-400">Click to expand</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Details */}
            {activeStep && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-inner animate-slide-up">
                {(() => {
                  const step = steps.find(s => s.id === activeStep);
                  if (!step) return null;
                  
                  return (
                    <div>
                      <div className="text-center mb-8">
                        <div 
                          className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white text-3xl mb-4"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-2" style={{ color: step.color }}>
                          {step.title}
                        </h3>
                        <p className="text-xl text-gray-600">{step.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* For Founders */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-usergy-turquoise rounded-lg flex items-center justify-center mr-3">
                              <span className="text-white text-sm">🚀</span>
                            </div>
                            <h4 className="text-xl font-bold text-usergy-dark">For Founders</h4>
                          </div>
                          <ul className="space-y-3">
                            {step.founderActions.map((action, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-usergy-turquoise rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* For Users */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-usergy-coral rounded-lg flex items-center justify-center mr-3">
                              <span className="text-white text-sm">🎮</span>
                            </div>
                            <h4 className="text-xl font-bold text-usergy-dark">For Users</h4>
                          </div>
                          <ul className="space-y-3">
                            {step.userActions.map((action, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-usergy-coral rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                See the Full Interactive Workflow →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
