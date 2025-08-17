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
      "getSample": "Our Products",
      
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
      "proudlyMadeBy": "Proudly made by ❤️ OpenGeeksLab",
      
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
      "provideItem5": "Fast production and short delivery time.",
      "sustainability": "Sustainability",
      "sustainabilityParagraph1": "As a leading provider of premium interior and exterior wood wall panels, Nordic Thermoträ delivers sustainable and innovative design solutions that transform indoor and outdoor spaces.",
      "sustainabilityParagraph2": "For us, the environment and sustainability are obvious issues in everyday life. We work to contribute to a sustainable society thriving in harmony with nature. Our heat-treated wood is sustainably produced in Finland, using timber from FSC-certified forests and a treatment process completely free from chemicals.",
      "sustainabilityParagraph3": "The result? A wood that's not only beautiful – it's strong, dimensionally stable, and built to last, no matter the climate. We continuously work to reduce our climate footprint, e.g. by gradually switching to the latest technology and actively influencing our subcontractors.",
      
      // Contact page
      "contactUs": "Contact",
      "contactUsHighlight": "Us",
      "getInTouch": "Get",
      "getInTouchHighlight": "in touch",
      "contactDescription": "Our team is dedicated to assisting you with any inquiries or concerns. We are committed to delivering exceptional customer service, high-quality products, and fast shipping.",
      "callUs": "Call us",
      "emailUs": "Email us", 
      "contactAddress": "Address",
      "operatingHours": "Operating Hours",
      "experienceExcellence": "Experience of the",
      "excellenceHighlight": "excellence",
      "contactFormDescription": "Fill out the form and we'll provide you with the latest product information, news, and business opportunities tailored to your needs. We look forward to hearing from you.",
      "namePlaceholder": "Name",
      "emailPlaceholder": "Email",
      "phonePlaceholder": "Phone",
      "messagePlaceholder": "Message",
      "sending": "Sending...",
      "send": "Send",
      "thankYouMessage": "Thank you for your",
      "messageHighlight": "message!",
      "thankYouDescription": "We'll get back to you within 24 hours with the latest product information and business opportunities.",
      "sendAnotherMessage": "Send Another Message",
      "nameRequired": "Name is required",
      "emailRequired": "Email is required",
      "validEmailRequired": "Please enter a valid email address",
      "phoneRequired": "Phone number is required",
      "validPhoneRequired": "Please enter a valid phone number",
      "messageRequired": "Message is required",
      
      // FAQ section
      "stillQuestion": "Still a",
      "questionHighlight": "question",
      "questionSuffix": "? Here are the answers",
      "faqQ1": "Are exterior wood wall panels weather-resistant?",
      "faqA1": "Yes! Our panels are designed to withstand various weather conditions, including rain, humidity, and temperature fluctuations. Proper maintenance will enhance longevity.",
      "faqQ2": "How do I maintain wood wall panels?",
      "faqA2": "Regular cleaning with mild soap and water, periodic inspection for damage, and occasional resealing or refinishing will keep your panels looking great for years.",
      "faqQ3": "Can I install the panels myself?",
      "faqA3": "While DIY installation is possible for experienced builders, we recommend professional installation to ensure proper mounting, weatherproofing, and warranty coverage.",
      "faqQ4": "Are the materials sustainably sourced?",
      "faqA4": "Absolutely! All our wood is sourced from responsibly managed forests with proper certifications. Our thermal modification process uses only heat and steam, no chemicals.",
      "faqQ5": "What is the lifespan of exterior wood wall panels?",
      "faqA5": "With proper installation and maintenance, our thermally modified wood panels can last 25-30 years or more, significantly longer than traditional wood products.",
      
      // Gallery page
      "ourGallery": "Our",
      "galleryHighlight": "Gallery",
      "ourProjects": "Our",
      "projectsHighlight": "Projects",
      "galleryDescription": "Explore our stunning collection of wooden panel projects. Each design showcases the natural beauty and versatility of wood in modern architecture.",
      
      // Blog page
      "ourBlog": "Our",
      "blogHighlight": "Blog",
      
      // Index page
      "stockholmHouse": "The House in the Heart of Stockholm's Archipelago",
      "stockholmHouseHighlight": "in the Heart of Stockholm's Archipelago",
      "stockholmHouseDescription": "In the hearts of the archipelago the materials had to be strong enough to withstand the harsh weather conditions, yet lightweight enough to facilitate installation. After extensive testing, they selected Thermowood F-3 smooth planed profiles in combination with three different dimensions 90 mm, 115 mm, and 140 mm for its durability, resistance to the elements, and aesthetic appeal. The result is a stunning and functional venue that offers relaxing and close-to-nature feeling.",
      "getFreeSample": "Our Products",
      
      // Hero section
      "heroLine1": "Naturally sustainable,",
      "heroLine2": "Reliable, Sustainability", 
      "heroLine3": "Through technology",
      "heroDescription": "Inspired by revolutionary innovation. Experience the power of science with our ultra-safe, heat-treated wood. Through innovation, our wood combines advanced science and precision engineering for outstanding performance.",
      
      // Features
       "unmatchedStability": "Unmatched Stability",
       "enhancedDurability": "Enhanced Durability", 
       "sustainabilityFeature": "Sustainability",
      "toxinFree": "Toxin-free and Chemical-free",
      "noResin": "No Resin",
      "lowMaintenance": "Low Maintenance",
       "tailoredApproach": "Tailored Approach for Each Customer",
       
       // Feature descriptions
       "enhancedDurabilityDesc": "Enhanced durability to resist wear while preserving beauty.",
       "unmatchedStabilityDesc": "Unmatched stability that keeps your wood steady and secure.",
       "sustainabilityFeatureDesc": "Sustainability that protects nature for future generations.",
      
      // ImageGallery
      "customCladding": "Custom Cladding",
      "toMatch": "to",
      "match": "Match",
      "any": "Any",
      "anyAesthetic": "Aesthetic",
      "next": "Next",
      "generation": "Generation",
      "woodCladding": "Wood Cladding",
      "thermallyModified": "Thermally Modified",
      "claddingToEnhance": "Cladding to Enhance Any",
      "environment": "Environment",
      
      // Enhanced wood section
      "enhanceWoodTitle": "We enhance wood naturally with heat, steam, and nothing else",
      "enhanceWoodHighlight": "wood naturally",
      "enhanceWoodDescription": "Using only heat and steam, we've developed an exclusive method that enhances the natural properties of wood to an unprecedented level. By removing moisture from the wood cells, we've created a product that's not only durable and stable but also beautiful and sustainable, all without the use of any chemicals. Our technology is the result of years of research and development, which we're proud to say is the finest and most advanced in the market.",
      
      // Effortless installation section
      "effortlessInstallationTitle": "Effortless installation with unparalleled lightweight superiority",
      "effortlessInstallationHighlight": "unparalleled",
      
      // Catalog section
      "catalogTitle": "Interior & Exterior Wall Panel Catalog",
      "catalogHighlight": "Catalog",
      "catalogDescription": "You can get the catalogue with our panels here.",
      "downloadCatalog": "Download Catalog",
      
      // Products page
      "ourProducts": "Our Products",
      "ourProductsHighlight": "Products",
      
      // Product types
      "cladding": "Cladding",
      "decking": "Decking", 
      "allProducts": "All Products",
      
      // Surface treatments
      "surfaceTreatment": "Surface Treatment",
      "smoothPlaned": "Smooth planed",
      "roughSawn": "Finely sawn",
      "brushed": "Brushed",
      "dimensions": "Dimensions",
      "toneColor": "Tone Color",
      
      // Sample Request Popup
      "sampleRequestTitle": "Get a Free Sample",
      "sampleNamePlaceholder": "Name",
      "sampleEmailPlaceholder": "Email",
      "samplePhonePlaceholder": "Phone",
      "sampleMessagePlaceholder": "Message",
      "sampleSending": "Sending...",
      "sampleSend": "Send",
      "sampleError": "Error",
      "sampleFillRequired": "Please fill in all required fields.",
      "sampleValidEmail": "Please enter a valid email address.",
      "sampleValidPhone": "Please enter a valid phone number.",
      "sampleRequestSent": "Sample Request Sent!",
      "sampleRequestDescription": "We'll send you a free sample within 2-3 business days.",
      "sampleRequestFailed": "Failed to send sample request. Please try again.",
      "sampleCloseAriaLabel": "Close sample request form",
      
       // Product detail selected options
       "surface": "Surface",
       "color": "Color",
       
       // Product detail page
       "specification": "Specification",
       "details": "Details",
       "personalisedOrders": "Personalised orders",
       "fillTheForm": "Fill the Form",
       "productDescription": "is a sophisticated 3D cladding of Nordic Pine. It creates a visually elegant and modern wood surface. Highly suitable for facades, interiors, and other decorative surfaces where a sustainable and chemical-free wood surface is desired. Additionally, if left untreated outside, it develops a beautiful naturally greyed patina.",
       "defaultSpecifications": {
         "dimensionallyStable": "Dimensionally stable",
         "withoutChemicals": "Without added chemicals", 
         "naturalProduct": "100% natural product"
       }
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
      "getSample": "Våra Produkter",
      
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
      "proudlyMadeBy": "Stolt gjord av ❤️ OpenGeeksLab",
      
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
      "provideItem5": "Snabb tillverkning och kort leveranstid",
      "sustainability": "Hållbarhet",
      "sustainabilityParagraph1": "Som en ledande leverantör av interiöra och exteriöra väggpaneler i trä levererar Nordic Thermoträ hållbara och innovativa designlösningar som förändrar inomhus- och utomhusmiljöer.",
      "sustainabilityParagraph2": "För oss är miljö och hållbarhet självklara frågor i vardagen. Vi arbetar för att bidra till ett hållbart samhälle som frodas i harmoni med naturen. Vårt värmebehandlade trä produceras på ett hållbart sätt i Finland, med virke från FSC-certifierade skogar och en behandlingsprocess helt fri från kemikalier. Resultatet?",
      "sustainabilityParagraph3": "Ett trä som inte bara är vackert - det är också starkt, formstabilt och byggt för att hålla, oavsett klimat. Vi arbetar kontinuerligt för att minska vårt klimatavtryck, t.ex. genom att gradvis övergå till den senaste tekniken och aktivt påverka våra underleverantörer.",
      
      // Contact page
      "contactUs": "Kontakta",
      "contactUsHighlight": "oss",
      "getInTouch": "Kom i",
      "getInTouchHighlight": "kontakt",
      "contactDescription": "Vårt team är engagerat i att hjälpa dig med alla frågor eller funderingar. Vi strävar efter att leverera enastående kundservice, produkter av högsta kvalitet och snabba leveranser.",
      "callUs": "Ring oss",
      "emailUs": "Mejla oss",
      "contactAddress": "Adress",
      "operatingHours": "Öppettider",
      "experienceExcellence": "Upplev",
      "excellenceHighlight": "excellensen",
      "contactFormDescription": "Fyll i formuläret så ger vi dig den senaste produktinformationen, nyheter och affärsmöjligheter anpassade efter dina behov. Vi ser fram emot att höra från dig.",
      "namePlaceholder": "Namn",
      "emailPlaceholder": "E-post",
      "phonePlaceholder": "Telefon",
      "messagePlaceholder": "Meddelande",
      "sending": "Skickar...",
      "send": "Skicka",
      "thankYouMessage": "Tack för ditt",
      "messageHighlight": "meddelande!",
      "thankYouDescription": "Vi återkommer inom 24 timmar med den senaste produktinformationen och affärsmöjligheterna.",
      "sendAnotherMessage": "Skicka ett nytt meddelande",
      "nameRequired": "Namn krävs",
      "emailRequired": "E-post krävs",
      "validEmailRequired": "Vänligen ange en giltig e-postadress",
      "phoneRequired": "Telefonnummer krävs",
      "validPhoneRequired": "Vänligen ange ett giltigt telefonnummer",
      "messageRequired": "Meddelande krävs",
      
      // FAQ section
      "stillQuestion": "Har du fortfarande en",
      "questionHighlight": "fråga",
      "questionSuffix": "? Här är svaren",
      "faqQ1": "Är utomhusträpaneler väderbeständiga?",
      "faqA1": "Ja! Våra paneler är designade för att motstå olika väderförhållanden, inklusive regn, fuktighet och temperaturförändringar. Korrekt underhåll förlänger livslängden.",
      "faqQ2": "Hur underhåller jag träväggspaneler?",
      "faqA2": "Regelbunden rengöring med mild tvål och vatten, periodisk inspektion för skador och tillfällig försegling eller renovering håller dina paneler fina i många år.",
      "faqQ3": "Kan jag installera panelerna själv?",
      "faqA3": "Även om DIY-installation är möjlig för erfarna byggare, rekommenderar vi professionell installation för att säkerställa korrekt montering, väderskydd och garantitäckning.",
      "faqQ4": "Är materialen hållbart inköpta?",
      "faqA4": "Absolut! Allt vårt trä kommer från ansvarsfullt förvaltade skogar med rätt certifieringar. Vår termiska modifieringsprocess använder endast värme och ånga, inga kemikalier.",
      "faqQ5": "Vad är livslängden för utomhusträpaneler?",
      "faqA5": "Med korrekt installation och underhåll kan våra termiskt modifierade träpaneler hålla 25-30 år eller mer, betydligt längre än traditionella träprodukter.",
      
      // Gallery page
      "ourGallery": "Vårt",
      "galleryHighlight": "galleri",
      "ourProjects": "Våra",
      "projectsHighlight": "projekt",
      "galleryDescription": "Utforska vår fantastiska samling av träpanelprojekt. Varje design visar träets naturliga skönhet och mångsidighet i modern arkitektur.",
      
      // Blog page
      "ourBlog": "Vår",
      "blogHighlight": "blogg",
      
      // Index page
      "stockholmHouse": "Huset i hjärtat av Stockholms skärgård",
      "stockholmHouseHighlight": "i hjärtat av Stockholms skärgård",
      "stockholmHouseDescription": "I hjärtat av skärgården var materialen tvungna att vara tillräckligt starka för att klara de hårda väderförhållandena, men ändå tillräckligt lätta för att underlätta installationen. Efter omfattande tester valde de Thermowood F-3 släthyvlade profiler i kombination med tre olika dimensioner 90 mm, 115 mm och 140 mm för dess hållbarhet, motståndskraft mot väder och vind samt estetiska tilltal. Resultatet är en fantastisk och funktionell plats som erbjuder en avkopplande och naturnära känsla.",
      "getFreeSample": "Våra Produkter",
      
      // Hero section
      "heroLine1": "Naturligt hållbar,",
      "heroLine2": "Pålitlig,",
      "heroLine3": "Hållbar tack vare teknik",
      "heroDescription": "Drivs av banbrytande teknik. Upplev vetenskapens styrka med vårt ultrasäkra, värmebehandlade trä. Genom innovation kombinerar vårt trä avancerad vetenskap och precisionsingenjörskap för enastående prestanda.",
      
       // Features
       "unmatchedStability": "Oöverträffad stabilitet",
       "enhancedDurability": "Förbättrad hållbarhet",
       "sustainabilityFeature": "Hållbarhet",
       "toxinFree": "Giftfri och kemikaliefri",
       "noResin": "Ingen hartser",
       "lowMaintenance": "Lågt underhåll",
       "tailoredApproach": "Skräddarsydd lösning för varje kund",
       
       // Feature descriptions
       "enhancedDurabilityDesc": "Förbättrad hållbarhet för att motstå slitage samtidigt som skönheten bevaras.",
       "unmatchedStabilityDesc": "Oöverträffad stabilitet som håller ditt trä stadigt och säkert.",
       "sustainabilityFeatureDesc": "Hållbarhet som skyddar naturen för kommande generationer.",
      
      // ImageGallery
      "customCladding": "Skräddarsydd Beklädnad",
      "toMatch": "för att",
      "match": "Matcha Valfri",
      "any": "",
      "anyAesthetic": "Estetik",
      "next": "Nästa",
      "generation": "Generations",
      "woodCladding": "Träpanel",
      "thermallyModified": "Värmebehandlad",
      "claddingToEnhance": "Beklädnad för att Förbättra",
      "environment": "Alla Miljöer",
      
      // Enhanced wood section
      "enhanceWoodTitle": "Vi förbättrar trä naturligt med värme, ånga och inget annat",
      "enhanceWoodHighlight": "trä naturligt",
      "enhanceWoodDescription": "Med endast värme och ånga har vi utvecklat en exklusiv metod som förbättrar träets naturliga egenskaper till en enastående nivå. Genom att avlägsna fukt från träcellerna har vi skapat en produkt som inte bara är hållbar och stabil utan också vacker och miljövänlig, allt utan användning av kemikalier. Vår teknologi är resultatet av års forskning och utveckling, som vi är stolta över att säga är den finaste och mest avancerade på marknaden.",
      
      // Effortless installation section
      "effortlessInstallationTitle": "Enkel installation med oöverträffad lätt överlägsenhet",
      "effortlessInstallationHighlight": "oöverträffad",
      
      // Catalog section
      "catalogTitle": "Katalog med Väggpaneler för Interiör och Exteriör",
      "catalogHighlight": "Katalog",
      "catalogDescription": "Du kan hämta katalogen med våra paneler här.",
      "downloadCatalog": "Hämta Katalogen",
      
      // Products page
      "ourProducts": "Våra Produkter",
      "ourProductsHighlight": "Produkter",
      
      // Product types
      "cladding": "Fasadpanel",
      "decking": "Däck",
      "allProducts": "Alla Produkter",
      
      // Surface treatments
      "surfaceTreatment": "Ytbehandling",
      "smoothPlaned": "Slät hyvlad",
      "roughSawn": "Grovt sågad",
      "brushed": "Borstad",
      "dimensions": "Dimensioner",
      "toneColor": "Tonfärg",
      
      // Sample Request Popup
      "sampleRequestTitle": "Få ett gratis prov",
      "sampleNamePlaceholder": "Namn",
      "sampleEmailPlaceholder": "E-post",
      "samplePhonePlaceholder": "Telefon",
      "sampleMessagePlaceholder": "Meddelande",
      "sampleSending": "Skickar...",
      "sampleSend": "Skicka",
      "sampleError": "Fel",
      "sampleFillRequired": "Vänligen fyll i alla obligatoriska fält.",
      "sampleValidEmail": "Vänligen ange en giltig e-postadress.",
      "sampleValidPhone": "Vänligen ange ett giltigt telefonnummer.",
      "sampleRequestSent": "Provförfrågan skickad!",
      "sampleRequestDescription": "Vi skickar dig ett gratis prov inom 2-3 arbetsdagar.",
      "sampleRequestFailed": "Misslyckades med att skicka provförfrågan. Vänligen försök igen.",
      "sampleCloseAriaLabel": "Stäng formulär för provförfrågan",
       
       // Product detail selected options
       "surface": "Yta",
       "color": "Färg",
       
       // Product detail page
       "specification": "Specifikation",
       "details": "Detaljer",
       "personalisedOrders": "Personalanpassade beställningar",
       "fillTheForm": "Fyll i formuläret",
       "productDescription": "är en sofistikerad 3D-beklädnad av nordisk tall. Den skapar en visuellt elegant och modern träyta. Är mycket lämplig för fasader, interiörer och andra dekorativa ytor där en hållbar och kemikaliefri träyta önskas. Dessutom utvecklar den en vacker naturligt gråtonad patina om den lämnas obehandlad utomhus.",
       "defaultSpecifications": {
         "dimensionallyStable": "Formstabil",
         "withoutChemicals": "Utan tillsatta kemikalier",
         "naturalProduct": "100% naturprodukt"
       }
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