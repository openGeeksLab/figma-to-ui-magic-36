-- Fix security vulnerability: Restrict write operations to authenticated users only
-- Keep read access public for website functionality

-- Drop existing overly permissive policies for blog_posts
DROP POLICY IF EXISTS "Anyone can create blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Anyone can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Anyone can delete blog posts" ON public.blog_posts;

-- Create secure policies for blog_posts
CREATE POLICY "Only authenticated users can create blog posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (true);

-- Drop existing overly permissive policies for blog_images
DROP POLICY IF EXISTS "Anyone can create blog images" ON public.blog_images;
DROP POLICY IF EXISTS "Anyone can update blog images" ON public.blog_images;
DROP POLICY IF EXISTS "Anyone can delete blog images" ON public.blog_images;

-- Create secure policies for blog_images
CREATE POLICY "Only authenticated users can create blog images" 
ON public.blog_images 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update blog images" 
ON public.blog_images 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete blog images" 
ON public.blog_images 
FOR DELETE 
TO authenticated
USING (true);

-- Drop existing overly permissive policies for products
DROP POLICY IF EXISTS "Anyone can create products" ON public.products;
DROP POLICY IF EXISTS "Anyone can update products" ON public.products;
DROP POLICY IF EXISTS "Anyone can delete products" ON public.products;

-- Create secure policies for products
CREATE POLICY "Only authenticated users can create products" 
ON public.products 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update products" 
ON public.products 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete products" 
ON public.products 
FOR DELETE 
TO authenticated
USING (true);

-- Drop existing overly permissive policies for product_images
DROP POLICY IF EXISTS "Anyone can create product images" ON public.product_images;
DROP POLICY IF EXISTS "Anyone can update product images" ON public.product_images;
DROP POLICY IF EXISTS "Anyone can delete product images" ON public.product_images;

-- Create secure policies for product_images
CREATE POLICY "Only authenticated users can create product images" 
ON public.product_images 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update product images" 
ON public.product_images 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete product images" 
ON public.product_images 
FOR DELETE 
TO authenticated
USING (true);

-- Drop existing overly permissive policies for gallery_images
DROP POLICY IF EXISTS "Anyone can create gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Anyone can update gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Anyone can delete gallery images" ON public.gallery_images;

-- Create secure policies for gallery_images
CREATE POLICY "Only authenticated users can create gallery images" 
ON public.gallery_images 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update gallery images" 
ON public.gallery_images 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete gallery images" 
ON public.gallery_images 
FOR DELETE 
TO authenticated
USING (true);

-- Fix post_types table (currently allows anyone to create)
DROP POLICY IF EXISTS "Anyone can create post types" ON public.post_types;

CREATE POLICY "Only authenticated users can create post types" 
ON public.post_types 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Add missing UPDATE and DELETE policies for post_types
CREATE POLICY "Only authenticated users can update post types" 
ON public.post_types 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete post types" 
ON public.post_types 
FOR DELETE 
TO authenticated
USING (true);