import FullComponent from '@/components/FullComponent';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { Snippet } from '@nextui-org/snippet';
import { FaTerminal } from 'react-icons/fa';
import { ThreeDCardDemo } from '../preview/3dCardDemo';

export default function page() {
  return (
    <div>
      <FullComponent
        heading="3D Card Effect"
        description="A card perspective effect, hover over the card to elevate card elements."
        code={`"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
`}
        library="Aceternity UI"
        filename="3DCardEffect.tsx"
        cli={`npx shadcn@latest add https://ui.aceternity.com/registry/3d-card.json`}
        Tab1={<ThreeDCardDemo />}
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
                    <span>npm i framer-motion clsx tailwind-merge</span>
                  </Snippet>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mt-4 ">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  2
                </div>
                <div>Add util file (lib/utils.ts)</div>
              </div>
              <div>
                <div className="overflow-x-auto mt-2 max-h-96">
                  <CodeBlockDemo
                    code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
                    filename="utils.ts"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4 ">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  3
                </div>
                <div>Copy and paste the following code into your project.</div>
              </div>
              <div>
                <div className="overflow-x-auto mt-2 h-96">
                  <CodeBlockDemo
                    code={`"use client";
                
                import { cn } from "@/lib/utils";
                import Image from "next/image";
                import React, {
                  createContext,
                  useState,
                  useContext,
                  useRef,
                  useEffect,
                } from "react";
                
                const MouseEnterContext = createContext< 
                  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
                >(undefined);
                
                export const CardContainer = ({
                  children,
                  className,
                  containerClassName,
                }: {
                  children?: React.ReactNode;
                  className?: string;
                  containerClassName?: string;
                }) => {
                  const containerRef = useRef<HTMLDivElement>(null);
                  const [isMouseEntered, setIsMouseEntered] = useState(false);
                
                  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                    if (!containerRef.current) return;
                    const { left, top, width, height } =
                      containerRef.current.getBoundingClientRect();
                    const x = (e.clientX - left - width / 2) / 25;
                    const y = (e.clientY - top - height / 2) / 25;
                    containerRef.current.style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
                  };
                
                  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
                    setIsMouseEntered(true);
                    if (!containerRef.current) return;
                  };
                
                  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                    if (!containerRef.current) return;
                    setIsMouseEntered(false);
                    containerRef.current.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
                  };
                  return (
                    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
                      <div
                        className={cn(
                          "py-20 flex items-center justify-center",
                          containerClassName
                        )}
                        style={{
                          perspective: "1000px",
                        }}
                      >
                        <div
                          ref={containerRef}
                          onMouseEnter={handleMouseEnter}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                          className={cn(
                            "flex items-center justify-center relative transition-all duration-200 ease-linear",
                            className
                          )}
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          {children}
                        </div>
                      </div>
                    </MouseEnterContext.Provider>
                  );
                };
                
                export const CardBody = ({
                  children,
                  className,
                }: {
                  children: React.ReactNode;
                  className?: string;
                }) => {
                  return (
                    <div
                      className={cn(
                        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                        className
                      )}
                    >
                      {children}
                    </div>
                  );
                };
                
                export const CardItem = ({
                  as: Tag = "div",
                  children,
                  className,
                  translateX = 0,
                  translateY = 0,
                  translateZ = 0,
                  rotateX = 0,
                  rotateY = 0,
                  rotateZ = 0,
                  ...rest
                }: {
                  as?: React.ElementType;
                  children: React.ReactNode;
                  className?: string;
                  translateX?: number | string;
                  translateY?: number | string;
                  translateZ?: number | string;
                  rotateX?: number | string;
                  rotateY?: number | string;
                  rotateZ?: number | string;
                  [key: string]: any;
                }) => {
                  const ref = useRef<HTMLDivElement>(null);
                  const [isMouseEntered] = useMouseEnter();
                
                  useEffect(() => {
                    handleAnimations();
                  }, [isMouseEntered]);
                
                  const handleAnimations = () => {
                    if (!ref.current) return;
                    if (isMouseEntered) {
                      ref.current.style.transform = \`translateX(\${translateX}px) translateY(\${translateY}px) translateZ(\${translateZ}px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) rotateZ(\${rotateZ}deg)\`;
                    } else {
                      ref.current.style.transform = \`translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\`;
                    }
                  };
                
                  return (
                    <Tag
                      ref={ref}
                      className={cn("w-fit transition duration-200 ease-linear", className)}
                      {...rest}
                    >
                      {children}
                    </Tag>
                  );
                };
                
                // Create a hook to use the context
                export const useMouseEnter = () => {
                  const context = useContext(MouseEnterContext);
                  if (context === undefined) {
                    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
                  }
                  return context;
                };
                `}
                    filename="3d-card.tsx"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-black">
                  4
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
