import type { JSX } from 'react';
import { MonoLabel } from './MonoLabel';

interface PrincipleCardProps {
  index: number;
  title: string;
  body: string;
}

export function PrincipleCard({ index, title, body }: PrincipleCardProps): JSX.Element {
  return (
    <div className="grow basis-[min(100%,280px)] bg-surface p-card">
      <MonoLabel tone="accent" className="font-bold tracking-[0.16em]">
        {String(index).padStart(2, '0')}
      </MonoLabel>

      <h3 className="mt-4 mb-3 text-heading-sm text-fg">{title}</h3>

      <p className="text-body-sm text-fg-muted text-pretty">{body}</p>
    </div>
  );
}
