'use client';

import { useRef, useState, useEffect, RefObject } from 'react';

/**
 * Counts from 0 up to target once the node enters the viewport.
 */
export function useCountUp(target: number, duration: number = 1000) {
  const reference: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState<number>(0);
  const done: RefObject<boolean> = useRef(false);

  useEffect(() => {
    const element = reference.current;

    if (!element || done.current) {
      return
    }

    const run: () => void = (): void => {
      if (done.current) {
        return;
      }

      done.current = true;

      const t0: number = performance.now();

      const step: (t: number) => void = (t: number): void => {
        const p: number = Math.min(1, (t - t0) / duration);

        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));

        if (p < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      };

      requestAnimationFrame(step);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      done.current = true;
      const raf: number = requestAnimationFrame((): void => setValue(target));
      return (): void => cancelAnimationFrame(raf);
    }

    const safety: number = window.setTimeout(run, 1400);

    const intersectionObserver = new IntersectionObserver(
      ([element]): void => {
        if (!element.isIntersecting) {
          return
        }

        window.clearTimeout(safety);

        run();

        intersectionObserver.disconnect();
      },
    );

    intersectionObserver.observe(element);

    return () => {
      window.clearTimeout(safety);
      intersectionObserver.disconnect();
    };
  }, [target, duration]);

  return {
    reference,
    value,
  };
}
