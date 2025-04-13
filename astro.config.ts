import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import darkroseSyntaxTheme from './src/styles/syntaxTheme.json';

import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://snare.dev',
  integrations: [mdx(), icon(), sitemap(), svelte()],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    shikiConfig: {
      theme: darkroseSyntaxTheme,
    },
  },
  image: {
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },
});
