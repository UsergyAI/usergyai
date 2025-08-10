import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Users, BarChart3, Zap, Target, Gift, ChevronDown, ChevronUp, Phone } from 'lucide-react';

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

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const founderSteps = [
    {
      title: "Strategize & Scope",
      icon: Rocket,
      color: "hsl(var(--primary))",
      description: "Collaborate with our expert team to define your goals and map your custom traction strategy",
      details: "We work closely with you to understand your AI product, target market, and growth objectives. Our team develops a comprehensive strategy tailored to your specific needs, ensuring maximum impact and efficient resource allocation."
    },
    {
      title: "Engage & Monitor",
      icon: BarChart3,
      color: "hsl(var(--primary))", 
      description: "Our team manages user engagement, feedback collection, and community activation, providing real-time oversight",
      details: "We handle all aspects of user engagement while you focus on product development. Our experts monitor interactions, facilitate meaningful conversations, and ensure high-quality feedback collection through proven methodologies."
    },
    {
      title: "Analyze & Optimize",
      icon: Target,
      color: "hsl(var(--primary))",
      description: "Receive tailored reports and strategic recommendations from our experts for continuous optimization and product refinement",
      details: "Get comprehensive analysis reports with actionable insights, trend identification, and strategic recommendations. Our team provides ongoing consultation to help you implement changes and optimize your product-market fit."
    }
  ];

  const userSteps = [
    {
      title: "Register & Vet",
      icon: Zap,
      color: "hsl(var(--primary))",
      description: "Join our community by registering and completing your profile for expert matching",
      details: "Complete a detailed profile showcasing your expertise and interests. Our team carefully vets each applicant to ensure we maintain a high-quality community of engaged AI enthusiasts and professionals."
    },
    {
      title: "Test & Contribute",
      icon: Users,
      color: "hsl(var(--primary))",
      description: "Receive invitations from our team to test and provide meaningful feedback on innovative AI solutions",
      details: "Get personally selected by our experts to participate in exclusive testing opportunities. Provide structured feedback through our guided assessment framework designed to capture valuable insights for founders."
    },
    {
      title: "Earn & Redeem",
      icon: Gift,
      color: "hsl(var(--primary))",
      description: "Collect points and unlock exclusive rewards",
      details: "Earn points for quality feedback, consistent participation, and community engagement. Redeem rewards including early access to premium AI tools, tech merchandise, and exclusive events."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-site-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              How <span className="gradient-text">Usergy Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <div className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <Rocket className="h-6 w-6" />
                  <span>How We Partner with Founders</span>
                </div>
              </div>

              <div className="space-y-6">
                {founderSteps.map((step, index) => (
                  <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-102 ${
                    isVisible ? 'animate-slide-up' : ''
                  }`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div 
                      className="p-6 cursor-pointer relative group"
                      onClick={() => toggleStep(index)}
                    >
                      {/* Progress indicator line */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ color: step.color }}></div>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                        <div className="text-muted-foreground flex-shrink-0 transition-transform duration-300">
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
                        <p className="text-muted-foreground leading-relaxed text-sm">{step.details}</p>
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
                <div className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <Users className="h-6 w-6" />
                  <span>For AI Enthusiasts</span>
                </div>
              </div>

              <div className="space-y-6">
                {userSteps.map((step, index) => (
                  <div key={index + 100} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-102 ${
                    isVisible ? 'animate-slide-up' : ''
                  }`} style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                    <div 
                      className="p-6 cursor-pointer relative group"
                      onClick={() => toggleStep(index + 100)}
                    >
                      {/* Progress indicator line */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ color: step.color }}></div>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
                        <p className="text-muted-foreground leading-relaxed text-sm">{step.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action - Updated with single button */}
            <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="brand-gradient text-primary-foreground rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Journey?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of innovators already building the future with Usergy</p>
              <div className="flex justify-center">
                <button 
                  onClick={handleCalendlyRedirect}
                  className="btn-primary font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg flex items-center space-x-3 hover:scale-105 transform"
                >
                  <Phone className="h-5 w-5" />
                  <span>Book Your Strategy Call</span>
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
