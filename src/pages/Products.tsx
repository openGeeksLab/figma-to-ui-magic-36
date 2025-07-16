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


      {/* Products Preview Section */}
      <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex gap-4 mb-12 flex-wrap max-sm:gap-2">
            <button className="bg-[#454545] text-white px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-[#363636] transition-colors">
              All Products
            </button>
            <button className="bg-gray-100 text-[#454545] px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-gray-200 transition-colors">
              Fasad
            </button>
            <button className="bg-gray-100 text-[#454545] px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-gray-200 transition-colors">
              Cladding
            </button>
            <button className="bg-gray-100 text-[#454545] px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-gray-200 transition-colors">
              Decking
            </button>
            <button className="bg-gray-100 text-[#454545] px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-gray-200 transition-colors">
              Accessories
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden relative">
              <img 
                src="/lovable-uploads/04e0d11f-7bea-4c62-ba5e-4132c7813742.png" 
                alt="Thermotra Thermowood F-1" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Thermotra Thermowood F-1</h3>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <div className="flex gap-1">
                <div className="w-4 h-12 bg-[#DCB481] rounded-sm opacity-80"></div>
                <div className="w-4 h-12 bg-[#DCB481] rounded-sm opacity-80"></div>
                <div className="w-4 h-12 bg-[#DCB481] rounded-sm opacity-80"></div>
                <div className="w-4 h-12 bg-[#DCB481] rounded-sm opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Thermowood Decking</h3>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <div className="w-20 h-12 bg-[#DCB481] rounded-sm opacity-80 relative">
                <div className="absolute top-2 left-2 w-16 h-8 bg-[#B8956B] rounded-sm"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Fasad Cladding</h3>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <div className="w-20 h-12 bg-[#DCB481] rounded-sm opacity-80 relative">
                <div className="absolute bottom-0 left-2 w-3 h-10 bg-[#B8956B] rounded-sm"></div>
                <div className="absolute bottom-0 right-2 w-3 h-10 bg-[#B8956B] rounded-sm"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Vertical Cladding</h3>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <div className="w-20 h-12 bg-[#DCB481] rounded-sm opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Thermowood Plank</h3>
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <div className="w-20 h-12 bg-[#DCB481] rounded-sm opacity-80 relative">
                <div className="absolute top-2 left-2 w-16 h-8 bg-[#B8956B] rounded-sm"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <h3 className="text-sm font-medium">Premium Fasad</h3>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 max-md:px-5 max-sm:px-4">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Products;