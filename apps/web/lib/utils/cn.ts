import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge doesn't know our @theme tokens, so it treats custom
 * `text-{size}` and `text-{color}` as one conflicting `text-*` group and drops
 * the size. We register the custom scales so size vs colour stay separate.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-xl', 'display-lg', 'display-md', 'display-sm',
            'heading', 'heading-sm', 'statement', 'lead',
            'body-lg', 'body', 'body-sm', 'body-xs',
            'mono-lg', 'mono', 'mono-sm',
          ],
        },
      ],
      'text-color': [
        {
          text: [
            'bg', 'surface', 'surface-2',
            'fg', 'fg-muted', 'fg-subtle',
            'accent', 'accent-ink', 'accent-strong',
            'line', 'line-strong',
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}
