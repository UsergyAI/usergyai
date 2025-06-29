
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Users, Megaphone, Zap, Brain, Network, Target } from 'lucide-react';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [pulseCenter, setPulseCenter] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger connection animation after section becomes visible
          setTimeout(() => {
            setAnimationComplete(true);
            setPulseCenter(true);
          }, 1000);
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

          {/* Enhanced Interactive Diagram */}
          <div className={`relative max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Connection Lines Layer - Bottom Layer (z-index: 0) */}
              <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <svg className="w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FED766" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity="1" />
                      <stop offset="50%" stopColor="#FED766" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF6B6B" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="strongGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {nodes.map((node, index) => {
                    const angle = (index * 120 - 90) * (Math.PI / 180);
                    const startX = 200;
                    const startY = 200;
                    const endX = 200 + Math.cos(angle) * 120;
                    const endY = 200 + Math.sin(angle) * 120;
                    
                    return (
                      <g key={node.id}>
                        {/* Main connection line */}
                        <line
                          x1={startX}
                          y1={startY}
                          x2={endX}
                          y2={endY}
                          stroke={activeNode === node.id ? node.color : "url(#flowGradient)"}
                          strokeWidth={activeNode === node.id ? "5" : "3"}
                          strokeDasharray="12,6"
                          filter={activeNode === node.id ? "url(#strongGlow)" : "url(#glow)"}
                          className={`transition-all duration-500 ${
                            activeNode === node.id ? 'opacity-100' : animationComplete ? 'opacity-80' : 'opacity-0'
                          }`}
                          style={{
                            animation: animationComplete 
                              ? activeNode === node.id 
                                ? 'dashFlow 0.8s linear infinite, connectionPulse 2s ease-in-out infinite' 
                                : 'dashFlow 2.5s linear infinite'
                              : 'none',
                            animationDelay: `${index * 0.3}s`
                          }}
                        />
                        
                        {/* Pulse waves on active connection */}
                        {activeNode === node.id && animationComplete && (
                          <>
                            <line
                              x1={startX}
                              y1={startY}
                              x2={endX}
                              y2={endY}
                              stroke="url(#pulseGradient)"
                              strokeWidth="8"
                              strokeOpacity="0.4"
                              className="animate-pulse"
                              filter="url(#strongGlow)"
                            />
                            <line
                              x1={startX}
                              y1={startY}
                              x2={endX}
                              y2={endY}
                              stroke={node.color}
                              strokeWidth="2"
                              strokeOpacity="0.8"
                              strokeDasharray="4,2"
                              style={{
                                animation: 'dashFlow 0.4s linear infinite reverse'
                              }}
                            />
                          </>
                        )}
                        
                        {/* Enhanced data flow particles */}
                        {animationComplete && (
                          <>
                            <circle
                              cx={startX + Math.cos(angle) * 30}
                              cy={startY + Math.sin(angle) * 30}
                              r={activeNode === node.id ? "4" : "3"}
                              fill={node.color}
                              className="opacity-90"
                              filter="url(#glow)"
                              style={{
                                animation: `flowParticle 1.8s ease-in-out infinite`,
                                animationDelay: `${index * 0.4}s`
                              }}
                            />
                            <circle
                              cx={startX + Math.cos(angle) * 70}
                              cy={startY + Math.sin(angle) * 70}
                              r={activeNode === node.id ? "3" : "2"}
                              fill={node.color}
                              className="opacity-70"
                              style={{
                                animation: `flowParticle 1.8s ease-in-out infinite`,
                                animationDelay: `${index * 0.4 + 0.6}s`
                              }}
                            />
                            <circle
                              cx={startX + Math.cos(angle) * 100}
                              cy={startY + Math.sin(angle) * 100}
                              r="2"
                              fill={node.color}
                              className="opacity-50"
                              style={{
                                animation: `flowParticle 1.8s ease-in-out infinite`,
                                animationDelay: `${index * 0.4 + 1.2}s`
                              }}
                            />
                          </>
                        )}
                      </g>
                    );
                  })}
                  
                  {/* Central energy rings - behind the central node */}
                  {pulseCenter && (
                    <>
                      <circle
                        cx="200"
                        cy="200"
                        r="80"
                        fill="none"
                        stroke="url(#flowGradient)"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeDasharray="8,4"
                        style={{
                          animation: 'dashFlow 3s linear infinite, expandRing 4s ease-in-out infinite'
                        }}
                      />
                      <circle
                        cx="200"
                        cy="200"
                        r="100"
                        fill="none"
                        stroke="url(#flowGradient)"
                        strokeWidth="1"
                        strokeOpacity="0.2"
                        strokeDasharray="6,6"
                        style={{
                          animation: 'dashFlow 4s linear infinite reverse, expandRing 5s ease-in-out infinite'
                        }}
                      />
                    </>
                  )}
                </svg>
              </div>

              {/* Central Methodology Node - Middle Layer (z-index: 50) */}
              <div 
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                  animationComplete ? 'animate-pulse-glow scale-110' : 'scale-100'
                } ${
                  activeNode ? 'scale-125' : ''
                }`} 
                style={{ zIndex: 50 }}
              >
                <div className={`bg-gradient-to-br from-usergy-gold via-yellow-400 to-usergy-gold rounded-full w-32 h-32 flex items-center justify-center transition-all duration-500 ${
                  pulseCenter ? 'shadow-2xl' : 'shadow-lg'
                }`} style={{
                  boxShadow: activeNode 
                    ? `0 0 60px #FED76680, 0 0 30px #FED76640, 0 0 15px #FED76620` 
                    : `0 0 40px #FED76660, 0 0 20px #FED76630`
                }}>
                  <div className="text-center relative">
                    <Zap className={`h-8 w-8 text-white mx-auto mb-1 transition-all duration-300 ${
                      activeNode ? 'scale-125' : ''
                    }`} />
                    <div className="text-xs font-black text-white">OUR CORE METHODOLOGY</div>
                    {/* Central pulse effect */}
                    {pulseCenter && (
                      <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Outer Node Elements - Top Layer (z-index: 100) */}
              {nodes.map((node, index) => {
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                
                return (
                  <div
                    key={node.id}
                    className={`absolute w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 shadow-xl ${
                      animationComplete ? 'scale-100 opacity-100' : 'scale-75 opacity-60'
                    } ${
                      activeNode === node.id ? 'scale-125' : 'hover:scale-115'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 56px)`,
                      top: `calc(50% + ${y}px - 56px)`,
                      backgroundColor: node.color,
                      boxShadow: activeNode === node.id 
                        ? `0 0 50px ${node.color}90, 0 0 25px ${node.color}60, 0 0 12px ${node.color}40` 
                        : `0 0 25px ${node.color}50, 0 0 12px ${node.color}30`,
                      animationDelay: `${index * 0.2}s`,
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
                      {/* Node pulse effect */}
                      {activeNode === node.id && (
                        <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-ping"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Node Descriptions */}
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

      <style>{`
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -36;
          }
        }
        
        @keyframes flowParticle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes connectionPulse {
          0%, 100% {
            stroke-width: 5;
            opacity: 1;
          }
          50% {
            stroke-width: 7;
            opacity: 0.8;
          }
        }
        
        @keyframes expandRing {
          0%, 100% {
            r: 80;
            opacity: 0.3;
          }
          50% {
            r: 95;
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;
