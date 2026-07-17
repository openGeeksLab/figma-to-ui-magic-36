import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { X } from "lucide-react";

interface SampleRequestPopupProps {
  children: React.ReactNode;
}

const SampleRequestPopup: React.FC<SampleRequestPopupProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Format phone number as user types
    let formattedValue = value;
    if (name === 'phone') {
      // Remove all non-digit characters
      const digits = value.replace(/\D/g, '');
      
      // Format as phone number with spaces/dashes
      if (digits.length <= 3) {
        formattedValue = digits;
      } else if (digits.length <= 6) {
        formattedValue = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      } else if (digits.length <= 10) {
        formattedValue = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else {
        formattedValue = digits.slice(0, 15);
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: t("sampleError"),
        description: t("sampleFillRequired"),
      });
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: t("sampleError"),
        description: t("sampleValidEmail"),
      });
      return;
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      toast({
        title: t("sampleError"),
        description: t("sampleValidPhone"),
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Sample Request: ${formData.message || "Customer has requested a free sample. No additional message provided."}`
      };

      const response = await fetch('https://gcfxfjazoyzxtevangwh.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast({
          title: t("sampleRequestSent"),
          description: t("sampleRequestDescription"),
        });
        
        // Reset form and close popup
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsOpen(false);
      } else {
        toast({
          title: t("sampleError"),
          description: t("sampleRequestFailed"),
        });
      }
    } catch (error) {
      toast({
        title: t("sampleError"),
        description: t("sampleRequestFailed"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpen = () => {
    console.log('Opening popup');
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Closing popup');
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleClose}
        >
          <div 
            className="relative max-w-5xl w-full h-[650px] p-0 bg-transparent rounded-[28px] overflow-visible max-md:max-w-[100vw] max-md:w-[100vw] max-md:h-[90vh] max-md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <section className="flex flex-col items-stretch pt-[47px]">
              <header className="items-center z-10 flex w-[52px] gap-2.5 h-[52px] bg-white ml-auto p-2.5 rounded-[28px] max-md:mr-4 max-md:mt-4">
                <button
                  onClick={handleClose}
                  className="w-8 h-8 min-w-[32px] min-h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none border-0 flex-shrink-0"
                  style={{ aspectRatio: '1/1' }}
                  aria-label={t("sampleCloseAriaLabel")}
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </header>
              
              <main className="shadow-[0px_15px_60px_0px_rgba(0,0,0,0.15)] relative flex gap-6 pt-[48px] pr-[48px] pb-[48px] pl-[48px] bg-[#F3F0E7] rounded-[28px] max-md:px-1 max-md:py-4 max-md:gap-0 max-md:mx-1">
                <aside className="absolute z-0 flex min-w-60 flex-col top-[-73px] w-[414px] h-[577px] pt-[29px] left-12 max-md:hidden">
                  <div className="flex flex-col relative z-10 aspect-[0.753] w-full pt-11">
                    <img
                      src="/lovable-uploads/02f5b661-7aee-4a51-939d-80a2dc7ce514.png"
                      alt=""
                      className="absolute h-full w-full object-cover inset-0 transform -translate-y-[14px]"
                      loading="lazy"
                    />
                  </div>
                </aside>
                
                <div className="z-10 relative ml-auto max-md:ml-0 max-md:w-full">
                  <form onSubmit={handleSubmit} className="space-y-6 w-[400px] max-md:w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("sampleNamePlaceholder")}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder={t("sampleEmailPlaceholder")}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    />
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("samplePhonePlaceholder")}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                    />
                    
                    <textarea
                      name="message"
                      placeholder={t("sampleMessagePlaceholder")}
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 rounded-[28px] border-0 bg-white placeholder-gray-400 text-gray-700 resize-none shadow-sm"
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#A0906B] hover:bg-[#8B7A5A] text-white rounded-full font-medium text-lg transition-colors mt-8"
                    >
                      {isSubmitting ? t("sampleSending") : t("sampleSend")}
                    </button>
                  </form>
                </div>
              </main>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default SampleRequestPopup;