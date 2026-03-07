# Guía de Edición — Preparatoria Popular General Emiliano Zapata

Guía rápida para editar el contenido del sitio web sin necesidad de conocimientos técnicos avanzados. Todos los cambios se hacen editando archivos de texto.

---

## 1. Título y subtítulo de la página de Inicio

**Archivo:** `src/data/site.ts` → objeto `heroInicio`

```ts
export const heroInicio = {
  titulo: "Presentaciones de proyectos Tesis 2026",
  subtitulo: "Preparatoria Popular General Emiliano Zapata",
};
```

---

## 2. Lema institucional

**Archivo:** `src/data/site.ts` → objeto `institucion.lema`

```ts
lema: "Educa al niño para no tener que castigar al hombre.",
```

---

## 3. Texto de bienvenida / propósito

**Archivo:** `src/data/site.ts` → objeto `bienvenida`

```ts
export const bienvenida = {
  titulo: "Bienvenida",
  texto: "La Preparatoria Popular General Emiliano Zapata...",
};
```

---

## 4. Imagen de fondo del hero

**Archivo de imagen:** `public/assets/fondohero.jpeg`

Para cambiar la foto de fondo del hero, reemplaza este archivo. La imagen se muestra con un overlay oscuro semitransparente (`bg-black/60`) para mantener la legibilidad del texto blanco.

Si necesitas ajustar la opacidad del overlay, edita `src/pages/index.astro` línea 21:
```html
<div class="absolute inset-0 bg-black/60"></div>
<!--                              ^^^^ Cambia este valor (0-100) -->
```

---

## 5. Colores de acento por página

**Archivo:** `src/data/site.ts` → objeto `accentPages`

Cada sección tiene un conjunto de clases Tailwind:

| Página             | Color por defecto |
| ------------------ | ----------------- |
| Inicio             | Azul              |
| Núcleo Académico   | Rojo              |
| Repositorio Tesis  | Negro             |

Para cambiar, modifica las clases `bg`, `text`, etc. en `accentPages`.

---

## 6. Logos institucionales

**Ubicación de archivos:** `public/assets/logos/`

| Logo         | Archivo actual          |
| ------------ | ----------------------- |
| UAGro        | `logo-uagro.webp`      |
| Preparatoria | `logoprepanuevo.png`    |

**Para reemplazar:** sube el nuevo archivo a la misma carpeta y actualiza la ruta en `src/data/site.ts` → objeto `logos`:

```ts
export const logos = {
  prepa: "/assets/logos/logoprepanuevo.png",
  uagro: "/assets/logos/logo-uagro.webp",
};
```

**Nota sobre visibilidad:** Los logos se muestran sobre una "pastilla" blanca semitransparente tanto en el hero como en el footer, para garantizar contraste sobre fondos oscuros. Usa logos con fondo transparente (PNG) para mejores resultados.

---

## 7. Docentes (Núcleo Académico)

**Archivo:** `src/data/docentes.ts`

Edita el array `docentes`. Cada docente tiene:

```ts
{
  id: "d01",
  nombre: "Nombre del Docente",
  materia: "Nombre de la materia",
  carrera: "Carrera de la que se graduó",
  foto: "/assets/docentes/nombre-archivo.jpg", // o undefined si no hay foto
}
```

**Fotos:** guárdalas en `public/assets/docentes/`.

El orden en la página es **alfabético por nombre** (automático).

---

## 8. Tesis (Repositorio de Tesis)

**Archivo:** `src/data/tesis.ts`

Edita el array `tesis`. Cada tesis tiene:

```ts
{
  id: "t01",
  titulo: "Título de la tesis",
  alumnos: ["Alumno 1", "Alumno 2"],
  anio: 2026,
  resumen: "Resumen breve de la tesis.",
  pdfUrl: "https://drive.google.com/...", // o undefined si no hay PDF aún
}
```

Si `pdfUrl` está vacío/undefined, se muestra un botón "PDF próximamente" deshabilitado.

---

## 9. Footer (contacto, dirección, horarios)

**Archivo:** `src/data/site.ts` → objeto `contacto`

```ts
export const contacto = {
  direccion: "Av Lazaro Cardenas s/n...",
  telefono: "744 468 6886",
  whatsapp: "7442749973",
  whatsappUrl: "https://wa.me/527442749973",
  horarios: [
    { dia: "Lunes", horario: "7:30 a.m. – 3:30 p.m." },
    // ...
  ],
};
```

---

## 10. Correr el proyecto localmente

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
# → Abre http://localhost:8080

# Ver sitio de prueba del build final
npm run build && npm run preview
```

---

## 11. Validar el build antes de desplegar

```bash
# Verificar tipos TypeScript + generar sitio estático
npm run build
```

Si el comando termina sin errores, el sitio está listo para desplegar.
Los archivos generados quedan en la carpeta `dist/`.

---

## Estructura de archivos clave

```
src/
├── data/
│   ├── site.ts        ← Datos globales, hero, contacto, logos, colores
│   ├── docentes.ts    ← 11 docentes del núcleo académico
│   └── tesis.ts       ← 3 tesis del repositorio
├── pages/
│   ├── index.astro           ← Página de Inicio (hero con fondo fotográfico)
│   ├── nucleo-academico.astro ← Núcleo Académico
│   ├── repositorio-tesis.astro ← Repositorio de Tesis
│   └── 404.astro             ← Página de error
├── components/
│   ├── layout/
│   │   ├── Navbar.astro      ← Barra de navegación
│   │   └── Footer.astro      ← Pie de página (logos en pastilla blanca)
│   ├── cards/
│   │   ├── DocenteCard.tsx   ← Tarjeta de docente
│   │   └── TesisCard.tsx     ← Tarjeta de tesis
│   └── ui/
│       ├── PageHeader.tsx    ← Encabezado de página reutilizable
│       └── button.tsx        ← Componente de botón
├── layouts/
│   └── BaseLayout.astro      ← Layout base con navbar + footer
└── styles/
    └── global.css             ← Variables CSS y sistema de diseño

public/
├── assets/
│   ├── logos/
│   │   ├── logo-uagro.webp       ← Logo UAGro
│   │   └── logoprepanuevo.png     ← Logo Preparatoria (PNG transparente)
│   ├── docentes/                  ← Fotos de docentes (pendiente)
│   └── fondohero.jpeg             ← Imagen de fondo del hero
```
