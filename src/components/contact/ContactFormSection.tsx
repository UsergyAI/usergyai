
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, User, Mail, MessageSquare, Building } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-usergy-coral rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-usergy-dark mb-4 sm:mb-6">
              Let's Start the Conversation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Tell us about your AI product and goals. We'll get back to you within 24 hours with a customized strategy.
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-usergy-turquoise/20 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-usergy-dark mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-12 py-3 sm:py-4 border-2 border-gray-200 focus:border-usergy-turquoise rounded-lg text-base"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-usergy-dark mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-12 py-3 sm:py-4 border-2 border-gray-200 focus:border-usergy-turquoise rounded-lg text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="relative">
                  <label htmlFor="company" className="block text-sm font-semibold text-usergy-dark mb-2">
                    Company/Project Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-12 py-3 sm:py-4 border-2 border-gray-200 focus:border-usergy-turquoise rounded-lg text-base"
                      placeholder="Your AI Startup"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-usergy-dark mb-2">
                    Tell Us About Your AI Product *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="pl-12 pt-4 pb-4 border-2 border-gray-200 focus:border-usergy-turquoise rounded-lg text-base resize-none"
                      placeholder="Describe your AI product, target audience, and what kind of feedback or user acquisition you're looking for. The more details you provide, the better we can help you."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg group"
                  >
                    Send Message & Get Strategy Call
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Privacy note */}
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-4 px-2">
                  We respect your privacy. Your information will only be used to respond to your inquiry and provide relevant services.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-turquoise/30 to-transparent"></div>
    </section>
  );
};

export default ContactFormSection;
