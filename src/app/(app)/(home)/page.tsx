import type { Metadata } from 'next';

import { HomePageContent } from './HomePageContent';

export const metadata: Metadata = {
  title: 'Desenvolvedor Fullstack',
  description:
    'Guilherme Cândido dos Santos desenvolve aplicações web e soluções corporativas com React, Next.js, Node.js e Java, unindo tecnologia e regras de negócio para gerar valor real.',
};

export default function Home() {
  return <HomePageContent />;
}
