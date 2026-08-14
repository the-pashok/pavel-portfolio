'use client';

import type { JSX } from 'react';
import Image from 'next/image';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { Container } from '@/components/layout/Container';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

import type { Content } from '@/lib/types/content';

export function Hero(): JSX.Element {
  const translations: Content = useTranslations();

  return (
    <section id="top" className="pt-[clamp(48px,8vw,132px)] pb-[clamp(44px,6vw,96px)]">
      <Container className="flex flex-col gap-[clamp(28px,4vw,56px)]">
        <Reveal className="flex flex-wrap items-baseline gap-x-7 gap-y-3" delay={50}>
          <MonoLabel tone="accent">{translations.hero.role}</MonoLabel>
          <MonoLabel tone="subtle">{translations.hero.location}</MonoLabel>
        </Reveal>

        <div className="flex flex-wrap items-center gap-[clamp(24px,4vw,64px)]">
          <Reveal className="min-w-0 flex-1 basis-[min(100%,300px)]" delay={100}>
            <h1 className="text-display-xl uppercase text-fg">
              <span className="block">{translations.hero.firstName}</span>

              <span className="flex flex-wrap items-end gap-[clamp(10px,1.6vw,24px)]">
                <span>{translations.hero.lastName}</span>
                <span className="mb-[clamp(6px,1vw,18px)] size-[clamp(18px,2.4vw,40px)] bg-accent" />
              </span>
            </h1>
          </Reveal>

          <Reveal className="shrink-0" delay={150}>
            <div className="relative aspect-square w-[clamp(172px,21vw,300px)] overflow-hidden bg-surface">
              <Image
                src="/pavel-tseluiko.png"
                alt={`${translations.hero.firstName} ${translations.hero.lastName}`}
                fill
                priority
                sizes="(max-width: 768px) 172px, 300px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div
          className="flex flex-wrap items-end gap-[clamp(28px,4vw,64px)] border-t border-line pt-[clamp(24px,3vw,40px)]"
        >
          <Reveal as="p" className="max-w-[34ch] grow-[3] basis-[min(100%,420px)] text-body-lg text-fg text-pretty" delay={150}>
            {translations.hero.pitch}
          </Reveal>

          <Reveal className="flex grow-[2] basis-[min(100%,300px)] flex-wrap gap-3" delay={200}>
            <Button
              href="/Pavel-Tseluiko-CV.pdf"
              download
              trailing={
                <span className="text-[13px]">↓</span>
              }
            >
              {translations.hero.ctaResume}
            </Button>

            <Button
              variant="ghost"
              href="mailto:pavel.tseluiko@gmail.com"
              trailing={
                <span className="text-[13px]">→</span>
              }
            >
              {translations.hero.ctaContact}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
