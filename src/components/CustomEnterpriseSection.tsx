
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Users, Target } from 'lucide-react';

const CustomEnterpriseSection = () => {
  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-usergy-dark mb-6">
            Scale Beyond Tiers: Custom Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Need more than 100 users? Have unique requirements? Our enterprise solutions 
            are tailored to your specific AI product's needs and scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-usergy-turquoise/5 to-usergy-skyblue/5 border-2 border-usergy-turquoise/20 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-usergy-dark mb-6">
                Enterprise-Grade AI Traction Solutions
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <Users className="w-12 h-12 text-usergy-turquoise mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-usergy-dark mb-2">Unlimited Scale</h4>
                  <p className="text-gray-600">500+ users, enterprise-level community management</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-usergy-skyblue mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-usergy-dark mb-2">Custom Strategy</h4>
                  <p className="text-gray-600">Tailored approach for your unique market position</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-usergy-coral mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-usergy-dark mb-2">Dedicated Team</h4>
                  <p className="text-gray-600">Assigned project managers and specialists</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every enterprise solution includes custom pricing, dedicated support, 
                advanced analytics, and white-label options. Let's design the perfect 
                growth strategy for your AI innovation.
              </p>

              <Button 
                size="lg"
                onClick={handleCalendlyRedirect}
                className="bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue hover:from-usergy-skyblue hover:to-usergy-turquoise text-white font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="mr-3 h-6 w-6" />
                Design My Custom Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomEnterpriseSection;
