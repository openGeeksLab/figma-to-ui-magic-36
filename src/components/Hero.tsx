import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import SampleRequestPopup from './SampleRequestPopup';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const plugin = React.useRef(
    Autoplay({ delay: 470000, stopOnInteraction: true })
  );

  return (
    <section className="w-full h-[844px] relative rounded-[28px] overflow-hidden max-md:h-[600px] max-sm:h-[500px]" aria-label="Hero section">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full rounded-[28px]"
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
        }}
      >
        <CarouselContent className="h-full rounded-[28px]">
          <CarouselItem className="h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cc0c9ae0b327a4d86bd24feb262b1e431a376d?width=3328"
              alt="Sustainable wood building facade"
              className="w-full h-[844px] object-cover max-md:h-[600px] max-sm:h-[500px]"
            />
          </CarouselItem>
          <CarouselItem className="h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73537d7f2c3068f85d9e5cfd7c6358027d8135a6?width=3348"
              alt="Western Red Cedar Siding application"
              className="w-full h-[844px] object-cover max-md:h-[600px] max-sm:h-[500px]"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      
      <div className="flex w-full max-w-[685px] flex-col justify-end items-start absolute h-auto min-h-[425px] left-10 top-[190px] max-[1400px]:left-4 max-[1400px]:w-[calc(100%_-_32px)] max-xl:left-8 max-xl:w-[calc(100%_-_64px)] max-lg:left-6 max-lg:w-[calc(100%_-_48px)] max-md:w-[90%] max-md:h-auto max-md:left-5 max-md:top-[100px] max-sm:w-[calc(100%_-_32px)] max-sm:left-4 max-sm:bottom-10 max-sm:top-auto z-10">
        <div className="flex flex-col items-start gap-[15px] bg-white p-5 rounded-[28px_28px_0px_0px]">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
            <span className="text-[#454545]">Naturligt hållbar,</span>
            <br />
            <span className="text-[#DCB481]">Pålitlig,</span>
            <br />
            <span className="text-[#454545]">Hållbar tack vare teknik</span>
          </h1>
        </div>
        
        <div className="flex h-[157px] justify-center items-center gap-2.5 w-full bg-white p-5 rounded-[0px_28px_28px_0px]">
          <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-md:text-base max-sm:text-sm">
          Powered by cutting-edge technology. Experience the strength of science with our ultra-stable, thermally modified wood.Driven by innovation, our wood combines advanced science and precision engineering for unmatched performance
          </p>
        </div>
        
        <div className="flex flex-col items-start gap-2.5 bg-white p-5 rounded-[0px_0px_28px_28px]">
          <SampleRequestPopup>
            <button className="flex w-[326px] h-[52px] justify-center items-center gap-2.5 bg-[#DCB481] px-8 py-[18px] rounded-[28px] max-sm:w-full text-[#454545] text-xl font-normal hover:bg-[#c9a373] transition-colors">
              {t('getFreeSample')}
            </button>
          </SampleRequestPopup>
        </div>
      </div>
    </section>
  );
};

export default Hero;
