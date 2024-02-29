import { defineCollection, z, reference } from "astro:content";

const glasses = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: reference("category"),
    price: z.string(),
    heroImage: z.string().optional(),
    showHome: z.boolean(),
  }),
});

const category = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { glasses, category };
