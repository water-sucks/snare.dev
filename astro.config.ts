import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://snare.dev',
  integrations: [mdx(), icon(), sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
