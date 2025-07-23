import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import ProductFilter from '@/components/ProductFilter';

const Products = () => {
  const navigate = useNavigate();
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [products, setProducts] = useState<Tables<"products">[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

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

  const sizeFilteredProducts = selectedSizes.length > 0 
    ? filteredProducts.filter(product => 
        selectedSizes.some(size => (product.sizes as string[])?.includes(size))
      )
    : filteredProducts;

  const uniqueTypes = Array.from(new Set(products.map(product => product.type)));

  // Get all unique sizes from products
  const allSizes = Array.from(new Set(
    products.flatMap(product => (product.sizes as string[]) || [])
  )).sort();

  const formatProductName = (name: string) => {
    return name.replace(/\s+/g, '-').toLowerCase();
  };

  const handleProductClick = (product: Tables<"products">) => {
    const formattedName = formatProductName(product.name);
    const formattedType = product.type.toLowerCase();
    navigate(`/${formattedType}/${formattedName}`);
  };

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleSizeFilterChange = (sizes: string[]) => {
    setSelectedSizes(sizes);
  };

  const handleApplyFilter = () => {
    setShowFilter(false);
  };

  const handleCancelFilter = () => {
    setSelectedSizes([]);
    setShowFilter(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
                <div className="w-full h-full rounded-[28px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover max-md:h-[200px]"
                  />
                </div>
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
          <div className="flex items-center justify-between mb-12 max-sm:flex-col max-sm:gap-4">
            <div className="flex gap-4 flex-wrap max-sm:gap-2">
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
            
            <button 
              onClick={handleFilterToggle}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors max-sm:w-8 max-sm:h-8"
            >
              <img 
                src="/lovable-uploads/877f5da8-f5dd-4a71-b314-db39dd6fd6c0.png" 
                alt="Filter options" 
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
              />
            </button>
          </div>

          {/* Filter Section */}
          {showFilter && (
            <ProductFilter
              availableSizes={allSizes}
              selectedSizes={selectedSizes}
              onSizeChange={handleSizeFilterChange}
              onApply={handleApplyFilter}
              onCancel={handleCancelFilter}
            />
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sizeFilteredProducts.map((product) => (
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
