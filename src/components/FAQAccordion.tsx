
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How are participant sessions counted?",
      answer: "Each participant session is counted individually. For example, if you select 20 users, we recruit and manage 20 unique participants throughout your campaign period. This ensures you get genuine, diverse feedback from real users who match your target audience."
    },
    {
      question: "What exactly does 'Community Setup & Onboarding' involve?",
      answer: "We create and configure your dedicated community space, establish expert moderation guidelines, create initial content and engagement prompts, and provide comprehensive onboarding for your first members. Our team handles all the technical setup and community management strategies to ensure your community thrives from day one."
    },
    {
      question: "Do social tasks include ad spend?",
      answer: "No, our agency fees cover strategic planning, creative development, and task management only. If paid amplification is needed for your campaign, you provide the ad spend budget while we handle the complete strategy, creative execution, and campaign optimization to maximize your ROI."
    },
    {
      question: "How quickly can a campaign launch after booking?",
      answer: "Most campaigns launch within 5-7 business days after your strategy call completion and approval of the campaign brief. Complex community setups may take 10-14 days. We prioritize speed-to-market while ensuring quality execution that drives real results for your AI product."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee within the first 7 days of campaign launch. If you're not satisfied with our initial deliverables and strategic approach, we'll work diligently to make it right or provide a full refund. Your success is our priority, and we stand behind our work."
    },
    {
      question: "Can I upgrade or downgrade my plan during a project?",
      answer: "Absolutely! You can upgrade your plan at any time by paying the difference, allowing you to scale your traction efforts as opportunities arise. Downgrades are handled on a case-by-case basis depending on campaign progress and deliverables already completed."
    },
    {
      question: "What makes Usergy different from other agencies?",
      answer: "Unlike fragmented solutions that cost thousands monthly, Usergy provides integrated expertise across feedback, community building, and social amplification at a fraction of traditional costs. We specialize exclusively in AI products, understanding your unique challenges and growth needs."
    },
    {
      question: "How do you ensure participant quality?",
      answer: "We use rigorous screening processes to match participants with your target demographic and use case. Our recruitment process includes verification steps, interest validation, and engagement history review to ensure you receive high-quality, actionable feedback from genuinely interested users."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-2xl border-2 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
              openIndex === index 
                ? 'border-usergy-turquoise/30 shadow-usergy-turquoise/10' 
                : 'border-gray-100 hover:border-usergy-turquoise/20'
            }`}
          >
            <button
              className="w-full py-8 px-10 text-left flex justify-between items-center hover:bg-gray-50/50 transition-all duration-250 ease-in-out rounded-2xl group"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-bold text-usergy-dark pr-6 group-hover:text-usergy-turquoise transition-colors leading-relaxed">
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-250 ease-in-out ${
                openIndex === index 
                  ? 'bg-usergy-turquoise text-white rotate-180' 
                  : 'bg-gray-100 text-usergy-dark group-hover:bg-usergy-turquoise/10'
              }`}>
                {openIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-10 pb-8 animate-accordion-down">
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
