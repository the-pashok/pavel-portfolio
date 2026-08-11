'use client';

import type { JSX } from 'react';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/layout/Section';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { Reveal } from '@/components/ui/Reveal';

export function Education(): JSX.Element {
  const educationTranslations = useTranslations().education;

  return (
    <Section id="education" className="bg-surface">
      <Reveal className="pb-[clamp(28px,3.4vw,48px)]">
        <SectionHeading number="06" title={educationTranslations.label} />
      </Reveal>

      <Reveal className="flex flex-wrap gap-[clamp(28px,4vw,72px)] border-t border-line pt-[clamp(28px,3.4vw,48px)]">
        <div className="grow-[2] basis-[min(100%,320px)]">
          <MonoLabel size="sm" tone="subtle" className="mb-3.5 block tracking-[0.16em]">
            {educationTranslations.degreeKey}
          </MonoLabel>

          <h3 className="mb-2 text-heading-sm text-fg text-pretty">{educationTranslations.degree}</h3>

          <p className="text-body-sm text-fg-muted">{educationTranslations.school}</p>
        </div>

        <div className="grow basis-[min(100%,200px)]">
          <MonoLabel size="sm" tone="subtle" className="mb-3.5 block tracking-[0.16em]">
            {educationTranslations.languagesKey}
          </MonoLabel>

          {
            educationTranslations.languages.map((lang: string): JSX.Element => (
              <p key={lang} className="mb-1.5 text-[clamp(1rem,1.4vw,1.15rem)] font-medium text-fg">{lang}</p>
            ))
          }
        </div>

        <div className="grow basis-[min(100%,200px)]">
          <MonoLabel size="sm" tone="subtle" className="mb-3.5 block tracking-[0.16em]">{educationTranslations.hobbiesKey}</MonoLabel>

          <p className="text-[clamp(1rem,1.4vw,1.15rem)] font-medium text-fg">{educationTranslations.hobbies}</p>
        </div>
      </Reveal>
    </Section>
  );
}
