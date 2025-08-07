export interface Speaker {
  name: string;
  thesis: string;
  description: string;
  quote: string;
  color: string;
  order: number;
  image: string;
}

export const speakers: Speaker[] = [
  {
    name: "Fedro",
    thesis: "El amor como fuerza primordial",
    description: "Fedro presenta al Amor (Eros) como uno de los dioses más antiguos y poderosos, una fuerza que inspira valor y nobleza en los amantes. Según él, el amor es la fuente de las más grandes virtudes y heroísmos.",
    quote: "No hay mayor bendición para un joven que un amante virtuoso, ni para un amante que un joven amado virtuoso.",
    color: "from-purple-400 to-pink-400",
    order: 1,
    image: "/assets/Fedro.webp"
  },
  {
    name: "Pausanias",
    thesis: "Dos tipos de amor: vulgar y celestial",
    description: "Pausanias distingue entre dos tipos de amor: el Amor Vulgar (Afrodita Pandemos), que busca solo el placer físico, y el Amor Celestial (Afrodita Urania), que busca la virtud y la sabiduría del alma.",
    quote: "El amor noble es aquel que conduce a la virtud y hace mejores tanto al amante como al amado.",
    color: "from-blue-400 to-purple-400",
    order: 2,
    image: "/assets/Pausanias.webp"
  },
  {
    name: "Erixímaco",
    thesis: "El amor como armonía universal",
    description: "El médico Erixímaco extiende el concepto de amor más allá de las relaciones humanas, viéndolo como un principio cósmico de armonía que gobierna todo el universo, desde la medicina hasta la música.",
    quote: "El amor es el médico de todas las enfermedades, pues donde hay armonía, hay salud.",
    color: "from-green-400 to-blue-400",
    order: 3,
    image: "/assets/Eriximaco.webp"
  },
  {
    name: "Aristófanes",
    thesis: "El mito de las almas gemelas",
    description: "Aristófanes narra el famoso mito de los seres originalmente esféricos que fueron divididos por Zeus. El amor es la búsqueda de nuestra otra mitad perdida, el anhelo de completitud y unión perfecta.",
    quote: "El amor es el nombre para nuestro anhelo de completitud, para nuestro deseo de ser uno.",
    color: "from-yellow-400 to-orange-400",
    order: 4,
    image: "/assets/Aristofanes.webp"
  },
  {
    name: "Agatón",
    thesis: "El amor como belleza y juventud",
    description: "Agatón, el poeta trágico, presenta al Amor como el más bello y joven de los dioses, fuente de toda virtud, justicia, templanza y valor. Su discurso es el más poético y estéticamente elaborado.",
    quote: "El Amor es el más feliz de los dioses porque es el más bello y el mejor.",
    color: "from-pink-400 to-rose-400",
    order: 5,
    image: "/assets/Agaton.webp"
  },
  {
    name: "Sócrates/Diotima",
    thesis: "El amor como ascensión hacia la Belleza",
    description: "Sócrates relata las enseñanzas de Diotima sobre el amor como un daimon intermediario que nos conduce desde el amor por los cuerpos bellos hasta el amor por la Belleza en sí, la escalera del amor platónico.",
    quote: "El amor no es ni bello ni feo, ni bueno ni malo, sino algo intermedio que nos conduce hacia lo divino.",
    color: "from-indigo-400 to-purple-400",
    order: 6,
    image: "/assets/Socrates.webp"
  },
  {
    name: "Alcibíades",
    thesis: "El amor como experiencia vivida",
    description: "Alcibíades irrumpe ebrio y narra su experiencia personal de amor hacia Sócrates, mostrando la cara más humana, pasional y contradictoria del amor, contrastando con los discursos teóricos anteriores.",
    quote: "Sócrates es el único hombre ante quien siento vergüenza, porque solo él me hace ver lo que realmente soy.",
    color: "from-red-400 to-pink-400",
    order: 7,
    image: "/assets/Alcibiades.webp"
  }
];

export const symposiumQuotes = [
  "El amor es una locura divina que nos eleva hacia la belleza eterna.",
  "En el banquete del amor, cada alma busca su complemento perfecto.",
  "El verdadero amor trasciende lo físico y abraza lo espiritual.",
  "Eros es el puente entre lo mortal y lo divino."
];