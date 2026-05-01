# Arquitectura Técnica — Preparatoria Popular General Emiliano Zapata

Documento complementario al `README.md` con detalle técnico sobre la arquitectura del sitio, orientado a desarrolladores que necesiten modificar o escalar el proyecto.

---

## Visión general

El sitio sigue una arquitectura clásica de **Astro SSG** (Static Site Generation):

```
┌─────────────────────────────────────────────────────────┐
│  src/data/*.ts                                          │
│  (contenido editable: site, docentes, tesinas)          │
└────────────────────┬────────────────────────────────────┘
                     │ import
                     ▼
┌─────────────────────────────────────────────────────────┐
│  src/pages/*.astro                                      │
│  (cada archivo = una ruta del sitio)                    │
│                                                         │
│  ┌─── index.astro ──────── /CHAI/                       │
│  ├─── nucleo-academico ─── /CHAI/nucleo-academico       │
│  ├─── repositorio-tesinas  /CHAI/repositorio-tesinas    │
│  └─── 404.astro ────────── /CHAI/404                    │
└────────────────────┬────────────────────────────────────┘
                     │ usa
                     ▼
┌─────────────────────────────────────────────────────────┐
│  src/layouts/BaseLayout.astro                           │
│  (HTML shell: <head>, meta SEO, Navbar, Footer)         │
│                                                         │
│  Props: title, description, noFooter                    │
└────────────────────┬────────────────────────────────────┘
                     │ incluye
                     ▼
┌────────────────────┴────────────────────────────────────┐
│  src/components/                                        │
│  ├── layout/Navbar.astro    → Navegación fija flotante  │
│  ├── layout/Footer.astro    → Contacto + horarios       │
│  ├── cards/DocenteCard.tsx  → Tarjeta de docente        │
│  ├── cards/TesinaCard.tsx   → Tarjeta visual de tesina  │
│  ├── ui/PageHeader.tsx      → Header de páginas internas│
│  └── ui/button.tsx          → Botón (shadcn/ui)         │
└─────────────────────────────────────────────────────────┘
```

### Separación clave

- **Datos** (`src/data/`) → Contenido puro. Cualquier persona puede editar estos archivos sin tocar diseño.
- **Páginas** (`src/pages/`) → Composición de layout + componentes. Cada archivo corresponde exactamente a una URL.
- **Componentes** (`src/components/`) → Piezas de UI reutilizables. Tipados con TypeScript.
- **Layout** (`src/layouts/`) → Estructura HTML compartida entre todas las páginas.
- **Estilos** (`src/styles/`) → Design system centralizado en variables CSS.

---

## Flujo de datos del contenido

```
src/data/site.ts ──────────┬──→ BaseLayout.astro (title, description, og:image)
                            ├──→ Navbar.astro (logos)
                            ├──→ Footer.astro (institución, contacto, horarios, logos)
                            └──→ index.astro (heroInicio, bienvenida, institucion, logos)

src/data/docentes.ts ──────→ nucleo-academico.astro → director destacado + DocenteCard.tsx (×N)

src/data/tesinas.ts ───────→ repositorio-tesinas.astro → TesinaCard.tsx (×N)
```

Cada archivo de datos exporta constantes TypeScript tipadas. Las páginas Astro las importan y las pasan como props a los componentes React.

---

## Relación entre layouts, páginas y componentes

### BaseLayout.astro

Responsabilidades:
- Genera el `<head>` completo: charset, viewport, meta description, Open Graph, Twitter Card, favicon, Google Fonts.
- Inyecta `global.css`.
- Renderiza `Navbar` pasando `currentPath` para highlighting activo.
- Renderiza el `<slot />` (contenido de la página).
- Renderiza `Footer` (omitible vía prop `noFooter`).

Props:
```ts
interface Props {
  title?: string;       // default: "Preparatoria Popular Gral. Emiliano Zapata | UAGro"
  description?: string; // default: "Sitio oficial de la..."
  noFooter?: boolean;   // default: false (usado solo en 404)
}
```

### Navbar.astro

- **Posición:** Flotante fija, centrada, con `backdrop-blur` y borde.
- **Elementos de navegación** definidos internamente (no configurables desde datos):
  - `navItems[]`: Inicio, Núcleo Académico
  - `ctaItem`: Repositorio de Tesinas (botón destacado rojo)
