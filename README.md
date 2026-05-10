# Preparatoria Popular General Emiliano Zapata — Sitio Web

Sitio web institucional estático de la **Preparatoria Popular General Emiliano Zapata**, perteneciente a la Universidad Autónoma de Guerrero (UAGro).

El sitio presenta las actividades académicas de la preparatoria con cuatro secciones principales: una página de **Inicio** con hero visual y bienvenida, el **Núcleo Académico** con los directores destacados y el cuerpo docente, **Ejes Formativos** con los pilares de Humanidades, Pensamiento Matemático y Ciencias Naturales, y el **Repositorio de Tesinas** con las tesinas de la generación 2026.

El sitio está pensado **mobile-first**: en móvil usa una *bottom tab bar* fija con 4 destinos y acordeones colapsables en los ejes formativos; en desktop usa una pill flotante de navegación y muestra todo el contenido expandido.

---

## Objetivo del proyecto

Crear una presencia web sencilla, moderna y fácil de mantener para la preparatoria, donde se pueda:

- Mostrar la identidad institucional (logos, lema, colores).
- Presentar al Director General, al Coordinador Escolar y al cuerpo docente del núcleo académico.
- Explicar los ejes formativos de Humanidades, Pensamiento Matemático y Ciencias Naturales.
- Publicar las tesinas de los estudiantes con enlaces a PDF (Google Drive).

Es un sitio **100% estático**, sin backend, sin base de datos y sin autenticación. Todo el contenido se edita directamente en archivos TypeScript dentro del repositorio.

---

## Stack tecnológico

| Herramienta            | Versión / Detalle                                      |
| ---------------------- | ------------------------------------------------------ |
| **Astro**              | 5.x — Framework principal (SSG, output estático)       |
| **React**              | 18.x — Componentes interactivos (cards, botones, UI)   |
| **TypeScript**         | 5.x — Tipado estricto en todo el proyecto              |
| **Tailwind CSS**       | 3.x — Estilos utilitarios + variables CSS custom       |
| **shadcn/ui**          | Componentes base (Button) vía `components.json`        |
| **Lucide React**       | Iconos (User, FileText, Phone, MapPin, Clock, etc.)    |
| **Radix UI**           | Primitiva `Slot` para composición de botones           |
| **Vitest**             | Testing (configurado, un test de ejemplo)              |
| **ESLint**             | Linting con reglas para TypeScript y React Hooks        |
| **sharp**              | Optimización de imágenes (dependencia de Astro)         |
| **GitHub Pages**       | Despliegue automático vía GitHub Actions               |
| **Google Fonts**       | Inter (cuerpo) + Playfair Display (títulos)            |

---

## Estructura del proyecto

