
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommunityHero from '@/components/community/CommunityHero';
import WhyUsergy from '@/components/community/WhyUsergy';
import HowItWorks from '@/components/community/HowItWorks';
import RewardsSection from '@/components/community/RewardsSection';
import UsergyDifference from '@/components/community/UsergyDifference';
import ExplorerTestimonials from '@/components/community/ExplorerTestimonials';
import CommunityFAQs from '@/components/community/CommunityFAQs';
import FinalCTA from '@/components/community/FinalCTA';
import StructuredData from '@/components/StructuredData';

const Community = () => {
  return (
    <div className="min-h-screen section-wash">
      <Helmet>
        <title>Join Our AI Explorer Community | Usergy</title>
        <meta name="description" content="Join thousands of AI enthusiasts testing cutting-edge products before they launch. Earn rewards, influence development, and connect with fellow explorers at Usergy." />
        <meta name="keywords" content="AI community, AI testing, beta testing, AI feedback, AI enthusiasts, early access, product testing, AI explorers" />
        <link rel="canonical" href="https://usergy.ai/community" />
        
        <meta property="og:title" content="Join Our AI Explorer Community | Usergy" />
        <meta property="og:description" content="Join thousands of AI enthusiasts testing cutting-edge products before they launch. Earn rewards, influence development, and connect with fellow explorers." />
        <meta property="og:url" content="https://usergy.ai/community" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our AI Explorer Community | Usergy" />
        <meta name="twitter:description" content="Join thousands of AI enthusiasts testing cutting-edge products before they launch. Earn rewards, influence development, and connect with fellow explorers." />
        <meta name="twitter:image" content="https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png" />
      </Helmet>

      <StructuredData 
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: 'https://usergy.ai' },
          { name: 'Community', url: 'https://usergy.ai/community' }
        ]}
      />

      <CommunityHero />
      <WhyUsergy />
      <HowItWorks />
      <RewardsSection />
      <UsergyDifference />
      <ExplorerTestimonials />
      <CommunityFAQs />
      <FinalCTA />
    </div>
  );
};

export default Community;
