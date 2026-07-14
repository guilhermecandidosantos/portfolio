import { Mail } from 'lucide-react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='w-full bg-overlay border-t border-white/10 h-16 mt-8'>
      <div className='max-w-[70%] w-full mx-auto flex flex-row items-center justify-between h-full'>
        <div className='flex items-center gap-4'>
          <span className='bg-gradient-primary rounded-sm p-1 text-h4 font-bold text-white'>
            GS
          </span>
          <span>
            &copy; {new Date().getFullYear()} Guilherme Cândido dos Santos
          </span>
        </div>

        <div className='flex items-center gap-8'>
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
            className='flex items-center gap-2 text-secondary hover:opacity-80'
          >
            <Mail size={24} />
            contato@guilhermecandidosantos.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
