import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.SITE_URL?.trim();
const site = (configuredSite || 'https://wallsofcartagena.com').replace(/\/?$/, '/');

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
