import type { Content } from '@/lib/types/content';
import type { Lang } from '@/lib/types/lang';
import { en } from './en';
import { uk } from './uk';

const dictionaries: Record<Lang, Content> = { en, uk };

export function getContent(lang: Lang): Content {
  return dictionaries[lang] ?? en;
}

export { en, uk };
