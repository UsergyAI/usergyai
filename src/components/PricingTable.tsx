import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface PricingTableProps {
  selectedUsers: number;
}

const PricingTable = ({ selectedUsers }: PricingTableProps) => {
  const pricingData = {
    5: { feedback: 299, community: 399, full: 499 },
    10: { feedback: 499, community: 699, full: 899 },
    20: { feedback: 899, community: 1199, full: 1499 },
    50: { feedback: 1999, community: 2499, full: 2999 },
    100: { feedback: 3499, community: 4499, full: 5499 }
  };

  const prices = pricingData[selectedUsers as keyof typeof pricingData];

  const handleBookCall = (packageType: string) => {
    console.log(`Booking call for: ${selectedUsers} users - ${packageType}`);
    // Redirect to Calendly with the package information
    const calendlyUrl = `https://calendly.com/swaroop-usergy/30min?a1=${selectedUsers}%20users&a2=${packageType}`;
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in relative">
      {/* Mobile/Tablet: Stack cards vertically, Desktop: Grid layout */}
      <div className="block md:hidden">
        {/* Mobile Stack Layout */}
        <div className="space-y-6 p-4">
          {/* Feedback Only Plan - Mobile */}
          <div className="bg-gradient-to-b from-red-50 to-white border-2 border-red-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-gradient-to-b from-red-400 via-usergy-coral to-red-600 text-white py-3 px-4 rounded-lg mb-4">
                <div className="font-bold text-lg">Feedback Only</div>
                <div className="text-sm font-normal mt-1 opacity-90">Basic Insight</div>
              </div>
              <div className="text-3xl font-black text-usergy-dark mb-3">
                ${prices.feedback.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-4 font-semibold">for {selectedUsers} users</div>
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Recruit & incentivize high-quality users; all incentives included</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Comprehensive feedback analysis report with actionable insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Dedicated email support throughout campaign</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Feedback Only')}
              className="w-full bg-gradient-to-r from-usergy-coral to-red-500 hover:from-red-500 hover:to-usergy-coral text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-3 text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>

          {/* Feedback + Community Plan - Mobile (Most Popular) */}
          <div className="bg-gradient-to-b from-teal-50 to-white border-4 border-usergy-gold rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-yellow-500 text-usergy-dark px-4 py-2 rounded-full text-xs font-black shadow-xl border-2 border-white uppercase tracking-wide">
                ⭐ Most Popular ⭐
              </div>
            </div>
            <div className="text-center mb-4 mt-4">
              <div className="bg-gradient-to-b from-teal-400 via-usergy-turquoise to-teal-600 text-white py-3 px-4 rounded-lg mb-4">
                <div className="font-bold text-lg">Feedback + Community</div>
                <div className="text-sm font-normal mt-1 opacity-90">Core Activation</div>
              </div>
              <div className="text-3xl font-black text-usergy-dark mb-3">
                ${prices.community.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-4 font-semibold">for {selectedUsers} users</div>
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Everything in Feedback Only package</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Expert community setup & nurturing strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Real-time engagement tracking & optimization</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Feedback + Community')}
              className="w-full bg-gradient-to-r from-usergy-turquoise to-teal-500 hover:from-teal-500 hover:to-usergy-turquoise text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-3 text-base border-2 border-usergy-gold/30"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>

          {/* Full Traction Plan - Mobile */}
          <div className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-gradient-to-b from-blue-400 via-usergy-skyblue to-blue-600 text-white py-3 px-4 rounded-lg mb-4">
                <div className="font-bold text-lg">Full Traction</div>
                <div className="text-sm font-normal mt-1 opacity-90">Amplify & Buzz</div>
              </div>
              <div className="text-3xl font-black text-usergy-dark mb-3">
                ${prices.full.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-4 font-semibold">for {selectedUsers} users</div>
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Everything in Community package included</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Strategic social media task management & execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Comprehensive UGC analysis report with market insights</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Full Traction')}
              className="w-full bg-gradient-to-r from-usergy-skyblue to-blue-500 hover:from-blue-500 hover:to-usergy-skyblue text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-3 text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Grid Layout (unchanged for desktop) */}
      <div className="hidden md:block">
        {/* Enhanced Table Header with Better Spacing for Badge */}
        <div className="grid grid-cols-3 relative pt-4">
          {/* Feedback Only Header */}
          <div className="p-6 pb-8 text-center font-bold text-lg bg-gradient-to-b from-red-400 via-usergy-coral to-red-600 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
            <div className="font-bold text-lg">Feedback Only</div>
            <div className="text-sm font-normal mt-1 opacity-90">Basic Insight</div>
          </div>

          {/* Feedback + Community Header with Integrated Badge */}
          <div className="p-6 pb-8 text-center font-bold text-lg bg-gradient-to-b from-teal-400 via-usergy-turquoise to-teal-600 text-white relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* Integrated "MOST POPULAR" Ribbon Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30">
              <div className="bg-gradient-to-r from-yellow-400 via-usergy-gold to-yellow-500 text-usergy-dark px-6 py-2 rounded-full text-xs font-black shadow-xl border-2 border-white uppercase tracking-wide">
                ⭐ Most Popular ⭐
              </div>
            </div>
            <div className="font-bold text-lg mt-2">Feedback + Community</div>
            <div className="text-sm font-normal mt-1 opacity-90">Core Activation</div>
          </div>

          {/* Full Traction Header */}
          <div className="p-6 pb-8 text-center font-bold text-lg bg-gradient-to-b from-blue-400 via-usergy-skyblue to-blue-600 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
            <div className="font-bold text-lg">Full Traction</div>
            <div className="text-sm font-normal mt-1 opacity-90">Amplify & Buzz</div>
          </div>
        </div>

        {/* Enhanced Pricing Row with Active State Highlighting */}
        <div className="grid grid-cols-3 border-b-2 border-usergy-turquoise bg-gradient-to-r from-usergy-turquoise/10 via-white to-usergy-skyblue/10 shadow-inner">
          {/* Feedback Only Plan */}
          <div className="p-8 text-center border-r border-gray-200 bg-white hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:to-red-50 transition-all duration-300 hover:-translate-y-3 transform group hover:border-usergy-coral hover:border-2 hover:z-10 relative">
            <div className="text-4xl font-black text-usergy-dark mb-4 group-hover:text-usergy-coral transition-colors group-hover:scale-110 transform duration-300">
              ${prices.feedback.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-6 font-semibold">for {selectedUsers} users</div>
            <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Recruit & incentivize high-quality users; all incentives included</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Comprehensive feedback analysis report with actionable insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Dedicated email support throughout campaign</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Feedback Only')}
              className="w-full bg-gradient-to-r from-usergy-coral to-red-500 hover:from-red-500 hover:to-usergy-coral text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>

          {/* Feedback + Community Plan (Most Popular) */}
          <div className="p-8 text-center bg-gradient-to-b from-teal-50 via-white to-teal-50 border-2 border-usergy-turquoise relative hover:shadow-2xl hover:bg-gradient-to-b hover:from-teal-50 hover:to-usergy-turquoise/10 transition-all duration-300 hover:-translate-y-3 transform group hover:border-usergy-gold hover:border-4 hover:z-20">
            {/* Highlight border for most popular */}
            <div className="absolute inset-0 bg-gradient-to-r from-usergy-gold/20 to-transparent rounded-lg opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-4xl font-black text-usergy-dark mb-4 group-hover:text-usergy-turquoise transition-colors group-hover:scale-110 transform duration-300">
                ${prices.community.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-6 font-semibold">for {selectedUsers} users</div>
              <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                  <span className="leading-relaxed">Everything in Feedback Only package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                  <span className="leading-relaxed">Expert community setup & nurturing strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-3 font-bold text-lg">•</span>
                  <span className="leading-relaxed">Real-time engagement tracking & optimization</span>
                </li>
              </ul>
              <Button 
                onClick={() => handleBookCall('Feedback + Community')}
                className="w-full bg-gradient-to-r from-usergy-turquoise to-teal-500 hover:from-teal-500 hover:to-usergy-turquoise text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-4 text-lg border-2 border-usergy-gold/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Your Strategy Call 📞
              </Button>
            </div>
          </div>

          {/* Full Traction Plan */}
          <div className="p-8 text-center bg-white hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:to-blue-50 transition-all duration-300 hover:-translate-y-3 transform group hover:border-usergy-skyblue hover:border-2 hover:z-10 relative">
            <div className="text-4xl font-black text-usergy-dark mb-4 group-hover:text-usergy-skyblue transition-colors group-hover:scale-110 transform duration-300">
              ${prices.full.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-6 font-semibold">for {selectedUsers} users</div>
            <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Everything in Community package included</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Strategic social media task management & execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-3 font-bold text-lg">•</span>
                <span className="leading-relaxed">Comprehensive UGC analysis report with market insights</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Full Traction')}
              className="w-full bg-gradient-to-r from-usergy-skyblue to-blue-500 hover:from-blue-500 hover:to-usergy-skyblue text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
