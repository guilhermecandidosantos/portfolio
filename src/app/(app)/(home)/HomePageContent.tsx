'use client';

import { motion } from 'motion/react';

import { Hero } from '@/components/Hero';
import { containerVariants, pulseVariants } from '@/components/Motions';
import { StackCard } from '@/components/StackCard';

const stackCards = [
  {
    name: 'React',
    description: 'Interfaces modernas, componentes, hooks e performance.',
    category: 'Frontend',
    imageSrc: '/react.svg',
  },
  {
    name: 'Next.js',
    description:
      'SSR, SSG e App Router para experiências rápidas e otimizadas.',
    category: 'Frontend',
    imageSrc: '/next-js.svg',
  },
  {
    name: 'Node.js',
    description: 'APIs REST, autenticação, regras de negócio e integrações.',
    category: 'Backend',
    imageSrc: '/node.svg',
  },
  {
    name: 'TypeScript',
    description: 'Código seguro, tipado e com excelente manutenibilidade.',
    category: 'Linguagem',
    imageSrc: '/typescript.svg',
  },
  {
    name: 'PostgreSQL',
    description:
      'Modelagem relacional, consultas otimizadas e integridade de dados.',
    category: 'Banco de Dados',
    imageSrc: '/postgresql.svg',
  },
  {
    name: 'Docker',
    description:
      'Containerização, ambientes consistentes e deploys confiáveis.',
    category: 'DevOps',
    imageSrc: '/docker.svg',
  },
];

export function HomePageContent() {
  return (
    <div>
      <Hero />

      <section className='mt-12 w-full sm:mt-16'>
        <motion.div
          className='w-full flex flex-col items-center justify-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.span
            className='px-2 text-center text-sm uppercase text-purple-500'
            variants={pulseVariants}
          >
            Desenvolvedor Fullstack
          </motion.span>

          <motion.h2 className='text-center text-h2' variants={pulseVariants}>
            Stack que uso no dia a dia
          </motion.h2>

          <div className='mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
            {stackCards.map((card) => (
              <StackCard key={card.name} {...card} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
