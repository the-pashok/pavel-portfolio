'use client';

import { useEffect } from 'react';
import type { Project } from '@/lib/types/project';
import { useSlider } from '@/lib/hooks/useSlider';
import { ProjectCard } from './ProjectCard';
import { SliderControls } from './SliderControls';

export function ProjectSlider({ projects, filterKey }: { projects: Project[]; filterKey: string }) {
  const { trackRef, index, total, atStart, atEnd, progress, visibleFraction, go, reset } = useSlider([
    projects.length,
  ]);

  useEffect((): void => {
    reset();
  }, [filterKey, reset]);

  return (
    <>
      <div
        ref={trackRef}
        className="flex snap-x snap-proximity gap-px overflow-x-auto overscroll-x-contain border border-line bg-line [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <SliderControls
        index={index}
        total={total}
        progress={progress}
        visibleFraction={visibleFraction}
        atStart={atStart}
        atEnd={atEnd}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </>
  );
}
