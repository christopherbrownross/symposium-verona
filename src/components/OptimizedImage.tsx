import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  onLoad,
  onError,
  loading = 'lazy',
  crossOrigin = 'anonymous'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = crossOrigin;
    
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
      onLoad?.();
    };
    
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
      
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      } else {
        onError?.();
      }
    };
    
    img.src = currentSrc;
  }, [currentSrc, crossOrigin, onLoad, onError, fallbackSrc]);

  if (imageError && !fallbackSrc) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          Imagen no disponible
        </span>
      </div>
    );
  }

  return (
    <motion.img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      crossOrigin={crossOrigin}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onLoad={() => {
        setImageLoaded(true);
        setImageError(false);
        onLoad?.();
      }}
      onError={() => {
        setImageError(true);
        setImageLoaded(false);
        
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        } else {
          onError?.();
        }
      }}
    />
  );
};

export default OptimizedImage;