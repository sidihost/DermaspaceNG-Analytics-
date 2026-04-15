import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Providers } from './Providers';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@umami/react-zen/styles.css';
import '@/styles/global.css';
import '@/styles/variables.css';

export default function ({ children }) {
  if (process.env.DISABLE_UI) {
    return (
      <html>
        <body></body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#6b2d8b" />
        <meta name="theme-color" content="#6b2d8b" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#4a1d61" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | DermaspaceNG Analytics',
    default: 'DermaspaceNG Analytics',
  },
  description: 'Analytics dashboard for Dermaspace Esthetic And Wellness Centre',
};
