'use client';

import type { JSX } from 'react'

export function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? 'Close menu' : 'Open menu'}
      className="ml-auto flex size-[42px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] border border-line text-fg transition-colors duration-[180ms] hover:border-accent hover:text-accent-strong"
    >
      <span
        className="block h-0.5 w-[18px] bg-current transition-transform duration-[280ms] ease-reveal motion-reduce:transition-none"
        style={{ transform: open ? 'translateY(3.5px) rotate(45deg)' : undefined }}
      />

      <span
        className="block h-0.5 w-[18px] bg-current transition-transform duration-[280ms] ease-reveal motion-reduce:transition-none"
        style={{ transform: open ? 'translateY(-3.5px) rotate(-45deg)' : undefined }}
      />
    </button>
  );
}
