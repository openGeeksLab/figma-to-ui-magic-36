-- Update multiple products with proper Swedish translations
UPDATE public.products SET 
description_sv = 'Alla profiler kan färgas i önskad nyans. Vi erbjuder en service för borstar av bräder, vilket förstärker trätexturen. Fyll i formuläret med information om ditt projekt så återkommer vi med prisförslag.'
WHERE name IN ('F-7', 'F-8', 'F-9', 'F-10', 'SHP-S', 'SHP', 'T-2', 'T-3', 'T-5', 'Deco');