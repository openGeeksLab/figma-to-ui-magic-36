import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { ChevronDown, Check } from 'lucide-react';
import colorNetonets from '@/assets/color-netonets.png';
import colorNatural from '@/assets/color-natural.png';

const ProductDetail = () => {
  const { type, productName } = useParams();
  const [product, setProduct] = useState<Tables<"products"> | null>(null);
  const [productImages, setProductImages] = useState<Tables<"product_images">[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [selectedSurfaceTreatment, setSelectedSurfaceTreatment] = useState('Smooth planed');
  const [selectedDimension, setSelectedDimension] = useState('');

  useEffect(() => {
    if (productName) {
      fetchProduct();
    }
  }, [productName]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.main_picture_url);
      fetchProductImages();
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="w-full px-8 py-4 max-md:px-5 max-sm:px-4">
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
      <section className="w-full px-8 py-8 max-md:px-5 max-sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={selectedImage || product.main_picture_url} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
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
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-[#454545]">{product.name}</h1>
              
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
                  Tone Color: <span className="text-gray-600">Silver</span>
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {/* First row - Image swatches */}
                  <div className="aspect-square rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden">
                    <img 
                      src={colorNetonets} 
                      alt="Netonets color" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#DCB481] transition-colors overflow-hidden">
                    <img 
                      src={colorNatural} 
                      alt="Natural color" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Remaining color swatches */}
                  {colorSwatches.slice(2).map((color, index) => (
                    <div 
                      key={index + 2} 
                      className="aspect-square rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#DCB481] transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
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

              {/* Calculate Price Button */}
              <button className="w-full bg-[#DCB481] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#C8A373] transition-colors text-lg">
                Calculate Price
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;