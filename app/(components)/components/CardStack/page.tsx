'use client';
import FullComponent from '@/components/FullComponent';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { Snippet } from '@nextui-org/snippet';
import { FaTerminal } from 'react-icons/fa';
import { CardStackDemo } from '../preview/CardStackDemo';


export default function page() {
  return (
    <div>
      <FullComponent
        heading="Card Stack"
        description="Cards stack on top of each other after some interval. Perfect for showing testimonials."
        code={`"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
`}
        library="Aceternity UI"
        filename="CardStack.tsx"
        cli={`npx shadcn@latest add https://ui.aceternity.com/registry/card-stack.json
`}
        Tab1={<CardStackDemo />}
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
                  code = {`"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
`}
filename='CardStack.tsx'
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
                    code={`import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
`}
                    filename="CardHoverEffect.tsx"
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
