/**
 * =====================================================
 * Datos de tesis – Repositorio de Tesis
 *
 * Cómo editar:
 *  1. Reemplaza título, alumnos, resumen y pdfUrl de cada tesis.
 *  2. pdfUrl debe ser un enlace público de Google Drive (u otro servicio).
 *  3. Si el PDF aún no está disponible, deja pdfUrl vacío o undefined;
 *     se mostrará un botón "PDF próximamente" deshabilitado.
 *
 * Solo hay 3 tesis previstas para finales de marzo 2026.
 * =====================================================
 */

export interface Tesis {
  id: string;
  titulo: string;
  alumnos: string[];
  anio: number;
  resumen: string;
  pdfUrl?: string;
}

// TODO: Reemplazar datos placeholder con las 3 tesis reales a finales de marzo 2026.
export const tesis: Tesis[] = [
  {
    id: "t01",
    titulo: "Título de la tesis 01 — pendiente de asignar",
    alumnos: ["Alumno Ejemplo A", "Alumno Ejemplo B"],
    anio: 2026,
    resumen:
      "Resumen provisional de la primera tesis. Este texto será reemplazado con el resumen real una vez que el documento esté finalizado.",
    pdfUrl: undefined,
  },
  {
    id: "t02",
    titulo: "Título de la tesis 02 — pendiente de asignar",
    alumnos: ["Alumno Ejemplo C"],
    anio: 2026,
    resumen:
      "Resumen provisional de la segunda tesis. Este texto será reemplazado con el resumen real una vez que el documento esté finalizado.",
    pdfUrl: undefined,
  },
  {
    id: "t03",
    titulo: "Título de la tesis 03 — pendiente de asignar",
    alumnos: ["Alumno Ejemplo D", "Alumno Ejemplo E"],
    anio: 2026,
    resumen:
      "Resumen provisional de la tercera tesis. Este texto será reemplazado con el resumen real una vez que el documento esté finalizado.",
    pdfUrl: undefined,
  },
];
