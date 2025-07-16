-- Update the specific product image for F-1 view 2
UPDATE product_images 
SET 
  image_url = 'https://xksrscyjywtnmtwmgihm.supabase.co/storage/v1/object/public/products/optional-pictures/pt5i6t9cbjq.jpg',
  storage_path = 'optional-pictures/pt5i6t9cbjq.jpg'
WHERE 
  product_id = '5671e28d-a123-4385-9f98-47b7694c9913' 
  AND image_url = 'https://xksrscyjywtnmtwmgihm.supabase.co/storage/v1/object/public/products/optional-pictures/ks2ze9hc5be.png';