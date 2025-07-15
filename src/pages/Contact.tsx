import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] px-8 max-md:px-5 max-sm:px-4">
        <img
          src="/lovable-uploads/3952c04f-b5c0-4be9-adfa-6fe82eef0feb.png"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-[28px]"
        />
        <div className="absolute bottom-8 left-16 max-md:left-13 max-sm:bottom-4 max-sm:left-8">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl bg-white px-5 py-3 rounded-[28px]">
            Contact <span className="text-[#DCB481]">Us</span>
          </h1>
        </div>
      </section>
      
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;