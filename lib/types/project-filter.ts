import { z } from 'zod';

export const stackTagSchema = z.enum(['react', 'angular', 'node', 'mobile']);

export type StackTag = z.infer<typeof stackTagSchema>;

export type ProjectFilter = 'all' | StackTag;


