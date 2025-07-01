
import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, Users, Zap } from 'lucide-react';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-6">
              The Harsh Truth: Why Groundbreaking AI Products 
              <span className="text-red-600"> Disappear</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Despite revolutionary capabilities, most AI innovations fail to gain traction. 
              The graveyard of brilliant AI products is filled with solutions that could have changed the world.
            </p>
          </div>

          {/* Central Statistic with enhanced styling */}
          <div className={`relative mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative inline-flex items-center justify-center">
              {/* Enhanced gradient background with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-100 to-red-50 rounded-full transform scale-110 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-200/50 via-transparent to-orange-200/50 rounded-full transform scale-105"></div>
              
              {/* Main content container - no white background */}
              <div className="relative z-10 text-center py-12 px-16 rounded-full">
                <div className="text-6xl lg:text-7xl font-black text-red-600 mb-4 animate-pulse">
                  42%
                </div>
                <p className="text-lg font-semibold text-gray-700 max-w-xs leading-tight">
                  of AI startups fail within their first 2 years due to poor market traction
                </p>
                <div className="mt-4 text-sm text-gray-500 font-medium">
                  * CBInsights AI Startup Report 2024
                </div>
              </div>

              {/* Floating warning icons around the statistic */}
              <AlertTriangle className="absolute -top-4 -left-4 h-8 w-8 text-red-500 animate-float" style={{ animationDelay: '0s' }} />
              <TrendingDown className="absolute -bottom-4 -right-4 h-8 w-8 text-orange-500 animate-float" style={{ animationDelay: '1s' }} />
              <AlertTriangle className="absolute -top-4 -right-4 h-8 w-8 text-red-400 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Problem Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "No Early Adopters",
                description: "Brilliant AI tools launch to empty audiences, struggling to find their first 100 users who truly understand their value.",
                color: "#FF6B6B"
              },
              {
                icon: TrendingDown,
                title: "Feedback Vacuum", 
                description: "Without real user insights, even the most advanced AI solutions miss the mark on actual market needs and user pain points.",
                color: "#E67E22"
              },
              {
                icon: Zap,
                title: "Zero Buzz",
                description: "Game-changing AI innovations remain invisible, lacking the social proof and community excitement needed to gain momentum.",
                color: "#8E44AD"
              }
            ].map((problem, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 hover:shadow-xl hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ backgroundColor: problem.color }}
                >
                  <problem.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-usergy-dark mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">The Cost of Invisibility is Extinction</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Every day your revolutionary AI solution remains unknown is a day closer to becoming another statistic. 
                The window for AI market leadership is closing fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
