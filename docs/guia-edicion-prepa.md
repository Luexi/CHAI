# Guía de Edición — Preparatoria Popular General Emiliano Zapata

Guía rápida para editar el contenido del sitio web sin necesidad de conocimientos técnicos avanzados. Todos los cambios se hacen editando archivos de texto.

---

## 1. Título y subtítulo de la página de Inicio

**Archivo:** `src/data/site.ts` → objeto `heroInicio`

```ts
export const heroInicio = {
  titulo: "Presentaciones de proyectos Tesinas 2026",
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

Si necesitas ajustar la opacidad del overlay, edita `src/pages/index.astro` línea 22:
```html
<div class="absolute inset-0 bg-black/60"></div>
<!--                              ^^^^ Cambia este valor (0-100) -->
```

---

## 5. Colores de acento por página

**Archivo:** `src/data/site.ts` → objeto `accentPages`

Cada sección tiene un conjunto de clases Tailwind:

| Página              | Color por defecto |
| ------------------- | ----------------- |
| Inicio              | Azul              |
| Núcleo Académico    | Rojo              |
| Ejes Formativos     | Azul              |
| Repositorio Tesinas | Negro             |

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
  prepa: "assets/logos/logoprepanuevo.png",
  uagro: "assets/logos/logo-uagro.webp",
};
```

**IMPORTANTE:** Las rutas NO llevan "/" al inicio. El prefijo `/CHAI/` se agrega automáticamente en cada componente usando `import.meta.env.BASE_URL`.

**Nota sobre visibilidad:** Los logos se muestran sobre una "pastilla" blanca semitransparente tanto en el hero como en el footer, para garantizar contraste sobre fondos oscuros. Usa logos con fondo transparente (PNG) para mejores resultados.

---

## 7. Director y docentes (Núcleo Académico)

**Archivo:** `src/data/docentes.ts`

### Director (destacado arriba)

```ts
export const director: Director = {
  nombre: "Fernando Terrazas Sánchez",
  cargo: "Director General",
  foto: "assets/directivos/fernando-terrazas-sanchez.jpg",
};
```

La foto del director va en `public/assets/directivos/`.

### Docentes (grid debajo del director)

Edita el array `docentes`. Cada docente tiene una forma simple (solo foto + nombre):

```ts
{
  id: "ana-sugey-tzeek-galindo",
  nombre: "Ana Sugey Tzeek Galindo",
  foto: "assets/docentes/ana-sugey-tzeek-galindo.jpg",
}
```

Para reservar un slot pendiente (sin foto todavía):

```ts
{
  id: "docente-pendiente",
  nombre: "Próximamente",
  pendiente: true,
}
```

**IMPORTANTE:** Las rutas de fotos NO llevan "/" al inicio.

**Fotos:** `public/assets/docentes/`.

El orden en la página es **alfabético por nombre**; los slots `pendiente: true` quedan al final.

Actualmente: 9 docentes con foto + 1 slot pendiente.

---

## 8. Ejes Formativos

**Ruta:** `/ejes-formativos`

**Archivo de contenido:** `src/data/ejesFormativos.ts`

Esta sección presenta Humanidades y Pensamiento Matemático como pilares formativos, no como un listado académico incompleto. El contenido inicial fue desarrollado a partir del Word colocado en la raíz del repositorio (`Documento sin título.docx`).

Cada eje se edita con esta estructura:

```ts
{
  id: "humanidades",
  titulo: "Humanidades",
  imagen: "assets/ejes-formativos/humanidades.webp",
  definicion: "Texto introductorio...",
  descripcionLarga: [
    "Párrafo amplio...",
  ],
  objetivos: [
    "Idea formativa...",
  ],
  temasDetalle: [
    {
      titulo: "Pirámide de Maslow",
      descripcion: "Explicación del tema...",
      detalles: ["Punto complementario..."],
    },
  ],
  capacidadesDetalle: [
    {
      nombre: "Numérico",
      descripcion: "Explicación breve...",
    },
  ], // opcional
  accent: "red",
}
```

**Imágenes:** `public/assets/ejes-formativos/`

Para reemplazar una imagen, sube el archivo final a esa carpeta con nombre limpio, sin espacios ni acentos, y actualiza el campo `imagen`. Las rutas no llevan `/` al inicio porque el prefijo `/CHAI/` se agrega automáticamente.

