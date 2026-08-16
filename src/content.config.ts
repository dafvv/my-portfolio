import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    projectNumber: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    previewImage: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    metrics: z.array(z.string()).optional(),
    order: z.number().default(1),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
