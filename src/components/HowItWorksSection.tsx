
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
      title: "Strategize & Scope",
      icon: Rocket,
      color: "#4ECDC4",
      description: "Collaborate with our expert team to define your goals and map your custom traction strategy",
      details: "We work closely with you to understand your AI product, target market, and growth objectives. Our team develops a comprehensive strategy tailored to your specific needs, ensuring maximum impact and efficient resource allocation."
    },
    {
      title: "Engage & Monitor",
      icon: BarChart3,
      color: "#45B7D1", 
      description: "Our team manages user engagement, feedback collection, and community activation, providing real-time oversight",
      details: "We handle all aspects of user engagement while you focus on product development. Our experts monitor interactions, facilitate meaningful conversations, and ensure high-quality feedback collection through proven methodologies."
    },
    {
      title: "Analyze & Optimize",
      icon: Target,
      color: "#FF6B6B",
      description: "Receive tailored reports and strategic recommendations from our experts for continuous optimization and product refinement",
      details: "Get comprehensive analysis reports with actionable insights, trend identification, and strategic recommendations. Our team provides ongoing consultation to help you implement changes and optimize your product-market fit."
    }
  ];

  const userSteps = [
    {
      title: "Register & Vet",
      icon: Zap,
      color: "#4ECDC4",
      description: "Join our community by registering and completing your profile for expert matching",
      details: "Complete a detailed profile showcasing your expertise and interests. Our team carefully vets each applicant to ensure we maintain a high-quality community of engaged AI enthusiasts and professionals."
    },
    {
      title: "Test & Contribute",
      icon: Users,
      color: "#45B7D1",
      description: "Receive invitations from our team to test and provide meaningful feedback on innovative AI solutions",
      details: "Get personally selected by our experts to participate in exclusive testing opportunities. Provide structured feedback through our guided assessment framework designed to capture valuable insights for founders."
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
              Our streamlined 3-step process ensures maximum impact and minimal friction. 
              We guide founders through a collaborative journey, and users find impactful ways to contribute.
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
                  <span>How We Partner with Founders</span>
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
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-usergy-dark mb-1">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                        <div className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                          {expandedStep === index ? 
                            <ChevronUp className="h-5 w-5 transform rotate-180" /> : 
                            <ChevronDown className="h-5 w-5" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed text-sm">{step.details}</p>
                      </div>
                    </div>
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
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-usergy-dark mb-1">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                        <div className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                          {expandedStep === index + 100 ? 
                            <ChevronUp className="h-5 w-5 transform rotate-180" /> : 
                            <ChevronDown className="h-5 w-5" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedStep === index + 100 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed text-sm">{step.details}</p>
                      </div>
                    </div>
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
                  Book Your Strategy Call
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-usergy-turquoise transition-all duration-300">
                  See Our Founder Process
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
