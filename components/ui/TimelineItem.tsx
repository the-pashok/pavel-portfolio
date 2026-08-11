import type { JSX } from 'react';
import type { ExperienceEntry } from '@/lib/types/experience-entry';

import { MonoLabel } from './MonoLabel';

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
  condensed?: boolean;
}

export function TimelineItem({ entry, isLast = false, condensed = false }: TimelineItemProps): JSX.Element {
  return (
    <div className="flex gap-[clamp(14px,2.4vw,32px)]">
      <div className="flex w-3 flex-none flex-col items-center pt-2">
        <div className="size-3 flex-none bg-accent" />
        {!isLast && <div className="mt-2.5 w-px grow bg-line-strong" />}
      </div>

      <div className="min-w-0 flex-1 pb-[clamp(40px,5vw,72px)]">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <MonoLabel tone="accent">{entry.period}</MonoLabel>
          {entry.tag && <MonoLabel tone="subtle">{entry.tag}</MonoLabel>}
        </div>

        <h3 className="mt-3.5 mb-1.5 text-display-sm uppercase text-fg">{entry.company}</h3>

        <div className="mb-[clamp(18px,2vw,26px)] font-mono text-[12px] text-fg-muted">{entry.role}</div>

        {entry.intro && <p className="mb-4 max-w-bullets text-body-sm text-fg-muted text-pretty">{entry.intro}</p>}

        {!condensed && (
          <div className="flex max-w-bullets flex-col gap-3">
            {entry.bullets.map((b: string, i: number) => (
              <div key={i} className="flex gap-3">
                <span className="flex-none font-mono text-[12px] leading-[1.7] text-accent">—</span>
                <p className="text-body-sm text-fg-muted text-pretty">{b}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-[clamp(18px,2vw,26px)] font-mono text-[10.5px] uppercase leading-[1.9] tracking-[0.1em] text-fg-subtle text-pretty">
          {entry.stack.join(' · ')}
        </div>
      </div>
    </div>
  );
}
