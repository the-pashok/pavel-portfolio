import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

interface NavLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
}

export function NavLink({ href, active, children }: NavLinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={cn(
        'whitespace-nowrap font-mono text-mono uppercase transition-colors duration-[180ms]',
        active ? 'text-accent' : 'text-fg-muted hover:text-fg',
      )}
    >
      {children}
    </a>
  );
}
