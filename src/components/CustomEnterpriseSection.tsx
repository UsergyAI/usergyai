
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Settings } from 'lucide-react';

const CustomEnterpriseSection = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
...
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Enterprise Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-usergy-dark mb-4">
              Scale Beyond Limits
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Need 100+ participants or custom features? Our enterprise solutions scale with your ambitions.
            </p>
          </div>

          {/* Compact Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-usergy-gold/10 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-usergy-gold/20 to-usergy-gold/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-usergy-gold" />
              </div>
              <h3 className="text-lg font-bold text-usergy-dark mb-2">Unlimited Scale</h3>
              <p className="text-sm text-gray-600">From 100 to 10,000+ participants</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600">Dedicated account management</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-usergy-coral/20 to-usergy-coral/10 flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-primary" />
...
              <h3 className="text-lg font-bold text-foreground mb-2">Custom Features</h3>
              <p className="text-sm text-gray-600">Tailored integrations & workflows</p>
            </div>
          </div>

          {/* Optimized CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-usergy-gold/20 shadow-lg">
              <h3 className="text-2xl font-bold text-usergy-dark mb-4">
                Ready for Enterprise Growth?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto">
                Let's design a custom solution that delivers exceptional results at your scale.
              </p>
              
              <Button
                size="lg"
                onClick={handleCalendlyRedirect}
                className="bg-gradient-to-r from-usergy-gold via-usergy-coral to-usergy-gold hover:from-usergy-coral hover:via-usergy-gold hover:to-usergy-coral text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg border-2 border-white/20"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Design My Custom Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomEnterpriseSection;
