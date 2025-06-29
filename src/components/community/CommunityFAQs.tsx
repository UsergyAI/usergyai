
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CommunityFAQs = () => {
  const faqs = [
    {
      question: "How do I get invited to projects?",
      answer: "After completing your profile, our matching algorithm connects you with relevant AI projects based on your interests and skills. You'll receive personalized email invitations with project details and participation requirements."
    },
    {
      question: "Do I need to pay to join?",
      answer: "No, it's completely free for enthusiasts. In fact, you might earn rewards for participating. Our platform charges companies (founders) for campaign support, not community members."
    },
    {
      question: "How much time do I need to commit?",
      answer: "As much or as little as you want. You can participate in short tests (e.g., 30 minutes) or longer trials over weeks - it's up to you which opportunities you accept. There's no mandatory quota."
    },
    {
      question: "What kinds of AI projects will I get to test?",
      answer: "All sorts! From AI art generators to productivity apps to advanced chatbots - if it's a cutting-edge AI tool, it could show up here. You'll always see a description of a project before joining a test."
    },
    {
      question: "I'm an AI founder - can I also join or get help?",
      answer: "Absolutely. If you're building an AI product, check out our Services page to see how Usergy can help you get feedback and users. Many founders also hang out in the community to interact with users - you're welcome to do the same!"
    },
    {
      question: "What exactly does 'Community Setup & Onboarding' involve?",
      answer: "We create dedicated spaces (Discord servers, Slack channels, or forums) where your users can interact, ask questions, and provide feedback. Our team manages the setup, moderation, and initial engagement to ensure a thriving community."
    },
    {
      question: "How quickly can a campaign launch after booking?",
      answer: "Most campaigns can launch within 3-5 business days after booking and providing necessary project details. Complex campaigns requiring custom development may take 7-10 days."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with our service within the first 30 days, we'll provide a full refund."
    },
    {
      question: "What makes Usergy different from other agencies?",
      answer: "We specialize exclusively in AI products and maintain a curated community of genuine AI enthusiasts. Our focus on quality over quantity, combined with our founder-centric approach, ensures authentic feedback and meaningful traction."
    },
    {
      question: "How do you ensure participant quality?",
      answer: "We use a multi-step vetting process including profile verification, skill assessments, and ongoing quality monitoring. Participants who consistently provide valuable feedback earn higher ratings and access to premium opportunities."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
            Questions? We've Got Answers
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-usergy-turquoise/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-usergy-dark hover:text-usergy-turquoise py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CommunityFAQs;
