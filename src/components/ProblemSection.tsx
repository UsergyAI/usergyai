
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent w-20"></div>
              <AlertTriangle className="h-6 w-6 text-red-500 mx-4" />
              <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent w-20"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-usergy-dark mb-6 leading-tight">
              The Harsh Truth: Why Groundbreaking AI Products{' '}
              <span className="text-red-600 relative">
                Disappear
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100 -skew-y-1 -z-10"></div>
              </span>
            </h2>
          </div>

          {/* Stats and Problems Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Main Statistic */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="text-7xl font-black text-red-600">42%</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                      of AI startups fail within 2 years
                    </h3>
                    <p className="text-gray-600 text-center mb-6 text-lg">
                      due to poor market traction
                    </p>
                    
                    <div className="flex justify-center">
                      <a 
                        href="https://www.forbes.com/councils/forbestechcouncil/2023/05/02/why-it-startups-fail-reasons-trends-and-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-usergy-skyblue transition-colors duration-300 group"
                      >
                        <span className="mr-2 border-b border-transparent group-hover:border-current">Source: Forbes Tech Council</span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Problem Points */}
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "No Early Adopters",
                  description: "Brilliant AI tools launch to empty audiences, struggling to find their first 100 users.",
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: TrendingDown,
                  title: "Feedback Vacuum", 
                  description: "Without real user insights, even advanced AI solutions miss actual market needs.",
                  color: "text-orange-600",
                  bgColor: "bg-orange-50"
                },
                {
                  icon: Zap,
                  title: "Zero Buzz",
                  description: "Game-changing innovations remain invisible, lacking social proof needed for momentum.",
                  color: "text-red-700",
                  bgColor: "bg-red-50"
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center flex-shrink-0 ${problem.color}`}>
                    <problem.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-usergy-dark mb-2">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Impact Statement */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                The Cost of Invisibility is{' '}
                <span className="text-red-600 relative">
                  Extinction
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-red-200 -skew-y-1"></div>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
