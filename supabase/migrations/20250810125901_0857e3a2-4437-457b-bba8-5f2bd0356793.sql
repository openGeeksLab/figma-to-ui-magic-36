-- Add multilingual support to products table
ALTER TABLE public.products 
ADD COLUMN description_sv TEXT,
ADD COLUMN details_sv JSONB DEFAULT '[]'::jsonb;

-- Update existing products with Swedish translations
UPDATE public.products SET 
description_sv = CASE 
  WHEN name = 'F-1' THEN 'Alla profiler kan färgas i önskad nyans. Vi erbjuder en service för borstar av bräder, vilket förstärker trätexturen. Fyll i formuläret med information om ditt projekt så återkommer vi med prisförslag.'
  WHEN name = 'F-2' THEN 'F-2 är en sofistikerad 3D-beklädnad av nordisk furu. Den skapar en visuellt elegant och modern träyta. Mycket lämplig för fasader, interiörer och andra dekorativa ytor där en hållbar och kemikaliefri träyta önskas.'
  WHEN name = 'F-3' THEN 'F-3 erbjuder enastående hållbarhet och estetisk tilltalande för ditt projekt. Denna profil är idealisk för både exteriöra och interiöra tillämpningar där kvalitet och design är avgörande.'
  WHEN name = 'F-4' THEN 'F-4 kombinerar traditionell träbearbetning med modern design. Perfekt för projekt som kräver både funktionalitet och visuell impact.'
  WHEN name = 'F-5' THEN 'F-5 levererar överlägsen prestanda och elegant finish. Idealisk för arkitektoniska projekt som kräver högsta kvalitet och precision.'
  ELSE description -- Default to English if no Swedish translation available
END;

-- Add comments explaining the new columns
COMMENT ON COLUMN public.products.description_sv IS 'Swedish version of product description';
COMMENT ON COLUMN public.products.details_sv IS 'Swedish version of product details in JSON format';