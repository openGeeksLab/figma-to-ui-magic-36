import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] px-8 max-md:px-5 max-sm:px-4">
        <img
          src="/lovable-uploads/3952c04f-b5c0-4be9-adfa-6fe82eef0feb.png"
          alt="Modern wooden house"
          className="w-full h-full object-cover rounded-[28px]"
        />
        <div className="absolute bottom-8 left-16 max-md:left-13 max-sm:bottom-4 max-sm:left-8">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl bg-white px-5 py-3 rounded-[28px]">
            About <span className="text-[#DCB481]">Us</span>
          </h1>
        </div>
      </section>
      
      {/* Simply wooden made intro section */}
      <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
        <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
            Simply <span className="text-[#DCB481]">wooden</span><br />made
          </h1>
        </div>
        <div className="flex flex-col items-start gap-6 flex-1 max-md:w-full">
          <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            At [Your Company Name], we are passionate about transforming spaces with the natural beauty and durability of exterior wood wall panels. With years of experience in the industry, we specialize in providing high-quality, sustainable wood solutions tailored to meet the unique needs of each client. Our commitment to craftsmanship, innovation, and customer satisfaction has earned us a reputation as a trusted leader in exterior design.
          </div>
          <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            We believe in creating outdoor environments that not only look stunning but also stand the test of time. Whether you're enhancing a residential property or a commercial facade, our team is here to bring your vision to life with expert guidance and superior products.
          </div>
        </div>
      </section>
      
      <main className="flex flex-col w-full">
       {/* SECTION 1 – Image Left, Text Right */}
<section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
  <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
      alt="Modern wooden architecture"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
  <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
      Our <span className="text-[#DCB481]">Vision</span>
    </h1>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.
    </div>
  </div>
</section>

{/* SECTION 2 – Image Right, Text Left */}
<section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col-reverse max-md:gap-10">
  <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
      Our <span className="text-[#DCB481]">Mission</span>
    </h1>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      Deliver outstanding craftsmanship and long-lasting beauty through eco-friendly materials and customer-focused service.
    </div>
  </div>
  <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
      alt="Sustainable wood design"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
</section>

{/* SECTION 3 – Image Left, Text Right */}
<section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
  <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
    <img
      src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
      alt="Architectural wood paneling"
      className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
    />
  </div>
  <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
      Our <span className="text-[#DCB481]">Promise</span>
    </h1>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      We promise durability, natural beauty, and personalized support to help you build spaces that last and inspire.
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
