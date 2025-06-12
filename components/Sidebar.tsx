'use client';

import { components } from '@/app/(components)/components';
import { usePathname } from 'next/navigation';
import { NavLink } from './Nav-link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Palette,
  Zap,
  X
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Components', href: '/components', icon: Palette },
    { name: 'Docs', href: '/docs', icon: BookOpen },
    { name: 'AI', href: '/Ai', icon: Zap },
  ] as const;

  const containerVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="w-[85%] sm:w-[350px] fixed left-0 top-0 h-screen bg-white/95 dark:bg-black/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 overflow-auto z-50 shadow-2xl shadow-black/10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header with gradient */}
      <motion.div 
        className="relative p-6 bg-gradient-to-r from-red-400/10 via-red-500/5 to-orange-500/10 border-b border-gray-200/50 dark:border-gray-700/50"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="p-2 rounded-xl bg-gradient-to-br from-red-400/20 to-red-500/20"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6 text-red-400" />
          </motion.div>
          <div>
            <h2 className="font-bold text-xl">
              <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
                Aeon
              </span>
              <span className="text-gray-800 dark:text-gray-200">-UI</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Navigation Menu</p>
          </div>
        </div>
        
        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-red-400/50 to-red-500/50"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Main Navigation */}
      <motion.nav className="p-6 space-y-3" variants={itemVariants}>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Main Navigation
        </h3>
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <motion.div
              key={link.href}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={link.href}
                className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-400/10 to-red-500/10 border border-red-400/20 text-red-400'
                    : 'hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-gray-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-red-400'
                }`}
              >
                <motion.div 
                  className={`p-2 rounded-lg ${
                    isActive 
                      ? 'bg-red-400/20 text-red-500' 
                      : 'bg-gray-100/50 dark:bg-gray-800/50 group-hover:bg-red-400/10 text-gray-600 dark:text-gray-400 group-hover:text-red-400'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
                <span className="font-medium">{link.name}</span>
                <motion.div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: isActive ? 0 : -5 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </a>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Components Section */}
      <motion.div className="px-6 pb-6" variants={itemVariants}>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Components Library
        </h3>
        <div className="space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto">
          {components.map((section, index) => (
            <motion.div 
              key={index} 
              className="space-y-2"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <motion.h4 
                className="font-semibold text-base text-gray-800 dark:text-gray-200 flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                {section.Installation || section.Components}
              </motion.h4>
              <div className="space-y-1 pl-4">
                {section.children.map((child, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={child.Link}
                      className={`group flex items-center gap-2 p-2 rounded-lg text-sm transition-all duration-200 ${
                        pathname === child.Link
                          ? 'text-red-400 bg-red-400/10 border-l-2 border-red-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-red-400 hover:bg-red-400/5 hover:border-l-2 hover:border-red-400/50'
                      }`}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-current opacity-50 group-hover:opacity-100"
                        animate={{ scale: pathname === child.Link ? 1.2 : 1 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {child.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-4 w-20 h-20 bg-gradient-to-br from-red-400/10 to-red-500/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-4 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-xl pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
