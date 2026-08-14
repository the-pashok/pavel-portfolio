import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import { UiState, useUiStore } from '@/lib/store/ui-store';
import { projectSchema } from '@pavel-portfolio/contracts';
import { queryKeys } from '@/lib/query/keys';
import { get } from '@/lib/api/client';
import { getContent } from '@/content';

import type { Lang } from '@/lib/types/lang';

export function useProjects() {
  const lang: Lang = useUiStore((state: UiState) => state.lang);
  const fallback = getContent(lang).projects.items;

  return useQuery({
    queryKey: queryKeys.projects(lang),
    queryFn: () => get(`/projects?lang=${lang}`, z.array(projectSchema)),
    initialData: fallback,
    initialDataUpdatedAt: 0,
    placeholderData: fallback,
    enabled: Boolean(process.env.NEXT_PUBLIC_API_URL),
  });
}
