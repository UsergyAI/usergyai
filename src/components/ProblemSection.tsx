
import React, { useEffect, useRef, useState } from 'react';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count-up animation
          let start = 0;
          const end = 42;
          const duration = 2000;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCountUp(end);
              clearInterval(counter);
            } else {
              setCountUp(Math.floor(start));
            }
          }, 16);
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className={`text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            The Harsh Truth: Why Groundbreaking AI Products 
            <span className="text-usergy-coral"> Disappear</span>
          </h2>

          {/* Problem Description */}
          <p className={`text-xl text-gray-600 mb-16 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Every day, hundreds of brilliant AI tools launch into an already crowded space. 
            Despite incredible innovation, many struggle to gain initial users, gather actionable insights, 
            or build a supportive community. This leads to the silent killer of startups: 
            <span className="font-semibold text-usergy-dark"> market obscurity and product-market misfit</span>.
          </p>

          {/* Key Statistic */}
          <div className={`relative mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Animated Background Circle */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-usergy-coral/20 to-usergy-coral/10 rounded-full blur-xl animate-pulse"></div>
              
              {/* Main Statistic */}
              <div className="relative bg-white rounded-full p-12 shadow-2xl border-4 border-usergy-coral/20">
                <div className="text-8xl lg:text-9xl font-black text-usergy-coral mb-4 animate-pulse-glow">
                  {countUp}%
                </div>
                <div className="text-2xl font-bold text-usergy-dark max-w-xs mx-auto leading-tight">
                  of AI startups fail due to lack of market demand. 
                  <span className="block text-usergy-turquoise mt-2">We exist to change that.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className={`flex justify-center space-x-8 opacity-30 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Fading Product Icons */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className={`w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg opacity-60 transition-all duration-2000 delay-${i * 200}`}
                style={{
                  animation: `fadeOut 3s ease-in-out ${i * 0.5}s infinite alternate`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0.1; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
