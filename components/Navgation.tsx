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
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();
  
  // Transform scroll value for floating effect
  const navY = useTransform(scrollY, [0, 100], [20, 12]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.95, 0.98]);

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
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <motion.nav 
        className={`relative mt-4 mx-auto max-w-7xl rounded-2xl transition-all duration-500 overflow-hidden ${
          scrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl shadow-black/10 dark:shadow-white/5' 
            : 'bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg shadow-black/5 dark:shadow-white/2'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          y: navY,
          scale: navScale,
          opacity: navOpacity,
        }}
      >
        {/* Animated gradient border */}
        <motion.div 
          className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-red-400/20 via-red-500/40 to-orange-500/20"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(248, 113, 113, 0.2), rgba(239, 68, 68, 0.4), rgba(251, 146, 60, 0.2))",
              "linear-gradient(90deg, rgba(251, 146, 60, 0.2), rgba(248, 113, 113, 0.4), rgba(239, 68, 68, 0.2))",
              "linear-gradient(90deg, rgba(248, 113, 113, 0.2), rgba(239, 68, 68, 0.4), rgba(251, 146, 60, 0.2))",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl" />
        </motion.div>
        
        {/* Inner glow effect */}
        <div className="absolute inset-1 rounded-xl bg-gradient-to-r from-red-400/5 via-transparent to-red-500/5 pointer-events-none" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/40 rounded-full"
              animate={{
                x: [0, 80, 0],
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 12}%`,
                top: '50%',
              }}
            />
          ))}
        </div>
        
        <div className="relative px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo Section with enhanced floating effects */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link href="/" className="group flex items-center space-x-3">
                <motion.div 
                  className="relative p-2 rounded-xl bg-gradient-to-br from-red-400/10 to-red-500/10 group-hover:from-red-400/20 group-hover:to-red-500/20 transition-all duration-300 overflow-hidden shadow-lg shadow-red-500/20"
                  whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Floating background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(248, 113, 113, 0.15), rgba(239, 68, 68, 0.15))",
                        "linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(220, 38, 38, 0.25))",
                        "linear-gradient(135deg, rgba(248, 113, 113, 0.15), rgba(239, 68, 68, 0.15))",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <ChartNoAxesGantt className="w-5 h-5 text-red-400 group-hover:text-red-500 transition-colors relative z-10" />
                  
                  {/* Enhanced sparkle effect */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3"
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  >
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                  </motion.div>
                </motion.div>
                
                <motion.span 
                  className="font-bold text-lg"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    Aeon
                  </motion.span>
                  <span className="text-gray-800 dark:text-gray-200">-UI</span>
                </motion.span>
              </Link>
              
              {/* Desktop Navigation with floating effects */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                  >
                    <NavLink href={link.href}>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Right Section with floating effects */}
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Social Links with enhanced floating effects */}
              <div className="hidden sm:flex items-center gap-1">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-xl bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-red-500/10"
                    aria-label={link.name}
                    whileHover={{ scale: 1.1, y: -2, rotate: [0, -3, 3, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <link.icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-red-400 transition-colors relative z-10" />
                    
                    {/* Floating background effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/15 to-red-500/0 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Enhanced ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-red-400/25 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 1.8, opacity: [0, 0.6, 0] }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Enhanced Theme Toggle with floating effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <ThemeToggle />
              </motion.div>

              {/* Enhanced Mobile Menu Button with floating effect */}
              <motion.div 
                className="sm:hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative p-2 rounded-xl bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-red-500/10"
                  whileHover={{ scale: 1.1, y: -2, rotate: isOpen ? 180 : 0 }}
                  whileTap={{ scale: 0.9 }}
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
                        <Menu className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="close"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-4 w-4 text-red-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Floating pulse effect when menu is open */}
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 bg-red-400/20 rounded-xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.button>

                {/* Enhanced Mobile Menu Overlay */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="fixed inset-0 z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Enhanced floating backdrop */}
                      <motion.div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-lg"
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(12px)" }}
                        exit={{ backdropFilter: "blur(0px)" }}
                      />
                      <Sidebar />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced floating bottom accent */}
        <motion.div 
          className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent rounded-full"
          animate={{
            background: [
              "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4), transparent)",
              "linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.4), transparent)",
              "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4), transparent)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating shadow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-400/5 via-red-500/10 to-orange-500/5 rounded-2xl blur-xl transform translate-y-2" />
      </motion.nav>
    </div>
  );
}
