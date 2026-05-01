/**
 * =====================================================
 * Datos del Núcleo Académico
 *
 * - `director`: aparece destacado arriba en la página de
 *   Núcleo Académico (no se cuenta dentro del listado).
 * - `docentes`: cuerpo docente. Se renderiza como grid
 *   y se ordena alfabéticamente en la página
 *   (los pendientes quedan al final).
 *
 * Cómo editar:
 *  1. Reemplaza nombre y foto.
 *  2. Las fotos van en:
 *      - public/assets/directivos/  (director)
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

export const director: Director = {
  nombre: "Fernando Terrazas Sánchez",
  cargo: "Director General",
  foto: "assets/directivos/fernando-terrazas-sanchez.jpg",
};

export const docentes: Docente[] = [
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
    id: "oliver-morales-salmeron",
    nombre: "Oliver Morales Salmerón",
    foto: "assets/docentes/oliver-morales-salmeron.jpg",
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
  // Slot reservado: maestro pendiente de enviar foto/datos.
  {
    id: "docente-pendiente",
    nombre: "Próximamente",
    pendiente: true,
  },
];
