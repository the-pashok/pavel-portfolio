'use client';

import { useCallback, useEffect, useState } from 'react';

export const MOBILE_MAX = 1024;

export function useMobileMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const close: () => void = useCallback(() => setOpen(false), []);
  const toggle: () => void = useCallback(() => setOpen((v) => !v), []);

  useEffect((): () => void => {
    const mq: MediaQueryList = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);

    const sync: () => void = (): void => {
      setIsMobile(mq.matches);

      if (!mq.matches) {
        setOpen(false);
      }
    };

    sync();

    mq.addEventListener('change', sync);

    return (): void => mq.removeEventListener('change', sync);
  }, []);

  useEffect((): (() => void) | undefined => {
    if (!open) {
      return;
    }

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    document.body.style.overflowY = 'hidden';

    return (): void => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflowY = '';
    };
  }, [open]);

  return { isMobile, open, toggle, close };
}
