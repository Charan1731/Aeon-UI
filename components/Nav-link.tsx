'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} prefetch={true}>
      <motion.div
        className={cn(
          'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group',
          'hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10',
          isActive
            ? 'text-red-400 bg-gradient-to-r from-red-400/10 to-red-500/10 shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        
        {/* Active indicator */}
        <motion.div
          className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-red-400 to-red-500 rounded-full"
          initial={false}
          animate={{
            scaleX: isActive ? 1 : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Hover indicator */}
        <motion.div
          className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-red-400/50 to-red-500/50 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: isActive ? 0 : 1, opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/5 to-red-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Link>
  );
}
