import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/Footer';
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
