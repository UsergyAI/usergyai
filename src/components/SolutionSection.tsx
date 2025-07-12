
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Users, Megaphone, Zap, Brain, Network, Target, ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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

  const nodes = [
    {
      id: 1,
      title: "Consulting & Strategy",
      icon: MessageSquare,
      bgIcon: Brain,
      color: "#4ECDC4",
      description: "Our experts guide you through strategic planning and optimization",
      details: "Deep dive analysis, market positioning, and growth strategy development"
    },
    {
      id: 2,
      title: "Community Activation",
      icon: Users,
      bgIcon: Network,
      color: "#45B7D1",
      description: "We build and nurture passionate communities around your AI solution",
      details: "User engagement, feedback collection, and community management"
    },
    {
      id: 3,
      title: "Amplification & Buzz",
      icon: Megaphone,
      bgIcon: Target,
      color: "#FF6B6B",
      description: "Our team generates organic buzz and authentic testimonials",
      details: "Social media strategy, influencer outreach, and viral marketing"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2 className={`text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What We Do 
            <span className="gradient-text"> For You</span>
          </h2>

          <p className={`text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We deliver comprehensive AI traction consulting that integrates three critical pillars into one powerful, seamless process. 
            <span className="font-semibold text-usergy-dark">This is our proven methodology for real growth.</span>
          </p>

          {/* Interactive Methodology Center */}
          <div className={`relative max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Methodology Node with enhanced interactivity */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className={`bg-gradient-to-br from-usergy-gold via-yellow-400 to-usergy-gold rounded-full w-40 h-40 flex items-center justify-center shadow-2xl transition-all duration-500 ${
                  activeNode ? 'scale-110' : 'scale-100'
                }`} style={{
                  boxShadow: activeNode ? `0 0 60px #FED76680, 0 0 30px #FED76660` : `0 0 40px #FED76660, 0 0 20px #FED76630`
                }}>
                  <div className="text-center">
                    <Zap className={`h-10 w-10 text-white mx-auto mb-2 transition-transform duration-300 ${
                      activeNode ? 'scale-125' : ''
                    }`} />
                    <div className="text-xs font-black text-white leading-tight">OUR CORE<br/>METHODOLOGY</div>
                  </div>
                </div>
              </div>

              {/* Interactive Service Nodes */}
              {nodes.map((node, index) => {
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * 140;
                const y = Math.sin(angle) * 140;
                
                return (
                  <div
                    key={node.id}
                    className={`absolute w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 shadow-xl ${
                      activeNode === node.id ? 'scale-125 z-40' : 'hover:scale-110 z-30'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 64px)`,
                      top: `calc(50% + ${y}px - 64px)`,
                      backgroundColor: node.color,
                      boxShadow: activeNode === node.id 
                        ? `0 0 60px ${node.color}90, 0 0 30px ${node.color}60, 0 0 15px ${node.color}40` 
                        : `0 0 30px ${node.color}50, 0 0 15px ${node.color}30`,
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="relative">
                      <node.bgIcon className={`absolute inset-0 h-16 w-16 text-white/20 transform transition-all duration-300 ${
                        activeNode === node.id ? 'scale-200 rotate-12' : 'scale-175'
                      }`} />
                      <node.icon className={`h-10 w-10 text-white relative z-10 transition-transform duration-300 ${
                        activeNode === node.id ? 'scale-125' : ''
                      }`} />
                    </div>
                  </div>
                );
              })}

              {/* Enhanced dynamic connection lines */}
              {activeNode && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Flowing lines connecting active node to center */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FED766" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FED766" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FED766" stopOpacity="0" />
                        <animateTransform 
                          attributeName="gradientTransform"
                          type="translate"
                          values="-100 0;100 0;-100 0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </linearGradient>
                    </defs>
                    {nodes.map((node, index) => {
                      if (activeNode !== node.id) return null;
                      const angle = (index * 120 - 90) * (Math.PI / 180);
                      const x1 = 50 + Math.cos(angle) * 17.5;
                      const y1 = 50 + Math.sin(angle) * 17.5;
                      
                      return (
                        <line
                          key={node.id}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2="50%"
                          y2="50%"
                          stroke="url(#flowingGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Pulsing dots */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-usergy-gold rounded-full animate-ping"
                      style={{
                        left: `${45 + Math.cos(i * 60 * Math.PI / 180) * 25}%`,
                        top: `${45 + Math.sin(i * 60 * Math.PI / 180) * 25}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Service Descriptions */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {nodes.map((node, index) => (
                <div
                  key={node.id}
                  className={`text-center p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeNode === node.id 
                      ? 'bg-white shadow-2xl scale-105 transform border-2' 
                      : hoveredService === index
                      ? 'bg-gray-50 shadow-xl scale-102 transform'
                      : 'hover:bg-gray-50 hover:scale-102 hover:shadow-lg'
                  }`}
                  style={{ 
                    borderColor: activeNode === node.id ? node.color : 'transparent',
                    boxShadow: activeNode === node.id ? `0 0 30px ${node.color}30` : undefined
                  }}
                  onMouseEnter={() => {
                    setActiveNode(node.id);
                    setHoveredService(index);
                  }}
                  onMouseLeave={() => {
                    setActiveNode(null);
                    setHoveredService(null);
                  }}
                >
                  <div className={`transition-transform duration-300 mb-4 ${
                    activeNode === node.id ? 'scale-125' : ''
                  }`}>
                    <node.icon 
                      className="h-12 w-12 mx-auto" 
                      style={{ color: node.color }}
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300`} style={{ 
                    color: node.color 
                  }}>
                    {node.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{node.description}</p>
                  
                  {/* Expandable details */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeNode === node.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 italic">{node.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
