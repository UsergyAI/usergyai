
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Mail, Phone, ArrowRight } from 'lucide-react';

const ContactMethods = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:swaroop@usergy.ai?subject=AI Growth Inquiry';
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-usergy-light via-white to-usergy-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-usergy-turquoise/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-usergy-coral/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-usergy-skyblue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6 leading-tight">
              Choose Your Path: Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach our AI growth experts. Pick the method that works best for you.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Strategy Call Method */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-turquoise/10 hover:border-usergy-turquoise/30">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-usergy-dark mb-4 text-center">
                Strategy Call
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                Book a free 30-minute consultation to discuss your AI growth strategy with our experts.
              </p>
              <Button
                onClick={handleCalendlyRedirect}
                className="w-full bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-turquoise text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Contact Form Method */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-coral/10 hover:border-usergy-coral/30">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-usergy-coral to-usergy-gold text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-usergy-dark mb-4 text-center">
                Quick Form
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                Fill out our detailed form and get a personalized response within one business day.
              </p>
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="w-full border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Direct Email Method */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-usergy-purple/10 hover:border-usergy-purple/30 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-usergy-purple to-usergy-skyblue text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-usergy-dark mb-4 text-center">
                Direct Email
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                Prefer email? Send us your inquiry directly and we'll respond promptly.
              </p>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                className="w-full border-2 border-usergy-purple text-usergy-purple hover:bg-usergy-purple hover:text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Not sure which option to choose? Start with a quick strategy call!
            </p>
            <Button
              onClick={handleCalendlyRedirect}
              size="lg"
              className="bg-gradient-to-r from-usergy-turquoise via-usergy-skyblue to-usergy-coral hover:from-usergy-coral hover:via-usergy-gold hover:to-usergy-turquoise text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Strategy Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
