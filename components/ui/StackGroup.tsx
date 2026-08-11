import { cn } from '@/lib/utils/cn';
import type { SkillItem } from '@/lib/types/skill-group';
import { TechTile } from './TechTile';

interface StackGroupProps {
  label: string;
  items: SkillItem[];
  isLast?: boolean;
}

/**
 * Group label ABOVE a full-width tile grid. `auto-fill` + equal `1fr` tracks
 * means a short final row leaves empty cells rather than stretching tiles.
 */
export function StackGroup({ label, items, isLast = false }: StackGroupProps) {
  return (
    <div className={cn('flex flex-col gap-gap-md border-t border-line py-gap-md', isLast && 'border-b')}>
      <h3 className="font-mono text-mono font-bold uppercase tracking-[0.16em] text-fg">{label}</h3>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(126px,1fr))] gap-px border border-line bg-line">
        {items.map((item) => (
          <TechTile key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}
