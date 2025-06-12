'use client'
import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { CodePreview } from '@/components/ui/CodePreview';

import React from 'react';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { Installation } from './Installation';
import { Snippet } from '@nextui-org/snippet';
import { FaTerminal } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PageProps {
  heading: string;
  description: string;
  library: string;
  code: string;
  filename: string;
  cli: string;
  child?: React.ReactNode;
  Tab1? : React.ReactNode;
  tab1Extra?: React.ReactNode;
}

const FullComponent: React.FC<PageProps> = ({
  heading,
  description,
  library,
  code,
  filename,
  cli,
  child,
  Tab1,
  tab1Extra
}) => {
  return (
    <div className="relative min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      {/* Clean Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-white to-red-50/10 dark:from-red-950/10 dark:via-gray-900 dark:to-red-950/5" />
        <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-br from-red-100/30 to-red-200/20 dark:from-red-900/20 dark:to-red-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-tr from-red-50/40 to-red-100/30 dark:from-red-950/15 dark:to-red-900/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Clean Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <H1 H1={heading} />
          <div className="mt-4 space-y-2">
            <P1 P1={description} />
            <P2 Lib={library} />
          </div>
        </motion.div>

        {/* Clean Component Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg overflow-hidden">
            <CodePreview
              tab1Content={
                <div className="relative">
                  {Tab1}
                </div>
              }
              tab2Content={
                <div className="relative">
                  <CodeBlockDemo
                    code={code}
                    filename={filename}
                    highlightLines={[]}
                  />
                </div>
              }
            />
          </div>
        </motion.div>

        {/* Clean Installation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <FaTerminal className="w-4 h-4 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Installation
            </h2>
          </div>
          
          <div className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg overflow-hidden">
            <Installation
              tab1Content={
                <div className="p-6">
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700/50 overflow-x-auto">
                    <Snippet 
                      color="default" 
                      symbol={<FaTerminal className="text-red-500" />}
                      className="bg-transparent"
                    >
                      {cli}
                    </Snippet>
                  </div>
                  {tab1Extra && (
                    <div className="mt-4">
                      {tab1Extra}
                    </div>
                  )}
                </div>
              }
              tab2Content={
                <div className="p-6">
                  {child}
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullComponent;
