'use client';

import type { JSX, ElementType, ReactNode } from 'react';

import { useReveal } from '@/lib/hooks/useReveal';
import { cn } from '@/lib/utils/cn';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({ children, as, delay = 0, className }: RevealProps ): JSX.Element {
  const Component = (as ?? 'div') as ElementType;

  const { reference, visible } = useReveal();

  return (
    <Component
      ref={reference}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(
        'transition-[opacity,transform] duration-[750ms] ease-reveal',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </Component>
  );
}
