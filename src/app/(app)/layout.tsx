import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Guilherme Cândido dos Santos | Desenvolvedor Fullstack',
    template: '%s | Guilherme Cândido dos Santos',
  },
  description:
    'Portfólio de Guilherme Cândido dos Santos, desenvolvedor fullstack especializado em React, Next.js, Node.js e Java.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <Header />
        <main className='max-w-[80%] w-full mx-auto'>{children}</main>
      </body>
    </html>
  );
}
