-- Update products table to support multiple sizes
ALTER TABLE public.products 
DROP COLUMN size,
ADD COLUMN sizes JSONB NOT NULL DEFAULT '[]'::jsonb;