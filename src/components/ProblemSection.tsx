
import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, Users, Zap, ExternalLink, X } from 'lucide-react';

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
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-4">
              The Harsh Truth: Why Groundbreaking AI Products 
              <span className="text-red-600 block mt-2">Disappear</span>
            </h2>
          </div>

          {/* Main Content - Centered Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Statistic Section */}
            <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="inline-block relative">
                {/* Danger indicator */}
                <div className="absolute -top-4 -right-4 animate-pulse">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-500">
                  <div className="flex items-center justify-center mb-4">
                    <X className="h-8 w-8 text-red-500 mr-3" />
                    <div className="text-6xl font-black text-red-600">42%</div>
                  </div>
                  
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    of AI startups fail within 2 years
                  </p>
                  <p className="text-gray-600 mb-4">
                    due to poor market traction
                  </p>
                  
                  {/* Source Link */}
                  <a 
                    href="https://www.forbes.com/councils/forbestechcouncil/2023/05/02/why-it-startups-fail-reasons-trends-and-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-usergy-skyblue transition-colors duration-300"
                  >
                    <span className="mr-1">Source: Forbes Tech Council</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Problem Points Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Users,
                  title: "No Early Adopters",
                  description: "Brilliant AI tools launch to empty audiences, struggling to find their first 100 users.",
                  color: "text-red-600"
                },
                {
                  icon: TrendingDown,
                  title: "Feedback Vacuum", 
                  description: "Without real user insights, even advanced AI solutions miss actual market needs.",
                  color: "text-orange-600"
                },
                {
                  icon: Zap,
                  title: "Zero Buzz",
                  description: "Game-changing innovations remain invisible, lacking social proof needed for momentum.",
                  color: "text-red-700"
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${problem.color}`}>
                    <problem.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-usergy-dark mb-3">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom Impact Statement */}
            <div className={`text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-2xl font-bold text-gray-800 leading-tight">
                The Cost of Invisibility is{' '}
                <span className="text-red-600 underline decoration-red-300 decoration-4">Extinction</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
