'use client';

import { useRef, useState, useEffect, RefObject } from 'react';

/**
 * Scroll-reveal that FAILS OPEN: if IntersectionObserver never delivers a
 * callback - the element is shown anyway after a short timeout.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = '0px 0px -6% 0px') {
  const reference: RefObject<T | null> = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element: T | null = reference.current;

    if (!element) {
      return;
    }

    const reduce: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      const raf: number = requestAnimationFrame(() => setVisible(true));

      return (): void => cancelAnimationFrame(raf);
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]): void => {
        if (!entry.isIntersecting) {
          return;
        }

        window.clearTimeout(safety);
        setVisible(true);
        intersectionObserver.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin,
      },
    );

    intersectionObserver.observe(element);

    // Fail-open ONLY for elements already in view (IO should have fired but
    // didn't — e.g. some embedded frames). Below-fold stays hidden until
    // scrolled to, so scroll-reveal isn't defeated on long pages.
    const safety: number = window.setTimeout((): void => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
        intersectionObserver.disconnect();
      }
    }, 1400);

    return () => {
      window.clearTimeout(safety);
      intersectionObserver.disconnect();
    };
  }, [rootMargin]);

  return {
    reference,
    visible,
  };
}
