import React, { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useGallery } from "@/hooks/useGallery";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const plugin = React.useRef(Autoplay({ delay: 70000, stopOnInteraction: true }));
  const { images, loading } = useGallery();

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

  return (
    <div className="flex w-full max-w-[1728px] flex-col items-center mx-auto my-0 min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center w-full bg-white">
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
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover max-md:h-[200px] rounded-[28px]"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="absolute bottom-8 left-16 max-md:left-13 max-sm:bottom-4 max-sm:left-8 z-10">
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl bg-white px-5 py-3 rounded-[28px]">
              {t('ourGallery')} <span className="text-[#DCB481]">{t('galleryHighlight')}</span>
            </h1>
          </div>
        </section>
        
        {/* Gallery section */}
        <section className="w-full px-8 py-24 max-md:px-5 max-sm:px-4 max-md:py-16 max-sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl mb-4">
                {t('ourProjects')} <span className="text-[#DCB481]">{t('projectsHighlight')}</span>
              </h2>
              <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base max-w-3xl mx-auto">
                {t('galleryDescription')}
              </p>
            </div>
            
            
            {/* Loading state */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              /* Gallery grid */
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {images.map((image, index) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div className="group relative overflow-hidden rounded-[16px] cursor-pointer hover:scale-[1.02] transition-transform duration-300 break-inside-avoid mb-4">
                        <img
                          src={image.image_url}
                          alt={image.title}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          loading={index < 8 ? "eager" : "lazy"}
                          decoding="async"
                          style={{
                            contentVisibility: 'auto',
                            containIntrinsicSize: '300px 200px',
                            ...(index >= 8 && { opacity: 0, transition: 'opacity 0.3s ease-in-out' })
                          }}
                          onLoad={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.opacity = '1';
                          }}
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        
                        
                        {/* Image title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                          {image.description && (
                            <p className="text-white/80 text-xs mt-1">{image.description}</p>
                          )}
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/80">
                      <div className="w-full h-full overflow-auto touch-pan-x touch-pan-y">
                        <img
                          src={image.image_url}
                          alt={image.title}
                          className="min-w-full min-h-full object-contain cursor-grab active:cursor-grabbing"
                          loading="lazy"
                          decoding="async"
                          style={{ 
                            minWidth: 'max(100%, auto)',
                            minHeight: 'max(100%, auto)',
                            touchAction: 'pan-x pan-y'
                          }}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            )}
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
