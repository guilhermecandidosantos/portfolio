import * as motion from 'motion/react-client';

import { Currently } from '@/components/Currently';
import { ExperienceCards } from '@/components/ExperienceCards';
import { HeroAbout } from '@/components/HeroAbout';
import { MeApartCards } from '@/components/MeApartCards';
import { pulseVariants } from '@/components/Motions';
import { Trajectory } from '@/components/Trajectory';

export default function About() {
  return (
    <div>
      <HeroAbout />

      <div className='mt-8 w-full flex flex-col items-center gap-4'>
        <motion.span
          className='text-body uppercase text-purple-500'
          variants={pulseVariants}
          initial='hidden'
          whileInView='visible'
        >
          Experiência com ERP Senior
        </motion.span>

        <ExperienceCards />
      </div>

      <div className='mt-8 w-full flex flex-col items-center gap-4'>
        <motion.span
          className='text-body uppercase text-purple-500'
          variants={pulseVariants}
          initial='hidden'
          whileInView='visible'
        >
          O que me diferencia
        </motion.span>

        <MeApartCards />
      </div>

      <section className='mx-auto w-full px-6 py-20 lg:px-8'>
        <Trajectory />
      </section>

      <div className='mx-auto w-full px-6 py-20 lg:px-8'>
        <Currently />
      </div>
    </div>
  );
}
