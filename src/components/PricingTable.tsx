
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
    // This would integrate with your booking system with pre-filled data
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in relative">
      {/* Most Popular Badge - Positioned absolutely above the table */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-gradient-to-r from-usergy-gold to-usergy-gold/90 text-usergy-dark px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white">
          MOST POPULAR
        </div>
      </div>

      {/* Add top padding to accommodate the badge */}
      <div className="pt-8">
        {/* Table Header - Enhanced gradient backgrounds */}
        <div className="grid grid-cols-3 relative">
          <div className="p-6 text-center font-bold text-lg bg-gradient-to-b from-usergy-coral to-usergy-coral/80 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="font-bold text-lg">Feedback Only</div>
            <div className="text-sm font-normal mt-1 opacity-90">Basic Insight</div>
          </div>
          <div className="p-6 text-center font-bold text-lg bg-gradient-to-b from-usergy-turquoise to-usergy-skyblue text-white relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="font-bold text-lg">Feedback + Community</div>
            <div className="text-sm font-normal mt-1 opacity-90">Core Activation</div>
          </div>
          <div className="p-6 text-center font-bold text-lg bg-gradient-to-b from-usergy-skyblue to-usergy-skyblue/80 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="font-bold text-lg">Full Traction</div>
            <div className="text-sm font-normal mt-1 opacity-90">Amplify & Buzz</div>
          </div>
        </div>

        {/* Pricing Row - Enhanced with smooth animations and hover effects */}
        <div className="grid grid-cols-3 border-b-2 border-usergy-turquoise bg-gradient-to-r from-usergy-turquoise/5 to-usergy-skyblue/5">
          {/* Feedback Only */}
          <div className="p-6 text-center border-r border-gray-200 bg-white hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:to-usergy-coral/5 transition-all duration-300 hover:-translate-y-2 transform group">
            <div className="text-3xl font-black text-usergy-dark mb-3 group-hover:text-usergy-coral transition-colors">
              ${prices.feedback.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-4">for {selectedUsers} users</div>
            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2 font-bold">•</span>
                Recruit & incentivize high-quality users; all incentives included
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2 font-bold">•</span>
                Comprehensive feedback analysis report with actionable insights
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2 font-bold">•</span>
                Dedicated email support throughout campaign
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Feedback Only')}
              className="w-full bg-usergy-coral hover:bg-usergy-coral/90 text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>

          {/* Feedback + Community */}
          <div className="p-6 text-center bg-gradient-to-b from-usergy-gold/5 to-usergy-turquoise/5 border-2 border-usergy-gold/30 border-r border-gray-200 relative hover:shadow-2xl hover:bg-gradient-to-b hover:from-usergy-gold/10 hover:to-usergy-turquoise/10 transition-all duration-300 hover:-translate-y-2 transform group">
            <div className="text-3xl font-black text-usergy-dark mb-3 group-hover:text-usergy-turquoise transition-colors">
              ${prices.community.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-4">for {selectedUsers} users</div>
            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2 font-bold">•</span>
                Everything in Feedback Only package
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2 font-bold">•</span>
                Expert community setup & nurturing strategies
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2 font-bold">•</span>
                Real-time engagement tracking & optimization
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Feedback + Community')}
              className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>

          {/* Full Traction */}
          <div className="p-6 text-center bg-white hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:to-usergy-skyblue/5 transition-all duration-300 hover:-translate-y-2 transform group">
            <div className="text-3xl font-black text-usergy-dark mb-3 group-hover:text-usergy-skyblue transition-colors">
              ${prices.full.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-4">for {selectedUsers} users</div>
            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2 font-bold">•</span>
                Everything in Community package included
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2 font-bold">•</span>
                Strategic social media task management & execution
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2 font-bold">•</span>
                Comprehensive UGC analysis report with market insights
              </li>
            </ul>
            <Button 
              onClick={() => handleBookCall('Full Traction')}
              className="w-full bg-usergy-skyblue hover:bg-usergy-turquoise text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Strategy Call 📞
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
