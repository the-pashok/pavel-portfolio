import type { JSX, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type BtnVariant = 'primary' | 'ghost';

interface ButtonProps {
  variant?: BtnVariant;
  href?: string;
  download?: boolean | string;
  external?: boolean;
  trailing?: ReactNode;
  children: ReactNode;
  className?: string;
}

const base: string = 'inline-flex items-center gap-2.5 px-[22px] py-4 font-mono text-[11px] uppercase tracking-[0.12em] transition duration-[180ms]';

const variantClass: Record<BtnVariant, string> = {
  primary: 'bg-accent text-accent-ink font-bold hover:opacity-[0.82]',
  ghost: 'border border-line-strong text-fg font-medium hover:border-accent hover:text-accent',
};

export function Button(
  {
    variant = 'primary',
    href,
    download,
    external,
    trailing,
    children,
    className,
  }: ButtonProps
): JSX.Element {
  const classes: string = cn(base, variantClass[variant], className);

  const content: JSX.Element = (
    <>
      {children}
      {trailing}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
