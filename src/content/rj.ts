export interface LoveAspect {
  title: string;
  description: string;
  quote: string;
  act: string;
}

export const loveAspects: LoveAspect[] = [
  {
    title: "Amor a primera vista",
    description: "Romeo y Julieta experimentan un amor instantáneo y arrebatador que desafía toda lógica y razón. Su encuentro en el baile de los Capuleto marca el inicio de una pasión que transformará sus vidas para siempre.",
    quote: "¿Acaso mi corazón amó hasta ahora? ¡Júralo, vista! Porque nunca vi verdadera belleza hasta esta noche.",
    act: "Acto I, Escena 5"
  },
  {
    title: "Amor prohibido",
    description: "Su amor está marcado por la prohibición y el conflicto familiar. La enemistad ancestral entre Montescos y Capuletos convierte su amor en un acto de rebeldía contra el destino y la sociedad.",
    quote: "Mi único amor nació de mi único odio. Demasiado temprano lo vi sin conocerlo, y demasiado tarde lo conocí.",
    act: "Acto I, Escena 5"
  },
  {
    title: "Amor espiritual",
    description: "A pesar de la pasión física, Romeo y Julieta elevan su amor a un plano espiritual y sagrado. Su matrimonio secreto simboliza la unión de sus almas más allá de las convenciones sociales.",
    quote: "Romeo, desecha tu nombre, y a cambio de tu nombre, que no es parte de ti, tómame toda entera.",
    act: "Acto II, Escena 2"
  },
  {
    title: "Amor trágico",
    description: "Su amor está destinado a la tragedia desde el principio. La muerte se convierte en la única forma de preservar la pureza de su amor y trascender las limitaciones del mundo terrenal.",
    quote: "Así, con un beso, muero.",
    act: "Acto V, Escena 3"
  },
  {
    title: "Amor transformador",
    description: "El amor de Romeo y Julieta no solo los transforma a ellos, sino que finalmente reconcilia a las familias enemigas. Su muerte se convierte en el sacrificio que trae paz a Verona.",
    quote: "Porque nunca hubo historia más dolorosa que esta de Julieta y su Romeo.",
    act: "Acto V, Escena 3"
  }
];

export const timelineEvents = [
  {
    year: "400 a.C.",
    event: "El Banquete de Platón",
    description: "Platón escribe su diálogo sobre la naturaleza del amor",
    type: "symposium" as const
  },
  {
    year: "1595 d.C.",
    event: "Romeo y Julieta",
    description: "Shakespeare escribe su tragedia sobre el amor prohibido",
    type: "shakespeare" as const
  }
];

export const rjQuotes = [
  "El amor no mira con los ojos, sino con la mente.",
  "Estos violentos deleites tienen finales violentos.",
  "Lo que llamamos rosa, con cualquier otro nombre olería igual de dulce.",
  "El amor es un humo hecho de vapores de suspiros."
];