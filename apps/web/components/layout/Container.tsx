import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

export function Container({ children, className }: { children: ReactNode; className?: string }): JSX.Element {
  return (
    <div className={cn('mx-auto w-full max-w-shell px-section-x', className)}>
      {children}
    </div>
  );
}
