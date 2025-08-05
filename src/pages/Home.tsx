import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Clock } from 'lucide-react';
import { Banner } from '@/components/Banner';
import { Timeline } from '@/components/Timeline';

const homeQuotes = [
  "El amor es una locura divina que nos eleva hacia la belleza eterna.",
  "En el banquete del amor, cada alma busca su complemento perfecto.",
  "El verdadero amor trasciende lo físico y abraza lo espiritual.",
  "Eros es el puente entre lo mortal y lo divino."
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Symposium & Verona"
        subtitle="Donde el amor clásico encuentra la pasión eterna"
        quotes={homeQuotes}
        backgroundImage="https://images.unsplash.com/photo-1650700450367-e409abe2c510?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              Dos Obras, Una Búsqueda Eterna
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Desde la Atenas clásica hasta la Verona renacentista, la humanidad ha buscado 
              comprender la naturaleza del amor. Esta aplicación interactiva te invita a 
              explorar las visiones del amor en "El Banquete" de Platón y "Romeo y Julieta" 
              de Shakespeare, dos obras maestras separadas por dos milenios pero unidas por 
              la misma pregunta fundamental: ¿qué es el amor?
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                El Banquete
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explora los siete discursos sobre el amor en el diálogo platónico, 
                desde Fedro hasta Alcibíades.
              </p>
              <Link
                to="/symposium"
                className="inline-flex items-center text-romantic-500 hover:text-romantic-600 font-medium"
              >
                Explorar <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                Romeo y Julieta
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descubre las dimensiones del amor en la tragedia shakespeariana 
                más famosa de todos los tiempos.
              </p>
              <Link
                to="/romeo-julieta"
                className="inline-flex items-center text-romantic-500 hover:text-romantic-600 font-medium"
              >
                Descubrir <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                Línea de Tiempo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Compara y contrasta las visiones del amor a través de 
                dos milenios de historia literaria.
              </p>
              <a
                href="#timeline"
                className="inline-flex items-center text-romantic-500 hover:text-romantic-600 font-medium"
              >
                Ver comparación <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div id="timeline">
        <Timeline />
      </div>

      {/* Call to Action */}
      <section className="py-20 romantic-gradient dark:romantic-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              Comienza tu Exploración
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Sumérgete en las profundidades del amor filosófico y poético. 
              Cada página te llevará más cerca de comprender esta fuerza universal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/symposium"
                className="btn-romantic inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explorar El Banquete
              </Link>
              <Link
                to="/romeo-julieta"
                className="bg-white dark:bg-gray-800 text-romantic-500 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Descubrir Romeo y Julieta
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};