import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Are exterior wood wall panels weather-resistant?",
      answer: "Yes! Our panels are designed to withstand various weather conditions, including rain, humidity, and temperature fluctuations. Proper maintenance will enhance longevity."
    },
    {
      question: "How do I maintain wood wall panels?",
      answer: "Regular cleaning with mild soap and water, periodic inspection for damage, and occasional resealing or refinishing will keep your panels looking great for years."
    },
    {
      question: "Can I install the panels myself?",
      answer: "While DIY installation is possible for experienced builders, we recommend professional installation to ensure proper mounting, weatherproofing, and warranty coverage."
    },
    {
      question: "Are the materials sustainably sourced?",
      answer: "Absolutely! All our wood is sourced from responsibly managed forests with proper certifications. Our thermal modification process uses only heat and steam, no chemicals."
    },
    {
      question: "What is the lifespan of exterior wood wall panels?",
      answer: "With proper installation and maintenance, our thermally modified wood panels can last 25-30 years or more, significantly longer than traditional wood products."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex h-[511px] justify-between items-start w-full px-0 py-24 max-md:flex-col max-md:gap-10 max-md:h-auto max-md:px-0 max-md:py-[60px] max-sm:px-0 max-sm:py-10">
      <header className="w-[477px] text-[#454545] text-[42px] font-bold max-md:w-full max-md:text-[32px] max-sm:text-2xl">
        <h2>
          <span className="text-[#454545]">Still a </span>
          <span className="text-[#DCB481]">question</span>
          <span className="text-[#454545]">? Here are the answers</span>
        </h2>
      </header>
      
      <div className="flex w-[820px] flex-col justify-center items-start border-b-[#858480] border-b border-solid max-md:w-full">
        {faqItems.map((item, index) => (
          <article
            key={index}
            className="flex w-[820px] flex-col items-start gap-4 px-0 py-3 border-t-[#858480] border-t border-solid max-md:w-full"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-[820px] justify-between items-center max-md:w-full text-left focus:outline-none focus:ring-2 focus:ring-[#DCB481] rounded"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-[#454545] text-xl font-bold max-sm:text-lg">
                {item.question}
              </h3>
              <div className="flex-shrink-0 ml-4" aria-hidden="true">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path 
                    d={openIndex === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} 
                    stroke="#454545" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="text-[#454545] text-base font-normal leading-[23.36px] w-full max-sm:text-sm animate-in slide-in-from-top-2 duration-200"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {item.answer}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
