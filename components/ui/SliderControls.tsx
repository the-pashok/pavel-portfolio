import type { JSX } from 'react';

import { MonoLabel } from './MonoLabel';

interface SliderControlsProps {
  index: number;
  total: number;
  progress: number;
  visibleFraction: number;
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const pad: (n: number) => string = (n: number): string => String(n).padStart(2, '0');

export function SliderControls({
  index, total, progress, visibleFraction, atStart, atEnd, onPrev, onNext,
}: SliderControlsProps): JSX.Element {
  const scrollable: boolean = visibleFraction < 1;

  return (
    <div className="mt-gap-md flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3.5">
        <MonoLabel className="whitespace-nowrap">
          {pad(Math.min(index + 1, total))} / {pad(total)}
        </MonoLabel>

        {scrollable && (
          <span className="relative block h-px w-[clamp(72px,14vw,180px)] bg-line-strong">
            <span
              className="absolute top-0 h-px bg-accent transition-[left,width] duration-[180ms]"
              style={{
                width: `${visibleFraction * 100}%`,
                left: `${progress * (1 - visibleFraction) * 100}%`,
              }}
            />
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {([['prev', '←', 'Previous project', atStart, onPrev], ['next', '→', 'Next project', atEnd, onNext]] as const).map(
          ([key, glyph, label, disabled, onClick]) => (
            <button
              key={key}
              type="button"
              aria-label={label}
              disabled={disabled}
              onClick={onClick}
              className="cursor-pointer border border-line px-[15px] py-[11px] font-mono text-[13px] leading-none text-fg transition-colors duration-[180ms] hover:border-accent hover:text-accent-strong disabled:cursor-default disabled:opacity-30 disabled:hover:border-line disabled:hover:text-fg"
            >
              {glyph}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
