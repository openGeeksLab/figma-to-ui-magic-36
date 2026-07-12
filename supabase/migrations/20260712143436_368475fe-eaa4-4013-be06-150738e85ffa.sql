-- Storage policies for gallery bucket
CREATE POLICY "Gallery images are publicly readable"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'gallery');

CREATE POLICY "Admins can manage gallery images"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for products bucket
CREATE POLICY "Products images are publicly readable"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'products');

CREATE POLICY "Admins can manage products images"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'products' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'products' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for blog bucket
CREATE POLICY "Blog images are publicly readable"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'blog');

CREATE POLICY "Admins can manage blog images"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'blog' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'blog' AND public.has_role(auth.uid(), 'admin'));