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
      "getSample": "Get a Free Sample",
      
      // Footer
      "company": "Company",
      "product": "Product",
      "exteriorPanels": "Exterior Wood Panels",
      "interiorPanels": "Interior Wood Panels",
      "privacyPolicy": "Privacy Policy",
      "address": "Address:",
      "email": "Email:",
      "phone": "Phone:",
      "cookiePolicy": "Cookie Policy",
      "termsOfUse": "General Terms of Use",
      
      // About page
      "aboutUs": "About",
      "aboutUsHighlight": "Us",
      "simplyMadePrefix": "Simply",
      "simplyMadeHighlight": "made",
      "simplyMadeSuffix": "of wood",
      "aboutFirstParagraph": "At Nordic Thermoträ, we are passionate about transforming spaces with the natural beauty and durability of heat-treated wood. With years of experience in the industry, we specialize in providing high-quality, sustainable wood solutions tailored to meet the unique needs of each client.",
      "aboutSecondParagraph": "We believe in creating interior and outdoor environments that not only look stunning but also stand the test of time. Whether you're enhancing a residential property or a commercial facade, our team is here to bring your vision to life with expert guidance and superior products.",
      "ourVisionPrefix": "Our",
      "ourVisionHighlight": "Vision",
      "visionParagraph": "Our Vision is to be the leading provider of premium interior and exterior wood wall panels, inspiring sustainable and innovative design solutions that transform indoor and outdoor spaces in the Nordic countries."
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
      "getSample": "Få ett gratis prov",
      
      // Footer
      "company": "Företag",
      "product": "Produkt",
      "exteriorPanels": "Utomhus Trätäckningar",
      "interiorPanels": "Inomhus Trätäckningar",
      "privacyPolicy": "Integritetspolicy",
      "address": "Adress:",
      "email": "E-post:",
      "phone": "Telefon:",
      "cookiePolicy": "Cookie Policy",
      "termsOfUse": "Allmänna Villkor",
      
      // About page
      "aboutUs": "Om",
      "aboutUsHighlight": "Oss",
      "simplyMadePrefix": "Helt",
      "simplyMadeHighlight": "enkelt gjord",
      "simplyMadeSuffix": "av trä",
      "aboutFirstParagraph": "På Nordic Thermoträ AB brinner vi för att förvandla utrymmen med den naturliga skönheten och hållbarheten av värmebehandlat trä. Med många års erfarenhet i branschen specialiserar vi oss på att tillhandahålla högkvalitativa, hållbara trälösningar som är skräddarsydda för att möta varje kunds unika behov.",
      "aboutSecondParagraph": "Vi tror på att skapa interiör- och utomhusmiljöer som inte bara ser fantastiska ut utan också står sig över tid. Oavsett om du vill försköna en bostadsfastighet eller en kommersiell fasad finns vårt team här för att förverkliga din vision med hjälp av expertrådgivning och överlägsna produkter.",
      "ourVisionPrefix": "Vår",
      "ourVisionHighlight": "vision",
      "visionParagraph": "Vår vision är att vara den ledande leverantören av interiöra och exteriöra träväggspaneler av högsta kvalitet, som inspirerar till hållbara och innovativa designlösningar som förvandlar inomhus- och utomhusmiljöer i Norden"
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