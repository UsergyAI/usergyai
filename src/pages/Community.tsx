import React from 'react';
import CommunityHero from '@/components/community/CommunityHero';
import WhyUsergy from '@/components/community/WhyUsergy';
import HowItWorks from '@/components/community/HowItWorks';
import RewardsSection from '@/components/community/RewardsSection';
import ExplorerTestimonials from '@/components/community/ExplorerTestimonials';
import UsergyDifference from '@/components/community/UsergyDifference';
import CommunityFAQs from '@/components/community/CommunityFAQs';
import FinalCTA from '@/components/community/FinalCTA';
import SEOHead from '@/components/SEOHead';

const Community = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Join Usergy AI Explorer Community - Test & Shape the Future of AI"
        description="Join thousands of AI enthusiasts testing cutting-edge AI tools before they launch. Earn rewards, influence innovation, and be part of a vibrant community shaping the future of artificial intelligence."
      />
      <CommunityHero />
      <WhyUsergy />
      <HowItWorks />
      <RewardsSection />
      <ExplorerTestimonials />
      <UsergyDifference />
      <CommunityFAQs />
      <FinalCTA />
    </div>
  );
};

export default Community;
