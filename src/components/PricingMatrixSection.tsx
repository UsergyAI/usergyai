
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PricingTable from '@/components/PricingTable';

const PricingMatrixSection = () => {
  const [selectedUsers, setSelectedUsers] = useState('5');
  const userOptions = [
    { value: '5', label: '5 Users' },
    { value: '10', label: '10 Users' },
    { value: '20', label: '20 Users' },
    { value: '50', label: '50 Users' },
    { value: '100', label: '100 Users' }
  ];

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
          
          {/* Tab-based Participant Selector */}
          <Tabs value={selectedUsers} onValueChange={setSelectedUsers} className="mb-8">
            <TabsList className="bg-gray-100 rounded-full p-2 inline-flex h-auto">
              {userOptions.map(option => (
                <TabsTrigger
                  key={option.value}
                  value={option.value}
                  className="px-6 py-3 rounded-full font-semibold transition-all data-[state=active]:bg-usergy-skyblue data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-600 hover:text-usergy-turquoise"
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {userOptions.map(option => (
              <TabsContent key={option.value} value={option.value} className="mt-8">
                <PricingTable selectedUsers={parseInt(option.value)} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PricingMatrixSection;
