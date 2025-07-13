
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
        title="Usergy Community | AI Founders & Enthusiasts Network"
        description="Join the Usergy community of AI founders and enthusiasts. Connect, share insights, and accelerate your AI startup with like-minded innovators."
        canonical="https://usergy.ai/community"
        keywords="AI community, AI explorers, AI enthusiasts, AI feedback, AI early access, AI testing"
        image="https://usergy.ai/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Community", url: "https://usergy.ai/community" }
        ]}
        pageType="FAQPage"
      />
      <Header />
      <main role="main" id="main">
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
