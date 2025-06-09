import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import darkroseSyntaxTheme from './src/styles/syntaxTheme.json';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://snare.dev',
  integrations: [mdx(), icon(), sitemap(), svelte()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: darkroseSyntaxTheme,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  image: {
    experimentalLayout: 'full-width',
  },
  experimental: {
    responsiveImages: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
