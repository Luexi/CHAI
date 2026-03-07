# Preparatoria Popular General Emiliano Zapata — Sitio Web

Sitio web estático de la **Preparatoria Popular General Emiliano Zapata** de la Universidad Autónoma de Guerrero (UAGro).

## Stack

- Astro 5 (SSG)
- React (solo para componentes interactivos)
- TypeScript
- Tailwind CSS

## Requisitos

- Node.js 20+
- npm 10+

## Comandos

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor local → http://localhost:8080
npm run build      # Verificar tipos + generar sitio estático en dist/
npm run preview    # Servir localmente lo generado en dist/
npm run lint       # Revisar código con ESLint
npm run test       # Ejecutar tests
```

## Estructura del proyecto

- `src/pages/` — Páginas del sitio (Inicio, Núcleo Académico, Repositorio de Tesis, 404)
- `src/data/` — Contenido editable: datos globales, docentes, tesis
- `src/components/` — Componentes reutilizables (layout, cards, UI)
- `src/layouts/` — Layout base con navbar + footer
- `src/styles/` — Variables CSS y sistema de diseño
- `public/assets/` — Imágenes, logos y recursos públicos
- `docs/` — Guía de edición

## Guía de edición

Ver `docs/guia-edicion-prepa.md` para instrucciones detalladas sobre cómo editar contenido.

## Deploy (Vercel estático)

1. Conecta el repo en Vercel
2. Install command: `npm install`
3. Build command: `npm run build`
4. Output directory: `dist`

No edites archivos dentro de `dist/` — se regenera en cada build.
