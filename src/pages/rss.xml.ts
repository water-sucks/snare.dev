import rss, { type RSSFeedItem } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getContainerRenderer as getMDXRenderer } from '@astrojs/mdx';
import { loadRenderers } from 'astro:container';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export const GET: APIRoute = async (context) => {
  const musings = await getCollection('musings');
  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });

  const items: Array<RSSFeedItem> = [];
  for (const m of musings) {
    const { Content } = await m.render();
    const content = await container.renderToString(Content);
    const { title, date, description } = m.data;

    items.push({
      content: sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      title: title,
      pubDate: new Date(date),
      description: description,
      link: `/musings/${m.slug}`,
    });
  }

  return rss({
    title: "Varun's Musings",
    description: 'A random man, on a journey of seeking knowledge',
    site: context.site || 'https://snare.dev',
    trailingSlash: false,
    items: items,
  });
};
