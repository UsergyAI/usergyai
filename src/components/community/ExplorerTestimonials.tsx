
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExplorerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Usergy has given me access to AI tools I never would have discovered otherwise. The rewards are great, but the real value is being part of the innovation process.",
      name: "Sarah Chen",
      title: "AI Explorer, San Francisco"
    },
    {
      quote: "I love testing new AI products before they launch. My feedback has directly influenced features in several tools I now use daily. It's incredibly rewarding!",
      name: "Marcus Johnson",
      title: "Tech Enthusiast, Austin"
    },
    {
      quote: "The community aspect is fantastic. I've connected with other AI enthusiasts and learned so much. Plus, the gift cards are a nice bonus for doing what I love.",
      name: "Elena Rodriguez",
      title: "AI Researcher, Boston"
    },
    {
      quote: "What started as curiosity about new AI tools became a genuine way to impact the industry. The founders really listen to our feedback.",
      name: "David Kim",
      title: "Software Developer, Seattle"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 section-wash">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Hear From Our Explorers: Real Impact, Real Rewards
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="text-6xl text-primary mb-6">"</div>
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="border-b-2 border-primary w-16 mx-auto mb-6"></div>
              <h4 className="text-lg font-bold text-foreground">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentTestimonial].title}
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorerTestimonials;
