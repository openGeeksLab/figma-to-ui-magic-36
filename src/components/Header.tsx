import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex w-full justify-between items-center bg-white px-8 py-12 max-md:px-5 max-md:py-6 max-sm:p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/902b289f6044ad330a3742acb39d6cae82a5275c?width=350"
        alt="Thermowood logo"
        className="w-[175px] h-20 aspect-[35/16] max-sm:w-[120px] max-sm:h-[55px]"
      />
      
      <nav className="flex items-center gap-[49px] max-md:hidden" role="navigation" aria-label="Main navigation">
        <div className="flex h-10 justify-center items-center gap-2.5 px-0 py-2">
          <span className="text-[#454545] text-xl font-normal leading-[29.2px]">Products</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.30687 8.713C5.36364 8.57594 5.45978 8.45879 5.58313 8.37638C5.70649 8.29396 5.85151 8.24998 5.99987 8.25H17.9999C18.1481 8.25013 18.293 8.29419 18.4162 8.37661C18.5394 8.45903 18.6354 8.57611 18.6922 8.71308C18.7489 8.85004 18.7637 9.00074 18.7348 9.14614C18.7059 9.29154 18.6346 9.42511 18.5299 9.53L12.5299 15.53C12.3892 15.6705 12.1986 15.7493 11.9999 15.7493C11.8011 15.7493 11.6105 15.6705 11.4699 15.53L5.46987 9.53C5.36498 9.42519 5.29351 9.29163 5.2645 9.14621C5.23548 9.0008 5.25023 8.85004 5.30687 8.713Z" fill="#454545"/>
          </svg>
        </div>
        
        <a href="#gallery" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          Gallery
        </a>
        
        <Link to="/about" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          About
        </Link>
        
        <a href="#blog" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          Blog
        </a>
        
        <a href="#contact" className="flex h-10 justify-center items-center gap-2.5 px-0 py-2 text-[#454545] text-xl font-normal leading-[29.2px] hover:text-[#DCB481] transition-colors">
          Contact
        </a>
        
        <button className="flex h-[51px] justify-center items-center gap-2.5 bg-[#DCB481] px-8 py-[18px] rounded-[28px] text-[#454545] text-xl font-normal hover:bg-[#c9a373] transition-colors">
          Get a Free Sample
        </button>
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
            <a 
              href="#products" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#gallery" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <Link 
              to="/about" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="#blog" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="text-[#454545] text-lg font-normal py-3 px-2 hover:text-[#DCB481] transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              className="bg-[#DCB481] px-8 py-4 rounded-[28px] text-[#454545] text-lg font-normal mt-4 w-full hover:bg-[#c9a373] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Sample
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
