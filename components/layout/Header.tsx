'use client';

import type { JSX } from 'react';

import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { useTranslations } from '@/lib/hooks/useTranslations';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/layout/Container';
import { LangToggle } from '@/components/ui/LangToggle';
import { NavLink } from '@/components/ui/NavLink';

import type { SectionId } from '@/lib/types/section-id';
import type { Content } from '@/lib/types/content';

const NAV: Array<{ id: SectionId; href: string }> = [
  {
    id: 'about',
    href: '#about',
  },
  {
    id: 'how',
    href: '#how'
  },
  {
    id: 'stack',
    href: '#stack'
  },
  {
    id: 'experience',
    href: '#experience'
  },
  {
    id: 'projects',
    href: '#projects'
  },
  {
    id: 'contact',
    href: '#contact'
  },
];

export function Header(): JSX.Element {
  const translations: Content = useTranslations();
  const active: SectionId = useActiveSection();

  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-bg/85 backdrop-blur-lg">
      <Container className="flex items-center gap-[clamp(12px,2.5vw,36px)] py-3.5">
        <a href="#top" className="flex flex-none items-center gap-2.5 text-fg">
          <span className="flex size-[34px] items-center justify-center bg-accent font-mono text-[13px] font-bold tracking-[0.02em] text-accent-ink">
            PT
          </span>
          <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em]">
            {translations.hero.firstName} {translations.hero.lastName}
          </span>
        </a>

        <nav className="flex flex-1 items-center gap-[clamp(14px,2vw,28px)] overflow-x-auto py-0.5 [scrollbar-width:none]">
          {
            NAV.map((item): JSX.Element => (
              <NavLink key={item.id} href={item.href} active={active === item.id}>
                {translations.nav[item.id]}
              </NavLink>
            ))
          }
        </nav>

        <div className="flex flex-none items-center gap-2">
          <LangToggle />

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
