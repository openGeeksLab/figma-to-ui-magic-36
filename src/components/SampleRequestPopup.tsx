import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[650px] p-0 bg-white rounded-[28px] overflow-hidden border-0">
        <div className="flex h-full">
          {/* Left side - Image */}
          <div className="flex-1 relative">
            <img
              src="/lovable-uploads/244e4782-b4d5-4e82-aed1-15adc8873d43.png"
              alt="Modern house with wood panels"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Form */}
          <div className="flex-1 p-12 flex flex-col justify-center bg-[#F5F5F0]">
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#A0906B] hover:bg-[#8B7A5A] text-white rounded-full font-medium text-lg transition-colors mt-8"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleRequestPopup;