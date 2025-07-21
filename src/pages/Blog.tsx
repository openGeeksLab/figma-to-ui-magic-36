import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  main_picture_url: string;
  created_at: string;
  post_type_id: string;
  slug: string;
}

interface PostType {
  id: string;
  name: string;
}

const Blog = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [postTypes, setPostTypes] = useState<PostType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const images = [
    {
      src: "/lovable-uploads/1aed7f42-8ce9-4786-9b6c-63d07c28d2c1.png",
      alt: "Modern wooden house with stone foundation"
    },
    {
      src: "/lovable-uploads/349c3aec-dd39-4d32-9ccd-aa47ec139e57.png",
      alt: "Contemporary wood-clad house"
    },
    {
      src: "/lovable-uploads/a9bc92c2-f3e1-405d-a0b4-38d5614ac1be.png",
      alt: "Modern wooden house with warm lighting"
    }
  ];

  useEffect(() => {
    fetchBlogPosts();
    fetchPostTypes();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchPostTypes = async () => {
    try {
      const { data, error } = await supabase
        .from('post_types')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setPostTypes(data || []);
    } catch (error) {
      console.error('Error fetching post types:', error);
    }
  };

  const categories = ["All Posts", ...postTypes.map(type => type.name)];
  
  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => {
        const postType = postTypes.find(type => type.id === post.post_type_id);
        return postType?.name === selectedCategory;
      });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPostTypeName = (postTypeId: string) => {
    const postType = postTypes.find(type => type.id === postTypeId);
    return postType?.name || 'Unknown';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DCB481]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Carousel */}
      <section className="relative w-full px-8 max-md:px-5 max-sm:px-4">
        <Carousel 
          plugins={[plugin.current]}
          className="w-full h-full max-sm:h-[200px] max-md:h-[200px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover max-md:h-[200px] rounded-[28px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute bottom-8 left-16 max-md:left-10 max-sm:bottom-4 max-sm:left-5 z-10">
          <h1 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-[22px] bg-white px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-[28px] leading-tight">
            Our <span className="text-[#DCB481]">Blog</span>
          </h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full px-8 py-12 max-md:px-5 max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex gap-4 mb-12 flex-wrap max-sm:gap-2">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-[28px] text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? "bg-[#454545] text-white hover:bg-[#363636]" 
                    : "bg-gray-100 text-[#454545] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-[16px] overflow-hidden shadow-sm border hover:shadow-md transition-shadow cursor-pointer block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.main_picture_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#DCB481] text-[#454545] px-3 py-1 rounded-[12px] text-xs font-medium">
                    {getPostTypeName(post.post_type_id)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{formatDate(post.created_at)}</div>
                  <h2 className="text-xl font-bold text-[#454545] mb-3 group-hover:text-[#DCB481] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.content ? post.content.substring(0, 150) + '...' : 'No content available'}
                  </p>
                  <div className="text-[#DCB481] hover:text-[#454545] font-medium text-sm transition-colors flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;