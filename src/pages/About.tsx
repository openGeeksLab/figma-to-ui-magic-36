import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
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
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full">
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
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      Our <span className="text-[#DCB481]">Mission</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      We are committed to providing eco-friendly wood solutions that combine aesthetics, durability, and functionality. Our mission is to enable customers to build beautiful, sustainable spaces with minimal environmental impact.
    </p>
  </div>
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/sample-image-2.png"
      alt="Mission"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
</section>

{/* SECTION 3: Image left, Text right */}
<section className="w-full flex justify-between items-center px-8 py-24 gap-12 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10">
  <div className="flex-1 flex justify-center items-center max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/sample-image-3.png"
      alt="Promise"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
  <div className="flex-1 flex flex-col items-start gap-6 max-md:w-full">
    <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl">
      Our <span className="text-[#DCB481]">Promise</span>
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      Quality, sustainability, and reliability — our promise is to always deliver wood paneling that not only enhances your property but respects the planet and your peace of mind.
    </p>
  </div>
</section>



      </main>
      <Footer />
    </div>
  );
};

export default About;
