import type { JSX } from 'react';

import { MonoLabel } from './MonoLabel';

interface FactRowProps {
  label: string;
  value: string;
}

export function FactRow({ label, value }: FactRowProps): JSX.Element {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
      <MonoLabel size="sm" tone="subtle">{label}</MonoLabel>
      <span className="text-right font-mono text-[11.5px] text-fg">{value}</span>
    </div>
  );
}
