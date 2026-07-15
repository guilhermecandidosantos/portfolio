'use client';

import {
  ArrowRight,
  Calculator,
  Check,
  Clock3,
  Ellipsis,
  Handshake,
  Loader2,
  LockKeyhole,
  Mail,
  MessagesSquare,
  Rocket,
  Send,
} from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import Link from 'next/link';
import { requestFormReset } from 'react-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { sendContactMessageAction } from '@/app/actions/send-contact-message';
import { useFormState } from '@/app/hooks/use-form-state';

const easing = [0.22, 1, 0.36, 1] as const;

const subjects = [
  {
    label: 'Novo projeto',
    value: 'new-project',
    Icon: Send,
  },
  {
    label: 'Orçamento',
    value: 'budget',
    Icon: Calculator,
  },
  {
    label: 'Consultoria',
    value: 'consulting',
    Icon: MessagesSquare,
  },
  {
    label: 'Parceria',
    value: 'partnership',
    Icon: Handshake,
  },
  {
    label: 'Outro',
    value: 'other',
    Icon: Ellipsis,
  },
];

const benefits = [
  'Resposta rápida',
  'Soluções personalizadas',
  'Confidencialidade',
  'Foco em resultados',
];

/**
 * Controla a ordem geral:
 *
 * cabeçalho → conteúdo principal → bloco inferior
 */
const pageVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
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
      duration: 0.6,
      ease: easing,
    },
  },
};

const contentVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const formCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    scale: 0.98,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      duration: 0.65,
      ease: easing,
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

const sidebarVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const sidebarCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    scale: 0.98,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      duration: 0.6,
      ease: easing,
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const sidebarItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

const calloutVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export function ContactPageContent() {
  const shouldReduceMotion = useReducedMotion();

  const [formState, handleSubmit, isPending] = useFormState(
    sendContactMessageAction,
  );

  const { success, message, errors } = formState;

  if (success) {
    requestFormReset(document.querySelector('form') as HTMLFormElement);
  }

  const shouldAnimate = isPending || shouldReduceMotion;

  return (
    <motion.section
      aria-labelledby='contact-title'
      className='mx-auto w-full px-5 py-12 sm:px-8 lg:px-10 lg:py-16'
      variants={pageVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      <motion.header variants={headerVariants} className='mb-8 max-w-3xl'>
        <span className='inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-400'>
          Contato
        </span>

        <h1
          id='contact-title'
          className='mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl'
        >
          Vamos construir algo{' '}
          <span className='bg-linear-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent'>
            incrível
          </span>{' '}
          juntos
        </h1>

        <p className='mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg'>
          Tem um projeto em mente? Me conta o que você precisa e eu te respondo
          em até 24 horas.
        </p>
      </motion.header>

      <motion.div
        variants={contentVariants}
        className='grid items-start gap-8 xl:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.95fr)] xl:gap-12'
      >
        <div className='min-w-0'>
          {success && (
            <div className='mb-4 rounded-lg bg-green-500/20 p-4 text-sm text-green-500'>
              Mensagem enviada com sucesso! Obrigado por entrar em contato. Eu
              irei responder o mais rápido possível.
            </div>
          )}
          {!success && message && (
            <div className='mb-4 rounded-lg bg-rose-500/20 p-4 text-sm text-rose-500'>
              {message}
              {errors && (
                <ul className='mt-2 list-disc list-inside text-sm text-rose-500'>
                  {errors.name &&
                    errors.name.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  {errors.email &&
                    errors.email.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  {errors.subject &&
                    errors.subject.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  {errors.message &&
                    errors.message.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                </ul>
              )}
            </div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            variants={formCardVariants}
            className='rounded-xl border border-slate-800 bg-slate-950/55 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-7'
          >
            <motion.div
              variants={fieldVariants}
              className='grid gap-5 md:grid-cols-2'
            >
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-semibold text-slate-100'
                >
                  Nome completo <span className='text-rose-500'>*</span>
                </label>

                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  placeholder='Seu nome'
                  className='h-12 w-full rounded-lg border border-slate-800 bg-[#080c16] px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 not-disabled:hover:border-slate-700 disabled:cursor-not-allowed focus:border-violet-500 focus:ring-3 focus:ring-violet-500/15'
                  disabled={isPending}
                  aria-busy={isPending}
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-semibold text-slate-100'
                >
                  E-mail <span className='text-rose-500'>*</span>
                </label>

                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='seu@email.com'
                  className='h-12 w-full rounded-lg border border-slate-800 bg-[#080c16] px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 not-disabled:hover:border-slate-700 disabled:cursor-not-allowed focus:border-violet-500 focus:ring-3 focus:ring-violet-500/15'
                  disabled={isPending}
                  aria-busy={isPending}
                />
              </div>
            </motion.div>

            <motion.fieldset
              variants={fieldVariants}
              className='mt-5'
              disabled={isPending}
              aria-busy={isPending}
            >
              <legend className='mb-3 text-sm font-semibold text-slate-100'>
                Assunto <span className='text-rose-500'>*</span>
              </legend>

              <div className='flex flex-wrap gap-3'>
                {subjects.map(({ label, value, Icon }, index) => (
                  <motion.label
                    key={value}
                    whileHover={
                      shouldAnimate
                        ? {
                            y: -2,
                            scale: 1.02,
                          }
                        : undefined
                    }
                    whileTap={
                      shouldAnimate
                        ? {
                            scale: 0.97,
                          }
                        : undefined
                    }
                    className={
                      isPending ? 'cursor-not-allowed' : 'cursor-pointer'
                    }
                  >
                    <input
                      type='radio'
                      name='subject'
                      value={value}
                      defaultChecked={index === 0}
                      className='peer sr-only'
                    />

                    <span className='inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-800 bg-[#080c16] px-4 text-sm font-medium text-slate-400 transition-all peer-not-disabled:hover:border-slate-700 peer-not-disabled:hover:text-slate-200 peer-checked:border-violet-500 peer-checked:bg-linear-to-r peer-checked:from-violet-600 peer-checked:to-indigo-600 peer-checked:text-white peer-focus-visible:ring-3 peer-focus-visible:ring-violet-500/25 peer-disabled:cursor-not-allowed peer-disabled:opacity-50'>
                      <Icon aria-hidden='true' className='size-4' />

                      {label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.fieldset>

            <motion.div variants={fieldVariants} className='mt-5'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-semibold text-slate-100'
              >
                Mensagem <span className='text-rose-500'>*</span>
              </label>

              <textarea
                id='message'
                name='message'
                required
                rows={6}
                placeholder='Descreva seu projeto ou dúvida...'
                className='min-h-40 w-full resize-y rounded-lg border border-slate-800 bg-[#080c16] px-4 py-3 text-sm leading-6 text-slate-100 outline-none transition-colors placeholder:text-slate-600 not-disabled:hover:border-slate-700 disabled:cursor-not-allowed focus:border-violet-500 focus:ring-3 focus:ring-violet-500/15'
                disabled={isPending}
                aria-busy={isPending}
              />
            </motion.div>

            <motion.button
              variants={fieldVariants}
              type='submit'
              whileHover={
                shouldAnimate
                  ? undefined
                  : {
                      scale: 1.015,
                      boxShadow: '0 0 32px rgba(124, 58, 237, 0.35)',
                    }
              }
              whileTap={
                shouldAnimate
                  ? undefined
                  : {
                      scale: 0.985,
                    }
              }
              className='mt-5 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-lg bg-linear-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 text-base font-semibold text-white shadow-lg shadow-violet-950/20 cursor-pointer disabled:cursor-not-allowed'
              disabled={isPending}
              aria-busy={isPending}
            >
              {isPending ? (
                <Loader2 size='24' className='animate-spin' />
              ) : (
                <>
                  <Send aria-hidden='true' className='size-5' />
                  Enviar mensagem
                </>
              )}
            </motion.button>

            <motion.p
              variants={fieldVariants}
              className='mt-4 flex items-center gap-2 text-xs text-slate-500'
            >
              <LockKeyhole aria-hidden='true' className='size-4' />
              Seus dados estão seguros. Não compartilhamos suas informações.
            </motion.p>
          </motion.form>

          <motion.aside
            variants={calloutVariants}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -4,
                    borderColor: 'rgba(139, 92, 246, 0.42)',
                  }
            }
            className='mt-5 grid gap-6 rounded-xl border border-slate-800 bg-slate-950/55 p-5 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center'
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.08,
                      rotate: -4,
                      boxShadow: '0 0 32px rgba(124, 58, 237, 0.32)',
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 18,
              }}
              className='flex size-16 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/15 text-violet-400'
            >
              <Rocket aria-hidden='true' className='size-8' strokeWidth={1.8} />
            </motion.div>

            <div>
              <h2 className='text-lg font-semibold text-slate-100'>
                Vamos transformar ideias em soluções reais
              </h2>

              <p className='mt-2 max-w-xl text-sm leading-6 text-slate-400'>
                Seja um sistema web, uma integração, relatórios no ERP ou uma
                nova funcionalidade, vamos conversar e encontrar a melhor
                solução para o seu desafio.
              </p>
            </div>

            <ul className='grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:min-w-80'>
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className='flex items-center gap-2 text-xs font-medium text-slate-200'
                >
                  <span className='flex size-5 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-white'>
                    <Check
                      aria-hidden='true'
                      className='size-3'
                      strokeWidth={3}
                    />
                  </span>

                  {benefit}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        <motion.aside variants={sidebarVariants} className='space-y-7'>
          <motion.section
            variants={sidebarCardVariants}
            aria-labelledby='other-contact-title'
            className='rounded-xl border border-slate-800 bg-slate-950/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.20)] sm:p-8'
          >
            <h2
              id='other-contact-title'
              className='text-xl font-semibold text-slate-100'
            >
              Outras formas de contato
            </h2>

            <div className='mt-6 divide-y divide-slate-800'>
              <motion.a
                variants={sidebarItemVariants}
                href='mailto:contato@guilhermecandidosantos.com.br'
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 5,
                      }
                }
                className='group flex items-center gap-4 py-5 first:pt-2'
              >
                <div className='flex size-12 shrink-0 items-center justify-center rounded-lg border border-violet-500/25 bg-violet-500/15 text-violet-400 transition-colors group-hover:border-violet-400/50 group-hover:bg-violet-500/25'>
                  <Mail aria-hidden='true' className='size-6' />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-medium text-slate-200'>E-mail</h3>

                  <p className='mt-1 truncate text-sm text-violet-400'>
                    contato@guilhermecandidosantos.com.br
                  </p>
                </div>
              </motion.a>

              <motion.div
                variants={sidebarItemVariants}
                className='flex items-center gap-4 py-5'
              >
                <div className='flex size-12 shrink-0 items-center justify-center rounded-lg border border-violet-500/25 bg-violet-500/15 text-violet-400'>
                  <Clock3 aria-hidden='true' className='size-6' />
                </div>

                <div>
                  <h3 className='font-medium text-slate-300'>
                    Tempo de resposta
                  </h3>

                  <p className='mt-1 text-sm font-medium text-slate-100'>
                    Em até 24 horas
                  </p>
                </div>
              </motion.div>

              {/* <motion.a
                variants={sidebarItemVariants}
                href='https://wa.me/55SEUNUMERO'
                target='_blank'
                rel='noreferrer'
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 5,
                      }
                }
                className='group flex items-center gap-4 py-5 last:pb-2'
              >
                <div className='flex size-12 shrink-0 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/15 text-emerald-400 transition-colors group-hover:border-emerald-400/50 group-hover:bg-emerald-500/25'>
                  <MessageCircle aria-hidden='true' className='size-6' />
                </div>

                <div>
                  <h3 className='font-medium text-slate-300'>WhatsApp</h3>

                  <p className='mt-1 text-sm font-medium text-emerald-400'>
                    (19) 99999-9999
                  </p>
                </div>
              </motion.a> */}
            </div>
          </motion.section>

          <motion.section
            variants={sidebarCardVariants}
            aria-labelledby='social-title'
            className='rounded-xl border border-slate-800 bg-slate-950/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.20)] sm:p-8'
          >
            <h2
              id='social-title'
              className='text-xl font-semibold text-slate-100'
            >
              Redes sociais
            </h2>

            <div className='mt-6 space-y-3'>
              <SocialLink
                href='https://github.com/guilhermecandidosantos'
                title='GitHub'
                description='github.com/guilhermecandidosantos'
                Icon={FaGithub}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />

              <SocialLink
                href='https://linkedin.com/in/guilhermecandidosantos'
                title='LinkedIn'
                description='linkedin.com/in/guilhermecandidosantos'
                Icon={FaLinkedin}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            </div>
          </motion.section>
        </motion.aside>
      </motion.div>
    </motion.section>
  );
}

interface SocialLinkProps {
  href: string;
  title: string;
  description: string;
  Icon: typeof FaGithub;
  shouldReduceMotion: boolean;
  external?: boolean;
}

function SocialLink({
  href,
  title,
  description,
  Icon,
  shouldReduceMotion,
  external = true,
}: SocialLinkProps) {
  return (
    <motion.div variants={sidebarItemVariants}>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className='group flex items-center gap-4 rounded-lg border border-slate-800 bg-[#080c16] p-3 transition-all hover:-translate-y-0.5 hover:border-violet-500/35 hover:bg-violet-500/5'
      >
        <motion.div
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.08,
                  rotate: -3,
                }
          }
          className='flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 group-hover:text-violet-400'
        >
          <Icon aria-hidden='true' className='size-6' />
        </motion.div>

        <div className='min-w-0 flex-1'>
          <h3 className='font-medium text-slate-200'>{title}</h3>

          <p className='mt-1 truncate text-sm text-violet-400'>{description}</p>
        </div>

        <ArrowRight
          aria-hidden='true'
          className='size-5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-violet-400'
        />
      </Link>
    </motion.div>
  );
}
