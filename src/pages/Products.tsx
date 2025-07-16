import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

const Products = () => {
  const navigate = useNavigate();
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [products, setProducts] = useState<Tables<"products">[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
  };

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.type === selectedCategory);

  const uniqueTypes = Array.from(new Set(products.map(product => product.type)));

  const formatProductName = (name: string) => {
    return name.replace(/\s+/g, '-').toLowerCase();
  };

  const handleProductClick = (product: Tables<"products">) => {
    const formattedName = formatProductName(product.name);
    const formattedType = product.type.toLowerCase();
    navigate(`/${formattedType}/${formattedName}`);
  };

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
            Our <span className="text-[#DCB481]">Products</span>
          </h1>
        </div>
      </section>


      {/* Products Preview Section */}
      <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex gap-4 mb-12 flex-wrap max-sm:gap-2">
            <button 
              onClick={() => setSelectedCategory("All Products")}
              className={`px-6 py-3 rounded-[28px] text-sm font-medium transition-colors ${
                selectedCategory === "All Products" 
                  ? "bg-[#454545] text-white hover:bg-[#363636]" 
                  : "bg-gray-100 text-[#454545] hover:bg-gray-200"
              }`}
            >
              All Products
            </button>
            {uniqueTypes.map((type) => (
              <button 
                key={type}
                onClick={() => setSelectedCategory(type)}
                className={`px-6 py-3 rounded-[28px] text-sm font-medium transition-colors ${
                  selectedCategory === type 
                    ? "bg-[#454545] text-white hover:bg-[#363636]" 
                    : "bg-gray-100 text-[#454545] hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.main_picture_url} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute top-3 left-3 bg-white text-[#454545] px-3 py-1 rounded-[12px] text-xs font-medium hover:bg-gray-50 transition-colors">
                    {product.type}
                  </button>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Products;