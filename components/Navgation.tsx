'use client';

import {
  ChartNoAxesGantt,
  X,
  GithubIcon,
  Menu,
  TwitterIcon,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { NavLink } from './Nav-link';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Components', href: '/components' },
  { name: 'Docs', href: '/docs' },
  { name: 'AI', href: '/Ai' }
] as const;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/charan1731/Aeon-UI',
    icon: GithubIcon,
  },
  {
    name: 'Twitter',
    href: "https://x.com/CharanR18433412",
    icon: TwitterIcon,
  },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="group flex items-center space-x-3">
              <motion.div 
                className="relative p-2 rounded-xl bg-gradient-to-br from-red-400/10 to-red-500/10 group-hover:from-red-400/20 group-hover:to-red-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChartNoAxesGantt className="w-6 h-6 text-red-400 group-hover:text-red-500 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <span className="font-bold text-xl">
                <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
                  Aeon
                </span>
                <span className="text-gray-800 dark:text-gray-200">-UI</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <NavLink href={link.href}>
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300"
                  aria-label={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <link.icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-red-400 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-red-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="sm:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2.5 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-red-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-red-500/0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Sidebar />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </motion.nav>
  );
}
