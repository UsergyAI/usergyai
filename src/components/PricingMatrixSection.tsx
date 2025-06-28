
import React, { useState } from 'react';
import PricingTable from '@/components/PricingTable';

const PricingMatrixSection = () => {
  const [selectedUsers, setSelectedUsers] = useState(5);
  const userOptions = [5, 10, 20, 50, 100];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-usergy-dark mb-4">
            Find Your Perfect Traction Plan
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Select your desired participant count below to see how Usergy delivers comprehensive growth, tailored to your needs.
          </h3>
          
          {/* Participant Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-2 inline-flex">
              {userOptions.map(count => (
                <button
                  key={count}
                  onClick={() => setSelectedUsers(count)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedUsers === count
                      ? 'bg-usergy-turquoise text-white shadow-lg'
                      : 'text-gray-600 hover:text-usergy-turquoise'
                  }`}
                >
                  {count} Users
                </button>
              ))}
            </div>
          </div>
        </div>

        <PricingTable selectedUsers={selectedUsers} />
      </div>
    </section>
  );
};

export default PricingMatrixSection;
