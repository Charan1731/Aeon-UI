'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch={true}
      className={cn(
        'relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
        isActive
          ? 'text-red-400'
          : 'text-muted-foreground hover:text-red-400 dark:hover:text-red-400',
        'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-400 dark:after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform',
        !isActive && 'hover:after:scale-x-100'
      )}
    >
      {children}
    </Link>
  );
}
