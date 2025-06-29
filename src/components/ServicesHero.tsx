
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-usergy-light via-white to-usergy-light overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-usergy-turquoise rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-usergy-skyblue rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-usergy-coral rounded-full blur-xl animate-pulse opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading with better mobile spacing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-usergy-dark mb-4 sm:mb-6 md:mb-8 leading-tight">
            Get Real Users for Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-usergy-turquoise via-usergy-skyblue to-usergy-coral animate-pulse-glow">
              AI Product Launch
            </span>
          </h1>

          {/* Subheading with improved mobile readability */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto px-2">
            Stop guessing what users want. Get real feedback, genuine users, and validated demand 
            before you launch. Our proven system connects you with engaged testers who become your first customers.
          </p>

          {/* Key benefits with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-usergy-turquoise flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-usergy-dark">Rapid User Acquisition</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-usergy-skyblue flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-usergy-dark">Quality Feedback</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-usergy-coral flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-usergy-dark">Proven Results</span>
            </div>
          </div>

          {/* CTA buttons with better mobile stacking */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg group"
            >
              Start Your Campaign Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-usergy-dark text-usergy-dark hover:bg-usergy-dark hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg"
            >
              View Success Stories
            </Button>
          </div>

          {/* Trust indicator with mobile optimization */}
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Trusted by innovative AI founders worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 opacity-60">
              <div className="text-xs sm:text-sm font-semibold text-gray-400 bg-white/40 px-3 sm:px-4 py-1 sm:py-2 rounded-full">50+ AI Products Launched</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-400 bg-white/40 px-3 sm:px-4 py-1 sm:py-2 rounded-full">10,000+ Quality Testers</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-400 bg-white/40 px-3 sm:px-4 py-1 sm:py-2 rounded-full">95% Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
