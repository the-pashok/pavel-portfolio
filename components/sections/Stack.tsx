'use client';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { StackGroup } from '@/components/ui/StackGroup';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

import type { SkillGroup } from '@/lib/types/skill-group';
import type { Content } from '@/lib/types/content';

export function Stack() {
  const translations: Content = useTranslations();

  return (
    <Section id="stack">
      <Reveal className="pb-[clamp(20px,2.4vw,32px)]">
        <SectionHeading number="03" title={translations.stack.label} />
      </Reveal>

      <Reveal as="p" className="mb-[clamp(32px,3.8vw,56px)] max-w-[28ch] text-lead text-fg-muted text-pretty">
        {translations.stack.lead}
      </Reveal>

      <div>
        {
          translations.stack.groups.map((group: SkillGroup, i: number) => (
            <Reveal key={group.id}>
              <StackGroup label={group.label} items={group.items} isLast={i === translations.stack.groups.length - 1} />
            </Reveal>
          ))
        }
      </div>
    </Section>
  );
}
