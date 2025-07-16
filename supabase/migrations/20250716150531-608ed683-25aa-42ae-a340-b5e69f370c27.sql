-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  main_picture_url TEXT NOT NULL,
  main_picture_path TEXT NOT NULL,
  seo_keywords TEXT,
  youtube_link TEXT,
  post_type TEXT NOT NULL CHECK (post_type IN ('Sustainability', 'Guide', 'Maintenance', 'Architecture', 'Installation', 'Custom')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog images table for additional images
CREATE TABLE public.blog_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL,
  image_url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (blog_post_id) REFERENCES public.blog_posts(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_images ENABLE ROW LEVEL SECURITY;

-- Create policies for blog posts
CREATE POLICY "Blog posts are publicly viewable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create blog posts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
USING (true);

-- Create policies for blog images
CREATE POLICY "Blog images are publicly viewable" 
ON public.blog_images 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create blog images" 
ON public.blog_images 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update blog images" 
ON public.blog_images 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete blog images" 
ON public.blog_images 
FOR DELETE 
USING (true);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog', 'blog', true);

-- Create storage policies for blog bucket
CREATE POLICY "Blog images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog');

CREATE POLICY "Anyone can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog');

CREATE POLICY "Anyone can update blog images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'blog');

CREATE POLICY "Anyone can delete blog images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'blog');

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();