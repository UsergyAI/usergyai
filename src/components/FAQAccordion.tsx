
import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How are participant sessions counted?",
      answer: "Each participant session is counted individually. For example, if you select 20 users, we recruit and manage 20 unique participants throughout your campaign period."
    },
    {
      question: "What exactly does 'Community Setup & Onboarding' involve?",
      answer: "We create and configure your dedicated community space, establish moderation guidelines, create initial content and engagement prompts, and provide comprehensive onboarding for your first members."
    },
    {
      question: "Do social tasks include ad spend?",
      answer: "No, our fees cover agency services and task management only. If paid amplification is needed, you provide the ad spend budget while we handle the strategy and execution."
    },
    {
      question: "How quickly can a campaign launch after booking?",
      answer: "Most campaigns launch within 5-7 business days after strategy call completion and approval of the campaign brief. Complex community setups may take 10-14 days."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee within the first 7 days of campaign launch. If you're not satisfied with our initial deliverables, we'll work to make it right or provide a full refund."
    },
    {
      question: "Can I upgrade or downgrade my plan during a project?",
      answer: "Yes! You can upgrade your plan at any time by paying the difference. Downgrades are handled on a case-by-case basis depending on campaign progress."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-semibold text-usergy-dark pr-4">
              {faq.question}
            </span>
            <span className={`text-usergy-turquoise text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-6">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
