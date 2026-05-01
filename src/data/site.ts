/**
 * =====================================================
 * Datos globales del sitio – Preparatoria Popular
 * General Emiliano Zapata (UAGro)
 *
 * Edita este archivo para cambiar:
 *  - Nombre de la institución
 *  - Lema
 *  - Textos del hero de Inicio
 *  - Datos de contacto / footer
 *  - Colores de acento por página
 *  - Rutas de logos
 * =====================================================
 */

/* ---- Institución ---- */
export const institucion = {
  nombre: "Preparatoria Popular General Emiliano Zapata",
  nombreCorto: "Preparatoria Popular Gral. Emiliano Zapata",
  universidad: "Universidad Autónoma de Guerrero",
  universidadCorto: "UAGro",
  lema: "Educa al niño para no tener que castigar al hombre.",
};

/* ---- Hero de la página de Inicio ---- */
export const heroInicio = {
  /** Título grande del hero */
  titulo: "Presentaciones de proyectos Tesinas 2026",
  /** Subtítulo (nombre de la institución) */
  subtitulo: "Preparatoria Popular General Emiliano Zapata",
};

/* ---- Texto de bienvenida / propósito ---- */
export const bienvenida = {
  titulo: "Bienvenida",
  texto:
    "La Preparatoria Popular General Emiliano Zapata, perteneciente a la Universidad Autónoma de Guerrero, tiene como propósito formar jóvenes comprometidos con su comunidad y con una visión integral del conocimiento. Este espacio reúne las presentaciones de las tesinas de la generación 2026, reflejando el esfuerzo académico y la dedicación de nuestros estudiantes y docentes.",
};

/* ---- Contacto / Footer ---- */
export const contacto = {
  direccion:
    "Av Lazaro Cardenas s/n, Crucero de Cayaco, 39905 Acapulco de Juárez, Gro.",
  telefono: "744 468 6886",
  whatsapp: "7442749973",
  whatsappUrl: "https://wa.me/527442749973",
  horarios: [
    { dia: "Lunes", horario: "7:30 a.m. – 3:30 p.m." },
    { dia: "Martes", horario: "7:30 a.m. – 3:30 p.m." },
    { dia: "Miércoles", horario: "7:30 a.m. – 3:30 p.m." },
    { dia: "Jueves", horario: "7:30 a.m. – 3:30 p.m." },
    { dia: "Viernes", horario: "7:30 a.m. – 3:30 p.m." },
    { dia: "Sábado", horario: "Cerrado" },
    { dia: "Domingo", horario: "Cerrado" },
  ],
};

/* ---- Logos ---- */
// Las rutas NO llevan "/" inicial para poder prefijar con import.meta.env.BASE_URL
export const logos = {
  /** Logo de la preparatoria (PNG con transparencia) */
  prepa: "assets/logos/logoprepanuevo.png",
  /** Logo de la UAGro */
  uagro: "assets/logos/logo-uagro.webp",
};

/**
 * ---- Colores de acento por página ----
 *
 * Cada página usa un color "acento" propio.
 * Los valores son clases de Tailwind que se aplican
 * como bg, text, etc. (ver cada componente de página).
 *
 * Paleta base: azul, rojo, negro
 */
export const accentPages = {
  inicio: {
    /** Clase de bg para elementos de acento */
    bg: "bg-blue-700",
    bgLight: "bg-blue-700/10",
    text: "text-blue-700",
    border: "border-blue-700",
    hslAccent: "216 79% 20%", // azul institucional
  },
  nucleoAcademico: {
    bg: "bg-red-700",
    bgLight: "bg-red-700/10",
    text: "text-red-700",
    border: "border-red-700",
    hslAccent: "0 73% 41%", // rojo
  },
  ejesFormativos: {
    bg: "bg-blue-800",
    bgLight: "bg-blue-800/10",
    text: "text-blue-800",
    border: "border-blue-800",
    hslAccent: "216 79% 20%", // azul institucional
  },
  repositorioTesinas: {
    bg: "bg-gray-900",
    bgLight: "bg-gray-900/10",
    text: "text-gray-900",
    border: "border-gray-900",
    hslAccent: "0 0% 10%", // negro
  },
};
