import { motion } from 'framer-motion';
import { Banner } from '@/components/Banner';
import { CardSpeaker } from '@/components/CardSpeaker';
import { speakers, symposiumQuotes } from '@/content/symposium';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

export const Symposium: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="El Banquete"
        subtitle="Los siete discursos sobre el amor en la obra de Platón"
        quotes={symposiumQuotes}
        height="h-96"
        backgroundImage="https://images.pexels.com/photos/772698/pexels-photo-772698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              El Simposio Platónico
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              En la casa de Agatón, en la Atenas del siglo IV a.C., se reúnen siete pensadores 
              para explorar la naturaleza del amor. Cada uno ofrece su perspectiva única sobre 
              Eros, creando un mosaico filosófico que ha influenciado el pensamiento occidental 
              durante más de dos milenios.
            </p>
          </motion.div>

          {/* Context Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <BookOpen className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Contexto Histórico
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Atenas, c. 385-370 a.C. La obra refleja las costumbres sociales 
                y filosóficas de la Grecia clásica.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Los Participantes
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Siete personajes históricos reales que representan diferentes 
                perspectivas sobre el amor y la filosofía.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Lightbulb className="w-12 h-12 text-romantic-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Método Dialógico
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Platón utiliza el diálogo para explorar múltiples perspectivas 
                sobre un tema complejo y universal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900" style={{ scrollSnapType: 'y mandatory' }}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Los Siete Discursos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cada ponente ofrece una perspectiva única sobre la naturaleza del amor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers
              .sort((a, b) => a.order - b.order)
              .map((speaker, index) => (
                <div key={speaker.name} style={{ scrollSnapAlign: 'start' }}>
                  <CardSpeaker 
                    speaker={speaker} 
                    delay={index * 0.1}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Philosophical Themes */}
      <section 
        className="py-16 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-12">
              Temas Centrales
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  La Escalera del Amor
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Diotima enseña a Sócrates sobre la ascensión del amor: desde la atracción 
                  por cuerpos bellos, pasando por las almas bellas, hasta llegar al amor 
                  por la Belleza en sí misma, la forma platónica perfecta.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  Eros como Daimon
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  El amor no es un dios, sino un daimon, un ser intermedio entre lo mortal 
                  y lo divino que nos impulsa hacia la sabiduría y la belleza, mediando 
                  entre el mundo sensible y el mundo de las Ideas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  La Búsqueda de Completitud
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Aristófanes presenta el mito de las almas gemelas: originalmente éramos 
                  seres completos que fueron divididos, y el amor es nuestro anhelo eterno 
                  de reunirnos con nuestra otra mitad perdida.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  Amor y Virtud
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Varios ponentes conectan el amor con la virtud y la excelencia moral. 
                  El verdadero amor no solo busca la belleza, sino que inspira y cultiva 
                  la virtud tanto en el amante como en el amado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 romantic-gradient dark:romantic-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              El Legado del Banquete
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              La influencia del Banquete se extiende a través de los siglos, desde los 
              neoplatónicos hasta el Renacimiento, el Romanticismo y la filosofía moderna. 
              Su exploración del amor como fuerza transformadora y ascendente sigue 
              resonando en nuestra comprensión contemporánea del amor, la belleza y la búsqueda humana de significado.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};