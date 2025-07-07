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
      
      <main className="flex flex-col w-full">
        {/* Simply wooden made section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
              alt="Modern wooden architecture with natural lighting"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
              Simply <span className="text-[#DCB481]">wooden</span><br />made
            </h1>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              At Polar, our luxury interiors are defined through our partnerships with the finest manufacturers, while our artisans seamlessly integrate the timeless beauty and pure experience in thermally modified wood creating aesthetic elegance.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              We believe in creating sustainable environments that not only look stunning but also stand the test of time. Our focus is on delivering extraordinary craftsmanship paired with innovative solutions that enhance living and working spaces while prioritizing long-term environmental sustainability.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              Our dedication to excellence means that every project is a collaboration that reflects our commitment to quality design and environmental responsibility, where craftsmanship meets nature's finest materials.
            </div>
          </div>
        </section>

        {/* Our Vision section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col-reverse max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
              Our <span className="text-[#DCB481]">Vision</span>
            </h2>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              To be the leading innovator in sustainable architecture solutions, creating harmonious spaces that respect both human needs and environmental stewardship.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              We envision a future where every structure tells a story of responsible design, where thermal modification technology transforms ordinary wood into extraordinary architectural elements.
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
              alt="Contemporary house with wooden exterior"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
        </section>

        {/* Our Values section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10">
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
              alt="Sustainable modern home with wooden facade"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
              Our <span className="text-[#DCB481]">Values</span>
            </h2>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base space-y-4">
              <p><strong>Innovation:</strong> We continuously push the boundaries of what's possible with thermally modified wood.</p>
              <p><strong>Sustainability:</strong> Every decision is made with environmental impact in mind.</p>
              <p><strong>Quality:</strong> We never compromise on the excellence of our materials and craftsmanship.</p>
              <p><strong>Partnership:</strong> We believe in collaborative relationships that create lasting value.</p>
              <p><strong>Integrity:</strong> Transparency and honesty guide all our business practices.</p>
            </div>
          </div>
        </section>

        {/* Sustainability section */}
        <section className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col-reverse max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1 max-md:w-full">
            <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
              Sustainability
            </h2>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              We are committed to creating a sustainable future through responsible sourcing and innovative processing techniques that minimize environmental impact while maximizing durability.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              Our thermal modification process uses only heat and steam to enhance wood properties, eliminating the need for chemical treatments while creating materials that naturally resist decay, insects, and moisture.
            </div>
            <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
              By choosing thermally modified wood from responsibly managed forests and a sustainable process, we're building today while protecting tomorrow's natural resources.
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
              alt="Eco-friendly wooden building surrounded by nature"
              className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
