
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
            className={`bg-card rounded-2xl border-2 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
              openIndex === index 
                ? 'border-primary/30 shadow-primary/10' 
                : 'border-border hover:border-primary/20'
            }`}
          >
            <button
              className="w-full py-6 px-8 text-left flex justify-between items-center hover:bg-muted/50 transition-colors rounded-2xl group"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-bold text-foreground pr-6 group-hover:text-primary transition-colors leading-relaxed">
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-primary text-primary-foreground rotate-180' 
                  : 'bg-muted text-foreground group-hover:bg-muted'
              }`}>
                {openIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-6 animate-accordion-down">
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed font-medium">
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
