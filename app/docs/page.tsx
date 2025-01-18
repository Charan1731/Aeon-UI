import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/accordion';
import { Info, Package, Rocket, CheckCircle } from 'lucide-react';

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            UÍ
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
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
            What is UI-Unify?
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          UI-Unify is a comprehensive platform combining multiple UI libraries,
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
            Why UI-Unify?
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
          Components in UI-Unify can be installed in two ways:
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

      <section>
        <div className="flex items-center gap-4 mb-6">
          <CheckCircle className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger>What is UI-Unify?</AccordionTrigger>
            <AccordionContent>
              UI-Unify is a collection of reusable components and styles from
              multiple UI libraries, providing a unified platform for building
              modern web applications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>What is a UI Library?</AccordionTrigger>
            <AccordionContent>
              A UI library is a collection of reusable components and styles
              designed to streamline the development of web applications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>How do I install UI-Unify?</AccordionTrigger>
            <AccordionContent>
              Each component in UI-Unify has its own installation guide, which
              you can find on the components page. You can use either the
              one-command setup or manually integrate components as needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>Can I customize components?</AccordionTrigger>
            <AccordionContent>
              Yes, all components in UI-Unify are highly customizable. Modify
              styles, configurations, and functionalities to suit your
              requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
