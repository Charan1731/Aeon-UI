import FullComponent from '@/components/FullComponent';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { Snippet } from '@nextui-org/snippet';
import { FaTerminal } from 'react-icons/fa';
import { AccordionDemo } from '../preview/AccordianDemo';

export default function page() {
  return (
    <div>
      <FullComponent
        heading="Accordian"
        code={`import {
            Accordion,
            AccordionContent,
            AccordionItem,
            AccordionTrigger,
          } from "@/components/ui/accordion"
          
          export function AccordionDemo() {
            return (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          }
          `}
        description="A vertically stacked set of interactive headings that each reveal a
        section of content."
        library="Shadcn/ui"
        filename="Accordion.tsx"
        cli={`npx shadcn@latest add accordion`}
        Tab1 = {<AccordionDemo />}
        child={
          <>
            <div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  1
                </div>
                <div>Install the following dependencies:</div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-md overflow-x-auto mt-2">
                  <Snippet symbol={<FaTerminal />}>
                    <span>npm install @radix-ui/react-accordion</span>
                  </Snippet>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mt-4 ">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  2
                </div>
                <div>Copy and paste the following code into your project.</div>
              </div>
              <div>
                <div className="overflow-x-auto mt-2 h-96">
                  <CodeBlockDemo
                    code={`"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
`}
filename='accordion.tsx'
highlightLines={[]}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  3
                </div>
                <div>Update the import paths to match your project setup.</div>
              </div>
              <div>
                <div className="flex gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                    4
                  </div>
                  <div>
                    Update <code>tailwind.config.js</code>{' '}
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    Add the following animations to your tailwind.config.js
                    file:
                  </p>
                  <div className="mt-2">
                    <CodeBlockDemo
                      code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
}
`}
                      filename="tailwind.config.js"
                      highlightLines={[
                        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
