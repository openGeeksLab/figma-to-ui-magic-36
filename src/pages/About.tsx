import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
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
    className="w-full h-full max-sm:h-[280px] max-md:h-[200px]"  // ✅ Set mobile height
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
  
  <div className="absolute bottom-8 left-16 max-md:left-10 max-sm:relative max-sm:bottom-auto max-sm:left-auto max-sm:mt-4 max-sm:px-4 z-10">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-[22px] bg-white px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-[28px] leading-tight">
      About <span className="text-[#DCB481]">Us</span>
    </h1>
  </div>
</section>

      
     {/* SECTION 0: Heading + About text */}
<section className="w-full flex justify-between items-start px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex items-start max-md:w-full">
    <h1 className="text-[#454545] text-[42px] font-bold leading-tight max-md:text-[32px] max-sm:text-2xl text-left">
      Simply <span className="text-[#DCB481]">wooden</span><br />made
    </h1>
  </div>
  <div className="flex-1 flex flex-col gap-6 max-md:w-full">
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      At [Your Company Name], we are passionate about transforming spaces with the natural beauty and durability of exterior wood wall panels. With years of experience in the industry, we specialize in providing high-quality, sustainable wood solutions tailored to meet the unique needs of each client.
    </p>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      We believe in creating outdoor environments that not only look stunning but also stand the test of time. Whether you're enhancing a residential property or a commercial facade, our team is here to bring your vision to life with expert guidance and superior products.
    </p>
  </div>
</section>

{/* SECTION 1: Image left, Text right */}
<section className="w-full flex justify-between items-center px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
      alt="Vision"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full mr-36 max-md:mr-0">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      Our <span className="text-[#DCB481]">Vision</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.
    </p>
  </div>
</section>

{/* SECTION 2: Text left, Image right */}
<section className="w-full flex justify-between items-center px-8 py-24 gap-12 max-md:flex-col-reverse max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full ml-36 max-md:ml-0">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      Our <span className="text-[#DCB481]">Values</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    Commitment, Quality and Responsibility in everything we do. Our core values describe how we should act towards each other and towards our customers, suppliers, and other partners.
    </p>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
  <ul className="list-disc ml-6">
    <li>Tailored solutions that match your architectural style.</li>
    <li>Expert advice to guide you from concept to completion.</li>
    <li>Skilled installation ensuring perfect alignment and durability.</li>
    <li>Keeping your wood panels looking their best year after year.</li>
  </ul>
</div>
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
<section className="w-full flex justify-between items-center px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/11f4848a-da9c-4f0c-b73b-f4b0fd9607a9.png"
      alt="Sustainability"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-lg:w-[400px] max-lg:h-[400px] max-md:w-full max-md:h-[350px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full mr-36 max-md:mr-0">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      {/* Our <span className="text-[#DCB481]">Promise</span> */}
      Sustainability
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.
    </p>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      For us, the environment and sustainability are obvious issues in everyday life. We are not satisfied with wood being a sustainable product, but work long-term with our entire business to contribute to a sustainable society.
      Our raw material comes from responsibly managed forests and is certified.We continuously work to reduce our climate footprint, e.g. by gradually switching to the latest technology and actively influencing our subcontractors.
    </p>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;
