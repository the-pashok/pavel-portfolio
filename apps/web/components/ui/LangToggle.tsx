'use client';

import type { JSX } from 'react';
import { cn } from '@/lib/utils/cn';
import { UiState, useUiStore } from '@/lib/store/ui-store';
import type { Lang } from '@/lib/types/lang';

const LANGUAGES: Array<Lang> = ['en', 'uk'];

export function LangToggle(): JSX.Element {
  const lang: Lang = useUiStore((state: UiState): Lang => state.lang);
  const setLang = useUiStore((state: UiState) => state.setLang);

  return (
    <div className="flex border border-line-strong">
      {LANGUAGES.map((code: Lang) => {
        const isActive: boolean = code === lang;

        return (
          <button
            key={code}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLang(code)}
            className={cn(
              'cursor-pointer px-[9px] py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] transition-colors duration-[180ms]',
              isActive ? 'bg-accent text-accent-ink' : 'text-fg-muted hover:text-accent',
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
