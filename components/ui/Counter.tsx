'use client';

import type { JSX } from 'react'

import { useCountUp } from '@/lib/hooks/useCountUp';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ value, suffix, duration }: CounterProps): JSX.Element {
  const { reference, value: current } = useCountUp(value, duration);

  return (
    <span ref={reference} className='tabular-nums'>
      {current}
      {suffix}
    </span>
  );
}
