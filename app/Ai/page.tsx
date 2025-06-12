'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Sparkles, RotateCw, Wand2, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { FlipWords } from '@/components/ui/flip-words';
import { Spotlight } from '@/components/ui/spotlight';

export default function PromptPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const examplePrompts = [
    "Create a navigation bar with dropdown menu",
    "Build a hero section with animated gradient background",
    "Make a contact form with validation",
    "Design a product card with hover effects"
  ];

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (prompt) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [prompt]);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt first.');
      return;
    }
    
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

  // Particle effect component - but with proper red-400 colors
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-red-400/40"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 1 + 0.5,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              x: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
            }}
            transition={{
              duration: Math.random() * 50 + 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#121212]">
      <div className="flex justify-center overflow-hidden">
        <Spotlight className="hidden sm:block" fill="pink" />
      </div>
      
      {/* Additional background effects */}
      <ParticleBackground />
      <div className="absolute top-20 right-10 h-[400px] w-[400px] bg-red-400 rounded-full opacity-10 blur-[120px]" />
      <div className="absolute bottom-20 left-10 h-[300px] w-[300px] bg-red-400 rounded-full opacity-5 blur-[100px]" />
      
      <div 
        ref={containerRef} 
        className="max-w-4xl mx-auto py-12 px-6 relative z-10"
      >
        <motion.header 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Components</span>
            </motion.div>
          </div>
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
            <span className="font-bold text-red-400">
              Aeon
              <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
            </span>{' '}
            AI Components
          </h1>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Generate custom React components with AI in seconds
          </motion.p>
        </motion.header>
        
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-red-400 via-red-400 to-red-500 text-transparent bg-clip-text">
                  What do you want to build?
                </span>
              </motion.h2>
              <motion.div 
                className="mt-3 text-lg flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="text-gray-600 dark:text-gray-300">Create</span>
                <FlipWords
                  className="text-red-400 font-medium"
                  words={[
                    "stunning UI components",
                    "beautiful layouts",
                    "interactive elements",
                    "responsive designs"
                  ]}
                  duration={3000}
                />
                <span className="text-gray-600 dark:text-gray-300">with AI</span>
              </motion.div>
            </div>
            
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-black/40 border border-red-200/40 dark:border-red-500/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-300">
                    <Wand2 className="w-5 h-5 text-red-400" />
                    <span className="text-sm">Describe your component</span>
                  </div>
                  
                  <Textarea
                    className="rounded-lg w-full min-h-32 p-4 border-2 border-red-300/50 dark:border-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/70 dark:bg-black/60 transition-all duration-300 resize-none shadow-sm text-gray-800 dark:text-gray-100"
                    placeholder="Describe your component in detail... (e.g., 'A pricing card with hover effects and a gradient background')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                  />
                  
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right italic"
                      >
                        Typing...
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-red-500 text-center font-medium p-2 rounded-lg bg-red-50 dark:bg-red-900/20"
                    >
                      {error}
                    </motion.div>
                  )}
                  
                  <div className="mt-6 flex justify-center">
                    <HoverBorderGradient
                      containerClassName="rounded-lg"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center gap-2 px-6 py-3"
                      as="button"
                      onClick={handleSubmit}
                    >
                      {loading ? (
                        <>
                          <RotateCw className="w-5 h-5 animate-spin text-red-400" />
                          <span className="text-base font-medium">Generating...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 text-red-400" />
                          <span className="text-base font-medium">Generate Component</span>
                        </>
                      )}
                    </HoverBorderGradient>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <div className="mt-10">
              <motion.p 
                className="text-sm text-center mb-4 text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Code className="h-4 w-4" />
                <span>Try these examples:</span>
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {examplePrompts.map((example, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: 'rgba(248, 113, 113, 0.05)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="text-sm p-3 rounded-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 transition-all text-left shadow-sm"
                    onClick={() => setPrompt(example)}
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Decorative code snippets with the Aeon-UI styling */}
            <motion.div 
              className="absolute -right-10 top-1/4 opacity-5 dark:opacity-10 text-gray-800 dark:text-white hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <pre className="text-xs">
                {`import { 
  Card, 
  Button 
} from '@/components/ui';

export function Component() {
  return (
    <Card className="p-4 shadow-md">
      <h2 className="text-red-400 text-xl">
        Aeon-UI Component
      </h2>
    </Card>
  );
}`}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
