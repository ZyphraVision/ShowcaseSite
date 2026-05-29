import type { Metadata } from 'next';
import { Sora, JetBrains_Mono } from 'next/font/google';
import '../styles/global.css';
import LayoutShell from '@/components/layout/LayoutShell';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s — ZyphraVision',
    default: 'ZyphraVision — Vision, Reconstructed',
  },
  description:
    'On-device AI glasses that reconstruct the world for the visually impaired. No cloud. No delay. No compromise.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jbMono.variable}`}>
      <body className="bg-background text-text-primary overflow-x-hidden font-sans">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
