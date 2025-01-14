import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import darkroseSyntaxTheme from './src/styles/syntaxTheme.json';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

export default defineConfig({
  site: 'https://snare.dev',
  integrations: [
    expressiveCode({
      themes: [darkroseSyntaxTheme],
      plugins: [pluginLineNumbers()],
      defaultProps: {
        wrap: true,
        overridesByLang: {
          'bash,ps,sh': { preserveIndent: false },
        },
      },
    }),
    mdx(),
    icon(),
    sitemap(),
  ],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  image: {
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },
});
