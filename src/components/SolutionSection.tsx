
import React, { useEffect, useRef, useState } from 'react';

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
      title: "Authentic Feedback",
      emoji: "💬",
      color: "#4ECDC4",
      description: "Real insights from engaged users who understand AI"
    },
    {
      id: 2,
      title: "Vibrant Community",
      emoji: "👥",
      color: "#45B7D1",
      description: "Build lasting connections with passionate advocates"
    },
    {
      id: 3,
      title: "Social Amplification",
      emoji: "📢",
      color: "#FF6B6B",
      description: "Generate organic buzz and authentic testimonials"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2 className={`text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Usergy: Your Integrated Engine for 
            <span className="gradient-text"> Undeniable Momentum</span>
          </h2>

          <p className={`text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We move beyond basic feedback. Usergy is your complete 'Traction in a Box' solution, 
            integrating three critical pillars into one powerful, seamless loop. 
            <span className="font-semibold text-usergy-dark">This is the alchemy of real growth.</span>
          </p>

          {/* Interactive Diagram */}
          <div className={`relative max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Momentum Node */}
              <div className="absolute z-10 bg-gradient-to-br from-usergy-gold to-yellow-400 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl animate-pulse-glow">
                <div className="text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <div className="text-sm font-black text-white">MOMENTUM</div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {nodes.map((node, index) => {
                  const angle = (index * 120 - 90) * (Math.PI / 180);
                  const startX = 160;
                  const startY = 160;
                  const endX = 160 + Math.cos(angle) * 120;
                  const endY = 160 + Math.sin(angle) * 120;
                  
                  return (
                    <line
                      key={node.id}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={node.color}
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className={`transition-all duration-500 ${
                        activeNode === node.id ? 'opacity-100' : 'opacity-50'
                      }`}
                      style={{
                        animation: activeNode === node.id ? 'dash 1s linear infinite' : 'none'
                      }}
                    />
                  );
                })}
              </svg>

              {/* Node Elements */}
              {nodes.map((node, index) => {
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                
                return (
                  <div
                    key={node.id}
                    className="absolute w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 shadow-xl"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                      backgroundColor: node.color,
                      boxShadow: activeNode === node.id ? `0 0 30px ${node.color}80` : `0 0 15px ${node.color}40`
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <span className="text-2xl">{node.emoji}</span>
                  </div>
                );
              })}
            </div>

            {/* Node Descriptions */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`text-center p-6 rounded-xl transition-all duration-300 ${
                    activeNode === node.id ? 'bg-gray-50 shadow-lg scale-105' : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="text-3xl mb-3">{node.emoji}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: node.color }}>
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
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;
