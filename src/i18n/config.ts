import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Header
      "products": "Products",
      "gallery": "Gallery", 
      "about": "About",
      "blog": "Blog",
      "contact": "Contact",
      "getSample": "Get a Free Sample"
    }
  },
  sv: {
    translation: {
      // Header
      "products": "Produkter",
      "gallery": "Galleri",
      "about": "Om oss", 
      "blog": "Blogg",
      "contact": "Kontakt",
      "getSample": "Få ett gratis prov"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;