import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='mt-8 w-full border-t border-white/10 bg-overlay'>
      <div className='mx-auto flex w-full max-w-[100rem] flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <div className='flex items-center gap-3 sm:gap-4'>
          <span className='bg-gradient-primary rounded-sm p-1 text-h4 font-bold text-white'>
            GS
          </span>
          <span className='text-sm sm:text-base'>
            &copy; {new Date().getFullYear()} Guilherme Cândido dos Santos
          </span>
        </div>

        <div className='flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8'>
          <a
            href='https://github.com/guilhermecandidosantos'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-secondary hover:opacity-80'
          >
            <FaGithub size={24} />
            Github
          </a>
          <a
            href='https://linkedin.com/in/guilhermecandidosantos'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-secondary hover:opacity-80'
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href='mailto:contato@guilhermecandidosantos.com.br'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-secondary hover:opacity-80 text-sm sm:text-base'
          >
            <Mail size={24} />
            contato@guilhermecandidosantos.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
