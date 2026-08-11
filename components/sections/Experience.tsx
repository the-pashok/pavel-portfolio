'use client';

import type { JSX } from 'react';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

import type { ExperienceEntry } from '@/lib/types/experience-entry';
import type { Content } from '@/lib/types/content';

export function Experience(): JSX.Element {
  const translations: Content = useTranslations();
  const entries: Array<ExperienceEntry> = translations.experience.entries;

  return (
    <Section id="experience">
      <Reveal className="pb-[clamp(20px,2.4vw,32px)]">
        <SectionHeading number="04" title={translations.experience.label} />
      </Reveal>

      <Reveal as="p" className="mb-[clamp(36px,4.4vw,64px)] max-w-[30ch] text-lead text-fg-muted text-pretty">
        {translations.experience.lead}
      </Reveal>

      <div>
        {
          entries.map((experienceEntry: ExperienceEntry, i: number): JSX.Element => (
            <Reveal key={experienceEntry.id}>
              <TimelineItem entry={experienceEntry} isLast={i === entries.length - 1} />
            </Reveal>
          ))
        }
      </div>
    </Section>
  );
}
