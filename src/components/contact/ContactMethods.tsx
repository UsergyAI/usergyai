
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
    <section className="py-16 md:py-20 bg-site-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                Choose Your Path: Let's Connect
              </h2>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '-1s' }}></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Select your preferred way to start the conversation with our AI growth experts
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strategy Call Method */}
            <div className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/40 text-center transform hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-9 h-9 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Strategy Call
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Book a free 30-minute consultation to discuss your AI growth strategy with our experts
              </p>
              <Button
                onClick={handleCalendlyRedirect}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Contact Form Method */}
            <div className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/40 text-center transform hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageSquare className="w-9 h-9 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Quick Form
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Fill out our contact form and get a personalized response within one business day
              </p>
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Direct Email Method */}
            <div className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/40 text-center transform hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-9 h-9 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Direct Email
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Send us your inquiry directly and we'll respond promptly with personalized guidance
              </p>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
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
