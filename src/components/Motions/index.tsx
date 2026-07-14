'use client';

import { motion, stagger, type Variants } from 'motion/react';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.12, {
        startDelay: 0.2,
      }),
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    scale: 0.96,
    filter: 'blur(8px)',
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.8,
    },
  },
};

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.85,
    rotate: 4,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,

    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 16,
      mass: 0.9,
    },
  },
};

export const pulseVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: 'blur(8px)',
  },

  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.8,
    },
  },
};

interface MotionRightToLeftContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionRightToLeftContainer({
  children,
  className,
}: MotionRightToLeftContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
