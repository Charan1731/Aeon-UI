'use client';

import {
  ChartNoAxesGantt,
  X,
  GithubIcon,
  Menu,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { NavLink } from './Nav-link';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Components', href: '/components' },
  { name: 'Docs', href: '/docs' },
  { name: 'Showcase', href: '/showcase' },
  {name : 'Ai', href : '/Ai'}
] as const;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pankajkumardev/ui-unify',
    icon: GithubIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/pankajkumar_dev',
    icon: TwitterIcon,
  },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <ChartNoAxesGantt />
            <span className="font-bold text-xl text-red-400">
              UÍ
              <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          <ThemeToggle />
          <div className="sm:hidden flex flex-col  ">
            <button
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                } else {
                  setIsOpen(true);
                }
              }}
              className="sm:hidden"
            >
              {!isOpen ? (
                <Menu className="  h-6 w-6" />
              ) : (
                <X className="h-6 w-6  " />
              )}
            </button>
            <div
              className={`fixed inset-0 z-40 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {isOpen && <Sidebar />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