```
CHAI/
├── .github/workflows/
│   └── deploy.yml                  ← CI/CD: despliegue a GitHub Pages
├── docs/
│   └── guia-edicion-prepa.md       ← Guía detallada de edición de contenido
├── public/
│   ├── assets/
│   │   ├── directivos/             ← Fotos del Director General y Coordinador Escolar
│   │   ├── docentes/               ← Fotos de los 11 docentes
│   │   ├── ejes-formativos/        ← Imágenes de Humanidades, Pensamiento Matemático y Ciencias Naturales
│   │   ├── tesinas/                ← Fotos de las 5 tesinas
│   │   ├── logos/
│   │   │   ├── logo-uagro.webp     ← Logo de la UAGro
│   │   │   └── logoprepanuevo.png  ← Logo de la Preparatoria
│   │   └── fondohero.jpeg          ← Imagen de fondo del hero
│   ├── placeholder.svg             ← SVG placeholder genérico
│   └── robots.txt                  ← Configuración de rastreo
├── src/
│   ├── components/
|   │   ├── cards/
│   │   │   ├── DocenteCard.tsx     ← Tarjeta individual de docente (React)
│   │   │   ├── EjeFormativoCard.tsx ← Bloque visual de eje formativo (React, con <details> en mobile)
│   │   │   └── TesinaCard.tsx      ← Tarjeta individual de tesina (React)
│   │   ├── layout/
│   │   │   ├── BottomTabBar.astro  ← Barra inferior fija (solo móvil) con 4 destinos
│   │   │   ├── Footer.astro        ← Pie de página: contacto y horarios (compactos en móvil)
│   │   │   └── Navbar.astro        ← Barra superior flotante (logos en móvil; links + CTA en desktop)
│   │   └── ui/
│   │       ├── PageHeader.tsx      ← Encabezado de páginas internas (React)
│   │       └── button.tsx          ← Componente Button (shadcn/ui)
│   ├── data/
│   │   ├── site.ts                 ← Datos globales: institución, hero, contacto, logos, colores
│   │   ├── docentes.ts             ← Director General + Coordinador Escolar + 11 docentes
│   │   ├── ejesFormativos.ts       ← Humanidades, Pensamiento Matemático y Ciencias Naturales
│   │   └── tesinas.ts              ← 5 tesinas con foto, resumen y pdfUrl opcional
│   ├── layouts/
│   │   └── BaseLayout.astro        ← Layout base: <head> + Navbar + <main> + Footer + BottomTabBar
│   ├── lib/
│   │   └── utils.ts                ← Utilidad cn() para merge de clases Tailwind
│   ├── pages/
│   │   ├── index.astro                 ← Página de Inicio (hero + lema + bienvenida + nav rápida)
│   │   ├── nucleo-academico.astro      ← Directores destacados + grid de docentes
│   │   ├── ejes-formativos.astro       ← Tres ejes + script para abrir <details> en desktop
│   │   ├── repositorio-tesinas.astro   ← Tarjetas visuales de las 5 tesinas
│   │   └── 404.astro                   ← Página de error 404
│   ├── styles/
│   │   └── global.css              ← Variables CSS del design system + utilidades
│   └── test/
│       ├── setup.ts                ← Setup de Vitest (jsdom)
│       └── example.test.ts         ← Test de ejemplo
├── astro.config.mjs                ← Configuración de Astro (site, base, integraciones)
├── tailwind.config.ts              ← Configuración de Tailwind (colores, fuentes, animaciones)
├── tsconfig.json                   ← Configuración TypeScript (alias @/*)
├── components.json                 ← Configuración de shadcn/ui
├── vitest.config.ts                ← Configuración de Vitest
├── eslint.config.js                ← Configuración de ESLint
└── postcss.config.js               ← PostCSS (Tailwind + Autoprefixer)
```

---

## Arquitectura del sitio

### Flujo general

```
astro.config.mjs (SSG, base: /CHAI)
    └── src/pages/*.astro              → Cada archivo = una ruta
         └── BaseLayout.astro          → Envuelve con <head>, Navbar, Footer y BottomTabBar
              ├── Navbar.astro         → Header superior fijo (pill flotante en desktop)
              ├── <slot />             → Contenido específico de la página
              ├── Footer.astro         → Contacto, horarios, enlaces rápidos
              └── BottomTabBar.astro   → Tab bar inferior fijo (solo móvil)
```

### Renderizado

Astro genera HTML estático en build time. Las páginas `.astro` importan datos desde `src/data/*.ts` y renderizan todo en el servidor. Los componentes React (`.tsx`) se renderizan a HTML estático y **no envían JavaScript al cliente**.

El sitio es casi 100% sin JS de cliente; solo hay un script inline al final de `src/pages/ejes-formativos.astro` que sincroniza el estado de los `<details>` colapsables (los abre y bloquea su cierre cuando el viewport es `md+`, y deja el comportamiento nativo en móvil).

### Datos y contenido

Todo el contenido editable vive en `src/data/`:

| Archivo          | Contenido                                                  |
| ---------------- | ---------------------------------------------------------- |
| `site.ts`        | Nombre de la institución, lema, hero, bienvenida, contacto, logos, colores de acento |
| `docentes.ts`    | `directorGeneral` + `coordinadorEscolar` (destacados) + array `docentes` (nombre + foto) |
| `ejesFormativos.ts` | Ejes de Humanidades, Pensamiento Matemático y Ciencias Naturales: definición, objetivo, capacidades, temas e imagen |
| `tesinas.ts`     | Array de 5 tesinas (título, alumnos, año, resumen, imagen, pdfUrl) |

### Navegación

El sitio usa **dos patrones de navegación** según el viewport, ambos sincronizados a la misma ruta activa:

**Desktop (`md+`) → `Navbar.astro`** — pill flotante centrada con tres links + un CTA rojo:

