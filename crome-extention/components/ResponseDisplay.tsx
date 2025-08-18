'use client';

import React from 'react';
import { ResponseType } from '@/lib/types';

interface ResponseDisplayProps {
  response: string;
  responseType: ResponseType;
  isLoading: boolean;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  response,
  responseType,
  isLoading
}) => {
  if (!response && !isLoading) return null;

  const formatResponse = (responseText: string) => {
    try {
      const parsed = JSON.parse(responseText);
      
      // Extract actual AI response content
      if (parsed.data) {
        return parsed.data.map((item: any, index: number) => {
          if (item.type === 'start') {
            return (
              <div key={index} className="mb-2 p-2 bg-blue-50 rounded text-sm text-blue-800">
                🤖 <strong>{item.model}</strong> started responding...
              </div>
            );
          }
          if (item.type === 'content' && item.content) {
            return (
              <div key={index} className="mb-2 p-3 bg-gray-50 rounded">
                <div className="whitespace-pre-wrap text-gray-800">
                  {item.content}
                </div>
              </div>
            );
          }
          return null;
        });
      }
      
      // Fallback to formatted JSON
      return (
        <pre className="whitespace-pre-wrap text-sm text-gray-700">
          {JSON.stringify(parsed, null, 2)}
        </pre>
      );
    } catch {
      // Plain text response
      return (
        <div className="whitespace-pre-wrap text-gray-800">
          {responseText}
        </div>
      );
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-700">Response:</h3>
        {isLoading && (
          <div className="flex items-center text-blue-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            <span className="text-sm">Processing...</span>
          </div>
        )}
      </div>
      
      <div 
        className={`p-4 rounded-lg border max-h-96 overflow-auto ${
          responseType === 'error' 
            ? 'bg-red-50 border-red-200' 
            : 'bg-white border-gray-200 shadow-inner'
        }`}
      >
        {isLoading ? (
          <div className="text-center py-8 text-gray-500">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ) : responseType === 'error' ? (
          <div className="text-red-800 font-medium">
            {response}
          </div>
        ) : (
          formatResponse(response)
        )}
      </div>
    </div>
  );
};
