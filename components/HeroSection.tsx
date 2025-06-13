'use client';
import { GithubIcon, Sparkles, Wand2 } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Spotlight } from './ui/spotlight';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from './ui/text-reveal-card';


import { MarqueeDemo } from './Marque';
import { AnimatedShinyTextDemo } from './ui/AnimatedShinyText';
import { FlipWords } from './ui/flip-words';

export function Hero() {
  return (
    <div className="relative  overflow-hidden ">
      <div className="flex justify-center sm:mt-0 mt-4 overflow-hidden">
        <Spotlight className="hidden sm:block" fill='pink'/>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-full  sm:mt-16 px-4"
      >
        <div className="flex flex-col items-center max-w-4xl">
          <div className="flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-red-500/10 text-red-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              The Ultimate UI Library Collection
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-7xl font-bold text-center"
          >
            <span className="text-gray-400">Build</span>{' '}
            <FlipWords
              words={["Beautiful", "Modern", "Responsive", "Interactive", "Stunning", "Professional"]}
              duration={3000}
              className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text font-extrabold"
            />
            {' '}<span className="text-gray-400">UI Components</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-7xl font-bold text-center mt-2"
          >
            <span className="bg-gradient-to-r from-red-400 via-red-400 to-red-500 text-transparent bg-clip-text">
              One Platform,
            </span>{' '}
            <span className="text-gray-400">Simplified</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center space-y-4"
          >
            <p className="text-xl font-medium dark:text-slate-200 text-slate-500">
              Bring together the best components from multiple UI libraries,
            </p>
            <div className="text-xl font-medium dark:text-slate-200 text-slate-500">
              making development{' '}
              <FlipWords
                words={["faster", "easier", "efficient", "seamless", "powerful", "amazing"]}
                duration={2500}
                className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text font-extrabold"
              />
              {' '}and more productive.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() =>
                (window.location.href =
                  'https://github.com/Charan1731/aeon-ui')
              }
            >
              <span className="flex gap-2 text-base font-medium">
                Star on GitHub <GithubIcon className="w-5 h-5 text-red-400" />
              </span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => (window.location.href = '/components')}
            >
              <span className="flex gap-2 text-base font-medium">
                Components <Wand2 className="w-5 h-5 text-red-400" />
              </span>
            </HoverBorderGradient>
          </motion.div>

          {/* Technology Stack FlipWords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-12 text-center"
          >
            <div className="text-lg font-medium text-gray-600 dark:text-gray-400">
              Powered by{' '}
              <FlipWords
                words={["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"]}
                duration={2000}
                className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text font-extrabold"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {['Aceternity UI', 'Magic UI', 'Shadcn/ui'].map((lib) => (
              <div key={lib} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-red-400" />
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {lib}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-12">
        {/* <div>
          <h1 className="flex justify-center align-middle  text-4xl sm:text-6xl text-gray-600 dark:text-gray-400 font-bold ">
            Showcase
          </h1>
          <p className="flex justify-center text-xl font-medium dark:text-gray-400 text-gray-600 mt-4 px-4">
            Explore examples to see how these components can be integrated into
            your projects.
          </p>
        </div> */}
      </div>
      {/* <div className="flex items-center justify-center px-4 w-full  mb-4 align-middle">
        <Link href="https://www.producthunt.com/posts/aeon-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ui&#0045;Ui" target="_blank">
          <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=746617&theme=dark"
        alt="U&#0205;&#0045;Ui - Multiple&#0032;UI&#0032;Libraries&#0044;&#0032;One&#0032;Platform&#0044;&#0032;Simplified | Product Hunt"
        className="w-auto h-auto z-50"
          />
        </Link>
      </div> */}

      <div className="flex justify-center mt-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl font-bold">
              <span className="bg-gradient-to-r from-red-400 via-red-400 to-red-500 text-transparent bg-clip-text">
                AI-Powered
              </span>{' '}
              <span className="text-gray-400">Development</span>
            </h2>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
              Create stunning components with AI assistance.
              <br />
              Just describe what you need, and watch the magic happen.
            </p>

            <div className='flex justify-center items-center pt-10'>
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold cursor-pointer transition-colors mx-auto"
              as="button"
              onClick={() => (window.location.href = '/Ai')}
            >
              <span className="flex items-center gap-2 text-red-400">
                <Wand2 className="w-5 h-5" />
                Try Now
              </span>
            </HoverBorderGradient>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Text Reveal Showcase */}
      <div className="relative my-24 bg-gradient-to-br from-red-50/40 via-white to-orange-50/40 dark:from-red-950/20 dark:via-gray-900 dark:to-orange-950/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative"
        >
          <div className="text-center py-16 px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text">
                Experience
              </span>{' '}
              <span className="text-gray-600 dark:text-gray-300">Scroll Magic</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Watch as each word comes to life through the power of scroll-based animations
            </motion.p>
          </div>
          
          <div className="text-center py-8 px-4 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Building exceptional user interfaces requires more than just beautiful designs. It demands components that tell a story, create emotional connections, and guide users through delightful experiences. Our components transform ordinary content into extraordinary narratives, where every element emerges with purpose and precision, creating moments of wonder that users will remember long after they leave your site.
            </p>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">Scroll Precision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every word appears at the perfect moment, synchronized with your scroll position for maximum impact
                </p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wand2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Adaptive Flow</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intelligent timing that adapts to different content lengths and user reading patterns
                </p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GithubIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">Performance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Optimized animations running at 60fps across all devices and screen sizes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative py-20 px-4 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-black dark:to-gray-900/50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-7xl font-bold mb-6">
              <span className="text-gray-600 dark:text-gray-400">Components</span>
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text"> Demo</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of beautiful, interactive components designed to elevate your 
              projects. Each component is crafted with attention to detail and optimized for performance.
            </p>
          </motion.div>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Interactive</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Engaging animations and interactions
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Customizable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Easy to customize and integrate
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GithubIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Open Source</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Free to use and contribute
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* <div>
          <MarqueeDemo />
        </div> */}
        <div>
          <AnimatedShinyTextDemo />
        </div>
        <div className="flex justify-center my-10">
          <FlipWords
            words={[
              'Aeon-UI is based on ',
              'Nextjs',
              'TailwindCSS',
              'Aceternity',
              'Magic UI',
              'Shadcn/ui',
            ]}
            duration={500}
            className="text-3xl font-bold text-gray-600 dark:text-gray-400"
          />
        </div>
        {/* Enhanced Hover Text Reveal Section */}
        <div className="relative py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                  Hover to Reveal
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-300">the Magic</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Move your cursor across the card to discover hidden messages and interactive animations
              </p>
            </motion.div>

            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
                <TextRevealCard
                  text="I know everything Jon"
                  revealText="You know nothing Snow "
                  className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 border-gradient-to-r from-red-200 via-purple-200 to-blue-200 dark:from-red-800/40 dark:via-purple-800/40 dark:to-blue-800/40 shadow-2xl backdrop-blur-sm"
                >
                  <TextRevealCardTitle className="text-xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                    ⚔️ Game of Thrones Reference
                  </TextRevealCardTitle>
                  <TextRevealCardDescription className="text-gray-600 dark:text-gray-300">
                    This interactive card showcases hover-based text reveals. Move your cursor 
                    across different areas to uncover the hidden message with smooth animations.
                  </TextRevealCardDescription>
                </TextRevealCard>
              </motion.div>
            </div>

            {/* Additional demo cards */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
            >
              <TextRevealCard
                text="Build Amazing Interfaces"
                revealText="Create Stunning User Experiences ✨"
                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border border-red-200 dark:border-red-800/30"
              >
                <TextRevealCardTitle className="text-red-600 dark:text-red-400 font-bold">
                  🎨 Design Excellence
                </TextRevealCardTitle>
                <TextRevealCardDescription className="text-gray-600 dark:text-gray-300">
                  Discover the power of interactive design with this engaging text reveal component
                </TextRevealCardDescription>
              </TextRevealCard>

              <TextRevealCard
                text="Code with Confidence"
                revealText="Ship Faster, Build Better 🚀"
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800/30"
              >
                <TextRevealCardTitle className="text-blue-600 dark:text-blue-400 font-bold">
                  ⚡ Developer Experience
                </TextRevealCardTitle>
                <TextRevealCardDescription className="text-gray-600 dark:text-gray-300">
                  Experience smooth animations and responsive interactions across all devices
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div> */}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
