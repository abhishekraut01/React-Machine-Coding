// components/RequestHistory.tsx
'use client';

import React from 'react';
import { HistoryItem } from '@/lib/types';

interface RequestHistoryProps {
  history: HistoryItem[];
  onSelectItem: (item: HistoryItem) => void;
  onClearHistory: () => void;
}

export const RequestHistory: React.FC<RequestHistoryProps> = ({
  history,
  onSelectItem,
  onClearHistory
}) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Recent Requests</h3>
        <button
          onClick={onClearHistory}
          className="text-sm text-red-600 hover:text-red-800"
        >
          Clear History
        </button>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="p-3 bg-gray-50 rounded-md border cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => onSelectItem(item)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">
                  {item.request.chatTitle}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {item.request.prompt}
                </p>
                <p className="text-xs text-gray-500">
                  Model: {item.request.model}
                </p>
              </div>
              <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                {new Date(item.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
