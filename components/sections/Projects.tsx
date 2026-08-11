'use client';

import { useMemo } from 'react';

import { useTranslations } from '@/lib/hooks/useTranslations';
import { useUiStore } from '@/lib/store/ui-store';
import { useProjects } from '@/lib/api/portfolio';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterChips } from '@/components/ui/FilterChips';
import { ProjectSlider } from '@/components/ui/ProjectSlider';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Projects() {
  const t = useTranslations();
  const filter = useUiStore((s) => s.projectFilter);
  const { data } = useProjects();

  const visible = useMemo(
    () => (filter === 'all' ? data : data.filter((p) => p.tags.includes(filter))),
    [data, filter],
  );

  return (
    <Section id="projects">
      <Reveal className="pb-[clamp(20px,2.4vw,32px)]">
        <SectionHeading number="05" title={t.projects.label} />
      </Reveal>

      <Reveal>
        <div className="mb-[clamp(28px,3.4vw,48px)] flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <p className="m-0 max-w-[26ch] flex-1 basis-[min(100%,260px)] text-lead text-fg-muted text-pretty">
            {t.projects.lead}
          </p>
          <FilterChips filters={t.projects.filters} />
        </div>
      </Reveal>

      <ProjectSlider projects={visible} filterKey={filter} />
    </Section>
  );
}