- **Inicio** → `/CHAI/`
- **Núcleo Académico** → `/CHAI/nucleo-academico`
- **Ejes Formativos** → `/CHAI/ejes-formativos`
- **Repositorio de Tesinas** → `/CHAI/repositorio-tesinas` (CTA destacado)

En móvil la navbar se reduce a la pastilla con solo los logos institucionales (sin links ni hamburguesa).

**Móvil (`< md`) → `BottomTabBar.astro`** — barra inferior fija con 4 tabs (íconos + label):

- **Inicio** · **Núcleo** · **Ejes** · **Tesinas**

La tab activa se resalta en rojo institucional. La barra respeta `env(safe-area-inset-bottom)` y `BaseLayout` añade `pb-16 md:pb-0` para que no tape el footer.

La página activa se determina con la función `isActive()` (presente en ambos componentes) que compara `Astro.url.pathname` contra el `href` de cada destino.

### Sistema de diseño

Los colores institucionales se definen como variables CSS HSL en `global.css`:

| Variable           | Valor              | Uso                           |
| ------------------ | ------------------ | ----------------------------- |
| `--prepa-blue`     | `216 79% 20%`      | Azul institucional (primary)  |
| `--prepa-red`      | `0 73% 41%`        | Rojo institucional (accent)   |
| `--prepa-black`    | `0 0% 10%`         | Negro profundo                |

Tailwind consume estas variables vía su configuración en `tailwind.config.ts`, donde se mapean a tokens semánticos (`primary`, `accent`, `destructive`, etc.).

---

## Secciones / Páginas existentes

### 1. Inicio (`/`)

**Archivo:** `src/pages/index.astro`

Página principal con cuatro bloques:

1. **Hero visual** — Imagen de fondo (`fondohero.jpeg`) con overlay oscuro al 60%, título grande con el nombre de la preparatoria (subtítulo opcional vacío por defecto), y logos institucionales sobre pastilla blanca. Tipografía responsive: `text-3xl` en móvil hasta `text-7xl` en `xl`.
2. **Lema institucional** — Blockquote con el lema sobre fondo azul (`primary`).
3. **Bienvenida / Propósito** — Sección de texto con badge "Acerca del Proyecto" y texto institucional definitivo.
4. **Navegación rápida** — Tres tarjetas-enlace: Núcleo Académico (fondo rojo), Ejes Formativos (fondo azul) y Repositorio de Tesinas (fondo negro).

**Contenido editable:** `src/data/site.ts` → objetos `heroInicio`, `bienvenida`, `institucion`.

### 2. Núcleo Académico (`/nucleo-academico`)

**Archivo:** `src/pages/nucleo-academico.astro`

Arriba aparecen los **directores destacados** lado a lado en un grid responsive (una columna en móvil, dos en desktop). Cada retrato lleva un marco cuadrado vanguardista: capa decorativa offset con gradiente rojo→azul institucional, foto con `rounded-sm` y sombra fuerte, *corner brackets* en esquinas opuestas y una cinta de acento que rompe el cuadro. En móvil el marco se simplifica (solo capa offset suave; brackets y cinta se ocultan) para reducir ruido visual.

Debajo, grid responsive de tarjetas de docentes (`DocenteCard.tsx`): **2 columnas en móvil, 3 en `md`, 4 en `lg`**. Cada tarjeta muestra solo la foto y el nombre. Los docentes se ordenan alfabéticamente; los slots con `pendiente: true` (sin foto) quedan al final.

Actualmente hay 11 docentes con foto. No hay slots pendientes.

**Contenido editable:**
- Director General → `src/data/docentes.ts` → `directorGeneral`.
- Coordinador Escolar → `src/data/docentes.ts` → `coordinadorEscolar`.
- Docentes → `src/data/docentes.ts` → array `docentes`.

**Fotos:** `public/assets/directivos/` (directores) y `public/assets/docentes/` (maestros).

### 3. Ejes Formativos (`/ejes-formativos`)

**Archivo:** `src/pages/ejes-formativos.astro`

Página institucional que presenta tres pilares académicos: **Humanidades** (acento rojo), **Pensamiento Matemático** (acento azul) y **Temas Selectos de Ciencias Naturales** (acento verde). Usa bloques visuales amplios con imagen destacada, definición, objetivo formativo, temas clave y capacidades cuando aplica.

