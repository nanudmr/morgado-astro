import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nanudmr.github.io/',
  base: '/morgado-astro', // Correct base for GitHub Pages
  integrations: [mdx(), sitemap()],
});
