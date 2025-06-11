'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaStar,
  FaEye,
  FaCopy,
  FaGithub,
  FaArrowRight,
  FaShoppingCart,
  FaCalendar,
  FaTable,
  FaImage,
  FaVideo,
  FaFileAlt,
  FaLayerGroup,
  FaPalette,
  FaBoxes,
  FaMagic,
  FaCubes,
  FaGem,
  FaFire
} from 'react-icons/fa';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Spotlight } from '@/components/ui/spotlight';

const ComponentsPage = () => {
  const featuredComponents = [
    {
      name: '3D Card Effect',
      description: 'Stunning 3D hover effects for your cards',
      link: '/components/3Dcard',
      icon: <FaCubes className="w-6 h-6" />,
      category: 'Effects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Aurora Background',
      description: 'Beautiful animated aurora background effects',
      link: '/components/AuroraBackground',
      icon: <FaPalette className="w-6 h-6" />,
      category: 'Backgrounds',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Bento Grid',
      description: 'Modern grid layouts for showcasing content',
      link: '/components/BentoGrid',
      icon: <FaBoxes className="w-6 h-6" />,
      category: 'Layout',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Google Gemini Effect',
      description: 'Advanced AI-inspired visual effects',
      link: '/components/GoogleGeminiEffect',
      icon: <FaGem className="w-6 h-6" />,
      category: 'Effects',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Hero Video Dialog',
      description: 'Engaging video dialogs for hero sections',
      link: '/components/VideoDialog',
      icon: <FaVideo className="w-6 h-6" />,
      category: 'Media',
      color: 'from-red-500 to-pink-500'
    },
          {
        name: 'Text Reveal Card',
        description: 'Interactive text reveal animations',
        link: '/components/TextRevealCard',
        icon: <FaFire className="w-6 h-6" />,
        category: 'Text',
        color: 'from-indigo-500 to-purple-500'
      }
  ];

  const categories = [
    {
      title: 'Form Elements',
      icon: <FaCode className="w-5 h-5" />,
      components: ['Input', 'Textarea', 'Checkbox', 'Calendar'],
      count: 4
    },
    {
      title: 'Navigation',
      icon: <FaArrowRight className="w-5 h-5" />,
      components: ['Navigation Menu', 'Breadcrumb', 'Pagination', 'Dock'],
      count: 4
    },
    {
      title: 'Data Display',
      icon: <FaTable className="w-5 h-5" />,
      components: ['Table', 'Card', 'Badge', 'Avatar'],
      count: 4
    },
    {
      title: 'Interactive',
      icon: <FaMagic className="w-5 h-5" />,
      components: ['Dialog', 'Drawer', 'Dropdown Menu', 'Hover Card'],
      count: 4
    }
  ];

  const stats = [
    { label: 'Total Components', value: '35+', icon: <FaBoxes className="w-5 h-5" /> },
    { label: 'Categories', value: '8', icon: <FaLayerGroup className="w-5 h-5" /> },
    { label: 'GitHub Stars', value: '2.5k+', icon: <FaStar className="w-5 h-5" /> },
    { label: 'Weekly Downloads', value: '10k+', icon: <FaRocket className="w-5 h-5" /> }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight className="hidden sm:block top-0 left-1/4" fill="red" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/10 text-red-400">
            <FaFire className="w-4 h-4" />
            <span className="text-sm font-medium">Premium UI Components</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
              Component
            </span>{' '}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 text-transparent bg-clip-text">Library</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our extensive collection of beautifully crafted, accessible, and customizable 
            UI components. Built with modern technologies and designed for the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => window.open('https://github.com/Charan1731/aeon-ui', '_blank')}
            >
              <FaGithub className="w-5 h-5 text-red-400" />
              <span className="text-base font-medium">View on GitHub</span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaEye className="w-5 h-5 text-red-400" />
              <span className="text-base font-medium">Browse Components</span>
            </HoverBorderGradient>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-2 text-red-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Featured Components */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Featured <span className="text-red-400">Components</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our most popular and innovative components designed to elevate your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.location.href = component.link}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${component.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                        {component.icon}
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
                        {component.category}
                      </span>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {component.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {component.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categories Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          id="components"
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Component <span className="text-red-400">Categories</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Organized collections of components for every use case in your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {category.count} components
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.components.map((comp, compIndex) => (
                    <motion.span
                      key={comp}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * compIndex }}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                      {comp}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Ready to <span className="text-red-400">Get Started?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Install Aeon-UI today and start building beautiful applications with our comprehensive component library.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-4"
              as="button"
              onClick={() => window.location.href = '/docs'}
            >
              <FaFileAlt className="w-5 h-5 text-red-400" />
              <span className="text-lg font-medium">View Documentation</span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-4"
              as="button"
              onClick={() => window.open('https://github.com/Charan1731/aeon-ui', '_blank')}
            >
              <FaCopy className="w-5 h-5 text-red-400" />
              <span className="text-lg font-medium">Copy Installation</span>
            </HoverBorderGradient>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComponentsPage;
