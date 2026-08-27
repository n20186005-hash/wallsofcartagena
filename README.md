# Guía de las Murallas de Cartagena

Sitio estático, bilingüe (español colombiano e inglés) e independiente sobre las Murallas de Cartagena. Está construido con **Astro 7**, **Tailwind CSS 4**, **TypeScript** y un Worker de Cloudflare sin base de datos, login ni CMS.

## Diseño y contenido

El diseño usa azul Caribe, oro envejecido y tonos de piedra coralina para reflejar la materialidad de las fortificaciones. El contenido se organiza como una guía de campo: contexto histórico, visita responsable, transporte, estacionamiento, servicios esenciales, comida por tipo, lugares cercanos, mapa, FAQ y referencias públicas. Las fotografías son archivos locales atribuidos a Joe Ross bajo CC BY-SA 2.0.

El español es el idioma principal en `/`; la versión inglesa completa está en `/en/`. Las páginas de privacidad, términos y cookies tienen rutas propias y no se muestran como ventanas emergentes.

## Requisitos fijados

| Requisito | Versión o enfoque |
| --- | --- |
| Node.js | `22.13.0`, fijado en `.node-version` y `engines` |
| pnpm | `11.20.0`, fijado en `packageManager` y `engines` |
| Astro | `7.2.8` |
| Tailwind CSS | `4.3.3` |
| TypeScript | `5.9.3`, compatible con `@astrojs/check@0.9.10` |
| Despliegue | Worker de Cloudflare con Static Assets |

Todas las dependencias directas están fijadas con versiones exactas y `pnpm-lock.yaml` se incluye en el proyecto.

## Desarrollo y validación

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview
```

## Dominio y Sitemap

La única configuración de dominio es el campo `site` en `astro.config.mjs`, alimentado por la variable de entorno `SITE_URL`. No se incluye ningún dominio de ejemplo. Sin esa variable, el proyecto compila con enlaces canónicos relativos y sin Sitemap. Una vez que el dominio definitivo esté activo, construye así:

```bash
SITE_URL=https://tu-dominio-real.tld pnpm build
```

Con `SITE_URL` configurado, la integración oficial `@astrojs/sitemap` genera el Sitemap y los metadatos absolutos se derivan de esa única configuración.

## Despliegue en Cloudflare Workers

Inicia sesión en Cloudflare con Wrangler en tu propio entorno y ejecuta:

```bash
pnpm deploy
```

El comando crea primero `dist/` y despliega el Worker definido en `src/worker.ts`. El Worker sirve exclusivamente los archivos estáticos generados. Configura `SITE_URL` como variable de construcción en el entorno que ejecute `pnpm build`.

## Analítica y privacidad

La propiedad GA4 es `G-HXM22WWPKP`. El script de Google Analytics no se carga hasta que la persona visitante acepta expresamente la categoría analítica. La decisión se guarda localmente y se puede modificar desde la página de cookies.
