import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';

export function FlipWordsDemo() {
  const words = ['better', 'cute', 'beautiful', 'modern'];

  return (
    <div className="relative h-[40rem] flex justify-center items-center px-4">
      {/* Clean minimalistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/10 to-red-100/5 dark:from-red-950/5 dark:to-red-900/3 rounded-xl" />

      <div className="relative z-10 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        <div className="mb-4">
          Build
          <FlipWords words={words} />
        </div>
        <div className="text-3xl">
          websites with{' '}
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-transparent bg-clip-text font-bold">
            Aeon-UI
          </span>
        </div>
      </div>
    </div>
  );
}
