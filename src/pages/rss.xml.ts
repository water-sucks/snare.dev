import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const musings = await getCollection('musings');

  return rss({
    title: "Varun's Musings",
    description: 'A random man, on a journey of seeking knowledge',
    site: context.site || 'https://snare.dev',
    trailingSlash: false,
    stylesheet: '/styles/rss.xsl',
    items: musings.map(({ body, data, slug }) => ({
      content: sanitizeHtml(parser.render(body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      title: data.title,
      pubDate: new Date(data.date),
      description: data.description,
      link: `/musings/${slug}`,
      customData: `
        <media:content url="${data.image.url}" medium="image" />
      `,
    })),
  });
};
