import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Symposium } from '@/pages/Symposium';
import { RomeoJulieta } from '@/pages/RomeoJulieta';
import { About } from '@/pages/About';
import { preloadCriticalImages } from '@/utils/imagePreloader';

function App() {
  useEffect(() => {
    // Preload critical images for better performance
    preloadCriticalImages().catch(error => {
      console.warn('Some images failed to preload:', error);
    });
  }, []);
  return (
    <Router basename="/symposium-verona">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symposium" element={<Symposium />} />
            <Route path="/romeo-julieta" element={<RomeoJulieta />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;