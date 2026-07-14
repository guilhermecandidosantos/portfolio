'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

const menuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
  {
    label: 'Sobre',
    href: '/about',
  },
  {
    label: 'Contatos',
    href: '/contacts',
  },
];

interface IndicatorStyle {
  left: number;
  width: number;
  visible: boolean;
}

function isPathActive(pathname: string, path: string) {
  if (path === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(path);
}

export function Header() {
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);

  const textRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const [indicator, setIndicator] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    visible: false,
  });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const navElement = navRef.current;

      const activeItem = menuItems.find((item) =>
        isPathActive(pathname, item.href),
      );

      if (!navElement || !activeItem) {
        setIndicator((current) => ({
          ...current,
          visible: false,
        }));

        return;
      }

      const activeText = textRefs.current[activeItem.href];

      if (!activeText) {
        return;
      }

      const navRect = navElement.getBoundingClientRect();
      const textRect = activeText.getBoundingClientRect();

      setIndicator({
        left: textRect.left - navRect.left,
        width: textRect.width,
        visible: true,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);

    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    Object.values(textRefs.current).forEach((textElement) => {
      if (textElement) {
        resizeObserver.observe(textElement);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname]);

  return (
    <header className='bg-overlay w-full border-b border-white/10 px-4'>
      <div className='mx-auto flex h-20 w-full max-w-[70%] items-center justify-between'>
        <div className='flex items-center gap-4'>
          <span className='bg-gradient-primary rounded-sm p-2 text-h4 font-bold text-white'>
            GS
          </span>

          <span className='text-h4'>Guilherme Cândido dos Santos</span>
        </div>

        <nav ref={navRef} className='relative flex h-full items-center gap-8'>
          {menuItems.map((item) => {
            const active = isPathActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                data-active={active}
                aria-current={active ? 'page' : undefined}
                className='
                  flex h-full w-20 shrink-0
                  items-center justify-center
                  text-secondary
                  transition-colors duration-200
                  hover:text-purple-500
                  data-[active=true]:text-purple-500
                '
              >
                <span
                  ref={(element) => {
                    textRefs.current[item.href] = element;
                  }}
                  className='
                    whitespace-nowrap
                    font-normal
                    data-[active=true]:font-bold
                  '
                  data-active={active}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <span
            aria-hidden='true'
            className='
              pointer-events-none
              absolute bottom-0 left-0
              h-[2px]
              rounded-full
              bg-purple-500
              shadow-navlink
              transition-[transform,width,opacity]
              duration-300
              ease-in-out
            '
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
        </nav>

        <button className='bg-gradient-primary py-2 px-4 rounded-md font-semibold cursor-pointer hover:shadow-navlink flex items-center gap-2 transition-all duration-200 hover:scale-105'>
          Vamos conversar
          <MoveRight className='size-4' />
        </button>
      </div>
    </header>
  );
}
