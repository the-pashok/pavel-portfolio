'use client';

import type { JSX } from 'react';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { useTranslations } from '@/lib/hooks/useTranslations';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Contact(): JSX.Element {
  const contactTranslations = useTranslations().contact;

  const links: Array<{ label: string; href: string; external?: boolean; download?: boolean; icon: string }> = [
    {
      label: contactTranslations.linkedin,
      href: 'https://www.linkedin.com/in/pavlo-tseluiko-4b9700158/',
      external: true,
      icon: '↗',
    },
    {
      label: contactTranslations.github,
      href: 'https://github.com/the-pashok',
      external: true,
      icon: '↗',
    },
    {
      label: contactTranslations.phone,
      href: `tel:${contactTranslations.phone.replace(/\s/g, '')}`,
      icon: '↗',
    },
    {
      label: contactTranslations.resume,
      href: '/Pavel-Tseluiko-CV.pdf',
      download: true,
      icon: '↓',
    },
  ];

  return (
    <Section id="contact">
      <Reveal className="pb-[clamp(24px,3vw,40px)]">
        <SectionHeading number="07" title={contactTranslations.label} />
      </Reveal>

      <Reveal as="p" className="mb-[clamp(20px,2.4vw,32px)] max-w-[20ch] text-display-lg text-fg text-pretty">
        {contactTranslations.headline}
      </Reveal>

      <Reveal as="p" className="mb-[clamp(32px,4vw,56px)] max-w-[52ch] text-body text-fg-muted text-pretty">
        {contactTranslations.sub}
      </Reveal>

      <Reveal>
        <a
          href={`mailto:${contactTranslations.email}`}
          className="block break-words border-y border-line py-[clamp(20px,2.6vw,36px)] text-[clamp(1.35rem,5.2vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] text-accent transition-opacity duration-[180ms] hover:opacity-70"
        >
          {contactTranslations.email}
        </a>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-px bg-line">
          {
            links.map((link): JSX.Element => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
                className="flex grow basis-[min(100%,220px)] items-center justify-between gap-4 bg-bg px-[clamp(18px,2vw,28px)] py-[22px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-fg transition-colors duration-[180ms] hover:bg-surface hover:text-accent"
              >
                <span>{link.label}</span>
                <span className="text-[13px]">{link.icon}</span>
              </a>
            ))
          }
        </div>
      </Reveal>
    </Section>
  );
}
