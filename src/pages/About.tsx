import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1728px] mx-auto px-8 py-12 max-md:px-5 max-sm:px-4">
        <section className="mb-16">
          <h1 className="text-[#454545] text-[42px] font-bold mb-8 max-md:text-[32px] max-sm:text-2xl">
            About <span className="text-[#DCB481]">Thermowood</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#454545] text-lg leading-[26.28px] mb-6">
                We are pioneers in sustainable wood technology, specializing in thermally modified timber that combines natural beauty with enhanced durability. Our innovative approach to wood treatment creates products that are environmentally responsible and built to last.
              </p>
              <p className="text-[#454545] text-lg leading-[26.28px] mb-6">
                With years of expertise in the industry, we've developed cutting-edge thermal modification processes that transform ordinary wood into extraordinary building materials. Our commitment to sustainability drives everything we do.
              </p>
              <p className="text-[#454545] text-lg leading-[26.28px]">
                From residential cladding to commercial applications, our thermally modified wood solutions provide superior performance while maintaining the natural aesthetic that makes wood such a beloved building material.
              </p>
            </div>
            <div className="rounded-[28px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Modern sustainable building with wood cladding"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-[#454545] text-[32px] font-bold mb-8 max-md:text-2xl max-sm:text-xl">
            Our <span className="text-[#DCB481]">Mission</span>
          </h2>
          <div className="bg-[#f8f8f8] p-8 rounded-[28px]">
            <p className="text-[#454545] text-lg leading-[26.28px] mb-4">
              To revolutionize the construction industry by providing sustainable, high-performance wood products that reduce environmental impact while delivering exceptional quality and durability.
            </p>
            <p className="text-[#454545] text-lg leading-[26.28px]">
              We believe that by harnessing the power of thermal modification technology, we can create wood products that not only meet but exceed the demands of modern construction, all while preserving our planet for future generations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-[#454545] text-[32px] font-bold mb-8 max-md:text-2xl max-sm:text-xl">
            Why Choose <span className="text-[#DCB481]">Us?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-gray-100 rounded-[28px]">
              <h3 className="text-[#DCB481] text-xl font-bold mb-4">Sustainability First</h3>
              <p className="text-[#454545] text-base leading-[22px]">
                Our thermal modification process uses only heat and steam, with no chemicals, making it completely eco-friendly.
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-100 rounded-[28px]">
              <h3 className="text-[#DCB481] text-xl font-bold mb-4">Enhanced Durability</h3>
              <p className="text-[#454545] text-base leading-[22px]">
                Our thermally modified wood offers superior resistance to decay, insects, and moisture.
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-100 rounded-[28px]">
              <h3 className="text-[#DCB481] text-xl font-bold mb-4">Expert Craftsmanship</h3>
              <p className="text-[#454545] text-base leading-[22px]">
                Years of experience and cutting-edge technology ensure consistent, high-quality results.
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