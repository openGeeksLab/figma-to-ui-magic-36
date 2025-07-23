import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll send you a free sample soon.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[650px] p-0 bg-transparent rounded-[28px] overflow-visible border-0 max-md:max-w-[100vw] max-md:w-[100vw] max-md:h-[90vh] max-md:mx-0">
        <section 
          className="flex flex-col items-stretch pt-[47px]"
          role="dialog"
          aria-labelledby="sample-request-form-title"
          aria-modal="true"
        >
          <header className="items-center z-10 flex w-[52px] gap-2.5 h-[52px] bg-white ml-auto p-2.5 rounded-[28px] max-md:mr-4 max-md:mt-4">
            <button
              onClick={handleClose}
              className="aspect-square w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Close sample request form"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </header>
          
          <main className="shadow-[0px_15px_60px_0px_rgba(0,0,0,0.15)] relative flex gap-6 pt-[var(--sds-size-space-1200,48px)] pr-[var(--sds-size-space-1200,48px)] pb-[var(--sds-size-space-1200,48px)] pl-[var(--sds-size-space-1200,48px)] bg-[#F3F0E7] rounded-[28px] max-md:px-1 max-md:py-4 max-md:gap-0 max-md:mx-1">
            <aside 
              className="absolute z-0 flex min-w-60 flex-col top-[-73px] w-[414px] h-[577px] pt-[29px] left-12 max-md:hidden"
              aria-hidden="true"
            >
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
              <h1 id="sample-request-form-title" className="sr-only">
                Sample Request Form
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6 w-[400px] max-md:w-full">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                />
                
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                />
                
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-14 px-6 rounded-full border-0 bg-white placeholder-gray-400 text-gray-700 shadow-sm"
                />
                
                <Textarea
                  name="message"
                  placeholder="Message"
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
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </main>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default SampleRequestPopup;