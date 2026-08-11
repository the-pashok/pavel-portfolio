import { Space_Grotesk, Onest, JetBrains_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

import { Providers } from '@/app/providers';

import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-family',
  display: 'swap',
  adjustFontFallback: false,
});

const displayCyrillic = Onest({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-cyrillic',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono-family',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.vercel.app'),

  title: 'Pavel Tseluiko | Full-Stack JavaScript Developer',
  description:
    'Portfolio of Pavel Tseluiko, a Full-Stack JavaScript Developer building web and mobile applications with React, Angular, Node.js, and NestJS.',

  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  openGraph: {
    title: 'Pavel Tseluiko | Full-Stack JavaScript Developer',
    description:
      'Portfolio of Pavel Tseluiko, a Full-Stack JavaScript Developer.',
    url: '/',
    siteName: 'Pavel Tseluiko Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Pavel Tseluiko - Full-Stack JavaScript Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pavel Tseluiko | Full-Stack JavaScript Developer',
    description:
      'Portfolio of Pavel Tseluiko, a Full-Stack JavaScript Developer.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d0f',
};

const noFlash = `(function(){try{var s=JSON.parse(localStorage.getItem('pt-ui')||'{}');var t=s&&s.state&&s.state.theme;document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${displayCyrillic.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
