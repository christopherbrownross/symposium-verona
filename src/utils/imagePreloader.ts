export interface ImagePreloadOptions {
  crossOrigin?: 'anonymous' | 'use-credentials';
  timeout?: number;
}

export const preloadImage = (
  src: string, 
  options: ImagePreloadOptions = {}
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    if (options.crossOrigin) {
      img.crossOrigin = options.crossOrigin;
    }
    
    const timeout = options.timeout || 10000; // 10 seconds default
    
    const timeoutId = setTimeout(() => {
      reject(new Error(`Image load timeout: ${src}`));
    }, timeout);
    
    img.onload = () => {
      clearTimeout(timeoutId);
      resolve(img);
    };
    
    img.onerror = () => {
      clearTimeout(timeoutId);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
};

export const preloadImages = async (
  urls: string[], 
  options: ImagePreloadOptions = {}
): Promise<HTMLImageElement[]> => {
  try {
    const promises = urls.map(url => preloadImage(url, options));
    return await Promise.all(promises);
  } catch (error) {
    console.warn('Some images failed to preload:', error);
    // Return successfully loaded images
    const results = await Promise.allSettled(urls.map(url => preloadImage(url, options)));
    return results
      .filter((result): result is PromiseFulfilledResult<HTMLImageElement> => 
        result.status === 'fulfilled'
      )
      .map(result => result.value);
  }
};

// Common image URLs used throughout the app
export const imageUrls = {
  // Background images - Classical art from Wikimedia Commons
  verona: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Romeo_and_juliet_brown.jpg/1920px-Romeo_and_juliet_brown.jpg',
  
  julietBalcony: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Raffael_058.jpg/1920px-Raffael_058.jpg',
  
  // Classical images
  library: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Raffael_058.jpg/1920px-Raffael_058.jpg',
  greekArchitecture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_School_of_Athens.jpg/1920px-The_School_of_Athens.jpg',
  renaissanceArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Raffael_058.jpg/1920px-Raffael_058.jpg',
  timeline: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_School_of_Athens.jpg/1920px-The_School_of_Athens.jpg',
  
  // Symposium participants - Ancient Greek sculptures
  fedro: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LB4FUVtlXTEi_d9RZsN-83yDEW82LaqWiPWyqIah0IU30C6JBJ-kyfT56C9XdI4Q0x8&usqp=CAU',
  pausanias: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bust_Lysander_Musei_Capitolini_MC1861.jpg/400px-Bust_Lysander_Musei_Capitolini_MC1861.jpg',
  eriximaco: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hippocrates_pushkin02.jpg/400px-Hippocrates_pushkin02.jpg',
  aristofanes: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Aristophanes_Musei_Capitolini_MC1166.jpg/400px-Aristophanes_Musei_Capitolini_MC1166.jpg',
  agaton: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Herma_of_an_unknown_Greek_-_Palazzo_Altemps_-_Rome_2016.jpg/400px-Herma_of_an_unknown_Greek_-_Palazzo_Altemps_-_Rome_2016.jpg',
  socrates: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/400px-Socrates_Louvre.jpg',
  alcibiades: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Alcibiades_Musei_Capitolini_MC1160.jpg/400px-Alcibiades_Musei_Capitolini_MC1160.jpg'
};

// Preload all critical images
export const preloadCriticalImages = () => {
  const criticalImages = Object.values(imageUrls);
  return preloadImages(criticalImages, { crossOrigin: 'anonymous' });
};