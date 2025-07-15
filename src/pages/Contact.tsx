import React from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Contact = () => {
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
      <section className="relative w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] px-8 max-md:px-5 max-sm:px-4">
        <Carousel 
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-[28px]"
                />
                <div className="absolute bottom-8 left-16 max-md:left-13 max-sm:bottom-4 max-sm:left-8">
                  <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl bg-white px-5 py-3 rounded-[28px]">
                    Contact <span className="text-[#DCB481]">Us</span>
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;