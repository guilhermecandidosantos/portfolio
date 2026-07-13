import './globals.css';

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function NotFound() {
  return (
    <div
      className={`bg-background-page w-full h-full min-h-screen flex flex-col items-center justify-center gap-2 ${inter.variable}`}
    >
      <h2>Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link
        href='/'
        prefetch={false}
        className='bg-gradient-primary p-2 rounded-sm font-bold hover:shadow-navlink transition-opacity'
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
