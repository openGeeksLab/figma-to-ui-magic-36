import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import AdminRoute from "@/components/AdminRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductsAddingN from "./pages/ProductsAddingN";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlogAdding from "./pages/BlogAdding";
import UploadingPictures from "./pages/UploadingPictures";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/:type/:productName" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Admin-only routes */}
            <Route path="/products-adding-n" element={<AdminRoute><ProductsAddingN /></AdminRoute>} />
            <Route path="/blog-adding" element={<AdminRoute><BlogAdding /></AdminRoute>} />
            <Route path="/uploading-pictures" element={<AdminRoute><UploadingPictures /></AdminRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
