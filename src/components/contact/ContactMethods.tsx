
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactMethods = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-usergy-skyblue rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            Choose Your Path: Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the option that's easiest for you. We cater to your preferences, 
            ensuring a seamless start to our partnership or quick resolution for your support needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Strategy Call Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-4">
                Book a Free 30-Minute Strategy Call
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule an instant, direct consultation with Swaroop, our founder and lead expert. 
                Share your AI product's vision, challenges, and let's map your path to undeniable traction.
              </p>
              <Button className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg">
                Schedule Now →
              </Button>
            </CardContent>
          </Card>

          {/* Direct Email Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-skyblue/30 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-usergy-skyblue to-usergy-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-4">
                Email Our Team Directly
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For general questions about our services, partnership opportunities, 
                or anything else, drop us a note. We're eager to learn and help.
              </p>
              <a 
                href="mailto:hello@usergy.ai" 
                className="inline-block w-full bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg text-center"
              >
                hello@usergy.ai
              </a>
            </CardContent>
          </Card>

          {/* Quick Inquiry Form Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-coral/30 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-usergy-coral to-usergy-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-4">
                Fill Our Quick Inquiry Form
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prefer a brief form? Answer a couple of questions so we can best understand 
                your needs and respond efficiently. Your information is confidential.
              </p>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-usergy-coral hover:bg-usergy-gold text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Start Form →
              </Button>
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-gold/30 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-usergy-gold to-usergy-turquoise rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-4">
                Join Our AI Explorer Community
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Are you an AI enthusiast eager to explore groundbreaking tools and contribute? 
                Connect with our vibrant community on Discord – a hub for innovation.
              </p>
              <Button className="w-full bg-usergy-gold hover:bg-usergy-coral text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg">
                Join Discord Now! →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
