import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import IntroSection from '@/components/IntroSection';
import ContentSection from '@/components/ContentSection';
import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useTranslation();
  return <div className="flex w-full max-w-full flex-col items-center mx-auto my-0 min-h-screen overflow-x-hidden">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap" />
      
      <div className="flex flex-col items-center w-full bg-white">
        <Header />
        
        <main>
          <Hero />
          
          <Features />
          
          <IntroSection />
          
          <ImageGallery />
          
          <section className="flex flex-col items-center gap-16 w-full px-8 py-24 max-xl:px-6 max-lg:px-6 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10">
            <header className="w-full max-w-[778px] text-[#454545] text-center text-[42px] font-bold max-md:w-full max-md:text-[32px] max-sm:text-2xl">
              <h2>
                <span className="text-[#454545]">{t('enhanceWoodTitle').split(t('enhanceWoodHighlight'))[0]}</span>
                <span className="text-[#DCB481]">{t('enhanceWoodHighlight')} </span>
                <span className="text-[#454545]">{t('enhanceWoodTitle').split(t('enhanceWoodHighlight'))[1]}</span>
              </h2>
            </header>
            
            <div className="flex justify-center items-start w-full max-md:flex-col max-md:gap-10">
              <article className="flex flex-col items-center gap-6 flex-1 px-5 py-0 border-r-[#E5E4E0] border-r border-solid max-md:px-0 max-md:py-5 max-md:border-r-[none] max-md:border-b-[#E5E4E0] max-md:border-b max-md:border-solid">
                <div aria-hidden="true">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3335 3H3.3335V6M18.3335 3H21.3335V6M6.3335 21H3.3335V18M18.3335 21H21.3335V18M12.8485 17.691L16.8485 15.291C16.9964 15.2021 17.1188 15.0765 17.2038 14.9263C17.2888 14.7762 17.3335 14.6066 17.3335 14.434V10.566C17.3335 10.3934 17.2888 10.2238 17.2038 10.0737C17.1188 9.92349 16.9964 9.79786 16.8485 9.709L12.8485 7.309C12.693 7.21556 12.5149 7.16619 12.3335 7.16619C12.1521 7.16619 11.974 7.21556 11.8185 7.309L7.8185 9.709C7.67059 9.79786 7.54819 9.92349 7.4632 10.0737C7.37821 10.2238 7.33353 10.3934 7.3335 10.566V14.434C7.33363 14.6066 7.37847 14.7763 7.46363 14.9265C7.5488 15.0767 7.6714 15.2023 7.8195 15.291L11.8195 17.691C11.9748 17.7841 12.1524 17.8332 12.3335 17.8332C12.5145 17.8332 12.6922 17.7841 12.8475 17.691" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.8335 10.5L12.3335 13M12.3335 13C12.3335 13 16.0975 10.95 16.8335 10.5M12.3335 13V17.5" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-[#454545] text-center text-xl font-bold">{t('enhancedDurability')}</h3>
                   <p className="text-[#454545] text-center text-base font-normal leading-[23.36px]">
                   {t('enhancedDurabilityDesc')}
                   </p>
                </div>
              </article>
              
              <article className="flex flex-col items-center gap-6 flex-1 px-5 py-0 border-r-[#E5E4E0] border-r border-solid max-md:px-0 max-md:py-5 max-md:border-r-[none] max-md:border-b-[#E5E4E0] max-md:border-b max-md:border-solid">
                <div aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 20H3V6L12 4L21 6V20H18M6 20H18M6 20V16M18 20V16M6 16V12M6 16H18M18 16V12M6 12V8H18V12M6 12H18" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-[#454545] text-center text-xl font-bold">{t('unmatchedStability')}</h3>
                   <p className="text-[#454545] text-center text-base font-normal leading-[23.36px]">
                   {t('unmatchedStabilityDesc')}
                   </p>
                </div>
              </article>
              
              <article className="flex flex-col items-center gap-6 flex-1 px-5 py-0 border-r-[#E5E4E0] border-r border-solid max-md:px-0 max-md:py-5 max-md:border-r-[none] max-md:border-b-[#E5E4E0] max-md:border-b max-md:border-solid last:border-r-0">
                <div aria-hidden="true">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6665 21.9998V11.9998M12.6665 11.9998V7.99981M12.6665 11.9998L15.6665 8.99981M13.0905 18.5758L19.2595 12.4068C19.8112 11.8551 20.2393 11.1924 20.5153 10.4627C20.7913 9.7329 20.909 8.95279 20.8605 8.17408C20.8119 7.39538 20.5984 6.6359 20.2339 5.94604C19.8694 5.25619 19.3624 4.65174 18.7465 4.17281C17.0081 2.82089 14.8687 2.08691 12.6665 2.08691C10.4643 2.08691 8.32491 2.82089 6.58651 4.17281C5.97059 4.65174 5.46358 5.25619 5.09912 5.94604C4.73465 6.6359 4.52108 7.39538 4.47256 8.17408C4.42405 8.95279 4.5417 9.7329 4.81772 10.4627C5.09374 11.1924 5.5218 11.8551 6.07351 12.4068L12.2425 18.5758C12.355 18.6882 12.5075 18.7513 12.6665 18.7513C12.8255 18.7513 12.978 18.6882 13.0905 18.5758Z" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-[#454545] text-center text-xl font-bold">{t('sustainabilityFeature')}</h3>
                   <p className="text-[#454545] text-center text-base font-normal leading-[23.36px]">
                   {t('sustainabilityFeatureDesc')}
                   </p>
                </div>
              </article>
            </div>
          </section>
          
          <ContentSection title="Effortless installation with unparalleled lightweight superiority" highlightedWord="unparalleled" description="Using only heat and steam, we've developed an exclusive method that enhances the natural properties of wood to an unprecedented level. By removing moisture from the wood cells, we've created a product that's not only durable and stable but also beautiful and sustainable, all without the use of any chemicals. Our technology is the result of years of research and development, which we're proud to say is the finest and most advanced in the market." imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/09dc51976a6b021b8cbe252d7d9de56cb807652f?width=1078" imageAlt="Wood panel installation demonstration" useTranslation={true} translationKey="effortlessInstallationTitle" highlightTranslationKey="effortlessInstallationHighlight" descriptionTranslationKey="enhanceWoodDescription" />
          
          <ContentSection title="The House in the Heart of Stockholm's Archipelago" highlightedWord="in the Heart of Stockholm's Archipelago" description="In the hearts of the archipelago the materials had to be strong enough to withstand the harsh weather conditions, yet lightweight enough to facilitate installation. After extensive testing, they selected Thermowood F-3 smooth planed profiles in combination with three different dimensions 90 mm, 115 mm, and 140 mm for its durability, resistance to the elements, and aesthetic appeal. The result is a stunning and functional venue that offers relaxing and close-to-nature feeling." imageUrl="/lovable-uploads/e30f97b1-5531-4ac9-a9f6-9991fa3cf92d.png" imageAlt="Mountain house with thermowood cladding" reverse={true} useTranslation={true} translationKey="stockholmHouse" highlightTranslationKey="stockholmHouseHighlight" descriptionTranslationKey="stockholmHouseDescription" />
          
          <ContentSection title="We enhance wood naturally with heat, steam, and nothing else" highlightedWord="wood naturally" description="Using only heat and steam, we've developed an exclusive method that enhances the natural properties of wood to an unprecedented level. By removing moisture from the wood cells, we've created a product that's not only durable and stable but also beautiful and sustainable, all without the use of any chemicals. Our technology is the result of years of research and development, which we're proud to say is the finest and most advanced in the market." imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a198877c4ebc32a9e02e15743f9b5792f6eb3b1d?width=1078" imageAlt="Sustainable wood processing facility" useTranslation={true} translationKey="enhanceWoodTitle" highlightTranslationKey="enhanceWoodHighlight" descriptionTranslationKey="enhanceWoodDescription" />
          
          <section className="w-full relative h-[655px] rounded-[28px] max-md:h-[600px] max-sm:h-[550px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/99469a5d7bec7a772eece7e4e3da6594e67fdfee?width=3338" alt="Lunawood Thermowood Ca l'Amo Ibiza project" className="w-full h-[655px] absolute object-cover rounded-[41px] left-0 top-0" />
            <article className="inline-flex flex-col items-start absolute w-full max-w-[684px] h-auto min-h-[345px] right-[105px] top-[270px] max-xl:right-8 max-xl:w-[calc(100%_-_64px)] max-md:w-[calc(100%_-_40px)] max-md:right-5 max-md:top-[150px] max-sm:w-[calc(100%_-_32px)] max-sm:right-4 max-sm:top-[100px]">
              <header className="flex flex-col items-start gap-[15px] w-full bg-white p-5 rounded-[28px_28px_0px_0px]">
                <h2 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-xl">
                  <span className="text-[#DCB481]">{t('catalogHighlight')}</span>
                  <span className="text-[#454545]">{t('catalogTitle').split(t('catalogHighlight'))[1]}</span>
                </h2>
              </header>
              {/* <div className="flex justify-center items-center gap-2.5 w-full bg-white p-5 rounded-[0px_28px_28px_0px]"> */}
                {/* <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
                You can get the catalogue with our panels here.

                </p> */}
              {/* </div> */}
              <div className="flex flex-col items-start gap-2.5 w-full bg-white p-5 rounded-[0px_0px_28px_28px]">
              <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
                {t('catalogDescription')}
              </p>
                <Link to="/products">
                  <button className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-xl font-normal hover:bg-[#c9a373] transition-colors">
                    {t('getSample')}
                  </button>
                </Link>
              </div>
            </article>
          </section>
          
          <div className="w-full px-8 py-24 max-xl:px-6 max-lg:px-6 max-md:px-5 max-sm:px-4 max-md:py-16 max-sm:py-12 mx-0 my-[56px]">
            <ContactForm />
          </div>
        </main>
        
        <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-xl:px-6 max-lg:px-6 max-sm:px-4 max-sm:py-0">
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>;
};
export default Index;