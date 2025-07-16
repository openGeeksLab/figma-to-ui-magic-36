-- Create post types table
CREATE TABLE public.post_types (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default post types
INSERT INTO public.post_types (name, is_default) VALUES
  ('Sustainability', true),
  ('Guide', true),
  ('Maintenance', true),
  ('Architecture', true),
  ('Installation', true);

-- Enable Row Level Security
ALTER TABLE public.post_types ENABLE ROW LEVEL SECURITY;

-- Create policies for post types
CREATE POLICY "Post types are publicly viewable" 
ON public.post_types 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create post types" 
ON public.post_types 
FOR INSERT 
WITH CHECK (true);

-- Remove the CHECK constraint from blog_posts and add foreign key
ALTER TABLE public.blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_post_type_check;

-- Add foreign key reference to post_types table
ALTER TABLE public.blog_posts 
ADD COLUMN post_type_id UUID REFERENCES public.post_types(id);

-- Update existing blog posts to reference the new post_types table
UPDATE public.blog_posts 
SET post_type_id = (
  SELECT id FROM public.post_types WHERE name = blog_posts.post_type
);

-- Drop the old post_type column
ALTER TABLE public.blog_posts DROP COLUMN post_type;

-- Make post_type_id NOT NULL
ALTER TABLE public.blog_posts ALTER COLUMN post_type_id SET NOT NULL;