import { z, defineCollection } from 'astro:content';

const musingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    authors: z.array(z.string()).default(['Varun Narravula']),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  musings: musingsCollection,
};