**Acordeón móvil**: dentro de cada eje, el bloque de "Capacidades que desarrolla" y cada uno de los temas se renderizan con `<details data-mobile-collapsible>`. En móvil quedan colapsados con un chevron rotatorio; en `md+` un script al final de la página los abre y bloquea el cierre por click, así desktop sigue mostrándolos como secciones siempre expandidas. La rotación del chevron y la supresión del marker nativo están en un bloque `<style is:global>` en la misma página.

**Contenido editable:** `src/data/ejesFormativos.ts`.
**Imágenes:** `public/assets/ejes-formativos/`.

El contenido fue sintetizado a partir de los documentos Word colocados en la raíz del repositorio. El sitio no depende de esos archivos para producción; las imágenes finales viven en `public/assets/ejes-formativos/`.

Para agregar más ejes en el futuro, añade otro objeto al array `ejesFormativos` con `id`, `titulo`, `imagen`, `definicion`, `objetivo`, `temas`, `capacidades` opcional y `accent`. El campo `accent` admite `"red"`, `"blue"` o `"green"`; para añadir un color nuevo, regístralo también en `accentStyles` dentro de `src/components/cards/EjeFormativoCard.tsx`. Luego sube la imagen a `public/assets/ejes-formativos/` con un nombre web-friendly.

### 4. Repositorio de Tesinas (`/repositorio-tesinas`)

**Archivo:** `src/pages/repositorio-tesinas.astro`

Lista vertical de tarjetas visuales (`TesinaCard.tsx`). Cada tarjeta muestra imagen destacada, año, título, lista de autores, resumen amplio y un botón "Abrir PDF" que lleva al documento en Google Drive en una pestaña nueva. En móvil el CTA es full-width y sólido (rojo institucional); en desktop es un outline más discreto. Si una tesina no tiene `pdfUrl`, el botón aparece como "PDF próximamente" deshabilitado.

Los archivos PDF NO se alojan en el sitio: viven exclusivamente en Google Drive. Cada link debe tener el permiso "Cualquier persona con el enlace puede ver".

Actualmente hay **5 tesinas** integradas, todas con `pdfUrl` activo y la lista de autores reales tomada de las portadas de los PDFs.

**Contenido editable:** `src/data/tesinas.ts` → array `tesinas`.
**Imágenes:** `public/assets/tesinas/`.

### 5. Página 404

**Archivo:** `src/pages/404.astro`

Página de error con mensaje "Página no encontrada" y enlace de regreso al inicio. No muestra footer (`noFooter={true}`).

---

## Diseño responsive

El sitio está construido **mobile-first** con Tailwind. Patrón general: vista móvil compacta y minimalista por defecto; clases `md:` y superiores van añadiendo respiración, decoraciones y densidad.

### Decisiones clave por viewport

| Elemento | Móvil (`< md`) | Desktop (`md+`) |
| --- | --- | --- |
| **Navegación** | `BottomTabBar.astro` fijo abajo (4 tabs con íconos) + `Navbar.astro` reducido a logos arriba | `Navbar.astro` pill flotante con 3 links + CTA rojo; `BottomTabBar` oculto |
| **Hero del Inicio** | `min-h-[70vh]`, título `text-3xl`, logos `h-12` | `min-h-[85vh]`, título hasta `text-7xl`, logos `h-20` |
| **Directores** | Foto `w-56`, marco simple (solo capa offset suave) | Foto hasta `w-[24rem]`, marco completo (corner brackets + cinta) |
| **Grid de docentes** | 2 columnas | 3 (`md`) o 4 (`lg`) columnas |
| **Ejes formativos** | Capacidades y cada tema en `<details>` colapsado con chevron | `<details>` forzados abiertos vía script + chevron oculto |
| **Tesinas — CTA** | Botón "Abrir PDF" full-width sólido rojo | Botón outline auto-width |
| **Footer — horarios** | Resumen agrupado: "Lun–Vie: 7:30–3:30 · Sáb y Dom: cerrado" | Lista completa de los 7 días |

### Padding inferior por el BottomTabBar

`BaseLayout.astro` aplica `pb-16 md:pb-0` al wrapper para reservar espacio bajo el footer en móvil y evitar que el `BottomTabBar` (fijo) tape contenido. La barra además respeta `env(safe-area-inset-bottom)` para iPhone con notch.

---

## Gestión de contenido

> **Regla general:** Todo el contenido se edita en la carpeta `src/data/`. No es necesario tocar componentes ni estilos para cambios de texto, datos o imágenes.

