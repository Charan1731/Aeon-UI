import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, ChartNoAxesGantt, Mail, ExternalLink, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  year?: number;
  email?: string;
}

const navLinks = [
  { name: 'Components', href: '/components' },
  { name: 'Docs', href: '/docs' },
  { name: 'AI Assistant', href: '/Ai' },
] as const;

const resources = [
  { name: 'GitHub', href: 'https://github.com/Charan1731/aeon-ui' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Examples', href: '/components' },
  { name: 'Changelog', href: '/docs/changelog' },
] as const;

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = 'charan23114@gmail.com',
}) => {
  return (
    <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      {/* Top decoration line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-red-400 to-red-500 shadow-lg shadow-red-500/25">
                <ChartNoAxesGantt className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
                    Aeon
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">-UI</span>
                </h3>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md">
              The Ultimate UI Library Collection. 
              <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text font-semibold">
                Multiple UI Libraries, One Platform, Simplified.
              </span>
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span>Empowering developers since {year}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-red-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-red-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-red-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-red-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Terms of Service
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social links and contact */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-600 dark:text-gray-300 mr-4">Connect with us:</span>
              <a
                href="https://github.com/Charan1731"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/CharanR18433412"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/charandeep-reddy-2640a4301/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${email}`}
                className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Contact info */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${email}`}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <p>© {year} Aeon-UI. All rights reserved.</p>
              <span className="hidden lg:block">•</span>
              <p className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by developers, for developers</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Aeon-UI is a registered trademark of Aeon-UI, Inc.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
