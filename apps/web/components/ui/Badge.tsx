import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
}

export function Badge({ children, interactive = false, className }: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-block border border-line-strong px-3 py-2 font-mono text-[11.5px] text-fg',
        interactive && 'transition-colors duration-[180ms] hover:border-accent hover:text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