### Cambiar textos del hero de Inicio

**Archivo:** `src/data/site.ts` → objeto `heroInicio`

```ts
export const heroInicio = {
  titulo: "Texto principal del hero",
  subtitulo: "Texto secundario del hero",
};
```

### Cambiar texto de bienvenida

**Archivo:** `src/data/site.ts` → objeto `bienvenida`

```ts
export const bienvenida = {
  titulo: "Bienvenida",
  texto: "Texto descriptivo del proyecto...",
};
```

### Cambiar lema institucional

**Archivo:** `src/data/site.ts` → `institucion.lema`

### Cambiar logos

1. Coloca el nuevo logo en `public/assets/logos/`.
2. Actualiza la ruta en `src/data/site.ts` → objeto `logos`:

```ts
export const logos = {
  prepa: "assets/logos/nuevo-logo.png",   // SIN "/" al inicio
  uagro: "assets/logos/logo-uagro.webp",
};
```

### Editar a los directores

**Archivo:** `src/data/docentes.ts` → `directorGeneral` y `coordinadorEscolar`

```ts
export const directorGeneral: Director = {
  nombre: "Fernando Terrazas Sánchez",
  cargo: "Director General",
  foto: "assets/directivos/fernando-terrazas-sanchez.jpg",
};

export const coordinadorEscolar: Director = {
  nombre: "Fernando Yasser Terrazas Sánchez Baños",
  cargo: "Coordinador Escolar",
  foto: "assets/directivos/fernando-yasser-terrazas-sanchez-banos.jpg",
};
```

Las fotos se guardan en `public/assets/directivos/`. Ambas se muestran lado a lado al mismo tamaño con marco cuadrado vanguardista en la página de Núcleo Académico.

### Editar docentes

**Archivo:** `src/data/docentes.ts` → array `docentes`

Cada docente tiene esta estructura mínima:

```ts
{
  id: "ana-sugey-tzeek-galindo",
  nombre: "Ana Sugey Tzeek Galindo",
  foto: "assets/docentes/ana-sugey-tzeek-galindo.jpg",
}
```

Para reservar un slot mientras llega la foto/datos de un docente nuevo (queda al final de la grilla con un ícono placeholder):

```ts
{
  id: "docente-pendiente",
  nombre: "Próximamente",
  pendiente: true,
}
```

Las fotos van en `public/assets/docentes/`. Formato recomendado: JPEG o WebP, proporción vertical (4:5).

### Editar Ejes Formativos

**Archivo:** `src/data/ejesFormativos.ts`

Cada eje tiene esta estructura:

```ts
{
  id: "humanidades",
  titulo: "Humanidades",
  imagen: "assets/ejes-formativos/humanidades.webp",
  definicion: "Texto introductorio...",
  descripcionLarga: ["Párrafo amplio..."],
  objetivos: ["Idea formativa..."],
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
  accent: "red", // "red" | "blue" | "green"
}
```

Las imágenes van en `public/assets/ejes-formativos/` y las rutas no llevan `/` al inicio. El contenido inicial proviene de los Word de la raíz y fue redactado como una versión web extensa.

### Editar tesinas

**Archivo:** `src/data/tesinas.ts`

```ts
{
  id: "mas-que-una-suma",
  titulo: "Más que una suma",
  alumnos: ["Nombre del autor 1", "Nombre del autor 2"],
  anio: 2026,
  resumen: "Resumen amplio de la tesina...",
  imagen: "assets/tesinas/mas-que-una-suma.jpg",
  pdfUrl: "https://drive.google.com/...",  // o undefined si aún no hay enlace
}
```

**Para añadir el enlace de Google Drive cuando llegue:** sustituye `pdfUrl: undefined` por `pdfUrl: "https://drive.google.com/file/d/..."`. La tarjeta cambia automáticamente del botón deshabilitado "PDF próximamente" al botón activo "Abrir PDF".

**Las imágenes van en** `public/assets/tesinas/`.

> Los PDFs originales están en `Modificaciones/TESINAS/` solo como material fuente. **No se publican en el sitio**: los enlaces definitivos viven en Google Drive.

### Editar contacto, dirección y horarios (footer)

**Archivo:** `src/data/site.ts` → objeto `contacto`

