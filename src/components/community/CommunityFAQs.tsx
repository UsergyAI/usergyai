
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
      question: "Do I need to pay to join?",
      answer: "No, it's completely free for enthusiasts. In fact, you might earn rewards for participating. Our platform charges companies (founders) for campaign support, not community members."
    },
    {
      question: "How do I get invited to projects?",
      answer: "After completing your profile, our matching algorithm connects you with relevant AI projects based on your interests and skills. You'll receive personalized email invitations with project details and participation requirements."
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
      question: "How do you ensure participant quality?",
      answer: "We use a multi-step vetting process including profile verification, skill assessments, and ongoing quality monitoring. Participants who consistently provide valuable feedback earn higher ratings and access to premium opportunities."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-usergy-skyblue rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-usergy-turquoise rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-usergy-turquoise/30 transition-colors bg-white/80 backdrop-blur-sm hover:shadow-lg"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-usergy-dark hover:text-usergy-turquoise py-6 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-skyblue/30 to-transparent"></div>
    </section>
  );
};

export default CommunityFAQs;
