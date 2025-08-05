import { motion } from 'framer-motion';
import { useState } from 'react';
import { Banner } from '@/components/Banner';
import { loveAspects, rjQuotes } from '@/content/rj';
import { Heart, Theater, Scroll, Crown, Sword, Star } from 'lucide-react';

export const RomeoJulieta: React.FC = () => {
  const [selectedAspect, setSelectedAspect] = useState<number | null>(null);

  const icons = [Heart, Star, Crown, Sword, Theater];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Romeo y Julieta"
        subtitle="La tragedia del amor apasionado"
        quotes={rjQuotes}
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/a/a3/DickseeRomeoandJuliet.jpg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              La Tragedia del Amor Prohibido
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              En la Verona renacentista, Shakespeare nos presenta una visión del amor 
              radicalmente diferente a la platónica: un amor apasionado, inmediato y 
              trágico que desafía las convenciones sociales y familiares. Romeo y Julieta 
              encarnan el poder transformador del amor romántico, pero también su 
              potencial destructivo.
            </p>
          </motion.div>

          {/* Context Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center p-6 bg-red-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Theater className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Teatro Isabelino
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Escrita hacia 1595, la obra refleja las convenciones dramáticas 
                y sociales del Renacimiento inglés.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-pink-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Scroll className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Fuentes Literarias
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Basada en relatos anteriores de Matteo Bandello y Arthur Brooke, 
                Shakespeare transforma la historia en una obra universal.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-rose-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Crown className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Amor Cortés
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                La obra dialoga con la tradición del amor cortés medieval, 
                pero la subvierte con pasión auténtica y consecuencias reales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Love Aspects */}
      <section 
        className="py-16 bg-gray-100 dark:bg-gray-900"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Las Dimensiones del Amor
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explora los diferentes aspectos del amor en la tragedia shakespeariana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loveAspects.map((aspect, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer card-hover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedAspect(selectedAspect === index ? null : index)}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                    {aspect.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {aspect.description}
                  </p>
                  
                  {selectedAspect === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 dark:border-gray-600 pt-4"
                    >
                      <blockquote className="italic text-romantic-500 mb-2">
                        "{aspect.quote}"
                      </blockquote>
                      <cite className="text-sm text-gray-500 dark:text-gray-400">
                        — {aspect.act}
                      </cite>
                    </motion.div>
                  )}
                  
                  <div className="mt-4 text-romantic-500 font-medium text-sm">
                    {selectedAspect === index ? 'Ocultar cita' : 'Ver cita'} →
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Themes Comparison */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-12">
              Contrastes con El Banquete
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Scroll className="w-6 h-6 mr-2 text-purple-500" />
                  El Banquete
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Amor como ascensión filosófica</li>
                  <li>• Enfoque racional y contemplativo</li>
                  <li>• Búsqueda de la Belleza ideal</li>
                  <li>• Amor espiritual y eterno</li>
                  <li>• Diálogo intelectual</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-red-500" />
                  Romeo y Julieta
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Amor como pasión arrebatadora</li>
                  <li>• Enfoque emocional y dramático</li>
                  <li>• Belleza física y personal</li>
                  <li>• Amor romántico y mortal</li>
                  <li>• Acción teatral</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-4">
                Puntos de Convergencia
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Star className="w-8 h-8 text-romantic-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Transformación</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ambos ven el amor como una fuerza que transforma profundamente al ser humano
                  </p>
                </div>
                <div>
                  <Crown className="w-8 h-8 text-romantic-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Trascendencia</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    El amor eleva a los amantes más allá de sus limitaciones ordinarias
                  </p>
                </div>
                <div>
                  <Sword className="w-8 h-8 text-romantic-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Sacrificio</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    El verdadero amor requiere entrega y, a menudo, sacrificio personal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              El Legado Eterno
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Romeo y Julieta ha definido nuestra comprensión del amor romántico durante 
              más de cuatro siglos. Su influencia se extiende desde la literatura y el 
              teatro hasta el cine, la música y la cultura popular, estableciendo el 
              arquetipo del amor apasionado que desafía todas las barreras.
            </p>
            <blockquote className="text-2xl font-playfair italic text-romantic-500 max-w-2xl mx-auto">
              "Porque nunca hubo historia más dolorosa que esta de Julieta y su Romeo."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
};