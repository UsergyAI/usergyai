
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, MessageCircle, Clock } from 'lucide-react';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Direct Email',
      description: 'Get a detailed response within 24 hours',
      action: 'swaroop@usergy.ai',
      buttonText: 'Send Email',
      href: 'mailto:swaroop@usergy.ai',
      color: 'from-usergy-turquoise to-usergy-skyblue'
    },
    {
      icon: Calendar,
      title: 'Strategy Call',
      description: 'Free 30-minute consultation about your AI product',
      action: 'Book a time that works for you',
      buttonText: 'Schedule Call',
      href: '#',
      color: 'from-usergy-skyblue to-usergy-coral'
    },
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Join our Discord for immediate questions',
      action: 'Connect with our community',
      buttonText: 'Join Discord',
      href: '#',
      color: 'from-usergy-coral to-usergy-gold'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-32 sm:w-40 h-32 sm:h-40 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 sm:w-32 h-24 sm:h-32 bg-usergy-coral rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-usergy-dark mb-4 sm:mb-6">
            Choose Your Preferred Way to Connect
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Whether you prefer email, a quick call, or joining our community, we're here to help you succeed.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact methods grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-usergy-turquoise/30 bg-white/90 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-6 sm:p-8 text-center relative z-10">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-usergy-dark mb-3 sm:mb-4">
                      {method.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mb-4 sm:mb-6">
                      {method.action}
                    </p>
                    
                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 hover:scale-105`}
                    >
                      <a href={method.href} target={method.href.startsWith('mailto:') ? '_self' : '_blank'}>
                        {method.buttonText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Response time indicator */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-usergy-turquoise/20 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-usergy-turquoise mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-usergy-dark">
                Quick Response Guarantee
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours during business days. 
              For urgent matters, feel free to mention it in your message for priority handling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 sm:mt-8">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-usergy-turquoise mb-1">< 24hrs</div>
                <div className="text-sm sm:text-base text-gray-600">Email Response</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-usergy-skyblue/10 to-usergy-coral/10 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-usergy-skyblue mb-1">Same Day</div>
                <div className="text-sm sm:text-base text-gray-600">Call Scheduling</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-usergy-coral/10 to-usergy-gold/10 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-usergy-coral mb-1">Instant</div>
                <div className="text-sm sm:text-base text-gray-600">Discord Chat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-skyblue/30 to-transparent"></div>
    </section>
  );
};

export default ContactMethods;
