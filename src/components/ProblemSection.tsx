
import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, Users, Zap, ExternalLink } from 'lucide-react';

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
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

          {/* Central Statistic with enhanced emotional impact */}
          <div className={`relative mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative max-w-2xl mx-auto">
              {/* Enhanced circular design with multiple gradient layers */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-orange-400 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse scale-110"></div>
                
                {/* Main circular container */}
                <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full p-16 shadow-2xl">
                  {/* Inner circle with statistic */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-12 border border-white/20">
                    <div className="text-center">
                      <div className="text-7xl lg:text-8xl font-black text-white mb-4 drop-shadow-lg">
                        42%
                      </div>
                      <p className="text-lg font-bold text-white/90 mb-2 leading-tight">
                        of AI startups fail within their first 2 years
                      </p>
                      <p className="text-base font-semibold text-white/80 mb-4">
                        due to poor market traction
                      </p>
                      
                      {/* Forbes Source Link */}
                      <a 
                        href="https://www.forbes.com/councils/forbestechcouncil/2023/05/02/why-it-startups-fail-reasons-trends-and-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors duration-300 underline decoration-white/50 hover:decoration-white"
                      >
                        <span className="mr-1">Source: Forbes Tech Council</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating warning icons around the statistic */}
              <AlertTriangle className="absolute -top-6 -left-6 h-10 w-10 text-red-500 animate-float opacity-80" style={{ animationDelay: '0s' }} />
              <TrendingDown className="absolute -bottom-6 -right-6 h-10 w-10 text-orange-500 animate-float opacity-80" style={{ animationDelay: '1s' }} />
              <AlertTriangle className="absolute -top-6 -right-6 h-10 w-10 text-red-400 animate-float opacity-80" style={{ animationDelay: '2s' }} />
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
