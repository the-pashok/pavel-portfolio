import { z } from 'zod';
import { stackTagSchema } from '@/lib/types/project-filter';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  meta: z.string(),
  body: z.string(),
  stack: z.array(z.string()),
  tags: z.array(stackTagSchema),
  href: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;
