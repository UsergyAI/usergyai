
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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gradient-to-r from-usergy-turquoise to-usergy-skyblue text-white">
        <div className="p-6 text-center font-bold text-lg">
          # Users
        </div>
        <div className="p-6 text-center font-bold text-lg bg-black/10">
          Feedback Only
          <div className="text-sm font-normal mt-1">Basic Insight</div>
        </div>
        <div className="p-6 text-center font-bold text-lg bg-usergy-gold/20 relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-usergy-gold text-usergy-dark px-3 py-1 rounded-full text-xs font-bold">
            Most Popular
          </div>
          Feedback + Community
          <div className="text-sm font-normal mt-1">Core Activation</div>
        </div>
        <div className="p-6 text-center font-bold text-lg bg-black/10">
          Full Traction
          <div className="text-sm font-normal mt-1">Amplify & Buzz</div>
        </div>
      </div>

      {/* Pricing Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b-2 border-usergy-turquoise bg-usergy-turquoise/5">
        <div className="p-6 text-center bg-gray-50 font-bold text-2xl text-usergy-dark">
          {selectedUsers}
        </div>
        <div className="p-6 text-center">
          <div className="text-3xl font-black text-usergy-dark mb-2">
            ${prices.feedback.toLocaleString()}
          </div>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>• Recruitment & incentives</li>
            <li>• Basic report</li>
            <li>• Email support</li>
          </ul>
          <Button 
            onClick={() => handleBookCall('Feedback Only')}
            className="w-full bg-usergy-coral hover:bg-usergy-coral/90 text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Select Plan
          </Button>
        </div>
        <div className="p-6 text-center bg-usergy-gold/10 border-2 border-usergy-gold">
          <div className="text-3xl font-black text-usergy-dark mb-2">
            ${prices.community.toLocaleString()}
          </div>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>• All Feedback Only features</li>
            <li>• Community setup & nurture</li>
            <li>• Engagement tracking</li>
          </ul>
          <Button 
            onClick={() => handleBookCall('Feedback + Community')}
            className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Select Plan
          </Button>
        </div>
        <div className="p-6 text-center">
          <div className="text-3xl font-black text-usergy-dark mb-2">
            ${prices.full.toLocaleString()}
          </div>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>• All Community features</li>
            <li>• Social task management</li>
            <li>• UGC report</li>
          </ul>
          <Button 
            onClick={() => handleBookCall('Full Traction')}
            className="w-full bg-usergy-skyblue hover:bg-usergy-turquoise text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Select Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
