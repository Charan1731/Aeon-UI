'use client';

import React from 'react';

import { CodeBlock } from '@/components/ui/code-block';
export function CodeBlockDemo({
  code,
  filename,
  highlightLines,
}: {
  code: string;
  filename?: string;
  highlightLines?: number[];
}) {
  return (
    <div className="max-w-4xl mx-auto w-full  ">
      <CodeBlock
        language="tsx"
        filename={filename || ''}
        highlightLines={highlightLines}
        code={code}
      />
    </div>
  );
}
