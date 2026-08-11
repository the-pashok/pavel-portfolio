'use client';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { PrincipleCard } from '@/components/ui/PrincipleCard';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

import type { Principle } from '@/lib/types/principle';
import type { Content } from '@/lib/types/content';

export function HowIWork() {
  const translations: Content = useTranslations();

  return (
    <Section id="how" className="bg-surface">
      <Reveal className="pb-[clamp(20px,2.4vw,32px)]">
        <SectionHeading number="02" title={translations.how.label} />
      </Reveal>

      <Reveal as="p" className="mb-[clamp(32px,3.8vw,56px)] max-w-[26ch] text-lead text-fg-muted text-pretty">
        {translations.how.lead}
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-px bg-line">
          {
            translations.how.principles.map((principle: Principle, i: number) => (
              <PrincipleCard key={principle.id} index={i + 1} title={principle.title} body={principle.body} />
            ))
          }
        </div>
      </Reveal>
    </Section>
  );
}
