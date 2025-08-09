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
}

const CalculateOrderPopup: React.FC<CalculateOrderPopupProps> = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    square: ''
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate square meters when length and width are provided
    if (name === 'length' || name === 'width') {
      const length = name === 'length' ? parseFloat(value) : parseFloat(formData.length);
      const width = name === 'width' ? parseFloat(value) : parseFloat(formData.width);
      
      if (length && width) {
        const square = (length * width) / 1000000;
        setFormData(prev => ({
          ...prev,
          square: square.toFixed(2)
        }));
        
        // Calculate approximate price based on route
        const isSpecialCladdingRoute = ['/cladding/f-1', '/cladding/f-2', '/cladding/f-3', '/cladding/f-4', '/cladding/f-5', '/cladding/f-6', '/cladding/f-8', '/cladding/f-10'].includes(location.pathname);
        const basePrice = isSpecialCladdingRoute ? 21.5 : 279;
        const kurs = 11.15;
        setCalculatedPrice((basePrice*1.25*1.5)*kurs);
      } else {
        // Clear square and price when either field is empty
        setFormData(prev => ({
          ...prev,
          square: ''
        }));
        setCalculatedPrice(null);
      }
    }
  };

  const handleSavePDF = () => {
    toast({
      title: "PDF Generated",
      description: "Your calculation has been saved as PDF.",
    });
  };

  const handleContactUs = () => {
    toast({
      title: "Contact Request",
      description: "We'll get back to you with an exact calculation.",
    });
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
                  type="number"
                  name="length"
                  placeholder="Length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">mm</span>
              </div>
              
              <div className="relative">
                <Input
                  type="number"
                  name="width"
                  placeholder="Wide"
                  value={formData.width}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">mm</span>
              </div>
              
              <div className="relative">
                <Input
                  type="number"
                  name="square"
                  placeholder="Square"
                  value={formData.square}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                  readOnly
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