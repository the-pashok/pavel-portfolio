'use client';

import type { JSX } from 'react';

import { cn } from '@/lib/utils/cn';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LangToggle } from '@/components/ui/LangToggle';

import type { SectionId } from '@/lib/types/section-id';
import type { Content } from '@/lib/types/content';

const ORDER: Array<SectionId> = ['about', 'how', 'stack', 'experience', 'projects', 'education', 'contact'];

export function MobileMenu({
  open,
  active,
  actionClose,
}: {
  open: boolean;
  active: SectionId;
  actionClose: () => void;
}): JSX.Element {
  const translations: Content = useTranslations();

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-[70] flex flex-col bg-bg transition-opacity duration-300 ease-reveal motion-reduce:transition-none',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-[clamp(20px,5vw,40px)] py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-[34px] items-center justify-center bg-accent font-mono text-[13px] font-bold text-accent-ink">
            PT
          </span>
          <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-fg">
            {translations.hero.firstName} {translations.hero.lastName}
          </span>
        </div>

        <button
          type="button"
          onClick={actionClose}
          aria-label="Close menu"
          className="flex size-[42px] shrink-0 cursor-pointer items-center justify-center border border-line text-lg leading-none text-fg transition-colors duration-[180ms] hover:border-accent hover:text-accent-strong"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto px-[clamp(20px,5vw,40px)] pb-gap-md pt-[clamp(8px,2vw,20px)]">
        {ORDER.map((id: SectionId, i: number): JSX.Element => (
          <a
            key={id}
            href={`#${id}`}
            onClick={actionClose}
            aria-current={active === id ? 'true' : undefined}
            className={cn(
              'flex items-baseline gap-[clamp(14px,3vw,26px)] border-b border-line py-[clamp(15px,2.4vw,22px)] transition-colors duration-[180ms]',
              active === id ? 'text-accent-strong' : 'text-fg',
            )}
          >
            <span className="shrink-0 font-mono text-mono font-bold tracking-[0.16em] text-fg-subtle">
              {String(i + 1).padStart(2, '0')}
            </span>

            <span className="text-[clamp(1.5rem,6vw,2.4rem)] font-bold uppercase leading-none tracking-[-0.03em]">
              {translations.nav[id]}
            </span>
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-line px-[clamp(20px,5vw,40px)] py-gap-md">
        <a
          href={`mailto:${translations.contact.email}`}
          className="break-all font-mono text-[11.5px] tracking-[0.06em] text-accent-strong"
        >
          {translations.contact.email}
        </a>

        <div className="flex items-center gap-2">
          <LangToggle />

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
