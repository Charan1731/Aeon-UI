import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaCode, FaEye, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TabsProps {
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
}

export function CodePreview({ tab1Content, tab2Content }: TabsProps) {
  return (
    <div className="relative overflow-hidden">
      <Tabs defaultValue="Code" className="overflow-hidden h-full">
        {/* Clean Tab Navigation */}
        <div className="relative">
          <TabsList className="flex w-full justify-start bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-700/60 rounded-none p-0">
            <TabsTrigger
              value="Code"
              className="relative px-6 py-4 bg-transparent border-b-2 border-transparent data-[state=active]:border-b-red-500 data-[state=active]:bg-red-50/50 dark:data-[state=active]:bg-red-950/20 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-400 data-[state=active]:rounded-none flex items-center gap-2 transition-all duration-300 hover:bg-red-50/30 dark:hover:bg-red-950/10 font-medium"
            >
              <FaPlay className="w-4 h-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="Preview"
              className="relative px-6 py-4 bg-transparent border-b-2 border-transparent data-[state=active]:border-b-red-500 data-[state=active]:bg-red-50/50 dark:data-[state=active]:bg-red-950/20 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-400 data-[state=active]:rounded-none flex items-center gap-2 transition-all duration-300 hover:bg-red-50/30 dark:hover:bg-red-950/10 font-medium"
            >
              <FaCode className="w-4 h-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Clean Tab Content */}
        <div className="relative">
          {/* Preview Tab */}
          <TabsContent
            className="relative p-8 max-h-96 overflow-auto w-full bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-sm border-0 m-0 rounded-none"
            value="Preview"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center min-h-[200px]"
            >
              {tab2Content}
            </motion.div>
          </TabsContent>

          {/* Code Tab */}
          <TabsContent 
            className="relative p-0 max-h-full overflow-hidden flex align-center justify-center w-full bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm border-0 m-0 rounded-none" 
            value="Code"
          >
            {/* Clean code header */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50 flex items-center px-6 z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-sm text-gray-400 font-mono">
                component.tsx
              </div>
            </div>
            
            {/* Code content */}
            <div className="pt-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab1Content}
              </motion.div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
