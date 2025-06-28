import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Users, BarChart3, Zap, Target, Gift, ChevronDown, ChevronUp } from 'lucide-react';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleStep = (stepIndex: number) => {
    setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
  };

  const founderSteps = [
    {
      title: "Connect & Launch",
      icon: Rocket,
      color: "#4ECDC4",
      description: "Set up your AI project profile and launch your campaign",
      details: "Founders create detailed project profiles with demo links, target audience specs, and feedback goals. Our smart matching system connects you with relevant AI enthusiasts within 24 hours."
    },
    {
      title: "Engage & Monitor",
      icon: BarChart3,
      color: "#45B7D1", 
      description: "Track real-time engagement and gather valuable insights",
      details: "Monitor user interactions through our comprehensive dashboard. Track engagement metrics, user demographics, and feedback quality scores in real-time as your campaign progresses."
    },
    {
      title: "Analyze & Optimize",
      icon: Target,
      color: "#FF6B6B",
      description: "Transform feedback into actionable product improvements",
      details: "Access detailed analytics reports with sentiment analysis, feature priority rankings, and actionable recommendations. Use AI-powered insights to make data-driven product decisions."
    }
  ];

  const userSteps = [
    {
      title: "Discover & Explore",
      icon: Zap,
      color: "#4ECDC4",
      description: "Browse cutting-edge AI projects tailored to your interests",
      details: "Users explore personalized AI project recommendations based on their interests and expertise. Advanced filtering helps discover projects in specific domains like healthcare, productivity, or creativity."
    },
    {
      title: "Test & Contribute",
      icon: Users,
      color: "#45B7D1",
      description: "Provide meaningful feedback on innovative AI solutions",
      details: "Engage with AI tools through structured testing sessions. Provide detailed feedback using our guided questionnaires and rating systems designed to capture nuanced user experiences."
    },
    {
      title: "Earn & Redeem",
      icon: Gift,
      color: "#FF6B6B",
      description: "Collect points and unlock exclusive rewards",
      details: "Earn points for quality feedback, consistent participation, and community engagement. Redeem rewards including early access to premium AI tools, tech merchandise, and exclusive events."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-br from-usergy-light to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-6">
              How <span className="gradient-text">Usergy Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined 3-step process designed for maximum impact and minimal friction. 
              Whether you're launching or exploring, success is just three clicks away.
            </p>
          </div>

          {/* Dual Path Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Founders Path */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-usergy-turquoise text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <Rocket className="h-6 w-6" />
                  <span>For AI Founders</span>
                </div>
              </div>

              <div className="space-y-6">
                {founderSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleStep(index)}
                    >
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-usergy-dark mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="text-gray-400">
                          {expandedStep === index ? 
                            <ChevronUp className="h-5 w-5" /> : 
                            <ChevronDown className="h-5 w-5" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    {expandedStep === index && (
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-accordion-down">
                        <p className="text-gray-700 leading-relaxed">{step.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* For Users Path */}
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-usergy-coral text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <Users className="h-6 w-6" />
                  <span>For AI Enthusiasts</span>
                </div>
              </div>

              <div className="space-y-6">
                {userSteps.map((step, index) => (
                  <div key={index + 100} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleStep(index + 100)}
                    >
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-usergy-dark mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="text-gray-400">
                          {expandedStep === index + 100 ? 
                            <ChevronUp className="h-5 w-5" /> : 
                            <ChevronDown className="h-5 w-5" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    {expandedStep === index + 100 && (
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-accordion-down">
                        <p className="text-gray-700 leading-relaxed">{step.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue text-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Journey?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of innovators already building the future with Usergy</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-usergy-turquoise font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  Start Your Campaign
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-usergy-turquoise transition-all duration-300">
                  Explore Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
