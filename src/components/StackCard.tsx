import Image from 'next/image';

interface StackCardProps {
  name: string;
  description: string;
  category: string;
  imageSrc: string;
}

export function StackCard({
  name,
  description,
  category,
  imageSrc,
}: StackCardProps) {
  return (
    <div className='flex flex-col bg-white/10 p-4 rounded-md'>
      <header className='flex flex-row gap-2 items-center'>
        <Image src={imageSrc} alt={name} width={42} height={42} />
        <div className='flex flex-col -space-y-2'>
          <h1 className='text-md font-bold'>{name}</h1>
          <span className='text-muted text-sm'>{category}</span>
        </div>
      </header>
      <main className='mt-4'>
        <p className='line-clamp-3 leading-6 min-h-18 text-secondary'>
          {description}
        </p>
      </main>
    </div>
  );
}
