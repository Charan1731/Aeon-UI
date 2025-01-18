import FullComponent from '@/components/FullComponent';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { TextareaDemo } from '../preview/TextareaDemo';

export default function page() {
  return (
    <div>
      <FullComponent
        heading="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
        code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
`}
        library="Shadcn/ui"
        filename="Textarea.tsx"
        cli={`npx shadcn@latest add textarea`}
        Tab1={<TextareaDemo />}
        child={
          <>
            <div>
              <div className="flex gap-2 mt-4 ">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  1
                </div>
                <div>Copy and paste the following code into your project.</div>
              </div>
              <div>
                <div className="overflow-x-auto mt-2 h-96">
                  <CodeBlockDemo
                  code = {`import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
`}
                   />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  2
                </div>
                <div>Update the import paths to match your project setup.</div>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
