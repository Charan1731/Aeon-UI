'use client';

import React from 'react';
import { components } from './components';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaCubes,
  FaGem,
  FaPalette,
  FaBoxes,
  FaVideo,
  FaFire,
  FaLayerGroup,
  FaTable,
  FaCalendar,
  FaShoppingCart,
  FaImage,
  FaFileAlt,
  FaMagic,
  FaArrowRight,
  FaCircle
} from 'react-icons/fa';


const getComponentIcon = (label: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    'Installation': <FaCode className="w-4 h-4" />,
    '3D Card Effect': <FaCubes className="w-4 h-4" />,
    '3D Pin': <FaCubes className="w-4 h-4" />,
    'Animated List': <FaLayerGroup className="w-4 h-4" />,
    'Aurora Background': <FaPalette className="w-4 h-4" />,
    'Animated Circular Bar': <FaCircle className="w-4 h-4" />,
    'Accordion': <FaLayerGroup className="w-4 h-4" />,
    'Alert': <FaRocket className="w-4 h-4" />,
    'Avatar': <FaImage className="w-4 h-4" />,
    'Bento Grid': <FaBoxes className="w-4 h-4" />,
    'Badge': <FaGem className="w-4 h-4" />,
    'Breadcrumb': <FaArrowRight className="w-4 h-4" />,
    'Card Hover Effect': <FaMagic className="w-4 h-4" />,
    'Card Stack': <FaLayerGroup className="w-4 h-4" />,
    'Calendar': <FaCalendar className="w-4 h-4" />,
    'Card': <FaBoxes className="w-4 h-4" />,
    'Carousel': <FaImage className="w-4 h-4" />,
    'Checkbox': <FaCode className="w-4 h-4" />,
    'Collapsible': <FaLayerGroup className="w-4 h-4" />,
    'Command': <FaCode className="w-4 h-4" />,
    'Context Menu': <FaCode className="w-4 h-4" />,
    'Dock': <FaBoxes className="w-4 h-4" />,
    'Dialog': <FaCode className="w-4 h-4" />,
    'Drawer': <FaCode className="w-4 h-4" />,
    'Dropdown Menu': <FaCode className="w-4 h-4" />,
    'File Upload': <FaFileAlt className="w-4 h-4" />,
    'Flip Words': <FaFire className="w-4 h-4" />,
    'File Tree': <FaFileAlt className="w-4 h-4" />,
    'Google Gemini Effect': <FaGem className="w-4 h-4" />,
    'Glare Card': <FaMagic className="w-4 h-4" />,
    'Hero Video Dialog': <FaVideo className="w-4 h-4" />,
    'Hover Border Gradient': <FaMagic className="w-4 h-4" />,
    'Hover Card': <FaMagic className="w-4 h-4" />,
    'Input': <FaCode className="w-4 h-4" />,
    'Label': <FaCode className="w-4 h-4" />,
    'Marquee': <FaFire className="w-4 h-4" />,
    'Menubar': <FaCode className="w-4 h-4" />,
    'Navigation Menu': <FaArrowRight className="w-4 h-4" />,
    'Pagination': <FaArrowRight className="w-4 h-4" />,
    'Text Reveal Card': <FaFire className="w-4 h-4" />,
    'Table': <FaTable className="w-4 h-4" />,
    'Tabs': <FaCode className="w-4 h-4" />,
    'Textarea': <FaCode className="w-4 h-4" />
  };
  
  return iconMap[label] || <FaCode className="w-4 h-4" />;
};

interface ComponentSection {
  Installation?: string;
  Components?: string;
  children: Array<{
    label: string;
    Link: string;
  }>;
}

const getSectionTitle = (section: ComponentSection) => {
  if (section.Installation) return 'Getting Started';
  if (section.Components) return 'Components';
  return 'Section';
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <header className="text-center mt-10 pb-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200"
        >
          <span className="font-bold text-red-400">
            Aeon
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
          </span>{' '}
          Components
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4"
        >
          Explore the extensive collection of unified UI components.
        </motion.p>
      </header>
      
      <div className="sm:grid sm:grid-cols-6 min-h-screen">
        <aside className="col-span-1 hidden sm:block">
          <div className="sticky top-4 h-[calc(100vh-2rem)]">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl mx-4 h-full overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Components
                  </span>
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-5rem)] p-4">
                {components.map((section, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-2 mb-4 px-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-red-400 to-red-500 rounded-full"></div>
                      <h2 className="font-semibold text-sm uppercase tracking-wider text-gray-800 dark:text-gray-200">
                        {getSectionTitle(section)}
                      </h2>
                    </div>
                    
                    <ul className="space-y-1">
                      {section.children.map((child, idx) => {
                        const isActive = pathname === child.Link;
                        return (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                          >
                            <Link
                              href={child.Link}
                              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                                isActive
                                  ? 'bg-red-500/10 text-red-500 border-l-2 border-red-500'
                                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-red-400 dark:hover:text-red-400'
                              }`}
                            >
                              <div className={`flex-shrink-0 transition-colors duration-200 ${
                                isActive 
                                  ? 'text-red-500' 
                                  : 'text-gray-400 group-hover:text-red-400'
                              }`}>
                                {getComponentIcon(child.label)}
                              </div>
                              
                              <span className={`text-sm font-medium truncate transition-all duration-200 ${
                                isActive 
                                  ? 'font-semibold' 
                                  : 'group-hover:translate-x-1'
                              }`}>
                                {child.label}
                              </span>
                              
                              {isActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="ml-auto w-2 h-2 bg-red-500 rounded-full"
                                />
                              )}
                              
                              {!isActive && (
                                <FaArrowRight className="ml-auto w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                              )}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
                
                {/* Footer section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {components.reduce((total, section) => total + section.children.length, 0)} Components
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        <div className="col-span-5 mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
