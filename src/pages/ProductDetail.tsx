import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SampleRequestPopup from '@/components/SampleRequestPopup';
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { ChevronDown, Check } from 'lucide-react';
import colorNetonets from '@/assets/color-netonets.png';
import colorNatural from '@/assets/color-natural.png';

const ProductDetail = () => {
  const { type, productName } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Tables<"products"> | null>(null);
  const [productImages, setProductImages] = useState<Tables<"product_images">[]>([]);
  const [similarProducts, setSimilarProducts] = useState<Tables<"products">[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [selectedSurfaceTreatment, setSelectedSurfaceTreatment] = useState('Smooth planed');
  const [selectedDimension, setSelectedDimension] = useState('');
  const [selectedColorSwatch, setSelectedColorSwatch] = useState(0); // Default to first swatch
  
  const colorNames = ['Netonets', 'Natural', 'Russet', 'Mocha', 'Ivory', 'Silver', 'Steel', 'Graphit', 'Coal', 'Graphit Black', 'Graphit Grey', 'Virsi'];

  useEffect(() => {
    if (productName) {
      fetchProduct();
      // Scroll to top when product changes
      window.scrollTo(0, 0);
    }
  }, [productName]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.main_picture_url);
      fetchProductImages();
      fetchSimilarProducts();
      // Set first available size as default
      if (product.sizes && Array.isArray(product.sizes) && product.sizes.length > 0) {
        const sizes = product.sizes as string[];
        setSelectedDimension(`${sizes[0]} mm`);
      }
    }
  }, [product]);

  const fetchProduct = async () => {
    try {
      // Convert URL parameter back to product name format
      // URL: /cladding/f-5 -> productName: "f-5" -> search for: "F-5"
      const searchName = productName?.toUpperCase() || '';
      console.log('Searching for product:', searchName);
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('name', searchName)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        console.log('Found product:', data);
        setProduct(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductImages = async () => {
    if (!product?.id) return;
    
    try {
      const { data, error } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', product.id)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching product images:', error);
      } else {
        console.log('Found product images:', data);
        setProductImages(data || []);
      }
    } catch (error) {
      console.error('Error fetching product images:', error);
    }
  };

  const fetchSimilarProducts = async () => {
    if (!product?.id || !product?.type) return;
    
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('type', product.type)
        .neq('id', product.id)
        .limit(4);

      if (error) {
        console.error('Error fetching similar products:', error);
      } else {
        setSimilarProducts(data || []);
      }
    } catch (error) {
      console.error('Error fetching similar products:', error);
    }
  };

  const formatProductName = (name: string) => {
    return name.replace(/\s+/g, '-').toLowerCase();
  };

  const getTypeDisplayName = (type: string) => {
    switch(type.toLowerCase()) {
      case 'deckning': return 'Deckning';
      case 'cladding': return 'Cladding';
      case 'accessories': return 'Accessories';
      default: return type;
    }
  };

  const handleProductClick = (product: Tables<"products">) => {
    // Show loading state during navigation
    setLoading(true);
    const formattedName = formatProductName(product.name);
    const formattedType = product.type.toLowerCase();
    navigate(`/${formattedType}/${formattedName}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Product not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  const colorSwatches = [
    '#D2B48C', '#F4A460', '#CD853F', '#8B4513',
    '#E5E5E5', '#D3D3D3', '#A9A9A9', '#696969',
    '#2F4F4F', '#708090', '#4682B4', '#778899'
  ];

  // Combine main image with additional images for the gallery
  const allImages = [
    { url: product?.main_picture_url || '', isMain: true },
    ...productImages.map(img => ({ url: img.image_url, isMain: false }))
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Header />
      
      {/* Breadcrumb */}
      <div className="w-full px-8 py-4 max-md:px-5 max-sm:px-4 overflow-x-hidden">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-[#DCB481]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-[#DCB481]">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{getTypeDisplayName(type || '')}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="w-full px-4 py-8 max-md:px-3 max-sm:px-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-sm:gap-4">
            {/* Product Images */}
            <div className="space-y-4 overflow-hidden">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden w-full">
                <img 
                  src={selectedImage || product.main_picture_url} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 w-full max-w-full overflow-hidden">
                {allImages.slice(0, 4).map((image, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square bg-gray-100 rounded cursor-pointer transition-all ${
                      selectedImage === image.url ? 'border-2 border-[#DCB481]' : 'border border-gray-200 hover:border-[#DCB481]'
                    }`}
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img 
                      src={image.url} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-1 overflow-hidden w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-[#454545] max-sm:text-xl break-words">{product.name}</h1>
              
              <p className="text-gray-600 leading-relaxed">
                {product.description || `${product.name} is a sophisticated 3D cladding of Nordic Pine. It creates a visually elegant and modern wood surface. Highly suitable for facades, interiors, and other decorative surfaces where a sustainable and chemical-free wood surface is desired.`}
              </p>

              {/* Surface Treatment */}
              <div>
                <label className="block text-lg font-semibold text-[#454545] mb-2">
                  Surface Treatment
                </label>
                <div className="relative">
                  <select 
                    value={selectedSurfaceTreatment}
                    onChange={(e) => setSelectedSurfaceTreatment(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#DCB481]"
                  >
                    <option value="Smooth planed">Smooth planed</option>
                    <option value="Rough sawn">Rough sawn</option>
                    <option value="Brushed">Brushed</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-lg font-semibold text-[#454545] mb-2">
                  Dimensions
                </label>
                <div className="relative">
                  <select 
                    value={selectedDimension}
                    onChange={(e) => setSelectedDimension(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#DCB481]"
                  >
                    {product.sizes && Array.isArray(product.sizes) && (product.sizes as string[]).map((size) => (
                      <option key={size} value={`${size} mm`}>{size} mm</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Tone Color */}
              <div>
                <h3 className="text-lg font-semibold text-[#454545] mb-4">
                  Tone Color: <span className="text-gray-600">{colorNames[selectedColorSwatch]}</span>
                </h3>
                <div className="grid grid-cols-3 max-sm:grid-cols-3 gap-1 max-sm:gap-0.5 w-full max-w-full overflow-hidden max-sm:scale-90 max-sm:origin-left">
                   {/* First row - Wood texture images */}
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 0 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(0)}
                   >
                     <img 
                       src="/lovable-uploads/eb3d4163-bcd2-4f72-94e3-c0be7b636786.png" 
                       alt="Netonets wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 1 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(1)}
                   >
                     <img 
                       src="/lovable-uploads/4b21b648-bde9-4e3b-bf8a-cb68fadd5627.png" 
                       alt="Natural wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 2 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(2)}
                   >
                     <img 
                       src="/lovable-uploads/523aa0c7-9a58-4626-9df0-4a4dee48eb10.png" 
                       alt="Russet wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 3 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(3)}
                   >
                     <img 
                       src="/lovable-uploads/5debd376-6790-402c-b921-56f83ad814b2.png" 
                       alt="Mocha wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   {/* Second row - First item is Ivory image, rest are color swatches */}
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 4 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(4)}
                   >
                     <img 
                       src="/lovable-uploads/a6446978-767f-4249-b113-de0ac14115b6.png" 
                       alt="Ivory wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 5 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(5)}
                   >
                     <img 
                       src="/lovable-uploads/51ba69fb-8156-41d1-aa37-7b07cc9fbee9.png" 
                       alt="Silver wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 6 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(6)}
                   >
                     <img 
                       src="/lovable-uploads/462b321a-546f-408a-805b-c0a6540cd991.png" 
                       alt="Steel wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div 
                     className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                       selectedColorSwatch === 7 ? 'border-[#DCB481]' : 'border-gray-200'
                     }`}
                     onClick={() => setSelectedColorSwatch(7)}
                   >
                     <img 
                       src="/lovable-uploads/8df80e0c-d0e9-44d7-8f78-c99aed25cf1b.png" 
                       alt="Graphit wood color" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                    {/* Third row - First item is Coal image, rest are color swatches */}
                    <div 
                      className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                        selectedColorSwatch === 8 ? 'border-[#DCB481]' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedColorSwatch(8)}
                    >
                      <img 
                        src="/lovable-uploads/eeac43cb-ba5f-4a99-a3aa-03d90e5aa027.png" 
                        alt="Coal wood color" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                        selectedColorSwatch === 9 ? 'border-[#DCB481]' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedColorSwatch(9)}
                    >
                      <img 
                        src="/lovable-uploads/4ba74904-71d0-463a-b25a-2e0b2cb79eec.png" 
                        alt="Graphit Black wood color" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                        selectedColorSwatch === 10 ? 'border-[#DCB481]' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedColorSwatch(10)}
                    >
                      <img 
                        src="/lovable-uploads/ead99fef-d4b4-448e-9261-1ee450b9629b.png" 
                        alt="Graphit Grey wood color" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className={`aspect-square rounded-lg border-2 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden ${
                        selectedColorSwatch === 11 ? 'border-[#DCB481]' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedColorSwatch(11)}
                    >
                      <img 
                        src="/lovable-uploads/3025c833-0d09-44ac-970a-6ad39f2befb9.png" 
                        alt="Virsi wood color" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                 </div>

               {/* Specification */}
               <div>
                 <h3 className="text-lg font-semibold text-[#454545] mb-4">Specification</h3>
                 <div className="space-y-2">
                   {(product?.specifications as string[] || []).map((spec, index) => (
                     <div key={index} className="flex items-center space-x-2">
                       <Check className="w-5 h-5 text-green-500" />
                       <span className="text-gray-600">{spec}</span>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Details */}
               <div>
                 <h3 className="text-lg font-semibold text-[#454545] mb-4">Details</h3>
                 <div className="space-y-2">
                   {(product?.details as string[] || []).map((detail, index) => (
                     <div key={index} className="flex items-center space-x-2">
                       <Check className="w-5 h-5 text-green-500" />
                       <span className="text-gray-600">{detail}</span>
                     </div>
                   ))}
                 </div>
               </div>
               </div>

              {/* Calculate Price Button */}
              <SampleRequestPopup>
                <button className="w-full bg-[#DCB481] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#C8A373] transition-colors text-lg">
                  Calculate Price
                </button>
              </SampleRequestPopup>
            </div>
          </div>
        </div>
      </section>

      {/* Personalised Orders Section */}
      <section className="px-4 py-8 bg-[#F3F0E7] rounded-2xl mx-4 mt-8 max-md:px-3 max-sm:px-2 max-md:mx-3 max-sm:mx-2 overflow-hidden">
        <div className="mx-auto max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#454545] mb-8 max-sm:text-xl break-words">Personalised orders</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Luna Trio 26x92 is a sophisticated 3D cladding of Nordic Pine. It creates a visually elegant and modern wood surface. Luna Trio is highly suitable for facades, interiors, and other decorative surfaces where a sustainable and chemical-free wood surface is desired. Additionally, if left untreated outside, it develops a beautiful naturally greyed patina.
          </p>
          <button className="bg-white text-[#454545] px-6 py-3 rounded-[28px] text-sm font-medium hover:bg-gray-50 transition-colors">
            Fill the Form
          </button>
        </div>
      </section>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <section className="w-full px-4 py-12 max-md:px-3 max-sm:px-2 overflow-hidden">
          <div className="max-w-6xl mx-auto px-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 max-sm:text-xl break-words">
              <span className="text-[#DCB481]">Similar </span>
              <span className="text-[#454545]">Products</span>
            </h2>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {similarProducts.map((similarProduct) => (
                <div 
                  key={similarProduct.id} 
                  className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border cursor-pointer"
                  onClick={() => handleProductClick(similarProduct)}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={similarProduct.main_picture_url} 
                      alt={similarProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button className="absolute top-3 left-3 bg-white text-[#454545] px-3 py-1 rounded-[12px] text-xs font-medium hover:bg-gray-50 transition-colors">
                      {similarProduct.type}
                    </button>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors !rounded-full min-w-8 min-h-8">
                      <svg className="w-4 h-4 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                      <h3 className="text-sm font-medium">{similarProduct.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      
      <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-4 py-0 max-sm:px-2 max-sm:py-0 overflow-x-hidden">
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;