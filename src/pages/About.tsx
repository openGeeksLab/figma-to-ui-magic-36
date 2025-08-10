import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const plugin = React.useRef(Autoplay({ delay: 70000, stopOnInteraction: true }));

  const images = [
    {
      src: "/lovable-uploads/1aed7f42-8ce9-4786-9b6c-63d07c28d2c1.png",
      alt: "Modern wooden house with stone foundation"
    },
    {
      src: "/lovable-uploads/349c3aec-dd39-4d32-9ccd-aa47ec139e57.png",
      alt: "Contemporary wood-clad house"
    },
    {
      src: "/lovable-uploads/a9bc92c2-f3e1-405d-a0b4-38d5614ac1be.png",
      alt: "Modern wooden house with warm lighting"
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Carousel */}
     <section className="relative w-full px-8 max-md:px-5 max-sm:px-4">
  <Carousel 
    plugins={[plugin.current]}
    className="w-full h-full max-sm:h-[200px] max-md:h-[200px]"  // ✅ Set mobile height
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
  >
    <CarouselContent className="h-full">
      {images.map((image, index) => (
        <CarouselItem key={index} className="h-full">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover max-md:h-[200px] rounded-[28px]"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  
  <div className="absolute bottom-8 left-16 max-md:left-10 max-sm:bottom-4 max-sm:left-5 z-10">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-[22px] bg-white px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-[28px] leading-tight">
      {t('aboutUs')} <span className="text-[#DCB481]">{t('aboutUsHighlight')}</span>
    </h1>
  </div>
</section>

      
     {/* SECTION 0: Heading + About text */}
<section className="w-full flex justify-between items-start px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex items-start max-md:w-full">
    <h1 className="text-[#454545] text-[42px] font-bold leading-tight max-md:text-[32px] max-sm:text-2xl text-left">
      {t('simplyMadePrefix')} <span className="text-[#DCB481]">{t('simplyMadeHighlight')}</span><br />{t('simplyMadeSuffix')}
    </h1>
  </div>
  <div className="flex-1 flex flex-col gap-6 max-md:w-full">
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('aboutFirstParagraph')}
    </p>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('aboutSecondParagraph')}
    </p>
  </div>
</section>

{/* SECTION 1: Image left, Text right */}
<section className="w-full flex justify-between items-center px-8 py-12 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[30px] max-sm:py-5">
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
      alt="Vision"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full mr-36 max-md:mr-0">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      {t('ourVisionPrefix')} <span className="text-[#DCB481]">{t('ourVisionHighlight')}</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('visionParagraph')}
    </p>
  </div>
</section>

{/* SECTION 2: Text left, Image right */}
<section className="w-full flex justify-between items-center px-8 py-12 gap-12 max-md:flex-col-reverse max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[30px] max-sm:py-5">
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full ml-36 max-md:ml-0">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      {t('ourValuesPrefix')} <span className="text-[#DCB481]">{t('ourValuesHighlight')}</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('valuesParagraph')}
    </p>
    
  </div>
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/d1f3649f-8d67-4d19-b1ea-291d1bfc5b02.png"
      alt="Values"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
</section>

{/* SECTION 3: Image left, Text right */}
<section className="w-full flex justify-between items-center px-8 py-12 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[30px] max-sm:py-5">
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/11f4848a-da9c-4f0c-b73b-f4b0fd9607a9.png"
      alt="Sustainability"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full mr-36 max-md:mr-0">
      <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      {t('weProvidePrefix')} <span className="text-[#DCB481]">{t('weProvideHighlight')}</span>
    </h2>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
  <ul className="list-disc ml-6">
    <li>{t('provideItem1')}</li>
    <li>{t('provideItem2')}</li>
    <li>{t('provideItem3')}</li>
    <li>{t('provideItem4')}</li>
  </ul>
</div>
  </div>
</section>

{/* SECTION 4: Text left, Image right - We Provide */}
<section className="w-full flex justify-between items-center px-8 py-12 gap-12 max-md:flex-col-reverse max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[30px] max-sm:py-5">
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full ml-36 max-md:ml-0">
  <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      {t('sustainability')}
    </h2>
    <div className="flex-1 flex flex-col gap-6 max-md:w-full">
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('sustainabilityParagraph1')}
    </p>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('sustainabilityParagraph2')} 
    </p>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('sustainabilityParagraph3')}
    </p>
  </div>
  </div>
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/2eb8c2fe-8f62-4be5-8612-4f1e40c9530a.png"
      alt="Modern wooden house in forest setting"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;