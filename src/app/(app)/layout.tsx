import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  applicationName: 'Portfólio de Guilherme Cândido dos Santos',
  title: {
    default: 'Guilherme Cândido dos Santos | Desenvolvedor Fullstack',
    template: '%s | Guilherme Cândido dos Santos',
  },
  description:
    'Portfólio de Guilherme Cândido dos Santos, desenvolvedor fullstack e analista de sistemas que cria aplicações web e soluções corporativas com React, Next.js, Node.js e Java.',
  authors: [{ name: 'Guilherme Cândido dos Santos' }],
  creator: 'Guilherme Cândido dos Santos',
  keywords: [
    'desenvolvedor fullstack',
    'analista de sistemas',
    'React',
    'Next.js',
    'Node.js',
    'Java',
    'ERP Senior',
    'sistemas corporativos',
  ],
  openGraph: {
    locale: 'pt_BR',
    siteName: 'Guilherme Cândido dos Santos',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#03050d',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={`${inter.variable} h-full antialiased`}>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='max-w-[70%] w-full mx-auto mt-8 flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
