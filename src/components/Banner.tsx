import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
  quotes: string[];
  backgroundClass?: string;
  height?: string;
  backgroundImage?: string;
  onImageLoad?: () => void;
  onImageError?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  quotes, 
  backgroundClass = "romantic-gradient",
  height = "h-screen",
  backgroundImage
}) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = backgroundImage;
    }
  }, [backgroundImage]);

  return (
    <motion.section 
      className={`${height} flex items-center justify-center ${
        backgroundImage && imageLoaded && !imageError 
          ? '' 
          : backgroundClass + ' dark:romantic-gradient-dark'
      } relative overflow-hidden`}
      style={backgroundImage && imageLoaded && !imageError ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background overlay for better text readability */}
      {backgroundImage && imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-romantic-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-rose-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          className={`text-5xl md:text-7xl font-playfair font-bold mb-6 ${
            backgroundImage && imageLoaded && !imageError
              ? 'text-white hero-text-shadow' 
              : 'text-gray-800 dark:text-white'
          }`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className={`text-xl md:text-2xl mb-12 font-inter ${
              backgroundImage && imageLoaded && !imageError
                ? 'text-gray-100 hero-text-shadow' 
                : 'text-gray-600 dark:text-gray-300'
            }`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.blockquote 
            key={currentQuote}
            className={`text-2xl md:text-3xl font-playfair italic leading-relaxed ${
              backgroundImage && imageLoaded && !imageError
                ? 'text-gray-100 hero-text-shadow glass-effect p-6 rounded-lg' 
                : 'text-gray-700 dark:text-gray-200'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            "{quotes[currentQuote]}"
          </motion.blockquote>
        </motion.div>

        {/* Quote indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'bg-romantic-500 scale-125' 
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-romantic-400'
              }`}
              onClick={() => setCurrentQuote(index)}
              aria-label={`Ver cita ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};