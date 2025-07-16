import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface ProductFormData {
  name: string;
  description?: string;
  sizes: string[];
  specifications: string[];
  details: string[];
  type: "Cladding" | "Decking" | "Accessories";
  mainPicture: FileList;
}

interface SizeEntry {
  id: string;
  value: string;
}

interface OptionalImage {
  id: string;
  file: File;
  preview: string;
}

const ProductsAddingN = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ProductFormData>();
  const [sizes, setSizes] = useState<SizeEntry[]>([{ id: '1', value: '' }]);
  const [specifications, setSpecifications] = useState<SizeEntry[]>([{ id: '1', value: '' }]);
  const [details, setDetails] = useState<SizeEntry[]>([{ id: '1', value: '' }]);
  const [optionalImages, setOptionalImages] = useState<OptionalImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const watchedType = watch("type");

  const uploadFile = async (file: File, bucket: string, folder: string): Promise<{ url: string; path: string }> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Upload failed: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { url: publicUrl, path: filePath };
  };

  const addSize = () => {
    const newId = Math.random().toString(36).substring(2);
    setSizes(prev => [...prev, { id: newId, value: '' }]);
  };

  const updateSize = (id: string, value: string) => {
    setSizes(prev => prev.map(size => 
      size.id === id ? { ...size, value } : size
    ));
  };

  const removeSize = (id: string) => {
    if (sizes.length > 1) {
      setSizes(prev => prev.filter(size => size.id !== id));
    }
  };

  const addSpecification = () => {
    const newId = Math.random().toString(36).substring(2);
    setSpecifications(prev => [...prev, { id: newId, value: '' }]);
  };

  const updateSpecification = (id: string, value: string) => {
    setSpecifications(prev => prev.map(spec => 
      spec.id === id ? { ...spec, value } : spec
    ));
  };

  const removeSpecification = (id: string) => {
    if (specifications.length > 1) {
      setSpecifications(prev => prev.filter(spec => spec.id !== id));
    }
  };

  const addDetail = () => {
    const newId = Math.random().toString(36).substring(2);
    setDetails(prev => [...prev, { id: newId, value: '' }]);
  };

  const updateDetail = (id: string, value: string) => {
    setDetails(prev => prev.map(detail => 
      detail.id === id ? { ...detail, value } : detail
    ));
  };

  const removeDetail = (id: string) => {
    if (details.length > 1) {
      setDetails(prev => prev.filter(detail => detail.id !== id));
    }
  };

  const handleOptionalImageAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const id = Math.random().toString(36).substring(2);
      const preview = URL.createObjectURL(file);
      setOptionalImages(prev => [...prev, { id, file, preview }]);
    });

    // Reset the input
    event.target.value = '';
  };

  const removeOptionalImage = (id: string) => {
    setOptionalImages(prev => {
      const imageToRemove = prev.find(img => img.id === id);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return prev.filter(img => img.id !== id);
    });
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      setIsSubmitting(true);

      // Validate sizes
      const validSizes = sizes.filter(size => size.value.trim() !== '').map(size => size.value.trim());
      if (validSizes.length === 0) {
        toast({
          title: "Error",
          description: "At least one size is required",
          variant: "destructive",
        });
        return;
      }

      // Process specifications and details
      const validSpecifications = specifications.filter(spec => spec.value.trim() !== '').map(spec => spec.value.trim());
      const validDetails = details.filter(detail => detail.value.trim() !== '').map(detail => detail.value.trim());

      if (!data.mainPicture || data.mainPicture.length === 0) {
        toast({
          title: "Error",
          description: "Main picture is required",
          variant: "destructive",
        });
        return;
      }

      // Upload main picture
      const mainFile = data.mainPicture[0];
      const { url: mainPictureUrl, path: mainPicturePath } = await uploadFile(
        mainFile,
        "products",
        "main-pictures"
      );

      // Create product record
      const { data: product, error: productError } = await supabase
        .from("products")
        .insert({
          name: data.name,
          description: data.description || null,
          sizes: validSizes,
          specifications: validSpecifications,
          details: validDetails,
          type: data.type,
          main_picture_url: mainPictureUrl,
          main_picture_path: mainPicturePath,
        })
        .select()
        .single();

      if (productError) {
        throw new Error(`Failed to create product: ${productError.message}`);
      }

      // Upload optional images if any
      if (optionalImages.length > 0) {
        const imageUploadPromises = optionalImages.map(async (img) => {
          const { url, path } = await uploadFile(img.file, "products", "optional-pictures");
          return {
            product_id: product.id,
            image_url: url,
            storage_path: path,
          };
        });

        const imageRecords = await Promise.all(imageUploadPromises);

        const { error: imagesError } = await supabase
          .from("product_images")
          .insert(imageRecords);

        if (imagesError) {
          throw new Error(`Failed to save optional images: ${imagesError.message}`);
        }
      }

      toast({
        title: "Success",
        description: "Product created successfully!",
      });

      // Clean up preview URLs
      optionalImages.forEach(img => URL.revokeObjectURL(img.preview));

      // Navigate back to products page
      navigate("/products");

    } catch (error) {
      console.error("Error creating product:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create product",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/products")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Add New Product</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Product name is required" })}
                    placeholder="Enter product name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Sizes Field */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Sizes *</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addSize}
                    >
                      Add Size
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {sizes.map((size, index) => (
                      <div key={size.id} className="flex items-center gap-2">
                        <Input
                          value={size.value}
                          onChange={(e) => updateSize(size.id, e.target.value)}
                          placeholder={`Enter size ${index + 1} (e.g., 2400x140x20mm)`}
                          className="flex-1"
                        />
                        {sizes.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeSize(size.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {sizes.every(size => size.value.trim() === '') && (
                    <p className="text-sm text-destructive">At least one size is required</p>
                  )}
                </div>

                {/* Type Selector */}
                <div className="space-y-2">
                  <Label>Product Type *</Label>
                  <Select
                    onValueChange={(value) => setValue("type", value as ProductFormData["type"])}
                    value={watchedType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cladding">Cladding</SelectItem>
                      <SelectItem value="Decking">Decking</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.type && (
                    <p className="text-sm text-destructive">Product type is required</p>
                  )}
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Enter product description"
                    rows={4}
                  />
                </div>

                {/* Specifications Field */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Specifications</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addSpecification}
                    >
                      Add Specification
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {specifications.map((spec, index) => (
                      <div key={spec.id} className="flex items-center gap-2">
                        <Input
                          value={spec.value}
                          onChange={(e) => updateSpecification(spec.id, e.target.value)}
                          placeholder={`Enter specification ${index + 1}`}
                          className="flex-1"
                        />
                        {specifications.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeSpecification(spec.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Field */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Details</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addDetail}
                    >
                      Add Detail
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {details.map((detail, index) => (
                      <div key={detail.id} className="flex items-center gap-2">
                        <Input
                          value={detail.value}
                          onChange={(e) => updateDetail(detail.id, e.target.value)}
                          placeholder={`Enter detail ${index + 1}`}
                          className="flex-1"
                        />
                        {details.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeDetail(detail.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Picture */}
                <div className="space-y-2">
                  <Label htmlFor="mainPicture">Main Picture *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload main product image
                    </p>
                    <Input
                      id="mainPicture"
                      type="file"
                      accept="image/*"
                      {...register("mainPicture", { required: "Main picture is required" })}
                      className="cursor-pointer"
                    />
                  </div>
                  {errors.mainPicture && (
                    <p className="text-sm text-destructive">{errors.mainPicture.message}</p>
                  )}
                </div>

                {/* Optional Pictures */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Optional Pictures</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('optionalImages')?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Add Images
                    </Button>
                  </div>
                  
                  <input
                    id="optionalImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleOptionalImageAdd}
                    className="hidden"
                  />

                  {optionalImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {optionalImages.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={image.preview}
                            alt="Optional product image"
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <button
                            type="button"
                            onClick={() => removeOptionalImage(image.id)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Product..." : "Create Product"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductsAddingN;