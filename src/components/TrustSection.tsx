import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, Users, Star, Gift, Quote, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

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
    { key: 'campaigns', end: 1200, label: 'Campaigns Launched', color: '#4ECDC4', suffix: '+', icon: BarChart3 },
    { key: 'enthusiasts', end: 75000, label: 'Engaged AI Enthusiasts', color: '#FF6B6B', suffix: '+', icon: Users },
    { key: 'quality', end: 92, label: 'Average Feedback Quality Score', color: '#45B7D1', suffix: '%', icon: Star },
    { key: 'points', end: 500, label: 'Total Points Redeemed (K)', color: '#FED766', suffix: 'K+', icon: Gift }
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
          
          // Enhanced counter animations with staggered starts
          kpis.forEach((kpi, index) => {
            let start = 0;
            const duration = 2500;
            const delay = index * 200;
            
            setTimeout(() => {
              const increment = kpi.end / (duration / 16);
              
              const counter = setInterval(() => {
                start += increment * (1 + Math.random() * 0.1); // Add slight randomness
                if (start >= kpi.end) {
                  setCounters(prev => ({ ...prev, [kpi.key]: kpi.end }));
                  clearInterval(counter);
                } else {
                  setCounters(prev => ({ ...prev, [kpi.key]: Math.floor(start) }));
                }
              }, 16);
            }, delay);
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

  // Enhanced auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

          {/* Enhanced KPI Counters with icons */}
          <div className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {kpis.map((kpi, index) => (
              <div key={kpi.key} className="text-center group">
                <div 
                  className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 ${
                    isVisible ? 'animate-pulse-glow' : ''
                  }`}
                  style={{ 
                    backgroundColor: kpi.color,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <kpi.icon className="h-8 w-8 text-white" />
                </div>
                <div 
                  className={`text-4xl lg:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-105 ${
                    isVisible ? 'animate-pulse-glow' : ''
                  }`}
                  style={{ 
                    color: kpi.color,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {counters[kpi.key as keyof typeof counters].toLocaleString()}{kpi.suffix}
                </div>
                <div className="text-lg font-semibold text-usergy-dark">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Testimonials Carousel */}
          <div className={`bg-white rounded-2xl p-8 shadow-xl mb-12 relative transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-usergy-turquoise text-white flex items-center justify-center hover:bg-usergy-skyblue transition-colors duration-300 z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-usergy-turquoise text-white flex items-center justify-center hover:bg-usergy-skyblue transition-colors duration-300 z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 text-center px-8">
                    <div className="max-w-4xl mx-auto">
                      <Quote className="h-12 w-12 text-usergy-turquoise mx-auto mb-6 animate-bounce" />
                      <blockquote className="text-2xl lg:text-3xl font-semibold text-usergy-dark mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-110 ${
                            testimonial.type === 'founder' ? 'bg-usergy-turquoise' : 'bg-usergy-coral'
                          }`}
                        >
                          {testimonial.type === 'founder' ? 
                            <BarChart3 className="h-6 w-6" /> : 
                            <Users className="h-6 w-6" />
                          }
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

            {/* Enhanced Testimonial Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial 
                      ? 'bg-usergy-turquoise shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Security Assurance */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-3 text-gray-600 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Shield className="h-4 w-4 text-white" />
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
