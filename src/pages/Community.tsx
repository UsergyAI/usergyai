
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
      
      {/* FAQPage JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need to pay to join?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, it's completely free for enthusiasts. In fact, you might earn rewards for participating. Our platform charges companies (founders) for campaign support, not community members."
              }
            },
            {
              "@type": "Question", 
              "name": "How do I get invited to projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "After completing your profile, our matching algorithm connects you with relevant AI projects based on your interests and skills. You'll receive personalized email invitations with project details and participation requirements."
              }
            },
            {
              "@type": "Question",
              "name": "How much time do I need to commit?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As much or as little as you want. You can participate in short tests (e.g., 30 minutes) or longer trials over weeks - it's up to you which opportunities you accept. There's no mandatory quota."
              }
            },
            {
              "@type": "Question",
              "name": "What kinds of AI projects will I get to test?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "All sorts! From AI art generators to productivity apps to advanced chatbots - if it's a cutting-edge AI tool, it could show up here. You'll always see a description of a project before joining a test."
              }
            },
            {
              "@type": "Question",
              "name": "I'm an AI founder - can I also join or get help?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. If you're building an AI product, check out our Services page to see how Usergy can help you get feedback and users. Many founders also hang out in the community to interact with users - you're welcome to do the same!"
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure participant quality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use a multi-step vetting process including profile verification, skill assessments, and ongoing quality monitoring. Participants who consistently provide valuable feedback earn higher ratings and access to premium opportunities."
              }
            }
          ]
        })}
      </script>
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
