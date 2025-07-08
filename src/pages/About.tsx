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
      src="/lovable-uploads/98324750-941a-4426-8bfc-ec88d6d651d3.png"
      alt="Our Values - Modern wooden house"
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
      {/* Our <span className="text-[#DCB481]">Promise</span> */}
      Sustainability
    </h2>
    <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
    To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.

    
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
