import type { JSX } from 'react';
import { cn } from '@/lib/utils/cn';

import { MonoLabel } from '@/components/ui/MonoLabel';

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className }: SectionHeadingProps): JSX.Element {
  return (
    <div className={cn('flex flex-wrap items-baseline gap-[clamp(12px,2vw,24px)]', className)}>
      <MonoLabel size="lg" tone="accent">{number}</MonoLabel>
      <h2 className="text-display-md uppercase text-fg">{title}</h2>
    </div>
  );
}