Para agregar más ejes en el futuro, añade otro objeto al array `ejesFormativos` y sube su imagen a la misma carpeta.

---

## 9. Tesinas (Repositorio de Tesinas)

**Archivo:** `src/data/tesinas.ts`

Edita el array `tesinas`. Cada tesina tiene:

```ts
{
  id: "mas-que-una-suma",
  titulo: "Más que una suma",
  alumnos: ["Nombre del autor 1", "Nombre del autor 2"],
  anio: 2026,
  resumen: "Resumen amplio de la tesina.",
  imagen: "assets/tesinas/mas-que-una-suma.jpg",
  pdfUrl: "https://drive.google.com/...", // o undefined si no hay PDF aún
}
```

**Imágenes:** `public/assets/tesinas/`. Si `pdfUrl` está vacío/undefined, se muestra un botón "PDF próximamente" deshabilitado.

> Los enlaces de Google Drive de las 5 tesinas todavía están pendientes; cuando lleguen, sustituye `pdfUrl: undefined` por la URL real.

---

## 10. Footer (contacto, dirección, horarios)

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

## 11. Correr el proyecto localmente

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

## 12. Despliegue en GitHub Pages

El sitio se despliega automáticamente a **GitHub Pages** cada vez que haces push a la rama `main`.

**URL del sitio:** `https://luexi.github.io/CHAI/`

### Configuración actual

**Archivo:** `astro.config.mjs`
```js
export default defineConfig({
  site: "https://luexi.github.io",
  base: "/CHAI",
  output: "static",
  // ...
});
```

- `site`: La URL base de GitHub Pages del usuario.
- `base`: El nombre del repositorio (porque GitHub Pages sirve en `/<repo>/`).

**Workflow:** `.github/workflows/deploy.yml`

El workflow de GitHub Actions:
1. Instala dependencias (`npm ci`)
2. Construye el sitio (`npx astro build`)
3. Sube los archivos estáticos a GitHub Pages

### Para activar GitHub Pages (primera vez)

1. Ve a tu repositorio en GitHub: `https://github.com/Luexi/CHAI`
2. Ve a **Settings → Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Haz push a la rama `main` y el workflow se ejecutará automáticamente

### Rutas y el prefijo `/CHAI/`

Todas las rutas de assets (imágenes, logos) y links internos usan `import.meta.env.BASE_URL` para agregar automáticamente el prefijo `/CHAI/`. Por eso las rutas en `site.ts`, `docentes.ts`, `ejesFormativos.ts` y `tesinas.ts` **NO llevan "/" al inicio**.

---

## 13. Validar el build antes de desplegar

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
│   ├── docentes.ts    ← Director + cuerpo docente del núcleo académico
│   ├── ejesFormativos.ts ← Humanidades y Pensamiento Matemático
│   └── tesinas.ts     ← Tesinas del repositorio
├── pages/
│   ├── index.astro                ← Página de Inicio (hero con fondo fotográfico)
│   ├── nucleo-academico.astro     ← Director destacado + grid de docentes
│   ├── ejes-formativos.astro      ← Ejes Formativos
│   ├── repositorio-tesinas.astro  ← Repositorio de Tesinas
│   └── 404.astro                  ← Página de error
├── components/
│   ├── layout/
│   │   ├── Navbar.astro      ← Barra de navegación
│   │   └── Footer.astro      ← Pie de página (logos en pastilla blanca)
│   ├── cards/
│   │   ├── DocenteCard.tsx   ← Tarjeta de docente (foto + nombre)
│   │   ├── EjeFormativoCard.tsx ← Bloque visual de eje formativo
│   │   └── TesinaCard.tsx    ← Tarjeta visual de tesina (imagen + datos + PDF)
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
│   │   └── logoprepanuevo.png    ← Logo Preparatoria (PNG transparente)
│   ├── directivos/               ← Foto del director
│   ├── docentes/                 ← Fotos del cuerpo docente
│   ├── ejes-formativos/          ← Imágenes de la sección Ejes Formativos
│   ├── tesinas/                  ← Imágenes destacadas de las tesinas
│   └── fondohero.jpeg            ← Imagen de fondo del hero

.github/
└── workflows/
    └── deploy.yml                 ← Workflow de despliegue a GitHub Pages
```
