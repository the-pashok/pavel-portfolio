'use client';

import type { JSX } from 'react';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { Container } from '@/components/layout/Container';

import type { Content } from '@/lib/types/content';

export function Footer(): JSX.Element {
  const translations: Content = useTranslations();

  return (
    <footer className="border-t border-line py-7">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-subtle">
        <span>{translations.footer.built}</span>
        <span>{translations.footer.stack}</span>
        <span>© {new Date().getFullYear()}</span>
      </Container>
    </footer>
  );
}
