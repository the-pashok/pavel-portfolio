'use client';

import { useState, useEffect, useCallback, useRef, type RefObject } from 'react';

interface SliderState {
  index: number;
  total: number;
  atStart: boolean;
  atEnd: boolean;
  progress: number;
  visibleFraction: number;
}

export function useSlider(deps: Array<unknown> = []) {
  const trackRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  const targetRef: RefObject<number | null> = useRef<number | null>(null);

  const settleRef: RefObject<number | undefined> = useRef<number | undefined>(undefined);

  const [state, setState] = useState<SliderState>({
    index: 0, total: 0, atStart: true, atEnd: true, progress: 0, visibleFraction: 1,
  });

  const measure: () => void = useCallback((): void => {
    const track: HTMLDivElement | null = trackRef.current;

    if (!track) {
      return;
    }

    const slides: Array<HTMLElement> = Array.from(track.children) as Array<HTMLElement>;
    const total: number = slides.length;

    if (!total) {
      return;
    }

    const step: number = total > 1
      ? slides[1].getBoundingClientRect().left - slides[0].getBoundingClientRect().left
      : slides[0].getBoundingClientRect().width + 1;

    const max: number = Math.max(0, track.scrollWidth - track.clientWidth);

    const perView: number = step > 0 ? Math.max(1, Math.round(track.clientWidth / step)) : 1;

    setState({
      total,
      index: step > 0 ? Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / step))) : 0,
      atStart: track.scrollLeft <= 2,
      atEnd: max <= 2 || track.scrollLeft >= max - 2,
      progress: max > 0 ? track.scrollLeft / max : 0,
      visibleFraction: total > perView ? Math.min(1, perView / total) : 1,
    });
  }, []);

  const go = useCallback((direction: -1 | 1): void => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const slides = Array.from(track.children) as HTMLElement[];

    if (!slides.length) {
      return;
    }

    const step: number = slides.length > 1
      ? slides[1].getBoundingClientRect().left - slides[0].getBoundingClientRect().left
      : slides[0].getBoundingClientRect().width + 1;

    const max: number = Math.max(0, track.scrollWidth - track.clientWidth);

    const from: number = targetRef.current ?? track.scrollLeft;

    const next: number = Math.max(0, Math.min(max, Math.round(from / step) * step + direction * step));

    targetRef.current = next;

    const reduce: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    track.scrollTo({ left: next, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  const reset: () => void = useCallback((): void => {
    targetRef.current = null;
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' });

    measure();
  }, [measure]);

  useEffect(() => {
    const track: HTMLDivElement | null = trackRef.current;

    if (!track) {
      return;
    }

    const onScroll: () => void = (): void => {
      window.clearTimeout(settleRef.current);

      settleRef.current = window.setTimeout(() => { targetRef.current = null; }, 160);

      measure();
    };

    measure();

    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure, { passive: true });

    return (): void => {
      window.clearTimeout(settleRef.current);
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure, ...deps]);

  return { trackRef, ...state, go, reset };
}
