import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/data/blog-posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.date(),
    description: z.string(),
  }),
});

export const collections = { posts };
