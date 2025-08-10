import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: t('faqQ1'),
      answer: t('faqA1')
    },
    {
      question: t('faqQ2'),
      answer: t('faqA2')
    },
    {
      question: t('faqQ3'),
      answer: t('faqA3')
    },
    {
      question: t('faqQ4'),
      answer: t('faqA4')
    },
    {
      question: t('faqQ5'),
      answer: t('faqA5')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex h-[511px] justify-between items-start w-full px-0 py-24 max-md:flex-col max-md:gap-10 max-md:h-auto max-md:px-0 max-md:py-[60px] max-sm:px-0 max-sm:py-10">
      <header className="w-[477px] text-[#454545] text-[42px] font-bold max-md:w-full max-md:text-[32px] max-sm:text-2xl">
        <h2>
          <span className="text-[#454545]">{t('stillQuestion')} </span>
          <span className="text-[#DCB481]">{t('questionHighlight')}</span>
          <span className="text-[#454545]">{t('questionSuffix')}</span>
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
