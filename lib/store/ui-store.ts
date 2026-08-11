'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Lang } from '@/lib/types/lang';
import type { Theme } from '@/lib/types/theme';
import type { ProjectFilter } from '@/lib/types/project-filter';

export interface UiState {
  lang: Lang;
  theme: Theme;
  projectFilter: ProjectFilter;
  isMobileNavOpen: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLang: (lang: Lang) => void;
  setProjectFilter: (projectFilter: ProjectFilter) => void;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      lang: 'en',
      theme: 'dark',
      projectFilter: 'all',
      isMobileNavOpen: false,
      toggleTheme: () => set((state: UiState) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setTheme: (theme: Theme) => set({ theme }),
      setLang: (lang: Lang) => set({ lang }),
      setProjectFilter: (projectFilter: ProjectFilter) => set({ projectFilter }),
      setIsMobileNavOpen: (isMobileNavOpen: boolean) => set({ isMobileNavOpen }),
    }),
    {
      name: 'pt-ui',
      storage: createJSONStorage((): Storage => localStorage),
      partialize: (state: UiState) => ({
        lang: state.lang,
        theme: state.theme,
        projectFilter: state.projectFilter,
        isMobileNavOpen: state.isMobileNavOpen,
      }),
    },
  ),
);
