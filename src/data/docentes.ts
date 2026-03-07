/**
 * =====================================================
 * Datos de los 11 docentes – Núcleo Académico
 *
 * Cómo editar:
 *  1. Reemplaza nombre, materia, carrera y foto de cada docente.
 *  2. Las fotos deben guardarse en  public/assets/docentes/
 *     y referenciarse como "assets/docentes/nombre-archivo.jpg" (sin "/" inicial).
 *  3. Si no hay foto disponible, deja `foto` vacío o undefined
 *     y se mostrará un avatar genérico.
 *
 * NOTA: Una vez cargados los nombres reales, el listado
 *       se mostrará en orden alfabético por nombre
 *       (el ordenamiento se hace en la página).
 * =====================================================
 */

export interface Docente {
  id: string;
  nombre: string;
  materia: string;
  carrera: string;
  foto?: string;
}

// TODO: Reemplazar datos placeholder con información real de los 11 docentes.
export const docentes: Docente[] = [
  {
    id: "d01",
    nombre: "Docente 01",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d02",
    nombre: "Docente 02",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d03",
    nombre: "Docente 03",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d04",
    nombre: "Docente 04",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d05",
    nombre: "Docente 05",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d06",
    nombre: "Docente 06",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d07",
    nombre: "Docente 07",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d08",
    nombre: "Docente 08",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d09",
    nombre: "Docente 09",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d10",
    nombre: "Docente 10",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
  {
    id: "d11",
    nombre: "Docente 11",
    materia: "Materia por asignar",
    carrera: "Licenciatura por confirmar",
    foto: undefined,
  },
];
