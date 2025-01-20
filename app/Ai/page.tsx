'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Wand2 } from 'lucide-react';

export default function PromptPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const preprompt = `You are tasked with generating a React component based on the user's instructions. Follow these rules:
1. Use ES6+ syntax and ensure compatibility with React.
2. Include only necessary imports (e.g., React, Tailwind CSS, Lucide Icons).
3. If the user asks for icons, use only Lucide Icons (import from 'lucide-react').
4. Avoid external dependencies unless explicitly requested (like animations or charts).
5. Write clean and reusable code with proper comments for clarity.
6. Use Tailwind CSS classes for styling and ensure responsiveness.
7. If animations are requested, use Tailwind utilities or React libraries like 'framer-motion'.
8. Ensure accessibility features (e.g., 'aria-label', focus states) in interactive components.
9. Handle invalid input gracefully (e.g., empty props) by providing default values.
10. The component should render without any errors or external dependencies.
11. If the user specifies a layout, use flexbox or grid for responsive design.
12. Do not include backend-specific code; keep the component frontend-only.
13. Keep the component minimal yet visually appealing, avoiding unnecessary complexity.
14. Assume that Tailwind CSS and React are pre-installed.
15. If the prompt is vague, generate a basic yet functional UI component.
16. donot import anything majorly as it is rendering"
`;

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://aeon-ui.vercel.app//api/ai', {
        prompt: preprompt + prompt,
      });

      if (response?.data?.response) {
        // Store response safely in localStorage
        localStorage.setItem(
          'aiResponse',
          JSON.stringify(response.data.response)
        );
      } else {
        throw new Error('Invalid response from the server');
      }

      router.push('/preview');
    } catch (error) {
      console.error('Error submitting prompt:', error);
      setError('Error submitting prompt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            Aeon
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
          </span>{' '}
          AI Components
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Enter your prompt below to get instant React component code.
        </p>
      </header>
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl md:mt-20 mt-10 font-semibold text-center">
            What do you want to build?
          </h1>
          <p className="text-center mt-2 text-gray-700 dark:text-gray-200">
            Generate and copy the code for your custom component.
          </p>
            <div className="mt-10">
            <textarea
              className="rounded-lg w-full h-32 p-4 border-2 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-400"
              placeholder="Enter your prompt here..."
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
              }}
            />
            </div>
            {error && (
            <div className="mt-2 text-red-500 text-center">{error}</div>
            )}
            <div className="mt-5 flex justify-center">
            {/* <button
              className="bg-red-400 dark:bg-red-400 text-white h-10 w-32 rounded-lg transition-colors duration-300 hover:bg-red-500 dark:hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-600"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit Prompt'}
            </button> */}
            <HoverBorderGradient
              containerClassName="rounded-lg"
              className="dark:bg-red-400 bg-red-400 text-black dark:text-white flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold cursor-pointer transition-colors mx-auto"
              as="button"
              onClick={handleSubmit}
            >
              {loading ? 'Analyzing...' : 'Submit Prompt'}
            </HoverBorderGradient>
            </div>
        </div>
      </div>
    </div>
  );
}
