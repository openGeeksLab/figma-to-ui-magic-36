import React from 'react';
import { Wrench, Users, ShieldCheck, Ban } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.3999 20H3.3999V6L12.3999 4L21.3999 6V20H18.3999M6.3999 20H18.3999M6.3999 20V16M18.3999 20V16M6.3999 16V12M6.3999 16H18.3999M18.3999 16V12M6.3999 12V8H18.3999V12M6.3999 12H18.3999" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Unmatched Stability"
    },
    {
      icon: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1997 21.9998V11.9998M12.1997 11.9998V7.99981M12.1997 11.9998L15.1997 8.99981M12.6237 18.5758L18.7927 12.4068C19.3444 11.8551 19.7725 11.1924 20.0485 10.4627C20.3245 9.7329 20.4422 8.95279 20.3937 8.17408C20.3451 7.39538 20.1316 6.6359 19.7671 5.94604C19.4026 5.25619 18.8956 4.65174 18.2797 4.17281C16.5413 2.82089 14.4019 2.08691 12.1997 2.08691C9.99751 2.08691 7.85811 2.82089 6.11971 4.17281C5.5038 4.65174 4.99678 5.25619 4.63232 5.94604C4.26786 6.6359 4.05428 7.39538 4.00577 8.17408C3.95725 8.95279 4.0749 9.7329 4.35092 10.4627C4.62694 11.1924 5.05501 11.8551 5.60671 12.4068L11.7757 18.5758C11.8882 18.6882 12.0407 18.7513 12.1997 18.7513C12.3587 18.7513 12.5112 18.6882 12.6237 18.5758Z" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Enhanced Durability"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 21C7 21 7.5 16.5 11 12.5" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.1298 4.24198L19.7238 10.417C20.0978 14.303 17.1838 17.763 13.2988 18.137C9.48578 18.504 6.03178 15.717 5.66478 11.904C5.48843 10.0729 6.04667 8.24681 7.21671 6.82735C8.38674 5.40789 10.0727 4.51136 11.9038 4.33498L18.4748 3.70298C18.5533 3.69539 18.6324 3.70335 18.7078 3.72638C18.7832 3.74942 18.8534 3.78709 18.9142 3.83724C18.975 3.88739 19.0254 3.94904 19.0624 4.01866C19.0994 4.08828 19.1223 4.1635 19.1298 4.24198Z" stroke="#C09E85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Sustainability"
    },
    {
      icon: <ShieldCheck size={24} color="#C09E85" strokeWidth={1.5} />,
      title: "Toxin-free and Chemical-fre"
    },
    {
      icon: <Ban size={24} color="#C09E85" strokeWidth={1.5} />,
      title: "No Resin"
    },
    {
      icon: <Wrench size={24} color="#C09E85" strokeWidth={1.5} />,
      title: "Low Maintenance"
    },
    {
      icon: <Users size={24} color="#C09E85" strokeWidth={1.5} />,
      title: "Tailored Approach for Each Customer"
    },
    
  ];

  return (
    <section className="grid h-[54px] w-full grid-cols-[repeat(7,1fr)] pt-0 pb-[86px] px-8 mt-16 max-xl:px-6 max-lg:px-6 max-md:grid-cols-[repeat(2,1fr)] max-md:grid-rows-[repeat(3,1fr)] max-md:h-auto max-md:gap-5 max-md:px-5 max-md:py-10 max-sm:grid-cols-[1fr] max-sm:px-4 max-sm:py-[30px]" aria-label="Product features">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2.5 px-5 py-0 border-r-[#E5E4E0] border-r border-solid max-md:p-5 max-md:border-r-[none] max-md:border-b-[#E5E4E0] max-md:border-b max-md:border-solid max-sm:border-r-[none] max-sm:border-b-[#E5E4E0] max-sm:border-b max-sm:border-solid last:border-r-0"
        >
          <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
            {feature.icon}
          </div>
          <h3 className="text-[#454545] text-center text-base font-bold">
            {feature.title}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Features;