```ts
export const contacto = {
  direccion: "Dirección completa...",
  telefono: "744 468 6886",
  whatsapp: "7442749973",
  whatsappUrl: "https://wa.me/527442749973",
  horarios: [
    { dia: "Lunes", horario: "7:30 a.m. – 3:30 p.m." },
    // ...
  ],
};
```

### Cambiar colores de acento por página

**Archivo:** `src/data/site.ts` → objeto `accentPages`

Cada página tiene clases Tailwind para bg, text y border. Cambiar los valores modifica el color de acento de esa sección.

### Cambiar colores institucionales globales

**Archivo:** `src/styles/global.css` → variables `:root`

Modifica los valores HSL de `--prepa-blue`, `--prepa-red`, `--primary`, `--accent`, etc.

### Cambiar imagen de fondo del hero

Reemplaza el archivo `public/assets/fondohero.jpeg` con la nueva imagen. Si necesitas ajustar la opacidad del overlay oscuro, edita `src/pages/index.astro`, línea con `bg-black/60` (el número indica el porcentaje de opacidad, 0-100).

---

## Pendientes actuales

El sitio ya está integrado con todo el material real (directores, docentes, ejes formativos y autores reales de las 5 tesinas). **No quedan pendientes externos**.

Si en el futuro hay que actualizar contenido (nuevas fotos, nuevas tesinas, nuevos docentes, etc.):

1. Sube las fotos nuevas a la carpeta correspondiente bajo `public/assets/`.
2. Edita el archivo de datos correspondiente en `src/data/`.
3. Ejecuta `npm run build` para validar.

### Carpeta `Modificaciones/` (local, no versionada)

`Modificaciones/` es una carpeta **local** que contiene los originales recibidos (fotos del director, fotos de docentes, fotos de tesinas, archivo `RESUMEN.txt` y PDFs de tesinas). **Está incluida en `.gitignore` y no forma parte del repositorio** por dos razones:

1. **Las fotos ya están integradas** en `public/assets/{directivos,docentes,tesinas}/` con nombres limpios para web; no tiene sentido duplicarlas con sus nombres originales (con espacios, mayúsculas y acentos).
2. **Los PDFs no deben publicarse en el sitio**: los enlaces definitivos vivirán en Google Drive y se referenciarán vía `pdfUrl` en `src/data/tesinas.ts`. Commitearlos a `public/` haría crecer el repo innecesariamente.

Si recibes nuevo material (fotos de docentes adicionales, PDFs actualizados, resúmenes corregidos, etc.), guárdalo en tu copia local de `Modificaciones/` como referencia, pero acuérdate de:

- Copiar las imágenes finales a `public/assets/...` con nombre web-friendly (kebab-case, sin acentos).
- Subir los PDFs a Google Drive y poner el enlace en `pdfUrl` dentro de `src/data/tesinas.ts`.

---

## Instalación y ejecución local

### Requisitos previos

- Node.js 20+
- npm 10+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Luexi/CHAI.git
cd CHAI

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → Abre http://localhost:8080

# 4. Verificar tipos + generar sitio estático
npm run build

# 5. Previsualizar el build localmente
npm run preview
# → Abre http://localhost:8080
```

### Scripts disponibles

| Script             | Comando              | Descripción                                        |
| ------------------ | -------------------- | -------------------------------------------------- |
| `dev`              | `npm run dev`        | Servidor local en `localhost:8080` con hot reload   |
| `build`            | `npm run build`      | Verifica tipos TypeScript + genera sitio en `dist/` |
| `preview`          | `npm run preview`    | Sirve localmente los archivos de `dist/`            |
| `lint`             | `npm run lint`       | Analiza código con ESLint                           |
| `test`             | `npm run test`       | Ejecuta tests con Vitest                            |
| `test:watch`       | `npm run test:watch` | Ejecuta tests en modo watch                         |

---

## Despliegue

### GitHub Pages (configuración actual)

El sitio se despliega automáticamente a **GitHub Pages** con cada push a la rama `main`.

**Workflow:** `.github/workflows/deploy.yml`

1. Instala dependencias (`npm ci`)
2. Construye el sitio (`npx astro build`)
3. Sube los archivos a GitHub Pages

**URL de producción:** `https://luexi.github.io/CHAI/`

**Configuración de Astro** (`astro.config.mjs`):
- `site: "https://luexi.github.io"` — Dominio base de GitHub Pages.
- `base: "/CHAI"` — Prefijo de ruta (nombre del repo).

