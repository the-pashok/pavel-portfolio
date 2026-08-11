import type { Lang } from '@/lib/types/lang';

export const queryKeys = {
  projects: (lang: Lang): readonly ['projects', Lang] => ['projects', lang] as const,
  experience: (lang: Lang): readonly ['experience', Lang] => ['experience', lang] as const,
  content: (lang: Lang): readonly ['content', Lang] => ['content', lang] as const,
};
