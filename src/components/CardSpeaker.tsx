import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, User } from 'lucide-react';
import { Speaker } from '@/content/symposium';

interface CardSpeakerProps {
  speaker: Speaker;
  delay?: number;
}

export const CardSpeaker: React.FC<CardSpeakerProps> = ({ speaker, delay = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="card-hover bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient with icon if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className={`w-full h-full bg-gradient-to-r ${speaker.color} rounded-lg absolute inset-0 items-center justify-center hidden`}>
            <User className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
          {speaker.name}
        </h3>
        
        <p className="text-romantic-500 font-medium mb-3">
          {speaker.thesis}
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {speaker.description}
        </p>
        
        <div className="mt-4 text-romantic-500 font-medium text-sm hover:text-romantic-600 transition-colors">
          Leer más →
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient with icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-r ${speaker.color} rounded-lg absolute inset-0 items-center justify-center hidden`}>
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <h2 className="text-3xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
                {speaker.name}
              </h2>
              
              <h3 className="text-xl text-romantic-500 font-medium mb-4">
                {speaker.thesis}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {speaker.description}
              </p>
              
              <blockquote className="border-l-4 border-romantic-500 pl-4 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-4 rounded-r-lg">
                "{speaker.quote}"
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};