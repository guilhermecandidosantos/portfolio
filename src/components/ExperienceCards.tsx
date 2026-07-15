'use client';

import {
  ChartNoAxesColumnIncreasing,
  Headset,
  MonitorStop,
  Settings,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FaUsers } from 'react-icons/fa';

import { itemVariants } from './Motions';

export function ExperienceCards() {
  const experiences = [
    {
      icon: MonitorStop,
      title: 'Desenvolvimento de telas SGI',
      description:
        'Criação e manutenção de telas personalizadas para atender processos e necessidades específicas das áreas.',
      stylesIconContainer: 'p-2 bg-purple-600 rounded-md',
      stylesIcon: 'text-white',
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      title: 'Criação de relatórios',
      description:
        'Desenvolvimento de relatórios operacionais e gerenciais, transformando dados do ERP em informações estratégicas.',
      stylesIconContainer: 'p-2 bg-success-bg rounded-md',
      stylesIcon: 'text-success',
      strokeWidth: 5,
    },
    {
      icon: Settings,
      title: 'Configuração e funcionalidades',
      description:
        'Criação e manutenção de telas personalizadas para atender processos e necessidades específicas das áreas.',
      stylesIconContainer: 'p-2 bg-info-bg rounded-md',
      stylesIcon: 'text-info',
      strokeWidth: 2.5,
    },
    {
      icon: FaUsers,
      title: 'Treinamento de usuários',
      description:
        'Treinamento e orientação dos usuários sobre novas funções, processos e melhores práticas de utilização do sistema.',
      stylesIconContainer: 'p-2 bg-warning-bg rounded-md',
      stylesIcon: 'text-warning',
    },
    {
      icon: Headset,
      title: 'Sustentação e analise de problemas',
      description:
        'Investigação de erros, análise de processos e suporte aos usuários, buscando corrigir a causa raiz dos problemas.',
      stylesIconContainer: 'p-2 bg-purple-900 rounded-md',
      stylesIcon: 'text-purple-200',
      strokeWidth: 2.5,
    },
  ];

  return (
    <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      {experiences.map((experience, index) => (
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
              className={`${experience.stylesIconContainer}`}
              variants={itemVariants}
            >
              <experience.icon
                strokeWidth={experience.strokeWidth}
                className={`${experience.stylesIcon}`}
              />
            </motion.div>

            <div className='flex flex-col -space-y-2'>
              <h1 className='text-sm font-bold'>{experience.title}</h1>
            </div>
          </motion.header>
          <motion.div className='mt-4' variants={itemVariants}>
            <p className='leading-6 text-sm min-h-18 text-secondary'>
              {experience.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
