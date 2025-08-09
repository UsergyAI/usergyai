
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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
            Find Your Perfect Traction Plan
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-muted-foreground mb-6 sm:mb-8 px-4 leading-relaxed">
            Select your desired participant count below to see how Usergy delivers comprehensive growth, tailored to your needs.
          </h3>
          
          {/* Enhanced Tab-based Participant Selector - Mobile Optimized */}
          <Tabs value={selectedUsers} onValueChange={setSelectedUsers} className="mb-6 sm:mb-8">
            <TabsList className="bg-muted rounded-full p-1 sm:p-2 inline-flex h-auto shadow-lg flex-wrap gap-1 sm:gap-0 max-w-full">
              {userOptions.map(option => (
                <TabsTrigger
                  key={option.value}
                  value={option.value}
                  className="px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:transform data-[state=active]:scale-105 text-muted-foreground hover:text-primary hover:bg-background hover:shadow-md text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {userOptions.map(option => (
              <TabsContent key={option.value} value={option.value} className="mt-6 sm:mt-8">
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
