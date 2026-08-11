'use client';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/layout/Section';
import { FactRow } from '@/components/ui/FactRow';
import { Reveal } from '@/components/ui/Reveal';

import type { Content } from '@/lib/types/content';
import type { Fact } from '@/lib/types/fact';

export function About() {
  const translations: Content = useTranslations();

  return (
    <Section id="about">
      <Reveal className="pb-[clamp(28px,3.4vw,52px)]">
        <SectionHeading number="01" title={translations.about.label} />
      </Reveal>

      <div className="flex flex-wrap gap-[clamp(32px,4.5vw,80px)] border-t border-line pt-[clamp(28px,3.4vw,52px)]">
        <div className="flex grow-[3] basis-[min(100%,420px)] flex-col gap-[clamp(20px,2.4vw,32px)]">
          <Reveal as="p" className="max-w-[24ch] text-statement text-fg text-pretty">
            {translations.about.statement}
          </Reveal>

          {translations.about.paragraphs.map((paragraphs: string, i: number) => (
            <Reveal as="p" key={i} className="max-w-prose text-body text-fg-muted text-pretty">
              {paragraphs}
            </Reveal>
          ))}
        </div>

        <Reveal className="flex grow basis-[min(100%,240px)] flex-col">
          {
            translations.about.facts.map((fact: Fact) => (
              <FactRow key={fact.key} label={fact.key} value={fact.value} />
            ))
          }
        </Reveal>
      </div>
    </Section>
  );
}
