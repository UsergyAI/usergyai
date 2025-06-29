
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    message: '',
    userCount: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-usergy-dark mb-4">Thank You!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've received your inquiry and will be in touch within one business day. 
              Your journey to undeniable traction begins!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-usergy-skyblue rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-2 border-gray-100 hover:border-usergy-turquoise/20 transition-colors duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-usergy-dark">
                Your Message to Usergy
              </CardTitle>
              <p className="text-gray-600 mt-4">
                Tell us about your AI product and how we can help you achieve undeniable traction.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-usergy-dark">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-usergy-turquoise transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-usergy-dark">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-usergy-turquoise transition-colors"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-usergy-dark">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-usergy-turquoise transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-semibold text-usergy-dark">
                      Your Role at Company *
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-usergy-turquoise transition-colors"
                      placeholder="CEO, CTO, Product Manager, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userCount" className="text-sm font-semibold text-usergy-dark">
                    Estimated # of Users Needed
                  </Label>
                  <select
                    id="userCount"
                    name="userCount"
                    value={formData.userCount}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 focus:border-usergy-turquoise transition-colors rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">Select range (optional)</option>
                    <option value="5-10">5-10 users</option>
                    <option value="10-20">10-20 users</option>
                    <option value="20-50">20-50 users</option>
                    <option value="50-100">50-100 users</option>
                    <option value="100-1000+">100-1000+ users</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-usergy-dark">
                    How Can We Help You? *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-gray-200 focus:border-usergy-turquoise transition-colors min-h-32"
                    placeholder="Tell us about your AI product, your current challenges, and what kind of support you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-coral text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Send My Inquiry →
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
