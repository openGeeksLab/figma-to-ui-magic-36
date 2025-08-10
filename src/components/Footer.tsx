import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
      <div className="flex items-start gap-6 w-full bg-[#90837A] pt-[90px] pb-16 px-6 rounded-[28px] max-md:flex-col max-md:gap-10 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10">
        <div className="flex w-[655px] items-center relative pr-[480px] max-md:w-full">
          <div className="flex flex-col justify-center items-start gap-6 absolute w-[175px] h-32 left-0 top-0 max-md:static max-md:w-full max-md:h-auto">
            <img
              src="/lovable-uploads/10e1a49d-9139-4459-ad9b-83cea977cde3.png"
              alt="Nordic Thermoträ logo"
              className="w-[175px] h-20 aspect-[35/16]"
            />
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Follow us on TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12C9.40666 12 8.82664 12.1759 8.33329 12.5056C7.83994 12.8352 7.45543 13.3038 7.22836 13.8519C7.0013 14.4001 6.94189 15.0033 7.05765 15.5853C7.1734 16.1672 7.45912 16.7018 7.87868 17.1213C8.29824 17.5409 8.83279 17.8266 9.41473 17.9424C9.99667 18.0581 10.5999 17.9987 11.1481 17.7716C11.6962 17.5446 12.1648 17.1601 12.4944 16.6667C12.8241 16.1734 13 15.5933 13 15V6C13.333 7 14.6 9 17 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1Br69XcoQZ/?mibextid=wwXIfr" className="hover:opacity-80 transition-opacity" aria-label="Follow us on Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 21V12C11 9.813 11.5 8 15 8M9 13H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Follow us on Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M17.5 6.51002L17.51 6.49902" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <nav className="flex w-[257px] flex-col items-start gap-6 max-md:w-full" aria-label="Company links">
          <h3 className="text-white text-xl font-bold w-full max-sm:text-lg">{t('company')}</h3>
          <ul className="flex flex-col justify-center items-start gap-4 w-full">
            <li><a href="/blog" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('blog')}</a></li>
            <li><a href="#about" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('about')}</a></li>
            <li><a href="#contact" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('contact')}</a></li>
          </ul>
        </nav>
        
        <nav className="flex w-[257px] flex-col items-start gap-6 max-md:w-full" aria-label="Product links">
          <h3 className="text-white text-xl font-bold w-full max-sm:text-lg">{t('product')}</h3>
          <ul className="flex flex-col justify-center items-start gap-4 w-full">
            <li><a href="#exterior-panels" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('exteriorPanels')}</a></li>
            <li><a href="#interior-panels" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('interiorPanels')}</a></li>
            <li><a href="#privacy" className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('privacyPolicy')}</a></li>
          </ul>
        </nav>
        
        <address className="flex w-[374px] flex-col items-start gap-6 max-md:w-full not-italic">
          <div className="flex flex-col justify-center items-start gap-4 w-full">
            <span className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base">{t('address')}</span>
            <span className="text-white text-lg font-bold leading-[26.28px] max-sm:text-base whitespace-nowrap">Annelötsvägen 61 Grödinge Stockholm</span>
          </div>
       <div className="flex flex-col justify-center items-start gap-4 w-full">
  <span className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('email')}&nbsp;
    <a
      href="mailto:info@nordicthermotra.se"
      className="text-white font-bold hover:text-[#DCB481] transition-colors"
    >
      info@nordicthermotra.se
    </a>
  </span>
</div>

         <div className="flex flex-col justify-center items-start gap-4 w-full">
  <span className="text-white text-lg font-normal leading-[26.28px] max-sm:text-base">
    {t('phone')}&nbsp;
    <a
      href="tel:+4670494849"
      className="text-white text-lg font-bold leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors"
    >
      +46 70 494 84 98
    </a>
  </span>
</div>

        </address>
      </div>
      
      <div className="flex justify-between items-center w-full px-0 py-6 max-md:flex-col max-md:gap-5 max-md:items-start max-sm:px-0 max-sm:py-5">
        <div className="flex items-center gap-8">
          <span className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            © {currentYear} Thermowood
          </span>
        </div>
        <nav className="flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-4" aria-label="Legal links">
          <a href="#cookies" className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('cookiePolicy')}</a>
          <a href="#terms" className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('termsOfUse')}</a>
          <a href="#privacy" className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base hover:text-[#DCB481] transition-colors">{t('privacyPolicy')}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
