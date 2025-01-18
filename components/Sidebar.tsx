'use client';

import { components } from '@/app/(components)/components';
import { usePathname } from 'next/navigation';
import { NavLink } from './Nav-link';

export default function Sidebar() {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Components', href: '/components' },
    { name: 'Docs', href: '/docs' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Ai', href: '/Ai' },
  ] as const;

  return (
    <div className="w-[80%] sm:w-[300px] fixed left-0 top-0 h-screen bg-white dark:bg-black border-r-2 border-gray-200 dark:border-gray-700 overflow-auto z-50 pt-10 ">
      <nav className="flex flex-col gap-4 p-4 ">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 pl-6 h-full pt-6">
        {components.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="font-semibold text-lg mb-3">
              {section.title || section.Installation || section.Components}
            </h2>
            <ul className="space-y-2">
              {section.children.map((child, idx) => (
                <li key={idx}>
                  <NavLink href={child.Link}>
                    <span
                      className={`text-gray-600 dark:text-gray-200 hover:underline transition-all duration-300 ease-in-out ${
                        pathname === child.Link ? 'font-bold text-red-500' : ''
                      }`}
                    >
                      {child.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
