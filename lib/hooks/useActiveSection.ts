'use client';

import { useEffect, useState } from 'react';

import type { SectionId } from '@/lib/types/section-id';

const SECTIONS: Array<SectionId> = ['about', 'how', 'stack', 'experience', 'projects', 'education', 'contact'];

export function useActiveSection(offset = 160): SectionId {
  const [active, setActive] = useState<SectionId>('about');

  useEffect((): () => void => {
    let frame: number = 0;

    const measure: () => void = (): void => {
      frame = 0;

      let current: SectionId = SECTIONS[0];

      for (const id of SECTIONS) {
        const element: HTMLElement | null = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActive((prev: SectionId): SectionId => (prev === current ? prev : current));
    };

    const onScroll: () => void = (): void => {
      if (frame) {
        return;
      }

      frame = requestAnimationFrame(measure);
    };

    measure();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [offset]);

  return active;
}