> Todas las rutas de assets y enlaces internos usan `import.meta.env.BASE_URL` para agregar automáticamente el prefijo `/CHAI/`. Por eso las rutas en los archivos de datos **no llevan "/" al inicio**.

---

## Guía rápida de edición (checklist)

- [ ] **Cambiar hero** → Editar `src/data/site.ts` → `heroInicio`
- [ ] **Cambiar bienvenida** → Editar `src/data/site.ts` → `bienvenida`
- [ ] **Cambiar lema** → Editar `src/data/site.ts` → `institucion.lema`
- [ ] **Cambiar directores** → Editar `src/data/docentes.ts` → `directorGeneral` y/o `coordinadorEscolar`, subir fotos a `public/assets/directivos/`
- [ ] **Cambiar docentes** → Editar `src/data/docentes.ts` → array `docentes`, subir fotos a `public/assets/docentes/`
- [ ] **Cambiar Ejes Formativos** → Editar `src/data/ejesFormativos.ts`, subir imágenes a `public/assets/ejes-formativos/`
- [ ] **Cambiar tesinas** → Editar `src/data/tesinas.ts`, subir imágenes a `public/assets/tesinas/`, agregar `pdfUrl` con enlace de Google Drive
- [ ] **Cambiar logos** → Reemplazar en `public/assets/logos/`, actualizar rutas en `src/data/site.ts` → `logos`
- [ ] **Cambiar foto del hero** → Reemplazar `public/assets/fondohero.jpeg`
- [ ] **Cambiar contacto/horarios** → Editar `src/data/site.ts` → `contacto`
- [ ] **Cambiar colores** → Editar `src/styles/global.css` (variables CSS) y/o `src/data/site.ts` → `accentPages`
- [ ] **Validar build** → Ejecutar `npm run build` antes de hacer push

---

## Mantenimiento recomendado

1. **Siempre valida el build antes de publicar** — `npm run build` detecta errores de tipos y de compilación.
2. **No muevas ni renombres páginas sin revisar la navbar** — Los enlaces están definidos en `src/components/layout/Navbar.astro` y en el footer.
3. **Optimiza imágenes antes de subirlas** — Usa formatos WebP o JPEG comprimido. Las fotos de docentes deben tener proporción ~4:5.
4. **No edites archivos dentro de `dist/`** — Se regenera completamente en cada build.
5. **Mantén las rutas de assets sin "/" al inicio** — El prefijo `/CHAI/` se agrega automáticamente.
6. **No dejes enlaces PDF rotos** — Si un PDF no está disponible, deja `pdfUrl` como `undefined` para que aparezca el botón "PDF próximamente".
7. **Revisa el sitio en móvil** — La navegación móvil usa el `BottomTabBar.astro` fijo abajo (no hay menú hamburguesa). Verifica que la tab activa se resalte correctamente en cada ruta.
8. **Si agregas nuevas secciones**, recuerda actualizar: `Navbar.astro` (links desktop), `BottomTabBar.astro` (tabs móvil), `Footer.astro` (enlaces rápidos) y las tarjetas de navegación rápida en `index.astro`.

---

## Notas técnicas

- El proyecto fue adaptado a partir de una base institucional previa (proyecto SADEY/Laboratorio de Construcción) y reformulado para la Preparatoria Popular General Emiliano Zapata.
- Los componentes React (`DocenteCard`, `TesinaCard`, `EjeFormativoCard`, `PageHeader`, `Button`) se renderizan estáticamente en build time; no generan bundles de JavaScript del lado del cliente, salvo que se les agregue la directiva `client:*` de Astro (no se usa actualmente).
- El único JavaScript del lado del cliente es el script inline al final de `src/pages/ejes-formativos.astro` (~15 líneas) que sincroniza los `<details data-mobile-collapsible>`: los abre y bloquea su cierre cuando `matchMedia('(min-width: 768px)')` matches; en móvil deja el comportamiento nativo del `<details>`.
- La configuración de `shadcn/ui` (`components.json`) está presente para facilitar la adición de nuevos componentes si fuera necesario, pero actualmente solo se usa el componente `Button`.
- Existe un test de ejemplo (`src/test/example.test.ts`) que valida la infraestructura de testing, pero no hay tests funcionales del sitio.
