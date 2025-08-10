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
      <section id="contact-form" className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary-gradient text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Thank You!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've received your inquiry and will be in touch within one business day. 
              Your journey to undeniable traction begins!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-2 border-border hover:border-primary/30 transition-colors duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground">
                Your Message to Usergy
              </CardTitle>
              <p className="text-muted-foreground mt-4">
                Tell us about your AI product and how we can help you achieve undeniable traction.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none transition-colors"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-foreground">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-semibold text-foreground">
                      Your Role at Company *
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none transition-colors"
                      placeholder="CEO, CTO, Product Manager, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userCount" className="text-sm font-semibold text-foreground">
                    Estimated # of Users Needed
                  </Label>
                  <select
                    id="userCount"
                    name="userCount"
                    value={formData.userCount}
                    onChange={handleChange}
                    className="w-full border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none rounded-md px-3 py-2 text-sm"
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
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                    How Can We Help You? *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-border focus-visible:ring-2 focus-visible:ring-primary outline-none min-h-32"
                    placeholder="Tell us about your AI product, your current challenges, and what kind of support you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
