'use client';

import { useMemo } from 'react';

import { UiState, useUiStore } from '@/lib/store/ui-store';
import { getContent } from '@/content';
import type { Lang } from '@/lib/types/lang';
import type { Content } from '@/lib/types/content';

export function useTranslations(): Content {
  const lang: Lang = useUiStore((state: UiState): Lang => state.lang);

  return useMemo(() => getContent(lang), [lang]);
}
