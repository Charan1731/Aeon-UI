'use client';

import { 
  Info, 
  Package, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  BookOpen,
  Zap,
  CheckCircle,
  Star,
  GitBranch,
  Download,
  Code2,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Spotlight } from '@/components/ui/spotlight';

export default function Docs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const featureCards = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Multiple UI Libraries",
      description: "Access components from Aceternity UI, Magic UI, and Shadcn/ui in one place"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Pre-built components that speed up your development process"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Copy-paste components or install with a single command"
    }
  ];

  const quickLinks = [
    { title: "Getting Started", href: "#installation", icon: <Rocket className="w-5 h-5" /> },
    { title: "Components", href: "/components", icon: <Package className="w-5 h-5" /> },
    { title: "Examples", href: "#examples", icon: <BookOpen className="w-5 h-5" /> },
    { title: "GitHub", href: "https://github.com/Charan1731/aeon-ui", icon: <GitBranch className="w-5 h-5" /> }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Spotlight Effect */}
      <div className="flex justify-center overflow-hidden">
        <Spotlight className="hidden sm:block" fill="red" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Header */}
        <motion.header 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/10 text-red-400 w-fit mx-auto">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Comprehensive Documentation
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-400 to-red-500 text-transparent bg-clip-text">
              Aeon-UI
            </span>{' '}
            <span className="text-gray-800 dark:text-gray-200">Docs</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your ultimate collection of reusable components and styles to build
            modern web applications with ease and elegance.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => window.location.href = '/components'}
            >
              <span className="flex gap-2 text-base font-medium">
                Browse Components <ArrowRight className="w-5 h-5 text-red-400" />
              </span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => window.location.href = 'https://github.com/Charan1731/aeon-ui'}
            >
              <span className="flex gap-2 text-base font-medium">
                View on GitHub <GitBranch className="w-5 h-5 text-red-400" />
              </span>
            </HoverBorderGradient>
          </div>
        </motion.header>

        {/* Quick Links Navigation */}
        <motion.nav 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          variants={itemVariants}
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <div className="text-red-400 group-hover:text-red-500 transition-colors">
                  {link.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-400 transition-colors">
                  {link.title}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.nav>

        {/* Feature Cards */}
        <motion.section 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-red-400 group-hover:text-red-500 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/5 to-red-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.section>

        {/* Main Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* What is aeon-ui Section */}
          <motion.section 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-red-400 to-red-500 text-white shadow-lg shadow-red-500/25">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                What is aeon-ui?
              </h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                aeon-ui is a comprehensive platform combining multiple UI libraries,
                such as <span className="font-semibold text-red-400">Aceternity UI</span>, <span className="font-semibold text-red-400">Magic UI</span>, and
                <span className="font-semibold text-red-400"> Shadcn/ui</span>, into a single collection. It leverages the
                power of TailwindCSS, Framer Motion, and other tools to offer a
                cohesive, customizable development experience.
              </p>
            </div>
          </motion.section>

          {/* Why aeon-ui Section */}
          <motion.section 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-red-400 to-red-500 text-white shadow-lg shadow-red-500/25">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Why aeon-ui?
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Combine the best components from multiple UI libraries on a single platform",
                "Streamline your development process with pre-designed, reusable components",
                "Customize components effortlessly to meet your project's needs"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700/50"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Installation Section */}
        <motion.section 
          id="installation"
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700/50"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25">
              <Package className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Installation
            </h2>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
            Components in aeon-ui can be installed in two ways:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  One-Command Setup
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Install all dependencies and configurations with a single command, 
                then start using components directly.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Download className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Manual Integration
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Manually copy component code, configure TailwindCSS, and install 
                required packages as detailed in the component&apos;s installation guide.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-400/5 to-orange-500/10 border border-red-200 dark:border-red-700/50"
          variants={itemVariants}
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white shadow-lg shadow-red-500/25">
              <Star className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our component library and start building amazing applications today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-4"
              as="button"
              onClick={() => window.location.href = '/components'}
            >
              <span className="flex gap-2 text-lg font-medium">
                Explore Components <ArrowRight className="w-5 h-5 text-red-400" />
              </span>
            </HoverBorderGradient>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
