import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SampleRequestPopup from './SampleRequestPopup';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="relative flex w-full justify-between items-center bg-white px-8 py-12 max-md:px-5 max-md:py-6 max-sm:p-4">
      <Link to="/">
        <img
          src="/lovable-uploads/10e1a49d-9139-4459-ad9b-83cea977cde3.png"
          alt="Nordic Thermoträ logo"
          className="w-[175px] h-20 aspect-[35/16] max-sm:w-[120px] max-sm:h-[55px] cursor-pointer"
        />
      </Link>
      
      <nav className="flex items-center gap-[49px] max-md:hidden" role="navigation" aria-label="Main navigation">
        <Link to="/products" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          {t('products')}
        </Link>
        
        <Link to="/gallery" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          {t('gallery')}
        </Link>
        
        <Link to="/about" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          {t('about')}
        </Link>
        
        <Link to="/blog" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          {t('blog')}
        </Link>
        
        <Link to="/contact" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          {t('contact')}
        </Link>
        
        <LanguageSelector />
        
        <SampleRequestPopup>
          <button className="flex h-[51px] justify-center items-center gap-2.5 bg-[#DCB481] px-8 py-[18px] rounded-[28px] text-[#454545] text-xl font-normal hover:bg-[#c9a373] transition-colors">
            {t('getSample')}
          </button>
        </SampleRequestPopup>
      </nav>
      
      <button 
        className="hidden text-[#454545] text-2xl max-md:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={`block h-0.5 bg-[#454545] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 bg-[#454545] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 bg-[#454545] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>
      
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 md:hidden border-t">
          <nav className="flex flex-col p-6 space-y-6">
            <div className="flex justify-center mb-4">
              <LanguageSelector />
            </div>
            
            <Link 
              to="/products" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('products')}
            </Link>
            <Link 
              to="/gallery" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('gallery')}
            </Link>
            <Link 
              to="/about" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              to="/blog" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('blog')}
            </Link>
            <Link 
              to="/contact" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <SampleRequestPopup>
              <button 
                className="bg-[#DCB481] px-8 py-4 rounded-[28px] text-[#454545] text-lg font-normal mt-4 w-full hover:bg-[#c9a373] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('getSample')}
              </button>
            </SampleRequestPopup>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
