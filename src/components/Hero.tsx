import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="w-full max-w-[1664px] h-[844px] relative rounded-[28px] max-md:h-[600px] max-sm:h-[500px]" aria-label="Hero section">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="h-full">
          <CarouselItem className="h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cc0c9ae0b327a4d86bd24feb262b1e431a376d?width=3328"
              alt="Sustainable wood building facade"
              className="w-full h-[844px] object-cover rounded-[28px] max-md:h-[600px] max-sm:h-[500px]"
            />
          </CarouselItem>
          <CarouselItem className="h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73537d7f2c3068f85d9e5cfd7c6358027d8135a6?width=3348"
              alt="Western Red Cedar Siding application"
              className="w-full h-[844px] object-cover rounded-[28px] max-md:h-[600px] max-sm:h-[500px]"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      
      <div className="flex w-[685px] flex-col justify-end items-start absolute h-[425px] left-10 top-[190px] max-md:w-[90%] max-md:h-auto max-md:left-5 max-md:top-[100px] max-sm:w-[calc(100%_-_32px)] max-sm:left-4 max-sm:bottom-10 max-sm:top-auto z-10">
        <div className="flex flex-col items-start gap-[15px] bg-white p-5 rounded-[28px_28px_0px_0px]">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
            <span className="text-[#454545]">Sustainable by nature,</span>
            <br />
            <span className="text-[#DCB481]">guaranteed</span>
            <br />
            <span className="text-[#454545]">durable by technology</span>
          </h1>
        </div>
        
        <div className="flex h-[157px] justify-center items-center gap-2.5 w-full bg-white p-5 rounded-[0px_28px_28px_0px]">
          <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-md:text-base max-sm:text-sm">
            Proin felis metus, cursus sed justo at, dignissim pellentesque tortor. Praesent cursus felis diam, eu venenatis sem faucibus vitae. Sed varius augue ex, ac pulvinar mauris lobortis in. Aliquam erat volutpat. Fusce ex justo, eleifend a tristique ultricies, ultrices ut lectus. Mauris nec magna dolor. Duis eget orci ut augue ultrices finibus.
          </p>
        </div>
        
        <div className="flex flex-col items-start gap-2.5 bg-white p-5 rounded-[0px_0px_28px_28px]">
          <button className="flex w-[326px] h-[52px] justify-center items-center gap-2.5 bg-[#DCB481] px-8 py-[18px] rounded-[28px] max-sm:w-full text-[#454545] text-xl font-normal hover:bg-[#c9a373] transition-colors">
            Get a free sample
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
