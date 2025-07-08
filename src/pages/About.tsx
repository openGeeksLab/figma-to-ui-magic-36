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
        {/* Our Vision  section */}

        <section className="flex justify-center items-center gap-12 w-full px-40 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
  <img
    src="/lovable-uploads/3ce6cc59-1de5-4737-955d-81985d6afcb6.png"
    alt="Modern wooden architecture with natural lighting"
    className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
  />

  <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full max-md:text-center">
    <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
      Our <span className="text-[#DCB481]">Vision</span>
    </h1>
    <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
      To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.
    </div>
  </div>
</section>


        {/* Our Values section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col-reverse max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
            Our <span className="text-[#DCB481]">Values</span>
            </h1>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              Commitment, Quality and Responsibility in everything we do. Our core values describe how we should act towards each other and towards our customers, suppliers, and other partners.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            <ul className="list-disc ml-6">
            <li> Tailored solutions that match your architectural style.</li >
            <li> Expert advice to guide you from concept to completion.</li >
            <li> Skilled installation ensuring perfect alignment and durability.</li >
            <li> Keeping your wood panels looking their best year after year.</li >
            </ul>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="/lovable-uploads/1f9919c1-e70c-44f9-b504-9ae5c6fab3b3.png"
              alt="Contemporary house with wooden exterior"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
        </section>

        {/* Our Values section
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="/lovable-uploads/1f9919c1-e70c-44f9-b504-9ae5c6fab3b3.png"
              alt="Sustainable modern home with wooden facade"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
            Sustainability
            </h2>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base space-y-4">
              <p><strong>Innovation:</strong> We continuously push the boundaries of what's possible with thermally modified wood.</p>
              <p><strong>Sustainability:</strong> Every decision is made with environmental impact in mind.</p>
              <p><strong>Quality:</strong> We never compromise on the excellence of our materials and craftsmanship.</p>
              <p><strong>Partnership:</strong> We believe in collaborative relationships that create lasting value.</p>
              <p><strong>Integrity:</strong> Transparency and honesty guide all our business practices.</p>
            </div>
          </div>
        </section> */}

        {/* Sustainability section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
        <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
        <img
              src="/lovable-uploads/1f9919c1-e70c-44f9-b504-9ae5c6fab3b3.png"
              alt="Sustainable modern home with wooden facade"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
              Sustainability
            </h1>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            To be the leading provider of premium exterior wood wall panels, inspiring sustainable and innovative design solutions that transform outdoor spaces worldwide.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            For us, the environment and sustainability are obvious issues in everyday life. We are not satisfied with wood being a sustainable product, but work long-term with our entire business to contribute to a sustainable society.
            Our raw material comes from responsibly managed forests and is certified.We continuously work to reduce our climate footprint, e.g. by gradually switching to the latest technology and actively influencing our subcontractors.
            </div>
            
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
