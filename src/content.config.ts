import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/articles' }),
  schema: z.object({
    title: z.string(), description: z.string().optional(),
    category: z.string().optional(), date: z.coerce.date().optional(),
    status: z.string().default('Draft'), cover: z.string().optional()
  })
});
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/tools' }),
  schema: z.object({
    title: z.string(), url: z.string().url(), category: z.string().optional(),
    description: z.string().optional(), access: z.string().optional(),
    pricing: z.string().optional(), favorite: z.boolean().optional()
  })
});
export const collections = { articles, tools };
