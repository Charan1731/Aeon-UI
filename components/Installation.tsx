import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaTerminal, FaHandPaper } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TabsProps {
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
}

export function Installation({ tab1Content, tab2Content }: TabsProps) {
  return (
    <div className="relative overflow-hidden">
      <Tabs defaultValue="cli" className="overflow-hidden h-full">
        {/* Clean Tab Navigation */}
        <div className="relative">
          <TabsList className="flex w-full justify-start bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-700/60 rounded-none p-0">
            <TabsTrigger
              value="cli"
              className="relative px-6 py-4 bg-transparent border-b-2 border-transparent data-[state=active]:border-b-red-500 data-[state=active]:bg-red-50/50 dark:data-[state=active]:bg-red-950/20 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-400 data-[state=active]:rounded-none flex items-center gap-2 transition-all duration-300 hover:bg-red-50/30 dark:hover:bg-red-950/10 font-medium"
            >
              <FaTerminal className="w-4 h-4" />
              CLI
            </TabsTrigger>
            <TabsTrigger
              value="manual"
              className="relative px-6 py-4 bg-transparent border-b-2 border-transparent data-[state=active]:border-b-red-500 data-[state=active]:bg-red-50/50 dark:data-[state=active]:bg-red-950/20 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-400 data-[state=active]:rounded-none flex items-center gap-2 transition-all duration-300 hover:bg-red-50/30 dark:hover:bg-red-950/10 font-medium"
            >
              <FaHandPaper className="w-4 h-4" />
              Manual
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Clean Tab Content */}
        <div className="relative">
          {/* CLI Tab */}
          <TabsContent 
            className="relative overflow-auto bg-gray-50/20 dark:bg-gray-900/20 backdrop-blur-sm border-0 m-0 rounded-none" 
            value="cli"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tab1Content}
            </motion.div>
          </TabsContent>

          {/* Manual Tab */}
          <TabsContent 
            className="relative p-6 overflow-auto bg-gray-50/20 dark:bg-gray-900/20 backdrop-blur-sm border-0 m-0 rounded-none" 
            value="manual"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {tab2Content}
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
