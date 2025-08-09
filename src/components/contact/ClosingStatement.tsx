
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const ClosingStatement = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Let's Build Something
              </h2>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '-1s' }}></div>
            </div>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-primary-gradient mb-8">
              Amazing Together!
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your AI product deserves undeniable traction. Partner with Usergy to transform your vision into market-leading success.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Strategic Growth</h3>
              <p className="text-muted-foreground leading-relaxed">Data-driven strategies that deliver measurable results and sustainable growth</p>
            </div>

            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Rapid Execution</h3>
              <p className="text-muted-foreground leading-relaxed">Fast implementation with immediate impact and measurable outcomes</p>
            </div>

            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Premium Support</h3>
              <p className="text-muted-foreground leading-relaxed">Dedicated experts committed to your success every step of the way</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-12 border-2 border-gray-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-usergy-dark mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Choose your preferred way to connect with our team. We're here to help you achieve undeniable traction.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={handleCalendlyRedirect}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-coral text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                onClick={scrollToForm}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Fill Contact Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                🔒 Trusted by AI startups worldwide • Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingStatement;
