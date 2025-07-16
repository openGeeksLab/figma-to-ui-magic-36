import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Thermally Modified Wood",
      excerpt: "Discover why thermally modified wood is becoming the preferred choice for sustainable construction projects.",
      image: "/lovable-uploads/266af241-4d7b-41f6-9dc5-2936a467e630.png",
      date: "March 15, 2024",
      category: "Sustainability"
    },
    {
      id: 2,
      title: "Choosing the Right Wood Panel for Your Project",
      excerpt: "A comprehensive guide to selecting the perfect wood panels for interior and exterior applications.",
      image: "/lovable-uploads/3952c04f-b5c0-4be9-adfa-6fe82eef0feb.png",
      date: "March 10, 2024",
      category: "Guide"
    },
    {
      id: 3,
      title: "Maintenance Tips for Thermowood Panels",
      excerpt: "Keep your thermowood panels looking beautiful with these essential maintenance practices.",
      image: "/lovable-uploads/4b21b648-bde9-4e3b-bf8a-cb68fadd5627.png",
      date: "March 5, 2024",
      category: "Maintenance"
    },
    {
      id: 4,
      title: "Modern Architecture with Wood Panels",
      excerpt: "Explore how contemporary architects are using wood panels to create stunning modern buildings.",
      image: "/lovable-uploads/523aa0c7-9a58-4626-9df0-4a4dee48eb10.png",
      date: "February 28, 2024",
      category: "Architecture"
    },
    {
      id: 5,
      title: "Sustainable Building Materials of the Future",
      excerpt: "Learn about the environmental benefits of choosing thermally modified wood for construction.",
      image: "/lovable-uploads/b83a3e1b-84b0-4345-a1a0-e4d631266738.png",
      date: "February 20, 2024",
      category: "Sustainability"
    },
    {
      id: 6,
      title: "Installation Best Practices",
      excerpt: "Professional tips for installing wood panels to ensure longevity and optimal performance.",
      image: "/lovable-uploads/cd3dd78f-3059-4fd1-947f-af87071531e3.png",
      date: "February 15, 2024",
      category: "Installation"
    }
  ];

  const categories = ["All Posts", "Sustainability", "Guide", "Maintenance", "Architecture", "Installation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
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
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute bottom-8 left-16 max-md:left-10 max-sm:bottom-4 max-sm:left-5 z-10">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-[22px] bg-white px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-[28px] leading-tight">
            Our <span className="text-[#DCB481]">Blog</span>
          </h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex gap-4 mb-12 flex-wrap max-sm:gap-2">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-[28px] text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? "bg-[#454545] text-white hover:bg-[#363636]" 
                    : "bg-gray-100 text-[#454545] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-[16px] overflow-hidden shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#DCB481] text-[#454545] px-3 py-1 rounded-[12px] text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold text-[#454545] mb-3 group-hover:text-[#DCB481] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-[#DCB481] hover:text-[#454545] font-medium text-sm transition-colors flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-8 max-md:px-5 max-sm:px-4">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Blog;