import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const POST_TYPES = [
  "Sustainability",
  "Guide", 
  "Maintenance",
  "Architecture",
  "Installation",
  "Custom"
];

const BlogAdding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    seoKeywords: "",
    youtubeLink: "",
    postType: ""
  });
  
  const [mainPicture, setMainPicture] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [mainPicturePreview, setMainPicturePreview] = useState<string>("");
  const [additionalPreviews, setAdditionalPreviews] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMainPictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMainPicture(file);
      const previewUrl = URL.createObjectURL(file);
      setMainPicturePreview(previewUrl);
    }
  };

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAdditionalImages(prev => [...prev, ...files]);
    
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setAdditionalPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeAdditionalImage = (index: number) => {
    setAdditionalImages(prev => prev.filter((_, i) => i !== index));
    setAdditionalPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from('blog')
      .upload(path, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('blog')
      .getPublicUrl(path);

    return { path: data.path, url: publicUrl };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast({ title: "Error", description: "Title is required", variant: "destructive" });
      return;
    }
    
    if (!formData.postType) {
      toast({ title: "Error", description: "Post type is required", variant: "destructive" });
      return;
    }
    
    if (!mainPicture) {
      toast({ title: "Error", description: "Main picture is required", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload main picture
      const mainImagePath = `main/${Date.now()}-${mainPicture.name}`;
      const mainImageResult = await uploadImage(mainPicture, mainImagePath);

      // Create blog post
      const { data: blogPost, error: blogError } = await supabase
        .from('blog_posts')
        .insert({
          title: formData.title,
          content: formData.content,
          main_picture_url: mainImageResult.url,
          main_picture_path: mainImageResult.path,
          seo_keywords: formData.seoKeywords || null,
          youtube_link: formData.youtubeLink || null,
          post_type: formData.postType
        })
        .select()
        .single();

      if (blogError) throw blogError;

      // Upload additional images if any
      if (additionalImages.length > 0) {
        const imagePromises = additionalImages.map(async (image, index) => {
          const imagePath = `additional/${blogPost.id}/${Date.now()}-${index}-${image.name}`;
          const imageResult = await uploadImage(image, imagePath);
          
          return supabase
            .from('blog_images')
            .insert({
              blog_post_id: blogPost.id,
              image_url: imageResult.url,
              storage_path: imageResult.path
            });
        });

        await Promise.all(imagePromises);
      }

      toast({
        title: "Success",
        description: "Blog post created successfully!",
      });

      navigate('/blog');
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Add New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter blog post title"
                  required
                />
              </div>

              {/* Post Type */}
              <div className="space-y-2">
                <Label htmlFor="postType">Post Type *</Label>
                <Select value={formData.postType} onValueChange={(value) => handleInputChange('postType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select post type" />
                  </SelectTrigger>
                  <SelectContent>
                    {POST_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Main Picture */}
              <div className="space-y-2">
                <Label htmlFor="mainPicture">Main Picture *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  {mainPicturePreview ? (
                    <div className="space-y-4">
                      <img src={mainPicturePreview} alt="Main preview" className="max-h-48 mx-auto rounded-lg" />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setMainPicture(null);
                          setMainPicturePreview("");
                        }}
                      >
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <Label htmlFor="mainPicture" className="cursor-pointer">
                        <span className="text-primary hover:text-primary/80">Click to upload main picture</span>
                        <Input
                          id="mainPicture"
                          type="file"
                          accept="image/*"
                          onChange={handleMainPictureChange}
                          className="hidden"
                        />
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Images */}
              <div className="space-y-2">
                <Label htmlFor="additionalImages">Additional Images (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <Label htmlFor="additionalImages" className="cursor-pointer">
                    <span className="text-primary hover:text-primary/80">Click to upload additional images</span>
                    <Input
                      id="additionalImages"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleAdditionalImagesChange}
                      className="hidden"
                    />
                  </Label>
                </div>
                
                {additionalPreviews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {additionalPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img src={preview} alt={`Additional ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 h-6 w-6 p-0"
                          onClick={() => removeAdditionalImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Write your blog post content here..."
                  rows={10}
                />
              </div>

              {/* SEO Keywords */}
              <div className="space-y-2">
                <Label htmlFor="seoKeywords">SEO Keywords (Optional)</Label>
                <Input
                  id="seoKeywords"
                  value={formData.seoKeywords}
                  onChange={(e) => handleInputChange('seoKeywords', e.target.value)}
                  placeholder="Enter SEO keywords separated by commas"
                />
              </div>

              {/* YouTube Link */}
              <div className="space-y-2">
                <Label htmlFor="youtubeLink">YouTube Video Link (Optional)</Label>
                <Input
                  id="youtubeLink"
                  value={formData.youtubeLink}
                  onChange={(e) => handleInputChange('youtubeLink', e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/blog')}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Create Blog Post'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <div className="bg-[#F3F0E7]">
        <Footer />
      </div>
    </div>
  );
};

export default BlogAdding;