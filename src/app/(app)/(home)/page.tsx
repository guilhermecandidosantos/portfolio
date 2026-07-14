'use client';

import { motion } from 'motion/react';

import { Hero } from '@/components/Hero';
import { containerVariants } from '@/components/Motions';
import { pulseVariants } from '@/components/Motions';
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

export default function Home() {
  return (
    <div>
      <Hero />

      <div className='w-full mt-12'>
        <motion.div
          className='w-full flex flex-col items-center justify-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.span
            className='text-purple-500 uppercase px-2 text-sm'
            variants={pulseVariants}
          >
            Desenvolvedor Fullstack
          </motion.span>

          <motion.h2 className='text-motion.h2' variants={pulseVariants}>
            Stack que uso no dia a dia
          </motion.h2>

          <div className='grid grid-cols-6 gap-4 mt-2 w-full'>
            {stackCards.map((card, index) => (
              <StackCard
                key={index}
                name={card.name}
                description={card.description}
                category={card.category}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
