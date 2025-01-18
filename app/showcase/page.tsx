import Marquee from '@/components/ui/marquee';

export default function Showcase() {
  return (
    <div className="sm:min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            UÍ
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
          </span>{' '}
          Showcase
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Explore examples and demos of our unified UI components in action.
        </p>
      </header>

      <div className="flex align-middle h-full text-2xl sm:text-4xl sm:mt-40 mt-32 text-center text-gray-700 dark:text-gray-200">
        For now no showcase available, waiting for anyone to use and share their
        showcase.
      </div>
      <div className="flex align-middle h-full text-2xl sm:text-4xl mt-20 sm:mt-40 text-center text-gray-700 dark:text-gray-200">
        <Marquee pauseOnHover className="[--duration:10s]">
          <h1 className="text-2xl font-bold text-red-800 dark:text-red-400">
            UI-Unify Waiting...
          </h1>
        </Marquee>
      </div>
    </div>
  );
}
