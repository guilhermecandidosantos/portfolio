'use client';

import { motion } from 'motion/react';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionCodePreview({ children, className }: MotionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
