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
      <DialogContent className="max-w-4xl w-full h-[600px] p-0 bg-white rounded-[20px] overflow-hidden">
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
          <div className="flex-1 p-8 flex flex-col justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white placeholder-gray-400"
              />
              
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white placeholder-gray-400"
              />
              
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white placeholder-gray-400"
              />
              
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-[20px] border border-gray-300 bg-white placeholder-gray-400 resize-none"
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#8B7355] hover:bg-[#7A6348] text-white rounded-full font-medium transition-colors"
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