'use client';

import { motion } from 'motion/react';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionBody({ children, className }: MotionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
