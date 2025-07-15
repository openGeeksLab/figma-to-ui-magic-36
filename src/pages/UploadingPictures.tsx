import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import { useGallery } from "@/hooks/useGallery";
import { Loader2, Image as ImageIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const UploadingPictures = () => {
  const { images, loading, deleteImage } = useGallery();

  const handleDeleteImage = async (id: string, storagePath: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteImage(id, storagePath);
      } catch (error) {
        console.error('Failed to delete image:', error);
      }
    }
  };

  return (
    <div className="flex w-full max-w-[1728px] flex-col items-center mx-auto my-0 min-h-screen">
      <div className="flex flex-col items-center w-full bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative w-full px-8 py-16 max-md:px-5 max-sm:px-4 max-md:py-12 max-sm:py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DCB481] rounded-full mb-6">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl mb-4">
              Upload <span className="text-[#DCB481]">Images</span>
            </h1>
            <p className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base max-w-2xl mx-auto mb-8">
              Add new images to your gallery. Upload high-quality photos of your wooden panel projects to showcase your work.
            </p>
          </div>
        </section>
        
        {/* Upload Section */}
        <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4 bg-[#F3F0E7]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[28px] p-8 max-md:p-6 max-sm:p-4 shadow-sm">
              <h2 className="text-[#454545] text-[32px] font-bold max-md:text-[24px] max-sm:text-xl mb-6 text-center">
                Add New Image
              </h2>
              <div className="flex justify-center">
                <ImageUpload />
              </div>
            </div>
          </div>
        </section>

        {/* Manage Images Section */}
        <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#454545] text-[32px] font-bold max-md:text-[24px] max-sm:text-xl mb-8 text-center">
              Manage <span className="text-[#DCB481]">Images</span>
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No images uploaded yet</p>
                <p className="text-gray-400 text-sm">Upload your first image to get started</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((image) => (
                  <div key={image.id} className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm border">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Delete button */}
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => handleDeleteImage(image.id, image.storage_path)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    
                    {/* Image info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-[#454545] text-sm mb-1 truncate">{image.title}</h3>
                      {image.description && (
                        <p className="text-gray-500 text-xs line-clamp-2">{image.description}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-2">
                        {new Date(image.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UploadingPictures;