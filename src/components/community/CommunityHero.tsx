
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CommunityHero = () => {
  const handleJoinCommunity = () => {
    window.open('https://forms.gle/abcd123', '_blank');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden section-wash pt-28 md:pt-32">
      <AnimatedBackground particleCount={30} />

      {/* Enhanced Floating Bubbles - Hero Section Only */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float-enhanced opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-primary/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
        <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-primary/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
        <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-primary/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Join 1,000+ AI Explorers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight animate-fade-in">
            Discover Tomorrow's AI 
            <span className="block gradient-text mt-2">Before Everyone Else</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Join our exclusive community of AI enthusiasts. Test cutting-edge tools, earn rewards, and shape the future of artificial intelligence.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={handleJoinCommunity}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 animate-scale-in focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowRight className="mr-3 h-6 w-6" />
            Join AI Explorer Community
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium">Free to Join</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium">Exclusive Early Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium">Earn Real Rewards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
