'use client';

import {
  ChartNoAxesCombined,
  Code2,
  Headphones,
  type LucideIcon,
  MonitorCog,
  Rocket,
} from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface TrajectoryItem {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const trajectoryItems: TrajectoryItem[] = [
  {
    title: 'Início na programação',
    description:
      'Comecei a programar movido pela curiosidade e pelo interesse em resolver problemas por meio da tecnologia.',
    Icon: Rocket,
  },
  {
    title: 'Suporte e sistemas corporativos',
    description:
      'Passei a atuar com suporte técnico, atendimento aos usuários, análise de falhas e sustentação de sistemas.',
    Icon: Headphones,
  },
  {
    title: 'ERP Senior e SGI',
    description:
      'Evoluí para o desenvolvimento de telas SGI, criação de relatórios, configuração de funcionalidades e treinamento de usuários.',
    Icon: MonitorCog,
  },
  {
    title: 'Desenvolvimento fullstack',
    description:
      'Ampliei minha atuação para aplicações web completas, trabalhando com frontend, backend, banco de dados, autenticação e deploy.',
    Icon: Code2,
  },
  {
    title: 'Momento atual',
    description:
      'Uno desenvolvimento fullstack, sistemas corporativos e visão de negócio para construir soluções mais completas e úteis.',
    Icon: ChartNoAxesCombined,
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const horizontalLineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },

  visible: {
    opacity: 1,
    scaleX: 1,

    transition: {
      delay: 0.3,
      duration: 1.5,
      ease: easing,
    },
  },
};

const verticalLineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },

  visible: {
    opacity: 1,
    scaleY: 1,

    transition: {
      delay: 0.3,
      duration: 1.5,
      ease: easing,
    },
  },
};

/**
 * Controla a sequência das cinco etapas.
 *
 * Etapa 1 → espera 0.3s → etapa 2 → etapa 3...
 */
const trajectoryListVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.3,
    },
  },
};

/**
 * Controla a sequência interna de cada etapa:
 *
 * marcador → conteúdo
 */
const trajectoryItemVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const markerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.25,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 15,
      mass: 0.7,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

export function Trajectory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      aria-labelledby='trajectory-title'
      className='w-full'
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView='visible'
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <motion.header variants={headerVariants} className='mb-10 text-center'>
        <span className='text-sm font-medium uppercase tracking-wider text-violet-400'>
          Minha trajetória
        </span>
      </motion.header>

      <div className='relative'>
        {/* Linha horizontal — desktop */}
        <motion.div
          aria-hidden='true'
          variants={horizontalLineVariants}
          className='absolute left-[10%] right-[10%] top-4 hidden h-px origin-left bg-linear-to-r from-violet-500/20 via-violet-500 to-violet-500/20 md:block'
        />

        {/* Linha vertical — mobile */}
        <motion.div
          aria-hidden='true'
          variants={verticalLineVariants}
          className='absolute bottom-4 left-4 top-4 w-px origin-top bg-linear-to-b from-violet-500 via-violet-500/60 to-violet-500/20 md:hidden'
        />

        <motion.ol
          variants={trajectoryListVariants}
          className='grid gap-8 px-6 md:grid-cols-5 md:gap-5 md:px-30'
        >
          {trajectoryItems.map(({ title, description, Icon }, index) => (
            <motion.li
              key={title}
              variants={trajectoryItemVariants}
              className='group relative grid grid-cols-[2rem_1fr] gap-5 md:flex md:flex-col md:items-center md:gap-0 md:text-center'
            >
              <motion.div
                variants={markerVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.15,
                        boxShadow:
                          '0 0 0 6px rgba(124, 58, 237, 0.18), 0 0 28px rgba(124, 58, 237, 0.8)',
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
                className='relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400 bg-violet-600 text-sm font-semibold text-white shadow-[0_0_0_4px_rgba(124,58,237,0.14),0_0_18px_rgba(124,58,237,0.65)]'
              >
                {index + 1}
              </motion.div>

              <motion.div
                variants={contentVariants}
                className='min-w-0 md:mt-7'
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          scale: 1.08,
                          rotate: index % 2 === 0 ? -3 : 3,
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 18,
                  }}
                  className='mb-3 flex size-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-400 transition-colors duration-200 group-hover:border-violet-400/60 group-hover:bg-violet-500/15 md:mx-auto'
                >
                  <Icon
                    aria-hidden='true'
                    className='size-6'
                    strokeWidth={1.8}
                  />
                </motion.div>

                <h3 className='min-h-0 text-sm font-semibold text-slate-100 md:min-h-10'>
                  {title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-slate-400'>
                  {description}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  );
}
