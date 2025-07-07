
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
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <SEOHead
        title="AI Explorer Community"
        description="Join a thriving community of AI enthusiasts and founders. Get early access to AI tools, provide feedback, earn rewards, and shape the future of AI innovation."
        canonical="https://usergy.ai/community"
        keywords="AI community, AI explorers, AI enthusiasts, AI feedback, AI early access, AI testing"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Community", url: "https://usergy.ai/community" }
        ]}
        pageType="WebPage"
      />
      <Header />
      <main role="main">
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
