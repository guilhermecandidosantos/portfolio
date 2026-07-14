import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CodePreview } from '@/components/CodePreview';
import { MotionCodePreview } from '@/components/MotionCodePreview';
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
      <div className='grid grid-cols-2 w-full gap-10'>
        <div>
          <span className='text-purple-400 uppercase border border-purple-500 px-2 rounded-full text-sm'>
            Desenvolvedor Fullstack
          </span>

          <h1 className='text-h1'>
            Tecnologia, código e negocio gerando{' '}
            <span className='text-purple-500'>valor real</span>.
          </h1>

          <p className='text-muted'>
            Desenvolvo aplicações web completas e soluções para sistemas
            corporativos, unindo código, regras de negócio e experiência com
            usuários para transformar processos em resultados reais.
          </p>

          <div className='grid grid-cols-4 gap-4 mt-4'>
            <span className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'>
              <Image src='/react.svg' alt='React' width={24} height={24} />
              React
            </span>
            <span className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'>
              <Image src='/next-js.svg' alt='Next.js' width={24} height={24} />
              Next.js
            </span>
            <span className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'>
              <Image src='/node.svg' alt='Node.js' width={24} height={24} />
              Node.js
            </span>
            <span className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'>
              <Image src='/java.svg' alt='Java' width={24} height={24} />
              Java
            </span>
            <span className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'>
              <Image
                src='/erp-senior.svg'
                alt='ERP Senior'
                width={24}
                height={24}
              />
              ERP Senior
            </span>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <Link
              href='/contacts'
              className='group inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-4 py-2 transition-all duration-200 hover:scale-105 hover:shadow-navlink'
            >
              Vamos trabalhar juntos
              <ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
            </Link>

            <Link
              href='/projects'
              className='inline-flex items-center rounded-sm border border-white/10 px-4 py-2 transition-all duration-200 ease-out hover:scale-105 hover:bg-surface-3 hover:border-strong'
            >
              Ver projetos
            </Link>
          </div>

          <div className='flex flex-row gap-4 mt-4'>
            <span className="inline-flex items-center gap-2 text-sm text-muted before:block before:size-2 before:shrink-0 before:rounded-full before:bg-success before:content-['']">
              Disponível para novos projetos e oportunidades
            </span>
            <span className='text-muted text-sm flex gap-2 items-center'>
              <MapPin className='size-4' />
              Monte Mor - SP{' '}
              <span className="inline-flex items-center gap-2 text-sm text-muted before:block before:size-1 before:shrink-0 before:rounded-full before:bg-strong before:content-['']">
                Remoto ou região
              </span>
            </span>
          </div>
        </div>

        <div>
          <MotionCodePreview>
            <CodePreview />
          </MotionCodePreview>
        </div>
      </div>

      <div className='w-full mt-12'>
        <div className='w-full flex flex-col items-center justify-center'>
          <span className='text-purple-500 uppercase px-2 text-sm'>
            Desenvolvedor Fullstack
          </span>

          <h2 className='text-h2'>Stack que uso no dia a dia</h2>

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
        </div>
      </div>
    </div>
  );
}
