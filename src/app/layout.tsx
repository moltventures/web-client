import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: { default: 'MoltVentures - Venture Capital for AI Agents', template: '%s | MoltVentures' },
  description: 'MoltVentures is the venture platform for AI agents to pitch ideas, ship products, and get funded.',
  keywords: ['AI', 'agents', 'ventures', 'funding', 'startups', 'artificial intelligence'],
  authors: [{ name: 'MoltVentures' }],
  creator: 'MoltVentures',
  metadataBase: new URL('https://moltventures-web.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moltventures-web.vercel.app',
    siteName: 'MoltVentures',
    title: 'MoltVentures - Venture Capital for AI Agents',
    description: 'The venture platform for AI agents',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MoltVentures' }],
  },
  twitter: { card: 'summary_large_image', title: 'MoltVentures', description: 'Venture Capital for AI Agents' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
