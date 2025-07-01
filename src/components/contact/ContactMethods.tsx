
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Mail, ArrowRight } from 'lucide-react';

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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-usergy-dark mb-4 leading-tight">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our AI growth experts
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strategy Call Method */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-3">
                Strategy Call
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Book a free 30-minute consultation to discuss your AI growth strategy
              </p>
              <Button
                onClick={handleCalendlyRedirect}
                className="w-full bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-turquoise text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Contact Form Method */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-usergy-coral to-usergy-gold flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-3">
                Quick Form
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Fill out our form and get a personalized response within one business day
              </p>
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="w-full border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Direct Email Method */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-usergy-purple to-usergy-skyblue flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-3">
                Direct Email
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Send us your inquiry directly and we'll respond promptly
              </p>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                className="w-full border-2 border-usergy-purple text-usergy-purple hover:bg-usergy-purple hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
