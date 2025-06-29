
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-gradient-to-br from-usergy-light via-white to-usergy-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full blur-md animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-usergy-dark mb-6 sm:mb-8 leading-tight px-2">
            Connect with Our AI Growth Experts
          </h1>

          {/* Sub-header */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4">
            Ready to transform your AI vision into reality? Our team is here to provide expert guidance and support. Reach out today!
          </p>

          {/* Fixed contact method cards with proper button alignment - Removed Direct Contact card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {/* Strategy Call Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-turquoise/20">
              {/* Icon and Title */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-usergy-turquoise/20 text-usergy-turquoise mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-4 text-center">
                Schedule a Strategy Call
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 text-center">
                Discuss your AI growth strategy with our experts.
              </p>
              <Button
                onClick={handleCalendlyRedirect}
                className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">Schedule Free Strategy Call</span>
              </Button>
            </div>

            {/* Quick Form Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-coral/20">
              {/* Icon and Title */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-usergy-coral/20 text-usergy-coral mx-auto mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-4 text-center">
                Quick Contact Form
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 text-center">
                Fill out our form for a prompt response.
              </p>
              <Button
                variant="outline"
                className="w-full border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">Start Form</span>
              </Button>
            </div>
          </div>

          {/* Fixed primary CTA */}
          <div className="flex justify-center px-4">
            <Button
              size="lg"
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto max-w-md bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-black text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-110 transition-all duration-300 animate-pulse-glow min-h-[56px]"
            >
              <Calendar className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span className="truncate">Schedule Free Strategy Call</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
