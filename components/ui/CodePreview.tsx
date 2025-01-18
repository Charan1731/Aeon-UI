import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaCode, FaEye } from 'react-icons/fa';

interface TabsProps {
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
}

export function CodePreview({ tab1Content, tab2Content }: TabsProps) {
  return (
    <Tabs defaultValue="Code" className="overflow-hidden h-full">
      <TabsList className="flex w-full justify-start border-b border-gray-300 dark:border-gray-700">
        <TabsTrigger
          value="Code"
          className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none flex items-center"
        >
          <FaEye className="mr-2" />
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="Preview"
          className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none flex items-center"
        >
          <FaCode className="mr-2" />
          Code
        </TabsTrigger>
      </TabsList>
      <div className="mt-8 border max-h-full border-gray-300 dark:border-gray-700 rounded-lg ">
        <TabsContent
          className="p-2 max-h-96 overflow-auto w-full  "
          value="Preview"
        >
          {tab2Content}
        </TabsContent>
        <TabsContent className="p-2 max-h-full overflow-hidden flex align-center justify-center w-full " value="Code">
          {tab1Content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
