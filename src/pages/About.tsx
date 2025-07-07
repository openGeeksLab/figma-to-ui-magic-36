import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1728px] mx-auto px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10">
        {/* Simply wooden made section */}
        <section className="mb-24 max-md:mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-lg:gap-12">
            <div>
              <h1 className="text-[#454545] text-[48px] font-normal mb-6 max-md:text-[36px] max-sm:text-[28px] leading-tight">
                Simply <span className="text-[#DCB481]">wooden</span><br />made
              </h1>
              <p className="text-[#454545] text-lg leading-relaxed mb-6">
                At Polar, our luxury interiors are defined through our partnerships with the finest manufacturers, while our artisans seamlessly integrate the timeless beauty and pure experience in thermally modified wood creating aesthetic elegance.
              </p>
              <p className="text-[#454545] text-lg leading-relaxed mb-6">
                We believe in creating sustainable environments that not only look stunning but also stand the test of time. Our focus is on delivering extraordinary craftsmanship paired with innovative solutions that enhance living and working spaces while prioritizing long-term environmental sustainability.
              </p>
              <p className="text-[#454545] text-lg leading-relaxed">
                Our dedication to excellence means that every project is a collaboration that reflects our commitment to quality design and environmental responsibility, where craftsmanship meets nature's finest materials.
              </p>
            </div>
            <div className="rounded-[28px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
                alt="Modern wooden architecture with natural lighting"
                className="w-full h-[500px] object-cover max-md:h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Our Vision section */}
        <section className="mb-24 max-md:mb-16">
          <div className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10 gap-16">
            <div className="rounded-[28px] overflow-hidden lg:order-1 max-lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
                alt="Contemporary house with wooden exterior"
                className="w-full h-[500px] object-cover max-md:h-[400px]"
              />
            </div>
            <div className="lg:order-2 max-lg:order-1">
              <h2 className="text-[#454545] text-[42px] font-normal mb-6 max-md:text-[32px] max-sm:text-[24px] leading-tight">
                Our <span className="text-[#DCB481]">Vision</span>
              </h2>
              <p className="text-[#454545] text-lg leading-relaxed mb-6">
                To be the leading innovator in sustainable architecture solutions, creating harmonious spaces that respect both human needs and environmental stewardship.
              </p>
              <p className="text-[#454545] text-lg leading-relaxed">
                We envision a future where every structure tells a story of responsible design, where thermal modification technology transforms ordinary wood into extraordinary architectural elements.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values section */}
        <section className="mb-24 max-md:mb-16">
          <div className="flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 max-md:flex-col max-md:gap-10 gap-16">
            <div>
              <h2 className="text-[#454545] text-[42px] font-normal mb-6 max-md:text-[32px] max-sm:text-[24px] leading-tight">
                Our <span className="text-[#DCB481]">Values</span>
              </h2>
              <div className="space-y-4">
                <p className="text-[#454545] text-lg leading-relaxed">
                  <strong>Innovation:</strong> We continuously push the boundaries of what's possible with thermally modified wood.
                </p>
                <p className="text-[#454545] text-lg leading-relaxed">
                  <strong>Sustainability:</strong> Every decision is made with environmental impact in mind.
                </p>
                <p className="text-[#454545] text-lg leading-relaxed">
                  <strong>Quality:</strong> We never compromise on the excellence of our materials and craftsmanship.
                </p>
                <p className="text-[#454545] text-lg leading-relaxed">
                  <strong>Partnership:</strong> We believe in collaborative relationships that create lasting value.
                </p>
                <p className="text-[#454545] text-lg leading-relaxed">
                  <strong>Integrity:</strong> Transparency and honesty guide all our business practices.
                </p>
              </div>
            </div>
            <div className="rounded-[28px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
                alt="Sustainable modern home with wooden facade"
                className="w-full h-[500px] object-cover max-md:h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Sustainability section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-lg:gap-12">
            <div className="rounded-[28px] overflow-hidden lg:order-1 max-lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
                alt="Eco-friendly wooden building surrounded by nature"
                className="w-full h-[500px] object-cover max-md:h-[400px]"
              />
            </div>
            <div className="lg:order-2 max-lg:order-1">
              <h2 className="text-[#454545] text-[42px] font-normal mb-6 max-md:text-[32px] max-sm:text-[24px] leading-tight">
                Sustainability
              </h2>
              <p className="text-[#454545] text-lg leading-relaxed mb-6">
                We are committed to creating a sustainable future through responsible sourcing and innovative processing techniques that minimize environmental impact while maximizing durability.
              </p>
              <p className="text-[#454545] text-lg leading-relaxed mb-6">
                Our thermal modification process uses only heat and steam to enhance wood properties, eliminating the need for chemical treatments while creating materials that naturally resist decay, insects, and moisture.
              </p>
              <p className="text-[#454545] text-lg leading-relaxed">
                By choosing thermally modified wood from responsibly managed forests and a sustainable process, we're building today while protecting tomorrow's natural resources.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;