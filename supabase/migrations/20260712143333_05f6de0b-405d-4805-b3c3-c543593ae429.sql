-- Enable required extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE (user_id, role)
);

-- gallery_images table
CREATE TABLE public.gallery_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    image_url text NOT NULL,
    storage_path text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- products table
CREATE TABLE public.products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    description_sv text,
    sizes text[] DEFAULT '{}',
    specifications text[] DEFAULT '{}',
    details text[] DEFAULT '{}',
    details_sv text[] DEFAULT '{}',
    type text NOT NULL,
    main_picture_url text NOT NULL,
    main_picture_path text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- product_images table
CREATE TABLE public.product_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id uuid REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    image_url text NOT NULL,
    storage_path text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

-- post_types table
CREATE TABLE public.post_types (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    is_default boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);

-- blog_posts table
CREATE TABLE public.blog_posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    content text,
    main_picture_url text NOT NULL,
    main_picture_path text NOT NULL,
    seo_keywords text,
    youtube_link text,
    post_type_id uuid REFERENCES public.post_types(id) NOT NULL,
    slug text UNIQUE,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- blog_images table
CREATE TABLE public.blog_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_post_id uuid REFERENCES public.blog_posts(id) ON DELETE CASCADE NOT NULL,
    image_url text NOT NULL,
    storage_path text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

-- Create has_role security definer function (after tables exist)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

GRANT SELECT ON public.gallery_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery_images TO authenticated;
GRANT ALL ON public.gallery_images TO service_role;

GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;

GRANT SELECT ON public.product_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.product_images TO authenticated;
GRANT ALL ON public.product_images TO service_role;

GRANT SELECT ON public.post_types TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.post_types TO authenticated;
GRANT ALL ON public.post_types TO service_role;

GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;

GRANT SELECT ON public.blog_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_images TO authenticated;
GRANT ALL ON public.blog_images TO service_role;

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Admins can manage user roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Gallery images are publicly readable"
ON public.gallery_images
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage gallery images"
ON public.gallery_images
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Products are publicly readable"
ON public.products
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage products"
ON public.products
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Product images are publicly readable"
ON public.product_images
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage product images"
ON public.product_images
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Post types are publicly readable"
ON public.post_types
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage post types"
ON public.post_types
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Blog posts are publicly readable"
ON public.blog_posts
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage blog posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Blog images are publicly readable"
ON public.blog_images
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage blog images"
ON public.blog_images
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Seed default post types
INSERT INTO public.post_types (name, is_default) VALUES
('Sustainability', true),
('Guide', true),
('Maintenance', true),
('Architecture', true),
('Installation', true)
ON CONFLICT (name) DO NOTHING;