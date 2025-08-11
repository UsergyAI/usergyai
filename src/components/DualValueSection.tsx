
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, ArrowRight, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DualValueSection = () => {
  const navigate = useNavigate();

  const handleFounderCTA = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const handleUserCTA = () => {
    navigate('/community');
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Two Paths to AI Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're building the future or want to be part of it, Usergy connects visionaries 
            with passionate communities for mutual growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Founders Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-border hover:border-primary/40 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Building2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  For AI Founders
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Transform your AI vision into undeniable market traction with our proven three-pillar framework.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Get authentic feedback from engaged AI enthusiasts</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Build vibrant communities around your product</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Achieve viral social momentum and market recognition</span>
                </div>
              </div>

              <Button
                onClick={handleFounderCTA}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Free consultation • No commitment required
              </p>
            </CardContent>
          </Card>

          {/* Users Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-border hover:border-primary/40 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  For AI Enthusiasts
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Shape the future of AI by testing cutting-edge products before they launch while earning rewards.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Get exclusive early access to innovative AI tools</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Provide meaningful feedback that shapes products</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Earn rewards and build your reputation in AI</span>
                </div>
              </div>

              <Button
                onClick={handleUserCTA}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Join Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Free to join • Start earning immediately
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to be part of the AI revolution? Choose your path and let's grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleFounderCTA}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-xl"
            >
              I'm Building AI
            </Button>
            <Button
              onClick={handleUserCTA}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-xl"
            >
              I Love Testing AI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualValueSection;
