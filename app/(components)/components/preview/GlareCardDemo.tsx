"use client"
import { GlareCard } from '@/components/ui/glare-card';

export function GlareCardDemo() {
  return (
    <div className="relative flex items-center justify-center p-6 min-h-[300px]">
      {/* Clean minimalistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/10 to-red-100/5 dark:from-red-950/5 dark:to-red-900/3 rounded-xl" />

      <div className="relative z-10">
        <GlareCard className="flex flex-col items-center justify-center shadow-lg hover:shadow-red-500/10 transition-all duration-500">
          <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
          >
            <path
              d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
              stroke="currentColor"
              strokeWidth="15"
              strokeMiterlimit="3.86874"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-white font-bold text-xl mt-4">
            Aeon-UI
          </p>
        </GlareCard>
      </div>
    </div>
  );
}
