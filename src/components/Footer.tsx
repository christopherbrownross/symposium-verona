import { motion } from 'framer-motion';
import { Heart, ExternalLink, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const bibliography = [
    {
      title: "El Banquete",
      author: "Platón",
      year: "c. 385-370 a.C.",
      description: "Diálogo filosófico sobre la naturaleza del amor",
      link: "https://www.gutenberg.org/ebooks/1600"
    },
    {
      title: "Romeo y Julieta",
      author: "William Shakespeare",
      year: "1595",
      description: "Tragedia sobre el amor prohibido",
      link: "https://www.gutenberg.org/ebooks/1112"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-romantic-500" />
              <h3 className="text-xl font-playfair font-bold">Symposium ♥ Verona</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Una exploración interactiva del amor a través de dos obras maestras 
              de la literatura occidental, separadas por dos milenios pero unidas 
              por la eterna búsqueda de comprender el amor.
            </p>
          </motion.div>

          {/* Bibliography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-playfair font-bold mb-4">Bibliografía</h3>
            <div className="space-y-4">
              {bibliography.map((item, index) => (
                <div key={index} className="border-l-2 border-romantic-500 pl-4">
                  <h4 className="font-semibold text-romantic-300">{item.title}</h4>
                  <p className="text-sm text-gray-400">
                    {item.author} ({item.year})
                  </p>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-romantic-400 hover:text-romantic-300 transition-colors"
                  >
                    Leer en línea <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-playfair font-bold mb-4">Créditos</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Desarrollo:</strong> Christopher Brown Ross
              </p>
              <p>
                <strong>Tipografías:</strong> Playfair Display & Inter (Google Fonts)
              </p>
              <p>
                <strong>Iconos:</strong> Lucide React
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/usuario/symposium-verona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-romantic-400 hover:text-romantic-300 transition-colors"
                >
                  Ver código fuente
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400">
            © 2025 Symposium ♥ Verona. Creado con{' '}
            <Heart className="w-4 h-4 inline text-romantic-500" />{' '}
            para explorar el amor en la clase de teatro de la Universidad ICESI.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "El amor es el nombre para nuestro anhelo de completitud" - Aristófanes
          </p>
        </motion.div>
      </div>
    </footer>
  );
};