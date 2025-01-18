import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaTerminal, FaHandPaper } from 'react-icons/fa';

interface TabsProps {
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
}

export function Installation({ tab1Content, tab2Content }: TabsProps) {
  return (
    <Tabs defaultValue="cli" className="overflow-hidden h-full">
      <TabsList className="flex w-full justify-start border-b border-gray-300 dark:border-gray-700">
        <TabsTrigger
          value="cli"
          className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none flex items-center"
        >
          <FaTerminal className="mr-2" />
          CLI
        </TabsTrigger>
        <TabsTrigger
          value="manual"
          className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none flex items-center"
        >
          <FaHandPaper className="mr-2" />
          Manual
        </TabsTrigger>
      </TabsList>
      <div className="mt-8">
        <TabsContent className=" overflow-auto " value="cli">
          {tab1Content}
        </TabsContent>
        <TabsContent className="p-2  overflow-auto" value="manual">
          {tab2Content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
