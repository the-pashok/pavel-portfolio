'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { UiState, useUiStore } from '@/lib/store/ui-store';
import { makeQueryClient } from '@/lib/query/client';
import type { Theme } from '@/lib/types/theme';
import type { Lang } from '@/lib/types/lang';

function ThemeSync(): null {
  const theme: Theme = useUiStore((state: UiState): Theme => state.theme);

  useEffect((): void => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return null;
}

function LangSync(): null {
  const lang: Lang = useUiStore((state: UiState): Lang => state.lang);

  useEffect((): void => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={client}>
      <ThemeSync />
      <LangSync />
      {children}
    </QueryClientProvider>
  );
}
