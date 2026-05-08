/**
 * =====================================================
 * Datos del Repositorio de Tesinas
 *
 * Cómo editar:
 *  1. Reemplaza título, alumnos, año, resumen, imagen y pdfUrl.
 *  2. Las imágenes van en  public/assets/tesinas/  y se
 *     referencian SIN "/" inicial (ej. "assets/tesinas/foo.jpg").
 *  3. `pdfUrl` debe ser un enlace público (Google Drive u otro).
 *     Si aún no existe, déjalo `undefined` y la tarjeta mostrará
 *     un botón deshabilitado "PDF próximamente".
 * =====================================================
 */

export interface Tesina {
  id: string;
  titulo: string;
  alumnos: string[];
  anio: number;
  resumen: string;
  imagen: string;
  /** Enlace público al PDF (Google Drive). Si no hay, se muestra "PDF próximamente". */
  pdfUrl?: string;
}

export const tesinas: Tesina[] = [
  {
    id: "problemas-psicologicos-adolescentes",
    titulo: "Los problemas psicológicos de los adolescentes",
    alumnos: [
      "Karla María Lucena Olea",
      "Joanna Yaretzi Miranda Vargas",
      "Daely Pauleth Olea Toledo",
      "Camila Anahí Cruz López",
      "Ashley Eveth Trejo Velazco",
    ],
    anio: 2026,
    resumen:
      "Este trabajo de investigación explica los tipos de problemas psicológicos que afectan a los adolescentes, analiza sus causas y consecuencias, y propone estrategias para disminuir estos trastornos en la población adolescente.",
    imagen: "assets/tesinas/problemas-psicologicos.jpg",
    pdfUrl: "https://drive.google.com/file/d/1HXC1Ycvr1uQKwZBzxMoDaBajxvtm87Yp/view?usp=sharing",
  },
  {
    id: "mas-que-una-suma",
    titulo: "Más que una suma",
    alumnos: [
      "Mariani Cortés Bedolla",
      "Angi Lizbet Áviles García",
      "Melissa García Mendoza",
      "Joselin Andrea Pineda Oropeza",
      "Citlali Evangelista Hernández",
    ],
    anio: 2026,
    resumen:
      "En esta tesina se aborda la importancia de las matemáticas avanzadas en cualquier ámbito de la vida. Recoge la opinión de personas con amplia experiencia en la materia —incluidas figuras que han realizado aportaciones importantes— para resolver dudas frecuentes y mostrar que las matemáticas no son difíciles cuando se intenta comprenderlas: los límites del conocimiento los pone cada estudiante.",
    imagen: "assets/tesinas/mas-que-una-suma.jpg",
    pdfUrl: "https://drive.google.com/file/d/10vKuJlQsK_2VVioav627YL_GIMj7EY5I/view?usp=sharing",
  },
  {
    id: "la-inseguridad",
    titulo: "La inseguridad",
    alumnos: [
      "Jonathan Iram Arellano Balanzar",
      "Ashley de la Paz Trujillo Morales",
      "Emiliano de Jesús Jiménez López",
      "Javier Genchis Moctezuma",
      "Edson Jair Santiago Meza",
      "Daniela Morales Chula",
      "Valeria Candido Mata",
    ],
    anio: 2026,
    resumen:
      "La inseguridad es un problema social que altera la tranquilidad de los estudiantes del nivel medio superior, influyendo en su vida diaria, su desempeño académico y su bienestar emocional. La tesina analiza el fenómeno y plantea por qué es urgente atenderlo.",
    imagen: "assets/tesinas/la-inseguridad.jpg",
    pdfUrl: "https://drive.google.com/file/d/1eZVcg-rwt23aP7x6WVbbXyWmzFQnRtlS/view?usp=sharing",
  },
  {
    id: "formula-general",
    titulo: "Fórmula general",
    alumnos: [
      "Mareli Cortés Bedolla",
      "Jazmín Valentina Bautista López",
      "Frida Jaccely Buenrrostro Panfilo",
      "Valeria Llanet Valeriano Roque",
      "Dayana Paola Carmona Nandi",
    ],
    anio: 2026,
    resumen:
      "La fórmula general es una herramienta algebraica para resolver ecuaciones cuadráticas. Esta tesina expone su origen y utilidad, retomando los métodos geométricos que la antecedieron y mostrando cómo han evolucionado con el paso de los años.",
    imagen: "assets/tesinas/formula-general.jpg",
    pdfUrl: "https://drive.google.com/file/d/1KQjniVuvzdglmi00CZMDNe1kjZ35_R39/view?usp=sharing",
  },
  {
    id: "la-pornografia",
    titulo: "La pornografía",
    alumnos: [
      "Yulisa García Gregorio",
      "Wendy Lluvia Hernández González",
      "Lady Amayrani López Muñoz",
      "Emiliano Derek Mayo Álvarez",
      "Allison Segura Romero",
    ],
    anio: 2026,
    resumen:
      "La pornografía, considerada un tema tabú, puede afectar diversas capacidades cognitivas, sexuales y físicas en quienes la consumen. Esta investigación tiene como objetivo informar, orientar y proponer soluciones frente a su uso problemático.",
    imagen: "assets/tesinas/la-pornografia.jpg",
    pdfUrl: "https://drive.google.com/file/d/15lUrZkON9-UHsWFARCPACAf0ecna74vh/view?usp=sharing",
  },
];
