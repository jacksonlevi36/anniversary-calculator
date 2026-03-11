import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Disclaimer from '@/pages/Disclaimer';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';

function App() {
return (
  <HelmetProvider>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
