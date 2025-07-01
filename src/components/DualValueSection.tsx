
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad2, Zap, User, TrendingUp, Target, Lightbulb, Search, Gift } from 'lucide-react';

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
    <section id="for-founders" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-usergy-dark mb-6">
              The Dual Value Proposition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building the next breakthrough AI tool or seeking to explore cutting-edge technology, 
              Usergy creates reciprocal value that benefits everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Connection Flow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="w-16 h-16 bg-gradient-to-br from-usergy-turquoise to-usergy-coral rounded-full flex items-center justify-center animate-pulse-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-usergy-turquoise to-usergy-coral opacity-50 animate-pulse"></div>
            </div>

            {/* Founders Card */}
            <div 
              className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl min-h-[600px] flex flex-col ${
                hoveredCard === 'founders' ? 'scale-105 shadow-usergy-turquoise/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard('founders')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-usergy-skyblue">
                    For AI Startup Founders
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-usergy-dark mb-6 leading-tight">
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
                      <div className="w-2 h-2 bg-usergy-turquoise rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Illustration */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-usergy-turquoise/20 to-usergy-skyblue/20 rounded-xl">
                    <User className="h-10 w-10 text-usergy-turquoise" />
                    <div className="text-2xl">→</div>
                    <TrendingUp className="h-10 w-10 text-usergy-skyblue" />
                    <div className="text-2xl">→</div>
                    <Target className="h-10 w-10 text-usergy-turquoise" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Founder → Growth → Success</p>
                </div>

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => scrollToSection('how-it-works')}
                  >
                    See Our Founder Process →
                  </Button>
                </div>
              </div>
            </div>

            {/* Users Card */}
            <div 
              className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl min-h-[600px] flex flex-col ${
                hoveredCard === 'users' ? 'scale-105 shadow-usergy-coral/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard('users')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-usergy-coral/10 to-pink-100/50 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-usergy-coral to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-usergy-coral">
                    For AI Enthusiasts
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-usergy-dark mb-6 leading-tight">
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
                      <div className="w-2 h-2 bg-usergy-coral rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Illustration */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-usergy-coral/20 to-pink-100/50 rounded-xl">
                    <Search className="h-10 w-10 text-usergy-coral" />
                    <div className="text-2xl">→</div>
                    <Lightbulb className="h-10 w-10 text-pink-500" />
                    <div className="text-2xl">→</div>
                    <Gift className="h-10 w-10 text-usergy-coral" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Explore → Contribute → Earn</p>
                </div>

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-usergy-coral hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
