import React from 'react';
import CommunityHero from '@/components/community/CommunityHero';
import WhyUsergy from '@/components/community/WhyUsergy';
import HowItWorks from '@/components/community/HowItWorks';
import RewardsSection from '@/components/community/RewardsSection';
import UsergyDifference from '@/components/community/UsergyDifference';
import FinalCTA from '@/components/community/FinalCTA';
import SEOHead from '@/components/SEOHead';

const UserSignup = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Join the AI Explorer Community - Test Tomorrow's AI Today"
        description="Become an AI Explorer and get exclusive early access to cutting-edge AI tools. Earn rewards, influence innovation, and connect with fellow AI enthusiasts in our vibrant community."
      />
      <CommunityHero />
      <WhyUsergy />
      <HowItWorks />
      <RewardsSection />
      <UsergyDifference />
      <FinalCTA />
    </div>
  );
};

export default UserSignup;
