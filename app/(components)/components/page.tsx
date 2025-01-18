import React from 'react';
import { Snippet } from '@nextui-org/snippet'; // For code snippets
import {
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaTerminal,
} from 'react-icons/fa'; // Icons from react-icons

const InstallationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 overflow-auto">
      {/* Main Installation Heading */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          <FaCode className="inline-block mr-2 text-blue-600" /> Installation
          Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Follow this guide to set up Next.js with Tailwind CSS, utilities, and
          configuration for a new project.
        </p>
      </section>

      {/* Install Next.js Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          <FaArrowRight className="inline-block mr-2 text-green-600" /> Install
          Next.js
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Install Next.js with&nbsp;
          <code className="bg-gray-100 dark:bg-zinc-800 px-1 rounded">
            create-next-app
          </code>
          .
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          1. Create a New Project
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Run the following command to create a new Next.js project:
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet color="default" symbol={<FaTerminal />}>
            npx create-next-app@latest
          </Snippet>
        </div>
      </section>

      {/* Prompts Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          Prompts You Will See
        </h3>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol="">
            <span>What is your project named? my-app</span>
            <span>Would you like to use TypeScript? No / Yes</span>
            <span>Would you like to use ESLint? No / Yes</span>
            <span>Would you like to use Tailwind CSS? No / Yes</span>
            <span>Would you like to use `src/` directory? No / Yes</span>
            <span>
              Would you like to use App Router? (recommended) No / Yes
            </span>
            <span>
              Would you like to customize the default import alias (@/*)? No /
              Yes
            </span>
          </Snippet>
        </div>
      </section>

      {/* Start the App */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          <FaCheckCircle className="inline-block mr-2 text-green-600" /> Start
          the App
        </h3>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol={<FaTerminal />}>
            <span>cd my-app</span>
            <span>npm run dev</span>
          </Snippet>
        </div>
      </section>

      {/* Add Utilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          <FaArrowRight className="inline-block mr-2 text-purple-600" /> Add
          Utilities
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Install common utilities for handling classnames and animations.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Install Dependencies
        </h3>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet>npm i framer-motion clsx tailwind-merge</Snippet>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">
          Add Utility Function
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add the following utility function to handle merging classes:
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol="">
            <span>{`import { ClassValue, clsx } from "clsx";`}</span>
            <span>{`import { twMerge } from "tailwind-merge";`}</span>
            <span>{``}</span>
            <span>{`export function cn(...inputs: ClassValue[]) {`}</span>
            <span>{`  return twMerge(clsx(...inputs));`}</span>
            <span>{`}`}</span>
          </Snippet>
        </div>
      </section>

      {/* Tailwind Config */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          <FaCode className="inline-block mr-2 text-blue-600" /> Base Tailwind
          Config
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add a base Tailwind config to enable dark mode and setup global CSS
          variables for color.
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol={''}>
            <span>{`import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";`}</span>
            <span>{`import { Config } from "tailwindcss";`}</span>
            <span>{``}</span>
            <span>{`const config: Config = {`}</span>
            <span>{`  content: [`}</span>
            <span>{`    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",`}</span>
            <span>{`    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",`}</span>
            <span>{`  ],`}</span>
            <span>{`  darkMode: "class",`}</span>
            <span>{`  theme: {`}</span>
            <span>{`    extend: {},`}</span>
            <span>{`  },`}</span>
            <span>{`  plugins: [addVariablesForColors],`}</span>
            <span>{`};`}</span>
            <span>{` // This plugin adds each Tailwind color as a global CSS variable,
            e.g. var(--gray-200).`}</span>
            <span>{`{`}</span>
            <span>{`  let allColors = flattenColorPalette(theme("colors"));`}</span>
            <span>{`  let newVars = Object.fromEntries(`}</span>
            <span>{`    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])`}</span>
            <span>{`  );`}</span>
            <span>{`  addBase({`}</span>
            <span>{`    ":root": newVars,`}</span>
            <span>{`  });`}</span>
            <span>{`}`}</span>
          </Snippet>
        </div>
      </section>

      {/* Next.js and React Fixes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          <FaArrowRight className="inline-block mr-2 text-red-600" /> Next.js 15
          & React 19 Framer Motion Fix
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Apply the following fixes to ensure compatibility between Next.js 15,
          React 19, and Framer Motion.
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol={''}>
            <span>{`"dependencies": {`}</span>
            <span>{`  "framer-motion": "^12.0.0-alpha.1",`}</span>
            <span>{`  "next": "15.0.3",`}</span>
            <span>{`  "react": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`  "react-dom": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`  "tailwind-merge": "^2.5.5"`}</span>
            <span>{`},`}</span>
            <span>{`"overrides": {`}</span>
            <span>{`  "framer-motion": {`}</span>
            <span>{`    "react": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`    "react-dom": "19.0.0-rc-66855b96-20241106"`}</span>
            <span>{`  }`}</span>
            <span>{`}`}</span>
          </Snippet>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4">
          if you&apos;re using <code>motion</code> instead of&nbsp;
          <code>framer-motion</code>, you can make the following changes:
        </p>

        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto">
          <Snippet symbol={''}>
            <span>{`"motion": "^12.0.0-alpha.1",`}</span>
            <span>{`"next": "15.0.3",`}</span>
            <span>{`"react": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`"react-dom": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`"tailwind-merge": "^2.5.5"`}</span>
            <span>{`},`}</span>
            <span>{`"overrides": {`}</span>
            <span>{`  "motion": {`}</span>
            <span>{`    "react": "19.0.0-rc-66855b96-20241106",`}</span>
            <span>{`    "react-dom": "19.0.0-rc-66855b96-20241106"`}</span>
            <span>{`  }`}</span>
            <span>{`}`}</span>
          </Snippet>
        </div>
      </section>
    </div>
  );
};

export default InstallationPage;
