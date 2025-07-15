import React, { useState } from 'react';
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return <section className="flex h-[1053px] justify-center items-start w-full px-8 py-24 rounded-[28px] max-md:h-auto max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10" id="contact">
        <div className="flex w-[1102px] flex-col justify-center items-center gap-8 max-md:w-full">
          <div className="w-[477px] text-[#454545] text-center text-[42px] font-bold max-md:w-full max-md:text-[32px] max-sm:text-2xl">
            <div className="text-[#454545]">Thank you for your</div>
            <div className="text-[#DCB481]">message!</div>
          </div>
          <p className="text-[#454545] text-center text-lg font-normal leading-[26.28px] w-full max-sm:text-base">
            We'll get back to you within 24 hours with the latest product information and business opportunities.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-base font-normal hover:bg-[#c9a373] transition-colors">
            Send Another Message
          </button>
        </div>
      </section>;
  }
  return <section className="flex h-[1053px] justify-center items-start w-full px-8 py-24 rounded-[28px] max-md:h-auto max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10" id="contact">
      <div className="flex w-[1102px] flex-col justify-center items-center gap-8 max-md:w-full">
        <header className="w-[477px] text-[#454545] text-center text-[42px] font-bold max-md:w-full max-md:text-[32px] max-sm:text-2xl">
          <h2>
            <span className="text-[#454545]">Experience of the </span>
            <span className="text-[#DCB481]">excellence</span>
          </h2>
        </header>
        
        <div className="flex flex-col items-start gap-[5px] w-full">
          <p className="text-[#454545] text-center text-lg font-normal leading-[26.28px] w-full max-sm:text-base">
            Fill out the form and we'll provide you with the latest product information, news, and business opportunities tailored to your needs. We look forward to hearing from you.
          </p>
          
          <div className="flex justify-end items-start gap-6 w-full relative bg-[#E5E4E0] p-12 rounded-[28px] max-lg:justify-center max-lg:p-12 max-md:p-6 max-sm:p-4 mx-0 my-[56px] px-[78px] py-0">
            <form onSubmit={handleSubmit} className="flex w-[544px] flex-col items-start gap-6 max-lg:w-full mx-[48px] my-[50px]">
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="w-full">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className={`flex h-[58px] items-center gap-2.5 w-full border bg-white px-8 py-[18px] rounded-[28px] border-solid max-sm:px-5 max-sm:py-4 text-lg font-normal leading-[26.28px] max-sm:text-base focus:outline-none focus:ring-2 focus:ring-[#DCB481] ${errors.name ? 'border-red-500' : 'border-[#E5E4E0]'}`} aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1 px-2" role="alert">
                      {errors.name}
                    </p>}
                </div>
              </div>
              
              <div className="w-full">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className={`flex h-[58px] items-center gap-2.5 w-full border bg-white px-8 py-[18px] rounded-[28px] border-solid max-sm:px-5 max-sm:py-4 text-lg font-normal leading-[26.28px] max-sm:text-base focus:outline-none focus:ring-2 focus:ring-[#DCB481] ${errors.email ? 'border-red-500' : 'border-[#E5E4E0]'}`} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'email-error' : undefined} />
                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1 px-2" role="alert">
                    {errors.email}
                  </p>}
              </div>
              
              <div className="w-full">
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className={`flex h-[58px] items-center gap-2.5 w-full border bg-white px-8 py-[18px] rounded-[28px] border-solid max-sm:px-5 max-sm:py-4 text-lg font-normal leading-[26.28px] max-sm:text-base focus:outline-none focus:ring-2 focus:ring-[#DCB481] ${errors.phone ? 'border-red-500' : 'border-[#E5E4E0]'}`} aria-invalid={errors.phone ? 'true' : 'false'} aria-describedby={errors.phone ? 'phone-error' : undefined} />
                {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1 px-2" role="alert">
                    {errors.phone}
                  </p>}
              </div>
              
              <div className="w-full">
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" rows={4} className={`flex h-[134px] items-start gap-2.5 w-full border bg-white px-8 py-6 rounded-[28px] border-solid max-sm:px-5 max-sm:py-4 text-lg font-normal leading-[26.28px] max-sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#DCB481] ${errors.message ? 'border-red-500' : 'border-[#E5E4E0]'}`} aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'message-error' : undefined} />
                {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1 px-2" role="alert">
                    {errors.message}
                  </p>}
              </div>
              
              <button type="submit" disabled={isSubmitting} className="flex w-[264px] h-[52px] justify-center items-center gap-2.5 bg-[#90837A] px-8 py-[18px] rounded-[28px] max-sm:w-full text-white text-xl font-normal hover:bg-[#7a6f66] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
            
            <div className="w-[414px] h-[577px] relative top-[-73px] left-12 hidden lg:block">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bdaedf6a2b4b249871135b39b9604b32a3debd6?width=826" alt="Wood panel installation example" className="w-[413px] h-[577px] absolute object-cover rounded-[28px] left-0 top-0" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/31eddc13a4ce4b7976d9a399d6774eed069fcb1f?width=828" alt="Detailed wood panel texture" className="w-[414px] h-[504px] absolute object-cover rounded-[0px_0px_28px_28px] left-0 top-[73px]" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;