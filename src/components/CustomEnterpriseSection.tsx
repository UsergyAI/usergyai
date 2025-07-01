
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Target } from 'lucide-react';

const CustomEnterpriseSection = () => {
  const handleContactUs = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const enterpriseFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Unlimited Scale",
      description: "No user limits"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Strategy",
      description: "Tailored approach"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Priority Support",
      description: "Dedicated team"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-usergy-dark via-gray-800 to-usergy-dark rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-usergy-turquoise rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-usergy-skyblue rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                <div className="lg:flex-1 lg:pr-8">
                  <div className="inline-flex items-center gap-2 bg-usergy-gold/20 text-usergy-gold px-4 py-2 rounded-full text-sm font-bold mb-6">
                    <Zap className="w-4 h-4" />
                    Scale Beyond Tiers
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                    Enterprise Solutions
                  </h2>
                  
                  <p className="text-gray-300 text-lg font-medium mb-8 leading-relaxed">
                    Need more than 100 users or custom features? Let's build something extraordinary together.
                  </p>

                  {/* Enterprise Features */}
                  <div className="flex flex-wrap gap-6 mb-8 lg:mb-0">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-white">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:flex-shrink-0 lg:ml-8">
                  <Button
                    onClick={handleContactUs}
                    className="w-full lg:w-auto bg-gradient-to-r from-usergy-gold to-yellow-500 hover:from-yellow-500 hover:to-usergy-gold text-usergy-dark font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg group"
                  >
                    Let's Talk Enterprise
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomEnterpriseSection;
