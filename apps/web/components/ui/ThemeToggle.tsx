'use client';

import type { JSX } from 'react';
import { UiState, useUiStore } from '@/lib/store/ui-store';
import { Theme } from '@/lib/types/theme';

export function ThemeToggle(): JSX.Element {
  const theme: Theme = useUiStore((state: UiState): Theme => state.theme);
  const toggleTheme = useUiStore((state: UiState) => state.toggleTheme);
  const target: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${target} theme`}
      className="cursor-pointer border border-line-strong px-2.5 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-fg-muted transition-colors duration-[180ms] hover:border-accent hover:text-accent"
    >
      {target}
    </button>
  );
}
