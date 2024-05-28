import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  const musings = await getCollection('musings');

  return rss({
    title: 'Musings',
    description: 'A random man, on a journey of seeking knowledge',
    site: context.site || 'https://snare.dev',
    items: musings.map(({ data, slug }) => ({
      title: data.title,
      pubDate: new Date(data.date),
      description: data.description,
      link: `/musings/${slug}`,
    })),
  });
};
