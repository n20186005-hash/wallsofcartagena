import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.SITE_URL?.trim();
const site = (configuredSite || 'https://wallsofcartagena.com').replace(/\/?$/, '/');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: page => !page.includes('/404'),
    serialize(item) {
      const pairs = [['/', '/en/'], ['/cookies/', '/en/cookies/'], ['/privacidad/', '/en/privacy/'], ['/terminos/', '/en/terms/']];
      const pair = pairs.find(paths => paths.some(p => new URL(p, site).href === item.url));
      if (pair) item.links = [{ lang: 'es-CO', url: new URL(pair[0], site).href }, { lang: 'en', url: new URL(pair[1], site).href }];
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
