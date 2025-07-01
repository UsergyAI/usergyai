
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const ContactHero = () => {
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
    <section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-28 md:pt-32"
      role="banner"
      aria-label="Contact page hero section"
    >
      <AnimatedBackground particleCount={50} />

      {/* Enhanced Floating Bubbles - Hero Section Only */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
        <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-usergy-turquoise/30 rounded-full animate-float-enhanced opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-usergy-coral/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-usergy-gold/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
        <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-usergy-turquoise/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
        <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-usergy-coral/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <header>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-usergy-dark mb-6 leading-tight animate-fade-in">
              Connect with Our AI Growth Experts
            </h1>

            {/* Sub-header */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Ready to transform your AI vision into reality? Our team is here to provide expert guidance and support. Reach out today!
            </h2>
          </header>

          {/* Contact method cards with improved accessibility */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto animate-scale-in">
            {/* Strategy Call Card */}
            <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-turquoise/20 flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-usergy-turquoise/20 text-usergy-turquoise mx-auto mb-4" aria-hidden="true">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-4 text-center">
                Schedule a Strategy Call
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                Discuss your AI growth strategy with our experts in a free 30-minute consultation.
              </p>
              <Button
                onClick={handleCalendlyRedirect}
                className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base min-h-[48px] mt-auto focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2"
                aria-label="Schedule a free 30-minute strategy call with Usergy experts"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="truncate">Schedule Free Strategy Call</span>
              </Button>
            </article>

            {/* Quick Form Card */}
            <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-coral/20 flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-usergy-coral/20 text-usergy-coral mx-auto mb-4" aria-hidden="true">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-4 text-center">
                Quick Contact Form
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                Fill out our contact form and get a personalized response within one business day.
              </p>
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="w-full border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base min-h-[48px] mt-auto focus:ring-2 focus:ring-usergy-coral focus:ring-offset-2"
                aria-label="Navigate to contact form section"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="truncate">Start Form</span>
              </Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