- **Menú móvil:** Toggle con JavaScript vanilla (script inline al final del archivo).
- **Resaltado activo:** Función `isActive()` compara `Astro.url.pathname` con el `href` de cada enlace.

### Footer.astro

- Grid de 4 columnas (responsive a 1):
  1. Logos (pastilla blanca) + nombre de la institución
  2. Enlaces rápidos (duplica los destinos de la navbar)
  3. Contacto (dirección, teléfono, WhatsApp) con iconos Lucide
  4. Horarios (itera `contacto.horarios[]`)
- Copyright dinámico con año actual.

---

## Componentes React

Todos los componentes React son **estáticamente renderizados** por Astro en build time. No incluyen directivas `client:*`, por lo tanto **no envían JavaScript al navegador**.

### DocenteCard.tsx

```
Props: { docente: Docente }
```

- Solo muestra foto y nombre (alcance simplificado: sin materia ni carrera).
- Si `docente.pendiente === true` o no hay `foto` → placeholder con icono `Clock`/`User` de Lucide.
- Efecto hover: escala la imagen (`group-hover:scale-105`).

### TesinaCard.tsx

```
Props: { tesina: Tesina }
```

- Layout responsive: imagen arriba en móvil, imagen a la izquierda en desktop (`md:flex-row`).
- Muestra imagen destacada, badge con año, título, lista de alumnos y resumen amplio (sin `line-clamp`).
- Si `tesina.pdfUrl` existe → botón "Abrir PDF" que abre en nueva pestaña.
- Si no → botón "PDF próximamente" deshabilitado.

### PageHeader.tsx

```
Props: { title, subtitle?, badge?, children?, className? }
```

- Usado en Núcleo Académico y Repositorio de Tesinas.
- Fondo con gradiente sutil (`bg-hero-gradient` + `bg-spotlight`).
- **No** usado en Inicio (el hero de Inicio tiene su propia implementación con imagen de fondo).

### Button (shadcn/ui)

Componente base con variantes (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) y tamaños (`default`, `sm`, `lg`, `icon`). Usa `class-variance-authority` y `@radix-ui/react-slot`.

---

## Estrategia de assets

### Rutas y el prefijo `/CHAI/`

Astro está configurado con `base: "/CHAI"` para GitHub Pages. Todas las rutas de assets deben usar `import.meta.env.BASE_URL` como prefijo:

```ts
const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

// Uso: `${base}assets/logos/logoprepanuevo.png`
// Resultado: "/CHAI/assets/logos/logoprepanuevo.png"
```

Por eso las rutas en `src/data/site.ts`, `src/data/docentes.ts` y `src/data/tesinas.ts` **no llevan "/" al inicio**.

### Ubicación de assets

| Tipo             | Ubicación                       | Formato recomendado      |
| ---------------- | ------------------------------- | ------------------------ |
| Logos            | `public/assets/logos/`          | PNG (transparente), WebP |
| Foto director    | `public/assets/directivos/`     | JPEG, WebP (cuadrada)    |
| Fotos docentes   | `public/assets/docentes/`       | JPEG, WebP (4:5)         |
| Fotos tesinas    | `public/assets/tesinas/`        | JPEG, WebP (4:3 o 16:9)  |
| Fondo hero       | `public/assets/fondohero.jpeg`  | JPEG (landscape)         |
| PDFs de tesinas  | Externos (Google Drive, etc.)   | URL pública              |

### Imágenes en `public/` vs procesadas por Astro

Los archivos en `public/` se copian tal cual a `dist/`. No pasan por el pipeline de optimización de Astro (que usa `sharp`). Si en el futuro se quiere optimización automática, se pueden mover a `src/assets/` y usar el componente `<Image>` de Astro.

---

## Convenciones del proyecto

### Nombres de archivos

- **Páginas Astro:** kebab-case (`nucleo-academico.astro`, `repositorio-tesinas.astro`).
- **Componentes React:** PascalCase (`DocenteCard.tsx`, `TesinaCard.tsx`, `PageHeader.tsx`). Excepción: `button.tsx` (convención shadcn/ui).
- **Componentes Astro:** PascalCase (`Navbar.astro`, `Footer.astro`, `BaseLayout.astro`).
- **Datos:** camelCase (`site.ts`, `docentes.ts`, `tesinas.ts`).

### Alias de importación

`@/*` mapea a `./src/*` (configurado en `tsconfig.json`):

