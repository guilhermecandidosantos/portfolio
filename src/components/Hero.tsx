'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { CodePreview } from './CodePreview';
import { containerVariants, itemVariants } from './Motions';
import { MotionCodePreview } from './Motions/MotionCodePreview';

export function Hero() {
  return (
    <div className='grid grid-cols-2 w-full gap-10'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.span
          className='text-purple-400 uppercase border border-purple-500 px-2 rounded-full text-sm'
          variants={itemVariants}
        >
          Desenvolvedor Fullstack
        </motion.span>

        <motion.h1 className='text-h1' variants={itemVariants}>
          Tecnologia, código e negocio gerando{' '}
          <span className='text-purple-500'>valor real</span>.
        </motion.h1>

        <motion.p className='text-muted' variants={itemVariants}>
          Desenvolvo aplicações web completas e soluções para sistemas
          corporativos, unindo código, regras de negócio e experiência com
          usuários para transformar processos em resultados reais.
        </motion.p>

        <motion.div
          className='grid grid-cols-4 gap-4 mt-4'
          variants={itemVariants}
        >
          <motion.span
            className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
          >
            <Image src='/react.svg' alt='React' width={24} height={24} />
            React
          </motion.span>
          <motion.span
            className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
          >
            <Image src='/next-js.svg' alt='Next.js' width={24} height={24} />
            Next.js
          </motion.span>
          <motion.span
            className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
          >
            <Image src='/node.svg' alt='Node.js' width={24} height={24} />
            Node.js
          </motion.span>
          <motion.span
            className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
          >
            <Image src='/java.svg' alt='Java' width={24} height={24} />
            Java
          </motion.span>
          <motion.span
            className='flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded-sm'
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
          >
            <Image
              src='/erp-senior.svg'
              alt='ERP Senior'
              width={24}
              height={24}
            />
            ERP Senior
          </motion.span>
        </motion.div>

        <motion.div
          className='flex items-center gap-4 mt-4'
          variants={itemVariants}
        >
          <Link
            href='/contacts'
            className='group inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-4 py-2 transition-all duration-200 hover:scale-105 hover:shadow-navlink'
          >
            Vamos trabalhar juntos
            <ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>

          {/* <Link
            href='/projects'
            className='inline-flex items-center rounded-sm border border-white/10 px-4 py-2 transition-all duration-200 ease-out hover:scale-105 hover:bg-surface-3 hover:border-strong'
          >
            Ver projetos
          </Link> */}
        </motion.div>

        <motion.div className='flex flex-row gap-4 mt-4'>
          <motion.span
            className='text-muted text-sm flex gap-2 items-center'
            variants={itemVariants}
          >
            <MapPin className='size-4' />
            Monte Mor - SP{' '}
            <span className="inline-flex items-center gap-2 text-sm text-muted before:block before:size-1 before:shrink-0 before:rounded-full before:bg-strong before:content-['']">
              Remoto ou região
            </span>
          </motion.span>
        </motion.div>
      </motion.div>

      <div>
        <MotionCodePreview>
          <CodePreview />
        </MotionCodePreview>
      </div>
    </div>
  );
}
