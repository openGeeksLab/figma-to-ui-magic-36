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
      "visionParagraph": "Our Vision is to be the leading provider of premium interior and exterior wood wall panels, inspiring sustainable and innovative design solutions that transform indoor and outdoor spaces in the Nordic countries.",
      "ourValuesPrefix": "Our",
      "ourValuesHighlight": "Values",
      "valuesParagraph": "Our core values are Commitment, Quality and Responsibility in everything we do. Our core values describe how we act towards each other and towards our customers, suppliers, and other partners.",
      "weProvidePrefix": "We",
      "weProvideHighlight": "Provide",
      "provideItem1": "Tailored solutions that match your architectural style.",
      "provideItem2": "Expert advice to guide you from concept to completion.",
      "provideItem3": "Skilled installation ensuring perfect alignment and durability.",
      "provideItem4": "Keeping your wood panels looking their best year after year.",
      "sustainability": "Sustainability",
      "sustainabilityParagraph1": "As a leading provider of premium interior and exterior wood wall panels, Nordic Thermoträ delivers sustainable and innovative design solutions that transform indoor and outdoor spaces.",
      "sustainabilityParagraph2": "For us, the environment and sustainability are obvious issues in everyday life. We work to contribute to a sustainable society thriving in harmony with nature. Our heat-treated wood is sustainably produced in Finland, using timber from FSC-certified forests and a treatment process completely free from chemicals.",
      "sustainabilityParagraph3": "The result? A wood that's not only beautiful – it's strong, dimensionally stable, and built to last, no matter the climate. We continuously work to reduce our climate footprint, e.g. by gradually switching to the latest technology and actively influencing our subcontractors.",
      
      // Contact page
      "contactUs": "Contact",
      "contactUsHighlight": "Us",
      "getInTouch": "Get",
      "getInTouchHighlight": "in touch",
      "contactDescription": "Our team is dedicated to assisting you with any inquiries or concerns. We are committed to delivering exceptional customer service, high-quality products, and fast shipping."
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
      "visionParagraph": "Vår vision är att vara den ledande leverantören av interiöra och exteriöra träväggspaneler av högsta kvalitet, som inspirerar till hållbara och innovativa designlösningar som förvandlar inomhus- och utomhusmiljöer i Norden",
      "ourValuesPrefix": "Våra",
      "ourValuesHighlight": "värderingar",
      "valuesParagraph": "Våra kärnvärden är Engagemang, Kvalitet och Ansvar i allt vi gör. Våra kärnvärden beskriver hur vi agerar gentemot varandra och gentemot våra kunder, leverantörer och andra samarbetspartners.",
      "weProvidePrefix": "Vi",
      "weProvideHighlight": "tillhandahåller",
      "provideItem1": "Skräddarsydda lösningar som matchar din arkitektoniska stil.",
      "provideItem2": "Expertråd som vägleder dig från idé till färdigställande.",
      "provideItem3": "Skicklig installation med perfekt inriktning och hållbarhet.",
      "provideItem4": "Vi ser till att dina träpaneler ser bäst ut år efter år.",
      "sustainability": "Hållbarhet",
      "sustainabilityParagraph1": "Som en ledande leverantör av interiöra och exteriöra väggpaneler i trä levererar Nordic Thermoträ hållbara och innovativa designlösningar som förändrar inomhus- och utomhusmiljöer.",
      "sustainabilityParagraph2": "För oss är miljö och hållbarhet självklara frågor i vardagen. Vi arbetar för att bidra till ett hållbart samhälle som frodas i harmoni med naturen. Vårt värmebehandlade trä produceras på ett hållbart sätt i Finland, med virke från FSC-certifierade skogar och en behandlingsprocess helt fri från kemikalier. Resultatet?",
      "sustainabilityParagraph3": "Ett trä som inte bara är vackert - det är också starkt, formstabilt och byggt för att hålla, oavsett klimat. Vi arbetar kontinuerligt för att minska vårt klimatavtryck, t.ex. genom att gradvis övergå till den senaste tekniken och aktivt påverka våra underleverantörer.",
      
      // Contact page
      "contactUs": "Kontakta",
      "contactUsHighlight": "oss",
      "getInTouch": "Kom i",
      "getInTouchHighlight": "kontakt",
      "contactDescription": "Vårt team är engagerat i att hjälpa dig med alla frågor eller funderingar. Vi strävar efter att leverera enastående kundservice, produkter av högsta kvalitet och snabba leveranser."
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