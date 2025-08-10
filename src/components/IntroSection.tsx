import React from 'react';
import SampleRequestPopup from './SampleRequestPopup';
import { useTranslation } from 'react-i18next';

const IntroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between items-start gap-24 w-full px-8 py-24 max-xl:px-6 max-lg:px-6 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
      <div className="flex-1 max-md:w-full">
        <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
          <span className="text-[#454545]">We enhance </span>
          <span className="text-[#DCB481]">wood naturally</span>
          <span className="text-[#454545]"> with heat, steam, and nothing else</span>
        </h2>
      </div>
      
      <div className="flex flex-col items-start gap-8 flex-1">
        <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
          Using only heat and steam, we've developed an exclusive method that enhances the natural properties of wood to an unprecedented level. By removing moisture from the wood cells, we've created a product that's not only durable and stable but also beautiful and sustainable, all without the use of any chemicals. Our technology is the result of years of research and development, which we're proud to say is the finest and most advanced in the market.
        </div>
        
        <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
          Creates a connection between urban life and nature. Grown and strengthened in the harsh climate of Finland, the renewable Nordic forest provides us the best wood material, which we enhance with heat and steam only. Lunawood offers an easy-to-maintain, long-lasting and thoroughly sustainable wood products for all climates.
        </div>
        
        <SampleRequestPopup>
          <button className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-base font-normal hover:bg-[#c9a373] transition-colors">
            {t('getFreeSample')}
          </button>
        </SampleRequestPopup>
      </div>
    </section>
  );
};

export default IntroSection;