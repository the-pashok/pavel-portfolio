'use client';

import type { JSX } from 'react';

import { useTranslations } from '@/lib/hooks/useTranslations';

import { Container } from '@/components/layout/Container';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

import type { Metric } from '@/lib/types/metric';
import type { Content } from '@/lib/types/content';

export function Metrics(): JSX.Element {
  const translations: Content = useTranslations();

  return (
    <Reveal delay={100}>
      <section className="bg-accent text-accent-ink">
        <Container>
          {/* gap-px grid wall: grid columns absorb the gap, so no overflow/stray borders.
              2 cols on mobile, 4 on desktop. */}
          <div className="grid grid-cols-2 gap-px bg-accent-ink/15 md:grid-cols-4">
            {translations.metrics.map((metric: Metric, i: number): JSX.Element => (
              <Reveal
                key={metric.id}
                className="bg-accent px-[clamp(20px,3vw,44px)] py-[clamp(28px,3.4vw,52px)]"
                delay={50 * i}
              >
                <div className="text-display-lg tabular-nums">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>

                <div className="mt-2.5 font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.14em] text-accent-ink/65">
                  {metric.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
