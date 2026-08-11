import type { JSX } from 'react';

import { cn } from '@/lib/utils/cn';

import { TechTile } from './TechTile';

import type { SkillItem } from '@/lib/types/skill-group';

interface StackGroupProps {
  label: string;
  items: Array<SkillItem>;
  isLast?: boolean;
}

export function StackGroup({ label, items, isLast = false }: StackGroupProps): JSX.Element {
  return (
    <div className={cn('flex flex-col gap-gap-md border-t border-line py-gap-md', isLast && 'border-b')}>
      <h3 className="font-mono text-mono font-bold uppercase tracking-[0.16em] text-fg">{label}</h3>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(126px,1fr))] gap-px border border-line bg-line">
        {items.map((item: SkillItem): JSX.Element => (
          <TechTile key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}
