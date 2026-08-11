import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

import { Container } from '@/components/layout/Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-section-y', className)}>
      <Container>{children}</Container>
    </section>
  );
}
