'use client';

import { Blocks, CodeXml, type LucideIcon, MonitorCog } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface FocusItem {
  description: string;
  Icon: LucideIcon;
}

const focusItems: FocusItem[] = [
  {
    description:
      'Construindo aplicações fullstack com Next.js, Node.js e TypeScript',
    Icon: CodeXml,
  },
  {
    description: 'Explorando Java e o ecossistema Spring para back-end robusto',
    Icon: Blocks,
  },
  {
    description:
      'Melhorando processos e experiência dos usuários em sistemas corporativos',
    Icon: MonitorCog,
  },
];

const studyingTechnologies = [
  'Java',
  'Spring Boot',
  'Microsservices',
  'Docker',
  'CI/CD',
  'Cloud',
];

const easing = [0.22, 1, 0.36, 1] as const;

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      delay: 0.15,
      duration: 0.55,
      ease: easing,
    },
  },
};

const focusTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.35,
      duration: 0.4,
      ease: easing,
    },
  },
};

const focusItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
    filter: 'blur(4px)',
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',

    transition: {
      delay: 0.45 + index * 0.16,
      duration: 0.45,
      ease: easing,
    },
  }),
};

const studyingTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.95,
      duration: 0.4,
      ease: easing,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },

  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      delay: 1.05 + index * 0.08,
      type: 'spring',
      stiffness: 230,
      damping: 17,
      mass: 0.65,
    },
  }),
};

const projectTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 1.55,
      duration: 0.4,
      ease: easing,
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 28,
    filter: 'blur(5px)',
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',

    transition: {
      delay: 1.65,
      duration: 0.55,
      ease: easing,
    },
  },
};

export function Currently() {
  const shouldReduceMotion = useReducedMotion();

  const initialAnimation = shouldReduceMotion ? undefined : 'hidden';
  const visibleAnimation = shouldReduceMotion ? undefined : 'visible';

  function handleLastProject() {
    window.open(
      'https://github.com/guilhermecandidosantos/next-saas-rbac',
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <motion.section
      aria-labelledby='currently-title'
      className='flex w-full flex-col items-center'
      initial={initialAnimation}
      whileInView={visibleAnimation}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <motion.span
        id='currently-title'
        variants={titleVariants}
        className='text-sm font-medium uppercase tracking-wide text-violet-400'
      >
        Atualmente
      </motion.span>

      <motion.div
        variants={panelVariants}
        className='mt-2 grid w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50 md:grid-cols-[1fr_1.25fr]'
      >
        <div className='p-5 md:p-6'>
          <motion.h2
            variants={focusTitleVariants}
            className='text-sm font-semibold text-slate-100'
          >
            Foco principal
          </motion.h2>

          <ul className='mt-4 space-y-4'>
            {focusItems.map(({ description, Icon }, index) => (
              <motion.li
                key={description}
                custom={index}
                variants={focusItemVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 5,
                      }
                }
                transition={{
                  duration: 0.2,
                }}
                className='group flex items-start gap-3'
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.12,
                          rotate: index % 2 === 0 ? -4 : 4,
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 18,
                  }}
                  className='flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/15 text-violet-400 transition-colors duration-200 group-hover:border-violet-400/50 group-hover:bg-violet-500/25'
                >
                  <Icon
                    aria-hidden='true'
                    className='size-4'
                    strokeWidth={1.8}
                  />
                </motion.div>

                <p className='pt-1 text-sm leading-5 text-slate-400'>
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className='border-t border-slate-800 p-5 md:border-l md:border-t-0 md:p-6'>
          <div>
            <motion.h2
              variants={studyingTitleVariants}
              className='text-sm font-semibold text-slate-100'
            >
              Estudando
            </motion.h2>

            <ul className='mt-3 flex flex-wrap gap-2'>
              {studyingTechnologies.map((technology, index) => (
                <motion.li
                  key={technology}
                  custom={index}
                  variants={technologyVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.05,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.96,
                        }
                  }
                >
                  <span className='inline-flex min-h-7 items-center rounded-md border border-slate-700 bg-slate-900/60 px-3 text-xs font-medium text-violet-400 transition-colors duration-200 hover:border-violet-500/50 hover:bg-violet-500/10'>
                    {technology}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className='mt-6'>
            <motion.h2
              variants={projectTitleVariants}
              className='text-sm font-semibold text-slate-100'
            >
              Projeto atual
            </motion.h2>

            <motion.article
              variants={projectVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      borderColor: 'rgba(139, 92, 246, 0.35)',
                      backgroundColor: 'rgba(139, 92, 246, 0.06)',
                    }
              }
              transition={{
                duration: 0.2,
                ease: easing,
              }}
              className='group mt-3 flex items-center gap-4 rounded-lg border border-transparent p-2 cursor-pointer'
              onClick={handleLastProject}
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.08,
                        rotate: -3,
                        boxShadow: '0 0 22px rgba(124, 58, 237, 0.25)',
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
                className='flex size-14 shrink-0 items-center justify-center rounded-md border border-violet-500/20 bg-violet-500/15 text-violet-400'
              >
                <MonitorCog
                  aria-hidden='true'
                  className='size-7'
                  strokeWidth={1.7}
                />
              </motion.div>

              <div className='min-w-0 '>
                <h3 className='font-medium text-violet-400'>Next SaaS RBAC</h3>

                <p className='mt-1 text-sm leading-5 text-slate-400'>
                  Plataforma SaaS com organizações, projetos, permissões,
                  invites e autenticação segura.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
