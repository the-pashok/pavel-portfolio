import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type Tone = 'accent' | 'muted' | 'subtle';
type Size = 'sm' | 'md' | 'lg';

interface MonoLabelProps {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
}

const toneClass: Record<Tone, string> = {
  accent: 'text-accent',
  muted: 'text-fg-muted',
  subtle: 'text-fg-subtle',
};

const sizeClass: Record<Size, string> = {
  sm: 'text-mono-sm',
  md: 'text-mono',
  lg: 'text-mono-lg',
};

export function MonoLabel({ children, className, tone = 'accent', size = 'sm' }: MonoLabelProps): JSX.Element {
  return (
    <span className={cn('font-mono uppercase', sizeClass[size], toneClass[tone], className)}>
      {children}
    </span>
  );
}
