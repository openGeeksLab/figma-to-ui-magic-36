import React from 'react';

const ImageGallery = () => {
  return (
    <section className="flex h-[1008px] items-start gap-6 w-full px-8 py-0 max-md:flex-col max-md:h-auto max-md:gap-5 max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0" aria-label="Product gallery">
      <div 
        className="flex w-[961px] h-[1008px] flex-col justify-end items-start gap-2.5 p-10 rounded-[28px] max-md:w-full max-md:h-[600px] max-sm:h-[500px] max-sm:p-5"
        style={{
          backgroundImage: 'url("URL_4")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex flex-col justify-end items-start flex-1 w-full">
           <article className="flex-1 w-full relative">
          
          <div className="flex flex-col items-start">
            <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05f297504b121b19c41286afd42bf86029003c2?width=1358"
            alt="Next generation wood cladding example"
            className="w-full h-[492px] object-cover rounded-[28px]"
          />
                
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h3 className="text-[#454545] text-[42px] font-bold max-md:text-[28px] max-sm:text-xl">
                Custom Cladding
              </h3>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h3 className="text-[#454545] text-[42px] font-bold max-md:text-[28px] max-sm:text-xl">
                <span className="text-[#454545]">to </span>
                <span className="text-[#DCB481]">Match </span>
                <span className="text-[#454545]">Any</span>
              </h3>
               </article>
            </div>
            
           
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h3 className="text-[#454545] text-[42px] font-bold max-md:text-[28px] max-sm:text-xl">
                Aesthetic
              </h3>
            </div>
          </div>
             
        </div>
         
      </div>
    
      <div className="flex flex-col items-start gap-6 flex-1 h-full max-md:w-full">
        <article className="flex-1 w-full relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05f297504b121b19c41286afd42bf86029003c2?width=1358"
            alt="Next generation wood cladding example"
            className="w-full h-[492px] object-cover rounded-[28px]"
          />
          <div className="inline-flex flex-col items-start absolute left-[30px] bottom-10 max-sm:left-4 max-sm:bottom-5">
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h4 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-lg">
                <span className="text-[#454545]">Next </span>
                <span className="text-[#DCB481]">Generation</span>
              </h4>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h4 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-lg">
                Wood Cladding
              </h4>
            </div>
          </div>
        </article>
        
        <article className="flex-1 w-full relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0833abaae74921a0db08c0e7a32260054a68080f?width=1358"
            alt="Thermally modified cladding to enhance environment"
            className="w-full h-[492px] object-cover rounded-[28px]"
          />
          <div className="inline-flex flex-col items-start absolute left-[30px] bottom-10 max-sm:left-4 max-sm:bottom-5">
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h4 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-lg">
                Thermally Modified
              </h4>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h4 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-lg">
                <span className="text-[#DCB481]">Cladding </span>
                <span className="text-[#454545]">to Enhance Any</span>
              </h4>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-2.5">
              <h4 className="text-[#454545] text-[32px] font-bold max-md:text-2xl max-sm:text-lg">
                Environment
              </h4>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ImageGallery;
