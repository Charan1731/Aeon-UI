
import { Info, Package, Rocket } from 'lucide-react';

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            Aeon
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
          </span>{' '}
          Documentation
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Your ultimate collection of reusable components and styles to build
          modern web applications.
        </p>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Info className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            What is aeon-ui?
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          aeon-ui is a comprehensive platform combining multiple UI libraries,
          such as <strong>Acernity UI</strong>, <strong>Magic UI</strong>, and
          <strong>Shadcn/ui</strong>, into a single collection. It leverages the
          power of TailwindCSS, Framer Motion, and other tools to offer a
          cohesive, customizable development experience.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Rocket className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Why aeon-ui?
          </h2>
        </div>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
          <li>
            Combine the best components from multiple UI libraries on a single
            platform.
          </li>
          <li>
            Streamline your development process with pre-designed, reusable
            components.
          </li>
          <li>
            Customize components effortlessly to meet your project’s needs.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Package className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Installation
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Components in aeon-ui can be installed in two ways:
        </p>
        <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400">
          <li>
            <strong>One-Command Setup:</strong> Install all dependencies and
            configurations with a single command, then start using components
            directly.
          </li>
          <li>
            <strong>Manual Integration:</strong> Manually copy component code,
            configure TailwindCSS, and install required packages as detailed in
            the component’s installation guide.
          </li>
        </ol>
      </section>
    </div>
  );
}
