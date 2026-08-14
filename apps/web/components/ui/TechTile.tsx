import type { JSX } from 'react';

import type { SkillItem } from '@/lib/types/skill-group';

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons';

export function TechTile({ item }: { item: SkillItem }): JSX.Element {
  const mask: string | undefined = item.logo ? `url(${CDN}/${item.logo}.svg) center/contain no-repeat` : undefined;
  const monogram: string = item.label.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();

  return (
    <div className="flex min-w-0 flex-col items-center gap-3 bg-bg p-5 transition-colors duration-[180ms] hover:bg-surface">
      {mask ? (
        <span
          aria-hidden
          className="h-[30px] w-[30px] shrink-0 bg-current"
          style={{ mask, WebkitMask: mask }}
        />
      ) : (
        <span
          aria-hidden
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center border border-line-strong font-mono text-[10px] font-bold text-fg"
        >
          {monogram}
        </span>
      )}
      <span className="text-center font-mono text-[10px] uppercase leading-[1.45] tracking-[0.06em] text-fg-subtle">
        {item.label}
      </span>
    </div>
  );
}
