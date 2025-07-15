import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Products = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

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
          className="w-full h-full max-sm:h-[200px] max-md:h-[200px]"
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
            Our <span className="text-[#DCB481]">Products</span>
          </h1>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="w-full flex justify-between items-start px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
        <div className="flex-1 flex items-start max-md:w-full">
          <h1 className="text-[#454545] text-[42px] font-bold leading-tight max-md:text-[32px] max-sm:text-2xl text-left">
            Premium <span className="text-[#DCB481]">exterior</span><br />wood panels
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-6 max-md:w-full">
          <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            Discover our comprehensive range of thermally modified wood wall panels, designed to enhance any exterior with natural beauty and exceptional durability. Each product is crafted with precision and backed by years of expertise.
          </p>
          <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            From residential homes to commercial buildings, our panels offer versatile solutions that combine aesthetic appeal with superior weather resistance and sustainability.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-8 max-md:px-5 max-sm:px-4">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Products;