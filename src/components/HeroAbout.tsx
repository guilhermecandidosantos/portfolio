'use client';

import { ArrowRight, MapPin, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import {
  containerVariants,
  itemVariants,
  MotionRightToLeftContainer,
} from '@/components/Motions';

export function HeroAbout() {
  return (
    <div className='grid grid-cols-2 w-full gap-10'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-col gap-4'
      >
        <motion.span
          className='text-purple-400 uppercase border border-purple-500 px-2 rounded-full text-sm w-fit'
          variants={itemVariants}
        >
          sobre mim
        </motion.span>

        <motion.h2 className='text-h2' variants={itemVariants}>
          Tecnologia, sistemas corporativos e desenvolvimento trabalhando{' '}
          <span className='text-purple-500'>juntos.</span>
        </motion.h2>

        <motion.p className='text-muted' variants={itemVariants}>
          Sou desenvolvedor Fullstack com experiência na criação de aplicações
          web e na sustentação de sistemas corporativos, especialmente o ERP
          Senior. Atuo no desenvolvimento de soluções que otimizam processos,
          facilitam o trabalho dos usuários e contribuem para a eficiência das
          operações empresariais. Tenho paixão por transformar necessidades de
          negócio em aplicações funcionais, confiáveis e alinhadas aos objetivos
          da empresa.
        </motion.p>

        <motion.p className='text-muted' variants={itemVariants}>
          Minha atuação combina desenvolvimento técnico, conhecimento de
          processos corporativos e contato direto com usuários. No ERP Senior,
          desenvolvo telas SGI, crio relatórios, configuro novas funcionalidades
          e realizo treinamentos para garantir que as equipes utilizem o sistema
          de forma eficiente.
        </motion.p>

        <motion.p className='text-muted' variants={itemVariants}>
          Essa experiência me permite compreender não apenas o código, mas
          também as regras de negócio, os processos da empresa e as necessidades
          reais de quem utiliza o sistema no dia a dia.
        </motion.p>
      </motion.div>

      <MotionRightToLeftContainer>
        <div className='flex flex-col bg-zinc-800/50 p-4 border border-white/10 rounded-md'>
          <header className='flex flex-row gap-6'>
            <Image
              src='/me.jpeg'
              alt=''
              width={200}
              height={200}
              className='rounded-full h-50 w-50 object-cover object-top shadow-navlink'
              quality={100}
            />

            <div className='flex flex-col gap-1 py-4'>
              <h3 className='text-h3 font-bold'>
                Guilherme Cândido dos Santos
              </h3>
              <p className='text-purple-500 font-bold flex-1'>
                Desenvolvedor Fullstack e analista de sistemas
              </p>

              <div className='flex flex-col gap-2 text-muted text-sm'>
                <span className='text-body inline-flex items-center gap-2 leading-0'>
                  <MapPin className='size-5' />
                  Monte Mor - SP
                </span>
                <span className='text-body inline-flex items-center gap-2 leading-0'>
                  <Monitor className='size-5' />
                  Remoto ou região de campinas
                </span>
              </div>
            </div>
          </header>

          <div className='flex flex-wrap gap-2 mt-4'>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              React
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              Next.js
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              Node.js
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              TypeScript
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              ERP Senior
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              SGI
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              PL/SQL
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              PostgreSQL
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              Oracle
            </span>
            <span className='text-purple-600 py-1 px-4 border border-zinc-600/50 rounded-md'>
              Docker
            </span>
          </div>

          <div className='flex flex-row gap-4 mt-4'>
            <a
              href='https://github.com/guilhermecandidosantos'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted flex flex-row items-center hover:scale-105 gap-2 hover:text-purple-500 transition-all duration-100 py-1 px-4 border border-zinc-600/50 rounded-md'
            >
              <FaGithub size={24} />
              GitHub
              <ArrowRight size={18} />
            </a>

            <a
              href='https://linkedin.com/in/guilhermecandidosantos/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted flex flex-row items-center hover:scale-105 gap-2 hover:text-purple-500 transition-all duration-100 py-1 px-4 border border-zinc-600/50 rounded-md'
            >
              <FaLinkedin size={24} />
              Linkedin
            </a>
          </div>
        </div>
      </MotionRightToLeftContainer>
    </div>
  );
}
