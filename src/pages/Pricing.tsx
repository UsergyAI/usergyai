
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: 'Feedback Only',
      description: 'Essential feedback collection',
      features: [
        'Recruitment & incentives',
        'Basic report',
        'Email support'
      ],
      pricing: {
        5: 299,
        10: 499,
        20: 899,
        50: 1999,
        100: 3499
      }
    },
    {
      name: 'Feedback + Community',
      description: 'Complete community engagement',
      features: [
        'All Feedback Only features',
        'Community setup & nurture',
        'Advanced analytics',
        'Priority support'
      ],
      pricing: {
        5: 399,
        10: 699,
        20: 1199,
        50: 2499,
        100: 4499
      },
      popular: true
    },
    {
      name: 'Full Traction',
      description: 'Complete growth solution',
      features: [
        'All Community features',
        'Social task management',
        'UGC report',
        'Dedicated success manager'
      ],
      pricing: {
        5: 499,
        10: 899,
        20: 1499,
        50: 2999,
        100: 5499
      }
    }
  ];

  const userCounts = [5, 10, 20, 50, 100];

  const handleSelectPlan = (planName: string, userCount: number, price: number) => {
    // This would integrate with booking system
    console.log(`Selected: ${planName} for ${userCount} users at $${price}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-usergy-turquoise via-usergy-skyblue to-usergy-coral">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Pricing Plans
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent pricing for every stage of your AI journey
          </p>
          <p className="text-sm text-usergy-gold font-semibold animate-pulse">
            Limited spots at this rate
          </p>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Plan Headers */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              {/* User Count Column Header */}
              <div className="hidden lg:block">
                <h3 className="text-xl font-bold text-usergy-dark mb-4">Users</h3>
              </div>
              
              {/* Plan Columns */}
              {plans.map((plan, index) => (
                <div key={index} className="relative">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-usergy-coral text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-gray-50 rounded-2xl p-6 h-full ${plan.popular ? 'ring-2 ring-usergy-coral shadow-xl' : 'shadow-lg'}`}>
                    <h3 className="text-2xl font-bold text-usergy-dark mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-usergy-turquoise flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Rows */}
            <div className="space-y-6">
              {userCounts.map((userCount) => (
                <div key={userCount} className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                  {/* User Count */}
                  <div className="lg:text-center">
                    <span className="text-xl font-bold text-usergy-dark">
                      {userCount} Users
                    </span>
                  </div>
                  
                  {/* Pricing for each plan */}
                  {plans.map((plan, planIndex) => (
                    <div key={planIndex} className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                      <div className="text-3xl font-black text-usergy-dark mb-2">
                        ${plan.pricing[userCount as keyof typeof plan.pricing].toLocaleString()}
                      </div>
                      <Button 
                        onClick={() => handleSelectPlan(plan.name, userCount, plan.pricing[userCount as keyof typeof plan.pricing])}
                        className={`w-full ${plan.popular ? 'bg-usergy-coral hover:bg-usergy-coral/90' : 'bg-usergy-turquoise hover:bg-usergy-skyblue'} text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      >
                        Select Plan
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-On & Enterprise Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add-On */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-usergy-dark mb-4">Add-On</h3>
                <div className="text-4xl font-black text-usergy-turquoise mb-4">$35</div>
                <p className="text-gray-600 mb-6">Extra Participant — $35 each</p>
                <Button className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Add Participants
                </Button>
              </div>

              {/* Enterprise */}
              <div className="bg-gradient-to-br from-usergy-dark to-gray-800 rounded-2xl p-8 shadow-xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-black text-usergy-gold mb-4">Custom</div>
                <p className="text-gray-300 mb-6">Custom Quote for 500+ users, dedicated team & bespoke research</p>
                <Button className="bg-usergy-gold hover:bg-usergy-gold/90 text-usergy-dark font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
