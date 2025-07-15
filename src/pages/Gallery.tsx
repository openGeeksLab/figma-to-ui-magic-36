import React, { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const heroImages = [
    {
      src: "/lovable-uploads/01971fdd-2225-4207-8884-ed6cc8f94713.png",
      alt: "Modern wooden house with vertical panels in natural setting"
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

  const galleryImages = [
    {
      src: "/lovable-uploads/01971fdd-2225-4207-8884-ed6cc8f94713.png",
      alt: "Modern wooden house with vertical panels in natural setting"
    },
    {
      src: "/lovable-uploads/349c3aec-dd39-4d32-9ccd-aa47ec139e57.png",
      alt: "Contemporary wood-clad house"
    },
    {
      src: "/lovable-uploads/a9bc92c2-f3e1-405d-a0b4-38d5614ac1be.png",
      alt: "Modern wooden house with warm lighting"
    },
    {
      src: "/lovable-uploads/b83a3e1b-84b0-4345-a1a0-e4d631266738.png",
      alt: "Modern wooden house exterior"
    },
    {
      src: "/lovable-uploads/1f9919c1-e70c-44f9-b504-9ae5c6fab3b3.png",
      alt: "Modern house design"
    },
    {
      src: "/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png",
      alt: "Contemporary architecture"
    },
    {
      src: "/lovable-uploads/1aed7f42-8ce9-4786-9b6c-63d07c28d2c1.png",
      alt: "Modern wooden house with stone foundation"
    },
    {
      src: "/lovable-uploads/266af241-4d7b-41f6-9dc5-2936a467e630.png",
      alt: "Modern wooden architecture"
    },
    {
      src: "/lovable-uploads/3952c04f-b5c0-4be9-adfa-6fe82eef0feb.png",
      alt: "Contemporary wooden house design"
    },
    {
      src: "/lovable-uploads/41ff9733-f2d0-474b-bdaa-aa10dac0e929.png",
      alt: "Modern wooden house with glass elements"
    },
    {
      src: "/lovable-uploads/8d0609b8-a6a9-478c-8b36-1b184fd59746.png",
      alt: "Wooden house in natural setting"
    },
    {
      src: "/lovable-uploads/98324750-941a-4426-8bfc-ec88d6d651d3.png",
      alt: "Contemporary wooden architecture"
    },
    {
      src: "/lovable-uploads/b97e8d9c-7a1b-40a8-bbb0-d64df74603e2.png",
      alt: "Modern house with wooden panels"
    },
    {
      src: "/lovable-uploads/cd3dd78f-3059-4fd1-947f-af87071531e3.png",
      alt: "Wooden house exterior design"
    },
    {
      src: "/lovable-uploads/d1f3649f-8d67-4d19-b1ea-291d1bfc5b02.png",
      alt: "Contemporary wooden house"
    },
    {
      src: "/lovable-uploads/ebaf1a4f-ebc2-45b7-a703-6288b90e46fc.png",
      alt: "Modern wooden architecture design"
    }
  ];

  return (
    <div className="flex w-full max-w-[1728px] flex-col items-center mx-auto my-0 min-h-screen">
      <div className="flex flex-col items-center w-full bg-white">
        <Header />
        
        {/* Hero Section with Carousel */}
        <section className="relative w-full px-8 max-md:px-5 max-sm:px-4">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-[28px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="absolute bottom-8 left-16 max-md:left-13 max-sm:bottom-4 max-sm:left-8 z-10">
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl bg-white px-5 py-3 rounded-[28px]">
              Our <span className="text-[#DCB481]">Gallery</span>
            </h1>
          </div>
        </section>
        
        {/* Gallery section */}
        <section className="w-full px-8 py-24 max-md:px-5 max-sm:px-4 max-md:py-16 max-sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl mb-4">
                Our <span className="text-[#DCB481]">Projects</span>
              </h2>
              <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base max-w-3xl mx-auto">
                Explore our stunning collection of wooden panel projects. Each design showcases the natural beauty and versatility of wood in modern architecture.
              </p>
            </div>
            
            {/* Gallery grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group relative overflow-hidden rounded-[16px] cursor-pointer hover:scale-[1.02] transition-transform duration-300 break-inside-avoid mb-4">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/80">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
        
        <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Gallery;