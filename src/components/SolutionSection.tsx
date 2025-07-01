
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Users, Megaphone, Zap, Brain, Network, Target } from 'lucide-react';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
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
      description: "Our experts guide you through strategic planning and optimization"
    },
    {
      id: 2,
      title: "Community Activation",
      icon: Users,
      bgIcon: Network,
      color: "#45B7D1",
      description: "We build and nurture passionate communities around your AI solution"
    },
    {
      id: 3,
      title: "Amplification & Buzz",
      icon: Megaphone,
      bgIcon: Target,
      color: "#FF6B6B",
      description: "Our team generates organic buzz and authentic testimonials"
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

          {/* Simplified Diagram without animations */}
          <div className={`relative max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Methodology Node */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="bg-gradient-to-br from-usergy-gold via-yellow-400 to-usergy-gold rounded-full w-32 h-32 flex items-center justify-center shadow-2xl" style={{
                  boxShadow: `0 0 40px #FED76660, 0 0 20px #FED76630`
                }}>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-white mx-auto mb-1" />
                    <div className="text-xs font-black text-white">OUR CORE METHODOLOGY</div>
                  </div>
                </div>
              </div>

              {/* Outer Node Elements */}
              {nodes.map((node, index) => {
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                
                return (
                  <div
                    key={node.id}
                    className={`absolute w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 shadow-xl hover:scale-115`}
                    style={{
                      left: `calc(50% + ${x}px - 56px)`,
                      top: `calc(50% + ${y}px - 56px)`,
                      backgroundColor: node.color,
                      boxShadow: activeNode === node.id 
                        ? `0 0 50px ${node.color}90, 0 0 25px ${node.color}60, 0 0 12px ${node.color}40` 
                        : `0 0 25px ${node.color}50, 0 0 12px ${node.color}30`,
                      zIndex: 100
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="relative">
                      <node.bgIcon className={`absolute inset-0 h-12 w-12 text-white/20 transform transition-all duration-300 ${
                        activeNode === node.id ? 'scale-175 rotate-12' : 'scale-150'
                      }`} />
                      <node.icon className={`h-8 w-8 text-white relative z-10 transition-transform duration-300 ${
                        activeNode === node.id ? 'scale-125' : ''
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Node Descriptions */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`text-center p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeNode === node.id 
                      ? 'bg-gray-50 shadow-xl scale-105 transform' 
                      : 'hover:bg-gray-50 hover:scale-102 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className={`transition-transform duration-300 mb-3 ${
                    activeNode === node.id ? 'scale-125' : ''
                  }`}>
                    <node.icon 
                      className="h-10 w-10 mx-auto" 
                      style={{ color: node.color }}
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300`} style={{ 
                    color: node.color 
                  }}>
                    {node.title}
                  </h3>
                  <p className="text-gray-600">{node.description}</p>
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
