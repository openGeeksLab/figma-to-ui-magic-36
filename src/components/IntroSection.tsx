import React from 'react';
import { useTranslation } from 'react-i18next';
import SampleRequestPopup from './SampleRequestPopup';

const IntroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between items-start gap-24 w-full px-8 py-24 max-xl:px-6 max-lg:px-6 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
      <div className="flex-1 max-md:w-full">
        <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
          {t('intro.title')}
        </h2>
      </div>
      
      <div className="flex flex-col items-start gap-8 flex-1">
        <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
          {t('intro.description')}
        </div>
        
        <SampleRequestPopup>
          <button className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-base font-normal hover:bg-[#c9a373] transition-colors">
            {t('nav.sample')}
          </button>
        </SampleRequestPopup>
      </div>
    </section>
  );
};

export default IntroSection;