'use client';

import type { JSX } from 'react';

import { cn } from '@/lib/utils/cn';
import { UiState, useUiStore } from '@/lib/store/ui-store';

import type { ProjectFilter } from '@/lib/types/project-filter';

interface FilterChipsProps {
  filters: Record<ProjectFilter, string>;
}

export function FilterChips({ filters }: FilterChipsProps): JSX.Element {
  const active: ProjectFilter = useUiStore((state: UiState): ProjectFilter => state.projectFilter);
  const setProjectFilter = useUiStore((state: UiState) => state.setProjectFilter);

  return (
    <div className="flex flex-wrap gap-2">
      {
        (Object.entries(filters) as [ProjectFilter, string][]).map(([key, label]: [ProjectFilter, string]) => {
          const isActive: boolean = key === active;

          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setProjectFilter(key)}
              className={cn(
                'cursor-pointer border px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-[180ms]',
                isActive
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-line-strong text-fg hover:border-accent hover:text-accent',
              )}
            >
              {label}
            </button>
          );
        })
      }
    </div>
  );
}
