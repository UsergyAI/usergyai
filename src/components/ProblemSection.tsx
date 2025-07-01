
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Compact Header with Impact */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl lg:text-4xl font-black text-usergy-dark">
                The Harsh Truth: Why Groundbreaking AI Products 
                <span className="text-red-600 block lg:inline"> Disappear</span>
              </h2>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Statistic with Emotional Impact */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative">
                {/* Danger-themed circular design */}
                <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-full p-8 shadow-2xl border-4 border-red-300">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white mb-3 drop-shadow-lg">
                      42%
                    </div>
                    <p className="text-lg font-bold text-white/95 mb-2">
                      of AI startups fail within 2 years
                    </p>
                    <p className="text-sm font-medium text-white/80 mb-4">
                      due to poor market traction
                    </p>
                    
                    {/* Source Link */}
                    <a 
                      href="https://www.forbes.com/councils/forbestechcouncil/2023/05/02/why-it-startups-fail-reasons-trends-and-solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-white/70 hover:text-white transition-colors duration-300 underline decoration-white/50 hover:decoration-white"
                    >
                      <span className="mr-1">Forbes Tech Council</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Floating warning elements */}
                <TrendingDown className="absolute -top-3 -left-3 h-8 w-8 text-red-500 animate-pulse" />
                <AlertTriangle className="absolute -bottom-3 -right-3 h-8 w-8 text-orange-500 animate-pulse" />
              </div>

              {/* Emotional Impact Text */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-gray-700 leading-tight">
                  <span className="text-red-600 font-bold">Every day</span> your revolutionary AI solution remains unknown 
                  is a day closer to becoming <span className="text-red-600 font-bold">another statistic</span>.
                </p>
              </div>
            </div>

            {/* Right: Problem Points */}
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "No Early Adopters",
                  description: "Brilliant AI tools launch to empty audiences, struggling to find their first 100 users.",
                  color: "bg-red-100 text-red-600 border-red-200"
                },
                {
                  icon: TrendingDown,
                  title: "Feedback Vacuum", 
                  description: "Without real user insights, even advanced AI solutions miss actual market needs.",
                  color: "bg-orange-100 text-orange-600 border-orange-200"
                },
                {
                  icon: Zap,
                  title: "Zero Buzz",
                  description: "Game-changing innovations remain invisible, lacking social proof needed for momentum.",
                  color: "bg-red-100 text-red-700 border-red-200"
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border transition-all duration-1000 hover:shadow-lg hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${problem.color}`}>
                    <problem.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-usergy-dark mb-1">{problem.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Impact Statement */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full px-8 py-4 shadow-xl">
              <p className="text-lg font-bold">
                The Cost of Invisibility is <span className="underline">Extinction</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
