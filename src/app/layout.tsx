import type { Metadata } from 'next';
import '../styles/global.css';
import LayoutShell from '@/components/layout/LayoutShell';

export const metadata: Metadata = {
  title: {
    template: '%s — ZyphraVision',
    default: 'ZyphraVision — Vision Redefined',
  },
  description: 'AI-powered glasses for the visually impaired. No cloud. No delay. No compromise.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary overflow-x-hidden">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
