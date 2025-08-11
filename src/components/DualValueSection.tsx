
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad2, User, TrendingUp, Target, Lightbulb, Search, Gift, Zap } from 'lucide-react';

const DualValueSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUserSignupNavigation = () => {
    navigate('/user-signup');
  };

  return (
    <section id="for-founders" className="py-20 bg-site-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              The Dual Value Proposition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're building the next breakthrough AI tool or seeking to explore cutting-edge technology, 
              Usergy creates reciprocal value that benefits everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Minimal Connection Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="relative">
                {/* Simple connecting line */}
                <div className="w-24 h-0.5 bg-primary"></div>
                
                {/* Minimal icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-lg border-2 border-border">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Founders Card */}
            <div 
              className={`relative bg-card rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl min-h-[600px] flex flex-col ${
                hoveredCard === 'founders' ? 'scale-105 ring-2 ring-primary/40' : ''
              }`}
              onMouseEnter={() => setHoveredCard('founders')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-muted rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">
                    For AI Startup Founders
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-6 leading-tight">
                  Transform Innovation into Undeniable Impact
                </h4>

                {/* Benefits List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Acquire: Your first 100-1,000 'true believers' – not just users",
                    "Validate: Gain honest, structured, and immediately actionable product feedback",
                    "Cultivate: Build an early, engaged, and loyal user community",
                    "Amplify: Generate authentic, high-impact social media buzz and visibility",
                    "Accelerate: Speed up your journey to perfect product-market fit"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Illustration */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center space-x-4 p-6 bg-muted rounded-xl">
                    <User className="h-10 w-10 text-primary" />
                    <div className="text-2xl">→</div>
                    <TrendingUp className="h-10 w-10 text-primary" />
                    <div className="text-2xl">→</div>
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Founder → Growth → Success</p>
                </div>

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => scrollToSection('how-it-works')}
                  >
                    See Our Founder Process →
                  </Button>
                </div>
              </div>
            </div>

            {/* Users Card */}
            <div 
              className={`relative bg-card rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl min-h-[600px] flex flex-col ${
                hoveredCard === 'users' ? 'scale-105 ring-2 ring-primary/40' : ''
              }`}
              onMouseEnter={() => setHoveredCard('users')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-muted rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mr-4">
                    <Gamepad2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">
                    For AI Enthusiasts
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-6 leading-tight">
                  Explore. Contribute. Earn. Influence.
                </h4>

                {/* Benefits List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Discover: Get exclusive early access to groundbreaking, unreleased AI tools",
                    "Influence: Shape the future of AI by providing direct, valued insights",
                    "Earn: Get tangible rewards (gift cards, exclusive access) for every contribution",
                    "Connect: Join a vibrant, supportive community of tech explorers and innovators",
                    "Grow: Build your reputation and influence as a respected AI scout"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Illustration */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center space-x-4 p-6 bg-muted rounded-xl">
                    <Search className="h-10 w-10 text-primary" />
                    <div className="text-2xl">→</div>
                    <Lightbulb className="h-10 w-10 text-primary" />
                    <div className="text-2xl">→</div>
                    <Gift className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Explore → Contribute → Earn</p>
                </div>

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={handleUserSignupNavigation}
                  >
                    Join Our AI Enthusiast Community →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualValueSection;
