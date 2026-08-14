import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function CardProps({ children, hover, className }: CardProps): JSX.Element {
  return (
    <div
      className={cn(
        'border border-line bg-surface p-card',
        hover && 'transition-colors duration-[180ms] hover:bg-surface-2',
        className,
      )}
    >
      {children}
    </div>
  );
}
