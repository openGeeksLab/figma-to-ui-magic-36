-- Add slug column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN slug text;

-- Create a function to generate slugs from titles
CREATE OR REPLACE FUNCTION public.generate_slug(title text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
        '\s+', '-', 'g'
      ),
      '-+', '-', 'g'
    )
  );
END;
$$;

-- Update existing blog posts with slugs generated from their titles
UPDATE public.blog_posts 
SET slug = public.generate_slug(title) 
WHERE slug IS NULL;

-- Create unique index on slug
CREATE UNIQUE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create trigger to automatically generate slug when inserting/updating
CREATE OR REPLACE FUNCTION public.set_blog_post_slug()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug = public.generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_blog_post_slug_trigger
  BEFORE INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blog_post_slug();