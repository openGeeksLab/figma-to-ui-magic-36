-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Create policies for the gallery bucket
CREATE POLICY "Gallery images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');

CREATE POLICY "Anyone can upload gallery images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Anyone can update gallery images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'gallery');

CREATE POLICY "Anyone can delete gallery images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'gallery');

-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery_images table
CREATE POLICY "Gallery images are publicly viewable" 
ON public.gallery_images 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create gallery images" 
ON public.gallery_images 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update gallery images" 
ON public.gallery_images 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete gallery images" 
ON public.gallery_images 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_gallery_images_updated_at
  BEFORE UPDATE ON public.gallery_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();