// components/CurlImporter.tsx
'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { parseCurl } from '@/lib/utils';
import { CurlData } from '@/lib/types';

interface CurlImporterProps {
  onImport: (data: CurlData) => void;
}

export const CurlImporter: React.FC<CurlImporterProps> = ({ onImport }) => {
  const [curlCommand, setCurlCommand] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleImport = (): void => {
    try {
      const parsed = parseCurl(curlCommand);
      onImport(parsed);
      setCurlCommand('');
      setIsVisible(false);
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  if (!isVisible) {
    return (
      <Button
        variant="secondary"
        onClick={() => setIsVisible(true)}
        className="mb-4"
      >
        Import from cURL
      </Button>
    );
  }

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Import from cURL</h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsVisible(false)}
        >
          ✕
        </Button>
      </div>
      
      <textarea
        value={curlCommand}
        onChange={(e) => setCurlCommand(e.target.value)}
        placeholder="Paste your cURL command here..."
        className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <div className="flex gap-2 mt-3">
        <Button onClick={handleImport} disabled={!curlCommand.trim()}>
          Import
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCurlCommand('')}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
