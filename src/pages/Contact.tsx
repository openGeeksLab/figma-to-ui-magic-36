import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Contact = () => {
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
    <div className="flex w-full max-w-[1728px] flex-col items-center mx-auto my-0 min-h-screen">
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
              {images.map((image, index) => (
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
              {t('contactUs')} <span className="text-[#DCB481]">{t('contactUsHighlight')}</span>
            </h1>
          </div>
        </section>
        
        {/* Get in touch section */}
        <section className="w-full px-8 py-24 max-md:px-5 max-sm:px-4 max-md:py-16 max-sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl mb-4">
                {t('getInTouch')} <span className="text-[#DCB481]">{t('getInTouchHighlight')}</span>
              </h2>
              <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base max-w-3xl mx-auto">
                {t('contactDescription')}
              </p>
            </div>
            
            {/* Contact info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DCB481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-[#454545] text-xl font-bold mb-2">{t('callUs')}</h3>
                <p className="text-[#454545] text-base">+46 70 494 84 98</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DCB481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[#454545] text-xl font-bold mb-2">{t('emailUs')}</h3>
                <p className="text-[#454545] text-base">info@nordicthermotra.se</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DCB481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[#454545] text-xl font-bold mb-2">{t('contactAddress')}</h3>
                <p className="text-[#454545] text-base">Annelötsvägen 61 Grödinge Stockholm</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DCB481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#454545] text-xl font-bold mb-2">{t('operatingHours')}</h3>
                <p className="text-[#454545] text-base">9:00AM - 7:00PM EST</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
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

export default Contact;