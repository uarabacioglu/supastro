import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string(),
    keywords: z.array(z.string()),
    thumbnail: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
