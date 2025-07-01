
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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-usergy-turquoise/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-usergy-coral/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-3/4 left-1/6 w-32 h-32 bg-usergy-gold/10 rounded-full blur-xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6 leading-tight">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-usergy-turquoise via-usergy-skyblue to-usergy-coral">
                Amazing Together!
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your AI product deserves undeniable traction. Partner with Usergy to transform your vision into market-leading success.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-usergy-turquoise/5 to-usergy-skyblue/5 rounded-2xl p-6 border border-usergy-turquoise/10 hover:border-usergy-turquoise/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-2">Strategic Growth</h3>
              <p className="text-gray-600 text-sm">Data-driven strategies that deliver measurable results</p>
            </div>

            <div className="bg-gradient-to-br from-usergy-coral/5 to-usergy-gold/5 rounded-2xl p-6 border border-usergy-coral/10 hover:border-usergy-coral/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-usergy-coral to-usergy-gold flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-2">Rapid Execution</h3>
              <p className="text-gray-600 text-sm">Fast implementation with immediate impact</p>
            </div>

            <div className="bg-gradient-to-br from-usergy-purple/5 to-usergy-skyblue/5 rounded-2xl p-6 border border-usergy-purple/10 hover:border-usergy-purple/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-usergy-purple to-usergy-skyblue flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-2">Premium Support</h3>
              <p className="text-gray-600 text-sm">Dedicated experts committed to your success</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-50 to-usergy-light/30 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-usergy-dark mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Choose your preferred way to connect with our team. We're here to help you achieve undeniable traction.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCalendlyRedirect}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-coral text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                onClick={scrollToForm}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Fill Contact Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 pt-4 border-t border-gray-200">
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
