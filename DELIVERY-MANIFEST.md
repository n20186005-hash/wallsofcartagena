# Entrega completa — Guía de las Murallas de Cartagena

Este directorio está preparado para entregarse íntegramente. El archivo comprimido incluye el código fuente, las fotografías reales locales, los iconos, los archivos de configuración, el bloqueo de dependencias, las páginas estáticas ya generadas, la documentación de investigación y el material original aportado para el encargo.

## Contenido incluido

| Grupo | Rutas incluidas | Propósito |
| --- | --- | --- |
| Código de la web | `src/` | Componentes Astro, datos bilingües, estilos, páginas y Worker de Cloudflare. |
| Fotos reales locales | `public/photos/murallas-torre.jpg`, `public/photos/murallas-baluarte.jpg` | Fotografías de las Murallas de Cartagena usadas por la web. |
| Iconos del sitio | `public/mark.svg`, `public/favicon.svg`, `public/favicon-16.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` | Logo y favicon con el mismo emblema visual. |
| Archivos públicos | `public/robots.txt` | Recurso público adicional del sitio. |
| Sitio construido | `dist/` | Las ocho páginas HTML ya generadas, CSS, fotos e iconos listos para publicar. |
| Dependencias reproducibles | `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.node-version`, `tsconfig.json` | Versiones exactas y configuración de instalación. |
| Despliegue | `astro.config.mjs`, `wrangler.jsonc`, `src/worker.ts` | Configuración de Astro y Cloudflare Workers. |
| Documentación | `README.md`, `research-notes.md` | Instrucciones de uso, despliegue, fuentes, atribución y resultados de validación. |
| Material original | `source-material/pasted_content.txt` | Copia del contenido y requisitos recibidos para el encargo. |

## Verificación de fotografías

Las fotos de origen y sus copias publicadas en `dist/photos/` son idénticas byte a byte.

| Archivo | SHA-256 |
| --- | --- |
| `murallas-baluarte.jpg` | `a18935c783c491e993f493e41462c5702e5406d83a9e621fc417d3594a535ca2` |
| `murallas-torre.jpg` | `2bb2bda9c748607f86bd0d7fe34544c66b06d945efede79a836e7acebfe4627e` |

## Exclusiones intencionadas

`node_modules/` no se incluye porque son dependencias de terceros regenerables y su inclusión haría el paquete innecesariamente grande. Su contenido exacto se recupera de forma reproducible usando `pnpm-lock.yaml` con el comando documentado en `README.md`. Los directorios de caché `.astro/` y `.wrangler/` tampoco forman parte del sitio ni son necesarios para construir o desplegar.
