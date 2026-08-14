import { z } from 'zod';

import { stackTagSchema } from './project-filter';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  meta: z.string(),
  body: z.string(),
  stack: z.array(z.string()),
  tags: z.array(stackTagSchema),
  href: z.string().optional(),
});

export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
