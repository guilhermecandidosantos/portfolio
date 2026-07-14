'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { imageVariants, itemVariants } from './Motions';

interface StackCardProps {
  name: string;
  description: string;
  category: string;
  imageSrc: string;
}

const MotionImage = motion.create(Image);

export function StackCard({
  name,
  description,
  category,
  imageSrc,
}: StackCardProps) {
  return (
    <motion.div
      className='flex flex-col bg-white/10 p-4 rounded-md'
      variants={itemVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.header
        className='flex flex-row gap-2 items-center'
        variants={itemVariants}
      >
        <MotionImage
          src={imageSrc}
          alt={name}
          width={42}
          height={42}
          variants={imageVariants}
        />
        <motion.div
          className='flex flex-col -space-y-2'
          variants={itemVariants}
        >
          <motion.h1 className='text-md font-bold' variants={itemVariants}>
            {name}
          </motion.h1>
          <motion.span className='text-muted text-sm' variants={itemVariants}>
            {category}
          </motion.span>
        </motion.div>
      </motion.header>
      <motion.main className='mt-4' variants={itemVariants}>
        <motion.p
          className='line-clamp-3 leading-6 min-h-18 text-secondary'
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </motion.main>
    </motion.div>
  );
}
