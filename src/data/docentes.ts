/**
 * =====================================================
 * Datos del Núcleo Académico
 *
 * - `directorGeneral` y `directorEscolar`: aparecen
 *   destacados arriba en la página de Núcleo Académico
 *   (no se cuentan dentro del listado de docentes).
 * - `docentes`: cuerpo docente. Se renderiza como grid
 *   y se ordena alfabéticamente en la página
 *   (los pendientes quedan al final).
 *
 * Cómo editar:
 *  1. Reemplaza nombre y foto.
 *  2. Las fotos van en:
 *      - public/assets/directivos/  (directores)
 *      - public/assets/docentes/    (maestros)
 *     y se referencian SIN "/" inicial.
 *  3. Para añadir un docente nuevo, agrega un objeto al
 *     array siguiendo la misma forma.
 *  4. Para marcar un slot pendiente, usa `pendiente: true`
 *     y omite la `foto`.
 * =====================================================
 */

export interface Docente {
  id: string;
  nombre: string;
  foto?: string;
  pendiente?: boolean;
}

export interface Director {
  nombre: string;
  cargo: string;
  foto: string;
}

export const directorGeneral: Director = {
  nombre: "Fernando Terrazas Sánchez",
  cargo: "Director General",
  foto: "assets/directivos/fernando-terrazas-sanchez.jpg",
};

export const directorEscolar: Director = {
  nombre: "Vegeta Terrazas",
  cargo: "Director Escolar",
  foto: "assets/directivos/vegeta-terrazas.jpg",
};

export const docentes: Docente[] = [
  {
    id: "alicia-olea-astudillo",
    nombre: "Alicia Olea Astudillo",
    foto: "assets/docentes/alicia-olea-astudillo.jpg",
  },
  {
    id: "ana-sugey-tzeek-galindo",
    nombre: "Ana Sugey Tzeek Galindo",
    foto: "assets/docentes/ana-sugey-tzeek-galindo.jpg",
  },
  {
    id: "carlos-fabrizio-silva-marin",
    nombre: "Carlos Fabrizio Silva Marín",
    foto: "assets/docentes/carlos-fabrizio-silva-marin.jpg",
  },
  {
    id: "celestino-sanchez-acosta",
    nombre: "Celestino Sánchez Acosta",
    foto: "assets/docentes/celestino-sanchez-acosta.jpg",
  },
  {
    id: "jesus-emmanuel-madero-castro",
    nombre: "Jesús Emmanuel Madero Castro",
    foto: "assets/docentes/jesus-emmanuel-madero-castro.jpg",
  },
  {
    id: "lyliana-belen-ramirez-croche",
    nombre: "Lyliana Belén Ramírez Croche",
    foto: "assets/docentes/lyliana-belen-ramirez-croche.jpg",
  },
  {
    id: "madai-gonzalez-sainz",
    nombre: "Madai González Sainz",
    foto: "assets/docentes/madai-gonzalez-sainz.jpg",
  },
  {
    id: "margarita-bedolla-heredia",
    nombre: "Margarita Bedolla Heredia",
    foto: "assets/docentes/margarita-bedolla-heredia.jpg",
  },
  {
    id: "oniver-morales-salmeron",
    nombre: "Oniver Morales Salmerón",
    foto: "assets/docentes/oniver-morales-salmeron.jpg",
  },
  {
    id: "patricia-nava-sanchez",
    nombre: "Patricia Nava Sánchez",
    foto: "assets/docentes/patricia-nava-sanchez.jpg",
  },
  {
    id: "quintin-vega-rayo",
    nombre: "Quintín Vega Rayo",
    foto: "assets/docentes/quintin-vega-rayo.jpg",
  },
];
