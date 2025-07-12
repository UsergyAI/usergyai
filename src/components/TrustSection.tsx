
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Target, TrendingUp, Award } from 'lucide-react';

const TrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    campaigns: 0,
    users: 0,
    feedback: 0,
    revenue: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Usergy's expert team transformed our AI product launch. Their strategic approach to user engagement delivered insights we never could have gathered on our own.",
      author: "Sarah Chen",
      role: "AI Startup Founder",
      company: "VisionAI",
      rating: 5
    },
    {
      quote: "The quality of feedback we received through Usergy's managed campaigns was exceptional. Their consultants know exactly how to extract valuable insights from users.",
      author: "Marcus Rodriguez",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5
    },
    {
      quote: "Working with Usergy felt like having a seasoned product team extension. They delivered actionable insights that directly shaped our product roadmap.",
      author: "Elena Kowalski",
      role: "CTO",
      company: "DataSphere",
      rating: 5
    },
    {
      quote: "Usergy's community activation strategies exceeded our expectations. They connected us with the right users at the perfect time in our development cycle.",
      author: "James Wu",
      role: "Founder",
      company: "AICore",
      rating: 5
    }
  ];

  const kpis = [
    {
      icon: Target,
      number: 1200,
      suffix: '+',
      label: 'Campaigns Launched',
      color: '#4ECDC4'
    },
    {
      icon: Users,
      number: 75000,
      suffix: '+',
      label: 'AI Users',
      color: '#45B7D1'
    },
    {
      icon: Award,
      number: 92,
      suffix: '%',
      label: 'Feedback Quality Score',
      color: '#FF6B6B'
    },
    {
      icon: TrendingUp,
      number: 500,
      suffix: 'K+',
      label: 'Revenue Generated',
      color: '#96CEB4'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
            
            // Start count-up animation for each number
            const animateNumber = (targetValue: number, key: keyof typeof animatedNumbers) => {
              let start = 0;
              const duration = 2000;
              const increment = targetValue / (duration / 16);

              const counter = setInterval(() => {
                start += increment;
                if (start >= targetValue) {
                  setAnimatedNumbers(prev => ({ ...prev, [key]: targetValue }));
                  clearInterval(counter);
                } else {
                  setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
                }
              }, 16);
            };

            // Animate each KPI number
            animateNumber(1200, 'campaigns');
            animateNumber(75000, 'users');
            animateNumber(92, 'feedback');
            animateNumber(500, 'revenue');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-4 sm:mb-6 px-2">
              Trusted by <span className="gradient-text">Visionary Founders</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Join the growing community of AI innovators who trust Usergy's expert guidance to accelerate their product success and market traction.
            </p>
          </div>

          {/* KPI Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: kpi.color + '20' }}
                >
                  <kpi.icon 
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    style={{ color: kpi.color }}
                  />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-usergy-dark mb-2">
                  {index === 0 ? animatedNumbers.campaigns.toLocaleString() :
                   index === 1 ? animatedNumbers.users.toLocaleString() :
                   index === 2 ? animatedNumbers.feedback :
                   animatedNumbers.revenue.toLocaleString()}{kpi.suffix}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className={`relative transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-full blur-3xl"></div>
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mb-6 sm:mb-8 leading-relaxed font-medium px-2">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-bold text-usergy-dark text-base sm:text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6 sm:mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-usergy-turquoise hover:text-white transition-all duration-300 group"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-usergy-turquoise' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-usergy-turquoise hover:text-white transition-all duration-300 group"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
