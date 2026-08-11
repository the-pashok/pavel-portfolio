import { Space_Grotesk, Onest, JetBrains_Mono } from 'next/font/google';

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
