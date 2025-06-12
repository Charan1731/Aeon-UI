'use client';

import { CodeBlockDemo } from '@/components/ui/Codeblock';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Copy, Download, Sparkles, Code, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function PreviewPage() {
  const [componentCode, setComponentCode] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedCode = localStorage.getItem('aiResponse');
      if (!storedCode) {
        setError('No component code found. Please generate a component first.');
        return;
      }

      // Basic sanitization to remove potentially harmful tags or attributes
      const sanitizedCode = storedCode
        .replace(/<script[^>]*?>.*?<\/script>/gi, '') // Remove script tags
        .replace(/on\w+=".*?"/gi, '') // Remove inline event handlers like onclick
        .replace(/javascript:/gi, '') // Remove javascript: in links or attributes
        .replace(/<style[^>]*?>.*?<\/style>/gi, '') // Remove style tags
        .replace(/<iframe[^>]*?>.*?<\/iframe>/gi, '') // Remove iframe tags
        .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
        .replace(/```jsx/g, '') // Remove ```jsx markers
        .replace(/```/g, '') // Remove ``` markers
        .replace(/\\"/g, '"'); // Replace escaped double quotes with actual double quotes
      setComponentCode(sanitizedCode);
    } catch (err) {
      console.error('Error retrieving component code:', err);
      setError('Failed to load component code. Please try again.');
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([componentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'component.tsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#121212]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight className="hidden sm:block" fill="pink" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-red-100/20 dark:from-red-950/20 dark:via-transparent dark:to-red-900/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/10 text-red-400 w-fit mx-auto">
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">AI Generated Component</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-400 to-red-500 text-transparent bg-clip-text">
              Component
            </span>{' '}
            <span className="text-gray-600 dark:text-gray-300">Source Code</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Your AI-generated component is ready! Copy the code below and integrate it into your project.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Link href="/Ai">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to AI Generator</span>
            </HoverBorderGradient>
          </Link>

          {!error && (
            <>
              <HoverBorderGradient
                containerClassName="rounded-lg"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
                as="button"
                onClick={handleCopy}
              >
                <Copy className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-red-400'}`} />
                <span className="font-medium">{copied ? 'Copied!' : 'Copy Code'}</span>
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-lg"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
                as="button"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 text-red-400" />
                <span className="font-medium">Download</span>
              </HoverBorderGradient>
            </>
          )}
        </motion.div>

        {/* Code Block Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {error ? (
            <div className="flex flex-col items-center justify-center py-16 px-8 rounded-2xl border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-2">
                No Component Found
              </h3>
              <p className="text-red-600 dark:text-red-400 text-center max-w-md">
                {error}
              </p>
              <Link href="/Ai" className="mt-6">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
                  as="button"
                >
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span className="font-medium">Generate Component</span>
                </HoverBorderGradient>
              </Link>
            </div>
          ) : (
            <div className="relative">
              {/* Code Block Container with Glass Effect */}
              <div className="relative rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      component.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>TypeScript React</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="relative">
                  <CodeBlockDemo code={componentCode} filename="component.tsx" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-red-400/10 to-red-600/10 rounded-full blur-xl"></div>
            </div>
          )}
        </motion.div>

        {/* Footer Message */}
        {!error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Need to make changes? Go back to the{' '}
              <Link href="/Ai" className="text-red-400 hover:text-red-500 font-medium">
                AI Generator
              </Link>{' '}
              and create a new version.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
