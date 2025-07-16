-- Add description, specifications, and details fields to products table
ALTER TABLE public.products 
ADD COLUMN description TEXT,
ADD COLUMN specifications JSONB DEFAULT '[]'::jsonb,
ADD COLUMN details JSONB DEFAULT '[]'::jsonb;