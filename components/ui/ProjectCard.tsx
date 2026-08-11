import type { Project } from '@/lib/types/project';
import { MonoLabel } from './MonoLabel';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Slider slide: fixed-ish width, snap-start, shrink-0. `index` is 0-based. */
export function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="flex min-w-0 shrink-0 basis-[clamp(272px,38vw,470px)] snap-start flex-col gap-3.5 bg-bg p-card transition-colors duration-[180ms] hover:bg-surface">
      <div className="flex items-baseline justify-between gap-4">
        <MonoLabel tone="subtle">{project.meta}</MonoLabel>
        <MonoLabel tone="accent">{String(index + 1).padStart(2, '0')}</MonoLabel>
      </div>

      <h3 className="text-heading text-fg">{project.title}</h3>
      <p className="text-body-xs text-fg-muted text-pretty">{project.body}</p>

      <div className="mt-auto pt-3 font-mono text-mono-sm uppercase leading-[1.8] text-fg-subtle">
        {project.stack.join(' · ')}
      </div>
    </article>
  );
}