```ts
import { institucion } from "@/data/site";
import { DocenteCard } from "@/components/cards/DocenteCard";
```

### Tipado

Interfaces TypeScript definidas junto a los datos:

- `Docente`, `Director` → `src/data/docentes.ts`
- `Tesina` → `src/data/tesinas.ts`

---

## Consideraciones para escalar el sitio

### Agregar una nueva página

1. Crear `src/pages/nueva-seccion.astro`.
2. Importar `BaseLayout` y los datos necesarios.
3. Agregar el enlace en `Navbar.astro` (array `navItems` o como nuevo `ctaItem`).
4. Agregar el enlace en `Footer.astro` (sección "Enlaces Rápidos").
5. Opcionalmente, agregar tarjeta de navegación rápida en `index.astro`.

### Agregar más docentes o tesinas

Simplemente agregar elementos a los arrays en `docentes.ts` o `tesinas.ts`. El grid y la lista se adaptan automáticamente.

### Migrar a un dominio personalizado

1. Actualizar `site` en `astro.config.mjs` al nuevo dominio.
2. Cambiar `base` a `"/"` (o al subdirectorio correspondiente).
3. Configurar el dominio personalizado en GitHub Pages (Settings → Pages → Custom domain).

### Agregar galería de imágenes

- Crear un nuevo archivo de datos (ej. `src/data/galeria.ts`).
- Crear un componente de galería (ej. `src/components/cards/GaleriaCard.tsx`).
- Crear la página (ej. `src/pages/galeria.astro`).
- Subir imágenes a `public/assets/galeria/`.

### Internacionalización

El sitio es monolingüe (español). Si se necesitara i18n, habría que evaluar las opciones de Astro para contenido multi-idioma. Actualmente todos los textos están hardcodeados en español tanto en datos como en componentes.

---

## Puntos seguros de edición (sin riesgo de romper diseño)

| Qué cambiar                        | Dónde                                    | Riesgo |
| ----------------------------------- | ---------------------------------------- | ------ |
| Textos del hero, bienvenida, lema   | `src/data/site.ts`                       | Nulo   |
| Datos de docentes                   | `src/data/docentes.ts`                   | Nulo   |
| Datos de tesinas                    | `src/data/tesinas.ts`                    | Nulo   |
| Contacto, horarios                  | `src/data/site.ts` → `contacto`          | Nulo   |
| Logos (reemplazo por misma ruta)    | `public/assets/logos/`                   | Nulo   |
| Foto del hero (reemplazo)           | `public/assets/fondohero.jpeg`           | Nulo   |
| Fotos de docentes                   | `public/assets/docentes/`               | Nulo   |
| Colores institucionales (CSS)       | `src/styles/global.css`                  | Bajo   |
| Colores de acento por página        | `src/data/site.ts` → `accentPages`       | Bajo   |
| Agregar un docente al array         | `src/data/docentes.ts`                   | Nulo   |
| Agregar una tesina al array         | `src/data/tesinas.ts`                    | Nulo   |

---

## Nota sobre la carpeta `Modificaciones/`

La carpeta `Modificaciones/` en la raíz del repositorio contiene los originales del material que ya fue integrado al sitio (excepto los PDFs, que vivirán en Google Drive):

- `FOTO DE PROFESORES/` — Fotos del director (1) + cuerpo docente (9). Integrado en `public/assets/directivos/` y `public/assets/docentes/`.
- `FOTOS DE TESINAS/` — Fotos destacadas de las 5 tesinas. Integrado en `public/assets/tesinas/`.
- `RESUMENES DE TESINAS/` — Archivo `RESUMEN.txt` con los resúmenes de 5 tesinas. Integrado en `src/data/tesinas.ts` (campo `resumen`).
- `TESINAS/` — PDFs originales de las 5 tesinas. **No se publican**; vivirán en Google Drive y se referenciarán vía `pdfUrl`.

Pendientes:

- 10º maestro: aún sin foto/datos. Hay un slot reservado como "Próximamente" en `docentes.ts`.
- Autores de cada tesina: el `RESUMEN.txt` no los incluye; quedan como `"Pendiente de confirmar"` en `tesinas.ts` → `alumnos`.
- Enlaces `pdfUrl` de Google Drive para las 5 tesinas: pendientes de generar.

La carpeta puede dejarse como material fuente, pero el sitio ya no depende de ella.
