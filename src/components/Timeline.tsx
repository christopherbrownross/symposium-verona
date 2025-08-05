import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, Heart } from 'lucide-react';
import { timelineEvents } from '@/content/rj';

export const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section 
      className="py-16 bg-gray-900 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
            Línea de Tiempo del Amor
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dos milenios, una misma búsqueda: comprender el amor
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - responsive */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-romantic-500 to-pink-500"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-start md:items-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Mobile layout - single column */}
              <div className="block md:hidden w-full pl-16">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg cursor-pointer card-hover"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className="flex items-center mb-3">
                    {event.type === 'symposium' ? (
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-romantic-500 mr-2" />
                    ) : (
                      <Heart className="w-5 h-5 md:w-6 md:h-6 text-romantic-500 mr-2" />
                    )}
                    <span className="text-romantic-500 font-bold text-base md:text-lg">{event.year}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
                    {event.event}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                  
                  {selectedEvent === index && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        {event.type === 'symposium' 
                          ? "En la Atenas clásica, Platón explora la naturaleza del amor a través de los discursos de diversos personajes en un banquete filosófico."
                          : "En la Inglaterra isabelina, Shakespeare retrata el amor apasionado y trágico que desafía las convenciones sociales."
                        }
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Desktop layout - alternating sides */}
              {/* Left side content (for even indices) or empty space (for odd indices) */}
              <div className="hidden md:block w-5/12 pr-8">
                {index % 2 === 0 && (
                  <div className="text-right">
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer card-hover"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                    >
                      <div className="flex items-center justify-end mb-3">
                        <span className="text-romantic-500 font-bold text-lg mr-2">{event.year}</span>
                        {event.type === 'symposium' ? (
                          <BookOpen className="w-6 h-6 text-romantic-500" />
                        ) : (
                          <Heart className="w-6 h-6 text-romantic-500" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
                        {event.event}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                      
                      {selectedEvent === index && (
                        <motion.div
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {event.type === 'symposium' 
                              ? "En la Atenas clásica, Platón explora la naturaleza del amor a través de los discursos de diversos personajes en un banquete filosófico."
                              : "En la Inglaterra isabelina, Shakespeare retrata el amor apasionado y trágico que desafía las convenciones sociales."
                            }
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Timeline point */}
              <div className="absolute left-6 md:relative md:left-auto md:w-2/12 flex justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-romantic-500 rounded-full border-2 md:border-4 border-white dark:border-gray-900 z-10 relative">
                  <div className="absolute inset-0 bg-romantic-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Right side content (for odd indices) or empty space (for even indices) */}
              <div className="hidden md:block w-5/12 pl-8">
                {index % 2 === 1 && (
                  <div className="text-left">
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer card-hover"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                    >
                      <div className="flex items-center mb-3">
                        {event.type === 'symposium' ? (
                          <BookOpen className="w-6 h-6 text-romantic-500 mr-2" />
                        ) : (
                          <Heart className="w-6 h-6 text-romantic-500 mr-2" />
                        )}
                        <span className="text-romantic-500 font-bold text-lg">{event.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
                        {event.event}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                      
                      {selectedEvent === index && (
                        <motion.div
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {event.type === 'symposium' 
                              ? "En la Atenas clásica, Platón explora la naturaleza del amor a través de los discursos de diversos personajes en un banquete filosófico."
                              : "En la Inglaterra isabelina, Shakespeare retrata el amor apasionado y trágico que desafía las convenciones sociales."
                            }
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison section */}
        <motion.div
          className="mt-12 md:mt-16 bg-white dark:bg-gray-800 rounded-xl p-4 md:p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-4 md:mb-6">
            Contrastes y Conexiones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">El Banquete</h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Amor como ascensión filosófica hacia la Belleza ideal. Enfoque racional y espiritual.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">Romeo y Julieta</h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Amor como pasión arrebatadora y destino trágico. Enfoque emocional y dramático.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};