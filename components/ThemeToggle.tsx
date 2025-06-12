'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <motion.button
      className="group relative w-10 h-10 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300 overflow-hidden"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-red-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Sun Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SunIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : 90,
          opacity: !isDark ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <MoonIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
      </motion.div>

      {/* Subtle border highlight */}
      <div className="absolute inset-0 rounded-xl border border-gray-200/50 dark:border-gray-700/50 group-hover:border-red-400/30 transition-colors duration-300" />
    </motion.button>
  );
}
