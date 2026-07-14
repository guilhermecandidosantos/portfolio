import type { ReactNode } from 'react';

interface CodeLine {
  number: number;
  content?: ReactNode;
}

const codeLines: CodeLine[] = [
  {
    number: 1,
    content: (
      <>
        <span className='text-cyan-300'>import</span>{' '}
        <span className='text-slate-200'>{'{ FastifyInstance }'}</span>{' '}
        <span className='text-cyan-300'>from</span>{' '}
        <span className='text-fuchsia-300'>&apos;fastify&apos;</span>
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        <span className='text-cyan-300'>import</span>{' '}
        <span className='text-slate-200'>{'{ z }'}</span>{' '}
        <span className='text-cyan-300'>from</span>{' '}
        <span className='text-fuchsia-300'>&apos;zod&apos;</span>
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        <span className='text-cyan-300'>import</span>{' '}
        <span className='text-slate-200'>{'{ PrismaClient }'}</span>{' '}
        <span className='text-cyan-300'>from</span>{' '}
        <span className='text-fuchsia-300'>&apos;@prisma/client&apos;</span>
      </>
    ),
  },
  {
    number: 4,
  },
  {
    number: 5,
    content: (
      <>
        <span className='text-cyan-300'>const</span>{' '}
        <span className='text-slate-200'>prisma</span>{' '}
        <span className='text-slate-400'>=</span>{' '}
        <span className='text-cyan-300'>new</span>{' '}
        <span className='text-emerald-300'>PrismaClient</span>
        <span className='text-slate-300'>()</span>
      </>
    ),
  },
  {
    number: 6,
  },
  {
    number: 7,
    content: (
      <>
        <span className='text-cyan-300'>export async function</span>{' '}
        <span className='text-amber-300'>createProject</span>
        <span className='text-slate-300'>(</span>
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        <span className='text-slate-200'>app</span>
        <span className='text-slate-400'>:</span>{' '}
        <span className='text-slate-200'>FastifyInstance</span>
      </>
    ),
  },
  {
    number: 9,
    content: <span className='text-slate-300'>{') {'}</span>,
  },
  {
    number: 10,
    content: (
      <>
        <span className='text-slate-200'>app</span>
        <span className='text-slate-300'>.</span>
        <span className='text-cyan-300'>post</span>
        <span className='text-slate-300'>(</span>
        <span className='text-fuchsia-300'>&apos;/api/projects&apos;</span>
        <span className='text-slate-300'>, </span>
        <span className='text-cyan-300'>async</span>{' '}
        <span className='text-slate-300'>(</span>
        <span className='text-slate-200'>req</span>
        <span className='text-slate-300'>, </span>
        <span className='text-slate-200'>reply</span>
        <span className='text-slate-300'>{') => {'}</span>
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        <span className='text-cyan-300'>const</span>{' '}
        <span className='text-slate-200'>body</span>{' '}
        <span className='text-slate-400'>=</span>{' '}
        <span className='text-slate-200'>createProjectSchema</span>
        <span className='text-slate-300'>.</span>
        <span className='text-cyan-300'>parse</span>
        <span className='text-slate-300'>(req.body)</span>
      </>
    ),
  },
  {
    number: 12,
  },
  {
    number: 13,
    content: (
      <>
        <span className='text-cyan-300'>const</span>{' '}
        <span className='text-slate-200'>project</span>{' '}
        <span className='text-slate-400'>=</span>{' '}
        <span className='text-cyan-300'>await</span>{' '}
        <span className='text-slate-200'>prisma.project</span>
        <span className='text-slate-300'>.</span>
        <span className='text-cyan-300'>create</span>
        <span className='text-slate-300'>{'({'}</span>
      </>
    ),
  },
  {
    number: 14,
    content: (
      <>
        <span className='text-slate-200'>data</span>
        <span className='text-slate-400'>:</span>{' '}
        <span className='text-slate-300'>
          {'{ ...body, ownerId: req.user.id }'}
        </span>
      </>
    ),
  },
  {
    number: 15,
    content: <span className='text-slate-300'>{'})'}</span>,
  },
  {
    number: 16,
  },
  {
    number: 17,
    content: (
      <>
        <span className='text-cyan-300'>return</span>{' '}
        <span className='text-slate-200'>reply</span>
        <span className='text-slate-300'>.</span>
        <span className='text-cyan-300'>status</span>
        <span className='text-slate-300'>(</span>
        <span className='text-amber-300'>201</span>
        <span className='text-slate-300'>).send(project)</span>
      </>
    ),
  },
  {
    number: 18,
    content: <span className='text-slate-300'>{'}'}</span>,
  },
];

export function CodePreview() {
  return (
    <div
      className='
        relative w-full max-w-190
        overflow-hidden rounded-xl
        border border-violet-500/50
        bg-[#060a12]
        shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_0_36px_rgba(124,58,237,0.32)]
        animate-up-down
      '
    >
      <div
        aria-hidden='true'
        className='
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.09),transparent_40%)]
        '
      />

      <header
        className='
          relative flex h-10 items-center justify-between
          border-b border-white/5
          bg-[#080b13]
          px-4
        '
      >
        <div className='flex items-center gap-2' aria-hidden='true'>
          <span className='size-3 rounded-full bg-red-500' />
          <span className='size-3 rounded-full bg-amber-400' />
          <span className='size-3 rounded-full bg-green-500' />
        </div>

        <span className='font-mono text-xs text-slate-400'>projects.ts</span>
      </header>

      <div className='relative overflow-x-auto px-4 py-3 sm:px-5'>
        <ol
          aria-label='Exemplo de código TypeScript'
          className='
            min-w-140
            font-mono text-[13px]
            leading-[1.55rem]
            sm:text-sm
          '
        >
          {codeLines.map((line) => (
            <li
              key={line.number}
              className='
                grid grid-cols-[2rem_1fr]
                transition-colors
                hover:bg-white/2.5
              '
            >
              <span
                aria-hidden='true'
                className='
                  select-none pr-3 text-right
                  text-slate-600
                '
              >
                {line.number}
              </span>

              <code className='whitespace-pre'>
                {line.number >= 8 && line.number <= 18 ? '  ' : ''}
                {line.number >= 10 && line.number <= 17 ? '  ' : ''}
                {line.number === 11 || line.number === 13 || line.number === 17
                  ? '  '
                  : ''}
                {line.number === 14 || line.number === 15 ? '  ' : ''}
                {line.content}
              </code>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
