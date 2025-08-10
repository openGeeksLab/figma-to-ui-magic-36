import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface CalculateOrderPopupProps {
  children: React.ReactNode;
  productDetails?: {
    productName: string;
    surfaceTreatment: string;
    dimension: string;
    colorName: string;
  };
  surfaceTreatment?: string;
  toneColor?: string;
}

const CalculateOrderPopup: React.FC<CalculateOrderPopupProps> = ({ children, productDetails, surfaceTreatment, toneColor }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    square: ''
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [selectedSurfaceTreatment, setSelectedSurfaceTreatment] = useState(surfaceTreatment || '');
  const [selectedToneColor, setSelectedToneColor] = useState(toneColor || '');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Only allow numbers and decimal points
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    setFormData(prev => ({
      ...prev,
      [name]: numericValue
    }));

    // Auto-calculate square meters when length and width are provided
    if (name === 'length' || name === 'width') {
      const length = name === 'length' ? parseFloat(numericValue) : parseFloat(formData.length);
      const width = name === 'width' ? parseFloat(numericValue) : parseFloat(formData.width);
      
      if (length && width && !isNaN(length) && !isNaN(width)) {
        const square = (length * width) / 1000000;
        setFormData(prev => ({
          ...prev,
          square: square.toFixed(2)
        }));
        
        // Calculate approximate price based on route 
        const isSpecialCladdingRoute = ['/cladding/f-1', '/cladding/f-2', '/cladding/f-3', '/cladding/f-4', '/cladding/f-5', '/cladding/f-6', '/cladding/f-8', '/cladding/f-10', '/cladding/shp-s', '/cladding/shp' ].includes(location.pathname);
        // const isSpecialRoute = ['/cladding/f-9', '/cladding/f-7'].includes(location.pathname);//Deco must be added to the list
        const basePrice = isSpecialCladdingRoute ? 21.5 : 25;
        const kurs = 11.15;
        // setCalculatedPrice(square*basePrice*1.25*1.5*kurs);
        if (surfaceTreatment === 'Brushed' || surfaceTreatment === 'Finely sawn') {
          // setCalculatedPrice((basePrice+2.5)*1.25*1.5*kurs * squareValue);
           setCalculatedPrice(1000);
           
         }
         else {
         setCalculatedPrice(surfaceTreatment);
         }
      } 
      else {
        // Clear square and price when either field is empty or invalid
        setFormData(prev => ({
          ...prev,
          square: ''
        }));
        setCalculatedPrice(null);
      }
    }
    
    // Handle direct square input
    if (name === 'square' && numericValue) {
      const squareValue = parseFloat(numericValue);
      if (!isNaN(squareValue)) {
        const isSpecialCladdingRoute = ['/cladding/f-1', '/cladding/f-2', '/cladding/f-3', '/cladding/f-4', '/cladding/f-5', '/cladding/f-6', '/cladding/f-8', '/cladding/f-10', '/cladding/shp-s', '/cladding/shp' ].includes(location.pathname);
        const basePrice = isSpecialCladdingRoute ? 21.5 : 25;
        const kurs = 11.15;
        if (surfaceTreatment === 'Brushed' || surfaceTreatment === 'Finely sawn') {
         // setCalculatedPrice((basePrice+2.5)*1.25*1.5*kurs * squareValue);
          setCalculatedPrice(1000);
          
        }
        else {
        setCalculatedPrice(basePrice*1.25*1.5*kurs * squareValue);
        }
      }
    }
  };

  const handleSavePDF = () => {
    toast({
      title: "PDF Generated",
      description: "Your calculation has been saved as PDF.",
    });
  };

  const handleContactUs = async () => {
    try {
      const emailData = {
        name: "Price Calculation Request",
        email: "info@nordicthermotra.se",
        phone: "Not provided",
        message: "Customer has requested a price calculation for the selected product configuration.",
        productDetails: {
          productName: productDetails?.productName,
          surfaceTreatment: productDetails?.surfaceTreatment,
          dimension: productDetails?.dimension,
          colorName: productDetails?.colorName,
          length: formData.length,
          width: formData.width,
          square: formData.square,
          estimatedPrice: calculatedPrice ? `${calculatedPrice.toFixed(0)} SEK` : undefined
        }
      };

      const response = await fetch('https://xksrscyjywtnmtwmgihm.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast({
          title: "Request Sent",
          description: "We'll get back to you with an exact calculation.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send request. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
      });
    }
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({ length: '', width: '', square: '' });
    setCalculatedPrice(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full bg-[#F3F0E7] rounded-[28px] p-8 border-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Calculate Your Order</DialogTitle>
        <DialogDescription className="sr-only">Fill out the form to get an approximate estimate for your order</DialogDescription>
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-3 -right-3 min-w-[40px] min-h-[40px] w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border border-gray-200 max-sm:w-8 max-sm:h-8 max-sm:min-w-[32px] max-sm:min-h-[32px] max-sm:-top-2 max-sm:-right-2"
            style={{ borderRadius: '50%', aspectRatio: '1/1' }}
            aria-label="Close calculator"
          >
            <X size={18} className="text-gray-600 max-sm:w-4 max-sm:h-4" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#454545] mb-2">
              Calculate <span className="text-[#DCB481]">your</span> order
            </h2>
            <p className="text-gray-600">Fill out the form to get an approximate estimate</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    name="length"
                    placeholder="Length"
                    value={formData.length}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    inputMode="decimal"
                    pattern="[0-9]*\.?[0-9]*"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">mm</span>
                </div>
                
                <div className="relative">
                  <Input
                    type="text"
                    name="width"
                    placeholder="Wide"
                    value={formData.width}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    inputMode="decimal"
                    pattern="[0-9]*\.?[0-9]*"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">mm</span>
                </div>
                
                <div className="relative">
                  <Input
                    type="text"
                    name="square"
                    placeholder="Square"
                    value={formData.square}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    inputMode="decimal"
                    pattern="[0-9]*\.?[0-9]*"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">m²</span>
                </div>
              </div>

            {/* Price Section */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h3 className="text-xl font-semibold text-[#454545] mb-4">Your prise is:</h3>
              <div className="text-4xl font-bold text-[#DCB481] mb-4">
                {calculatedPrice ? `${calculatedPrice.toFixed(0)} SEK*` : '-- SEK*'}
              </div>
              <p className="text-sm text-gray-500 text-center lg:text-left">
                * The calculation is approximate. Leave a request and we will make an exact calculation of your order.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-start mt-8">
            <button
              onClick={handleContactUs}
              className="bg-white hover:bg-gray-50 text-[#454545] py-3 px-8 rounded-full font-medium border border-gray-200 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalculateOrderPopup;