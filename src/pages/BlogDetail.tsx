import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  main_picture_url: string;
  created_at: string;
  post_type_id: string;
  slug: string;
  youtube_link?: string;
  seo_keywords?: string;
}

interface BlogImage {
  id: string;
  image_url: string;
  storage_path: string;
}

interface PostType {
  id: string;
  name: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [postType, setPostType] = useState<PostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [additionalImages, setAdditionalImages] = useState<BlogImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      
      // Fetch the blog post by slug
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (postError) throw postError;
      setBlogPost(post);

      // Fetch the post type
      const { data: typeData, error: typeError } = await supabase
        .from('post_types')
        .select('*')
        .eq('id', post.post_type_id)
        .single();

      if (typeError) throw typeError;
      setPostType(typeData);

      // Fetch related posts from the same category
      const { data: related, error: relatedError } = await supabase
        .from('blog_posts')
        .select('id, title, main_picture_url, created_at, content, post_type_id, slug')
        .eq('post_type_id', post.post_type_id)
        .neq('id', post.id)
        .limit(2);

      if (relatedError) throw relatedError;
      setRelatedPosts(related || []);

      // Fetch additional images for this blog post
      const { data: images, error: imagesError } = await supabase
        .from('blog_images')
        .select('id, image_url, storage_path')
        .eq('blog_post_id', post.id);

      if (imagesError) throw imagesError;
      setAdditionalImages(images || []);

    } catch (error) {
      console.error('Error fetching blog post:', error);
      toast({
        title: "Error",
        description: "Failed to load blog post",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
    } catch {
      return url;
    }
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

  if (!blogPost || !postType) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto py-20 px-8">
          <h1 className="text-2xl font-bold text-[#454545]">Blog post not found</h1>
          <Link to="/blog" className="text-[#DCB481] hover:underline mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto py-8 px-8 max-md:px-5 max-sm:px-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/blog" className="hover:text-[#DCB481] transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#DCB481]">{postType.name}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-[#454545] mb-4 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="bg-[#DCB481] text-[#454545] px-3 py-1 rounded-[12px] font-medium">
              {postType.name}
            </span>
            <span>{formatTimeAgo(blogPost.created_at)}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={blogPost.main_picture_url}
            alt={blogPost.title}
            className="w-full h-[400px] max-md:h-[300px] max-sm:h-[200px] object-cover rounded-[16px]"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {/* Split content into parts for image insertion */}
            {(() => {
              const content = blogPost.content || '';
              const paragraphs = content.split('\n').filter(p => p.trim());
              const midPoint = Math.floor(paragraphs.length / 2);
              
              return (
                <>
                  {/* First half of content */}
                  <div dangerouslySetInnerHTML={{ 
                    __html: paragraphs.slice(0, midPoint).join('\n') 
                  }} />
                  
                  {/* First additional image in middle */}
                  {additionalImages[0] && (
                    <div className="my-8">
                      <img
                        src={additionalImages[0].image_url}
                        alt="Content image"
                        className="w-full h-[400px] max-md:h-[300px] object-cover rounded-[16px]"
                      />
                    </div>
                  )}
                  
                  {/* Second half of content */}
                  <div dangerouslySetInnerHTML={{ 
                    __html: paragraphs.slice(midPoint).join('\n') 
                  }} />
                  
                  {/* Second additional image at end */}
                  {additionalImages[1] && (
                    <div className="mt-8">
                      <img
                        src={additionalImages[1].image_url}
                        alt="Content image"
                        className="w-full h-[400px] max-md:h-[300px] object-cover rounded-[16px]"
                      />
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </article>

        {/* YouTube Video if available */}
        {blogPost.youtube_link && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#454545] mb-6">Video</h3>
            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(blogPost.youtube_link)}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-[16px]"
              />
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#454545] mb-8">
              More <span className="text-[#DCB481]">blog posts</span> to read
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-[16px] overflow-hidden shadow-sm border hover:shadow-md transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.main_picture_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatTimeAgo(post.created_at)}
                    </div>
                    <h3 className="text-lg font-bold text-[#454545] group-hover:text-[#DCB481] transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ChevronRight className="w-4 h-4 text-[#454545]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#DCB481] hover:text-[#454545] font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </main>

      <div className="flex flex-col items-start w-full bg-[#F3F0E7] px-8 py-0 max-sm:px-4 max-sm:py-0">
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;