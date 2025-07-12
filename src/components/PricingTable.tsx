
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const PricingTable = () => {
  const handleBookCall = () => {
    const calendlyUrl = `https://calendly.com/swaroop-usergy/30min`;
    window.open(calendlyUrl, '_blank');
  };

  const pricingRows = [
    {
      campaignSize: '0 – 9 participants',
      pricePerParticipant: '$35',
      whatYouGet: 'Perfect for a quick pilot and early validation',
      highlight: true
    },
    {
      campaignSize: '10 – 19 participants',
      pricePerParticipant: '$33',
      whatYouGet: 'Best for deeper feedback with built-in savings'
    },
    {
      campaignSize: '20 – 50 participants',
      pricePerParticipant: '$31',
      whatYouGet: 'Ideal for refining features before a full launch'
    },
    {
      campaignSize: '51 – 100 participants',
      pricePerParticipant: '$29',
      whatYouGet: 'Scale your insights affordably for serious validation'
    },
    {
      campaignSize: '100+ participants',
      pricePerParticipant: 'Custom',
      whatYouGet: 'Tailored pricing, dedicated community manager, SLA guarantees'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Volume discount callout */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-gray-600">
          Volume discounts unlock greater savings—scale with confidence.
        </p>
      </div>

      {/* Mobile: Card Stack */}
      <div className="block lg:hidden">
        <div className="space-y-4">
          {pricingRows.map((row, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                row.highlight 
                  ? 'bg-gradient-to-br from-usergy-gold/10 via-yellow-50 to-usergy-gold/10 border-usergy-gold/30 shadow-usergy-gold/20' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-usergy-dark mb-2">{row.campaignSize}</h3>
                <div className="text-3xl font-black text-usergy-dark mb-2">
                  {row.pricePerParticipant}
                </div>
                <p className="text-sm text-gray-600 font-medium">per participant</p>
              </div>
              <p className="text-gray-700 text-center font-medium leading-relaxed">
                {row.whatYouGet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-8 py-6 text-left text-lg font-bold text-usergy-dark">Campaign Size</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-usergy-dark">Price / Participant</th>
                <th className="px-8 py-6 text-left text-lg font-bold text-usergy-dark">What You Get</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 hover:bg-gray-50/50 transition-colors duration-200 ${
                    row.highlight ? 'bg-gradient-to-r from-usergy-gold/5 via-yellow-50/50 to-usergy-gold/5' : ''
                  }`}
                >
                  <td className="px-8 py-6">
                    <span className="text-lg font-semibold text-usergy-dark">{row.campaignSize}</span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={`text-2xl font-black ${row.highlight ? 'text-usergy-dark' : 'text-usergy-dark'}`}>
                      {row.pricePerParticipant}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-gray-700 font-medium leading-relaxed">{row.whatYouGet}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Credits never expire text */}
      <div className="text-center mt-6">
        <p className="text-lg font-semibold text-usergy-coral">
          <strong>Credits never expire. Buy only what you need, when you need it.</strong>
        </p>
      </div>

      {/* Book Strategy Call Button */}
      <div className="text-center mt-8">
        <Button
          onClick={handleBookCall}
          className="bg-gradient-to-r from-usergy-skyblue via-blue-500 to-usergy-skyblue hover:from-blue-500 hover:via-usergy-skyblue hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-lg border-2 border-white/20"
        >
          <Phone className="w-5 h-5 mr-2" />
          Book Strategy Call
        </Button>
      </div>
    </div>
  );
};

export default PricingTable;
