import { motion } from 'framer-motion';
import { Banner } from '@/components/Banner';
import { Book, Heart, Users, Lightbulb, Target, Palette } from 'lucide-react';

const aboutQuotes = [
  "El amor es la única fuerza capaz de transformar un enemigo en amigo.",
  "En el amor, como en la filosofía, las preguntas son más importantes que las respuestas.",
  "Dos obras, dos épocas, una sola verdad: el amor mueve el mundo."
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Acerca del Proyecto"
        subtitle="Symposium ♥ Verona: Un diálogo entre épocas"
        quotes={aboutQuotes}
        height="h-96"
        backgroundClass="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"
      />

      {/* Project Overview */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              Una Exploración Digital del Amor
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Symposium ♥ Verona es una aplicación web interactiva que explora las 
              diferentes concepciones del amor a través de dos obras maestras de la 
              literatura occidental: "El Banquete" de Platón y "Romeo y Julieta" de 
              Shakespeare. Este proyecto académico busca crear un puente entre la 
              filosofía clásica y el drama renacentista.
            </p>
          </motion.div>

          {/* Objectives */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center p-6 bg-purple-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Objetivo Principal
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comparar y contrastar las visiones del amor en dos contextos 
                históricos y culturales diferentes.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-pink-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Audiencia
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Estudiantes, académicos y entusiastas de la literatura y 
                filosofía clásica.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Lightbulb className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Enfoque
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Análisis comparativo mediante una experiencia digital 
                interactiva y visualmente atractiva.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-12">
              Metodología del Proyecto
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <Book className="w-12 h-12 text-romantic-500 mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  Análisis Textual
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Estudio detallado de los discursos en El Banquete</li>
                  <li>• Análisis de los diálogos clave en Romeo y Julieta</li>
                  <li>• Identificación de temas y motivos recurrentes</li>
                  <li>• Contextualización histórica y cultural</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <Palette className="w-12 h-12 text-romantic-500 mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
                  Diseño Digital
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Interfaz intuitiva y responsive</li>
                  <li>• Animaciones que refuerzan el contenido</li>
                  <li>• Paleta de colores romántica y elegante</li>
                  <li>• Tipografía que evoca clasicismo y modernidad</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-800 dark:text-white mb-12">
              Aspectos Técnicos
            </h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-6 text-center">
                Stack Tecnológico
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white">React 18</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Framework principal</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Vite</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Build tool</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white">TypeScript</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tipado estático</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TW</span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Tailwind CSS</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Estilos</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                  Características Principales
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Single Page Application (SPA)</li>
                  <li>• Diseño responsive y accesible</li>
                  <li>• Modo oscuro automático</li>
                  <li>• Animaciones fluidas con Framer Motion</li>
                  <li>• Navegación con React Router</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                  Accesibilidad
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Roles ARIA implementados</li>
                  <li>• Contraste AA cumplido</li>
                  <li>• Navegación por teclado</li>
                  <li>• Texto alternativo en imágenes</li>
                  <li>• Estructura semántica HTML5</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Context */}
      <section className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
              Contexto Académico
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Este proyecto surge como una exploración interdisciplinaria que combina 
              estudios clásicos, literatura comparada y humanidades digitales. Busca 
              demostrar cómo las tecnologías modernas pueden enriquecer el estudio 
              de textos clásicos, haciéndolos más accesibles y atractivos para nuevas 
              generaciones de estudiantes.
            </p>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Heart className="w-16 h-16 text-romantic-500 mx-auto mb-4" />
              <blockquote className="text-2xl font-playfair italic text-romantic-500 mb-4">
                "El amor es el tema más universal de la literatura, 
                y estas dos obras nos muestran sus múltiples facetas 
                a través de los siglos."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-300">
                — Reflexión del proyecto Symposium ♥ Verona
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};