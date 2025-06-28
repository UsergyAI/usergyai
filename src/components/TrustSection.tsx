
import React, { useEffect, useRef, useState } from 'react';

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    campaigns: 0,
    enthusiasts: 0,
    quality: 0,
    points: 0
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const kpis = [
    { key: 'campaigns', end: 1200, label: 'Campaigns Launched', color: '#4ECDC4', suffix: '+' },
    { key: 'enthusiasts', end: 75000, label: 'Engaged AI Enthusiasts', color: '#FF6B6B', suffix: '+' },
    { key: 'quality', end: 92, label: 'Average Feedback Quality Score', color: '#45B7D1', suffix: '%' },
    { key: 'points', end: 500, label: 'Total Points Redeemed (K)', color: '#FED766', suffix: 'K+' }
  ];

  const testimonials = [
    {
      quote: "Usergy delivered the targeted users and honest insights we needed to pivot effectively. Absolutely indispensable for our pre-launch.",
      author: "Dr. Anya Sharma",
      title: "CEO, Synthetica AI",
      type: "founder"
    },
    {
      quote: "Being an early tester on Usergy is addicting. I've tried future-defining AI and earned great rewards. It's truly a win-win!",
      author: "Mark T.",
      title: "Elite AI Scout",
      type: "user"
    },
    {
      quote: "The quality of feedback we received was exceptional. Our users helped us identify critical UX issues before our public launch.",
      author: "Sarah Chen",
      title: "CTO, Neural Labs",
      type: "founder"
    },
    {
      quote: "I've discovered amazing AI tools months before they hit the market. The community aspect makes it even more valuable.",
      author: "Alex Rodriguez",
      title: "AI Explorer, Level 5",
      type: "user"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counters
          kpis.forEach((kpi) => {
            let start = 0;
            const duration = 2000;
            const increment = kpi.end / (duration / 16);

            const counter = setInterval(() => {
              start += increment;
              if (start >= kpi.end) {
                setCounters(prev => ({ ...prev, [kpi.key]: kpi.end }));
                clearInterval(counter);
              } else {
                setCounters(prev => ({ ...prev, [kpi.key]: Math.floor(start) }));
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Trusted by Visionaries, 
              <span className="gradient-text"> Fueled by a Thriving Community</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our numbers speak volumes. Join the growing movement transforming AI launches.
            </p>
          </div>

          {/* KPI Counters */}
          <div className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {kpis.map((kpi, index) => (
              <div key={kpi.key} className="text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: kpi.color }}
                >
                  <span className="text-3xl font-black text-white">
                    {kpi.key === 'campaigns' ? '📊' : 
                     kpi.key === 'enthusiasts' ? '👥' : 
                     kpi.key === 'quality' ? '⭐' : '🎁'}
                  </span>
                </div>
                <div 
                  className="text-4xl lg:text-5xl font-black mb-2 animate-pulse-glow"
                  style={{ color: kpi.color }}
                >
                  {counters[kpi.key as keyof typeof counters].toLocaleString()}{kpi.suffix}
                </div>
                <div className="text-lg font-semibold text-usergy-dark">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <div className={`bg-white rounded-2xl p-8 shadow-xl mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 text-center px-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-3xl mb-6">💭</div>
                      <blockquote className="text-2xl lg:text-3xl font-semibold text-usergy-dark mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            testimonial.type === 'founder' ? 'bg-usergy-turquoise' : 'bg-usergy-coral'
                          }`}
                        >
                          {testimonial.type === 'founder' ? '🚀' : '🎮'}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-usergy-dark">{testimonial.author}</div>
                          <div className="text-gray-600">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-usergy-turquoise' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Security Assurance */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-3 text-gray-600">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔒</span>
              </div>
              <span className="font-semibold">Your Data is Secure & Private. Built with Trust & Compliance.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
