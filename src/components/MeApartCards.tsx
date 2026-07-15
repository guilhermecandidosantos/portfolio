'use client';

import { CodeXml, Crosshair, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { FaUsers } from 'react-icons/fa';

import { itemVariants } from './Motions';

export function MeApartCards() {
  const whatSetsMeApart = [
    {
      icon: Crosshair,
      title: 'Visão técnica e de negócio',
      description:
        'Entendo tanto a implementação técnica quanto o impacto da solução nos processos da empresa.',
      stylesIconContainer: 'p-2 bg-purple-600 rounded-md',
      stylesIcon: 'text-white',
      strokeWidth: 2.5,
    },
    {
      icon: Landmark,
      title: 'Sistemas corporativos',
      description:
        'Experiência prática com ERP Senior SGI, relatórios, configurações e sustentação de funcionalidades.',
      stylesIcon: 'text-success',
      strokeWidth: 2,
    },
    {
      icon: CodeXml,
      title: 'Desenvolvimento de ponta a ponta',
      description:
        'Atuação em frontend, backend, banco de dados, integrações, deploy e manutenção.',
      stylesIconContainer: 'p-2 bg-info-bg rounded-md',
      stylesIcon: 'text-info',
      strokeWidth: 2.5,
    },
    {
      icon: FaUsers,
      title: 'Comunicação com o usuário',
      description:
        'Experiência em treinamentos, levantamento de necessidades e tradução de requisitos de negócio em soluções técnicas.',
      stylesIconContainer: 'p-2 bg-warning-bg rounded-md',
      stylesIcon: 'text-warning',
    },
  ];

  return (
    <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {whatSetsMeApart.map((apart, index) => (
        <motion.div
          key={index}
          className='flex flex-col bg-white/10 p-4 rounded-md'
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
        >
          <motion.header
            className='flex flex-row gap-2 items-center'
            variants={itemVariants}
          >
            <motion.div
              className={`${apart.stylesIconContainer}`}
              variants={itemVariants}
            >
              <apart.icon
                strokeWidth={apart.strokeWidth}
                className={`${apart.stylesIcon}`}
              />
            </motion.div>

            <div className='flex flex-col -space-y-2'>
              <h1 className='text-sm font-bold'>{apart.title}</h1>
            </div>
          </motion.header>
          <motion.div className='mt-4' variants={itemVariants}>
            <p className='leading-6 text-sm min-h-18 text-secondary'>
              {apart.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
