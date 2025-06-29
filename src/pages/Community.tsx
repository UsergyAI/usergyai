
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityHero from '@/components/community/CommunityHero';
import WhyUsergy from '@/components/community/WhyUsergy';
import HowItWorks from '@/components/community/HowItWorks';
import UsergyDifference from '@/components/community/UsergyDifference';
import ExplorerTestimonials from '@/components/community/ExplorerTestimonials';
import RewardsSection from '@/components/community/RewardsSection';
import CommunityFAQs from '@/components/community/CommunityFAQs';
import FinalCTA from '@/components/community/FinalCTA';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <Header />
      <main>
        <CommunityHero />
        <WhyUsergy />
        <HowItWorks />
        <UsergyDifference />
        <ExplorerTestimonials />
        <RewardsSection />
        <CommunityFAQs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Community;
