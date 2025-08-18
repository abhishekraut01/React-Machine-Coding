'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { CurlImporter } from './CurlImporter';
import { RequestHistory } from './RequestHistory';
import { ResponseDisplay } from './ResponseDisplay';
import { 
  HistoryItem, 
  ResponseType, 
  CurlData,
  ChatRequest,
  CompletionRequest,
  ProxyRequest,
  AI_MODELS 
} from '@/lib/types';
import { 
  generateUUID, 
  saveToLocalStorage, 
  getFromLocalStorage 
} from '@/lib/utils';

interface FormData {
  chatTitle: string;
  prompt: string;
  model: string;
  authToken: string;
  cookies: string;
}

export const ApiTester: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    chatTitle: 'AI Assistant Chat',
    prompt: 'generate basic http backend in nodejs',
    model: 'claude',
    authToken: '',
    cookies: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [responseType, setResponseType] = useState<ResponseType>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [streamingResponse, setStreamingResponse] = useState('');

  const baseUrl = 'https://api-v2.aifiesta.ai/api';

  useEffect(() => {
    const savedFormData = getFromLocalStorage('apiTesterData', formData);
    setFormData(savedFormData);

    const savedHistory = getFromLocalStorage<HistoryItem[]>('requestHistory', []);
    setHistory(savedHistory);
  }, []);

  const updateFormData = (updates: Partial<FormData>): void => {
    const newFormData = { ...formData, ...updates };
    setFormData(newFormData);
    saveToLocalStorage('apiTesterData', newFormData);
  };

  const saveToHistory = (request: any, response: any): void => {
    const newEntry: HistoryItem = {
      id: generateUUID(),
      timestamp: new Date().toISOString(),
      request: {
        ...request,
        chatTitle: formData.chatTitle
      },
      response
    };

    const updatedHistory = [newEntry, ...history].slice(0, 50);
    setHistory(updatedHistory);
    saveToLocalStorage('requestHistory', updatedHistory);
  };

  const makeProxyRequest = async (url: string, data: any): Promise<any> => {
    const proxyRequest: ProxyRequest = {
      url,
      method: 'POST',
      data,
      authToken: formData.authToken,
      cookies: formData.cookies
    };

    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proxyRequest)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }

    return await response.json();
  };

  const createChat = async (title: string): Promise<string> => {
    const chatId = generateUUID();
    
    const payload: ChatRequest = {
      id: chatId,
      title: title,
      folderId: null
    };

    await makeProxyRequest(`${baseUrl}/chat`, payload);
    return chatId;
  };

  const sendCompletion = async (
    chatId: string, 
    promptText: string, 
    modelType: string
  ): Promise<any> => {
    const payload: CompletionRequest = {
      chatId: chatId,
      model: modelType,
      modelCount: 5,
      assetIds: [],
      type: "text",
      groupId: generateUUID(),
      prompt: promptText,
      assistantMessageId: generateUUID()
    };

    return await makeProxyRequest(`${baseUrl}/chat/completions`, payload);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (!formData.chatTitle || !formData.prompt || !formData.authToken) {
      setResponse('Please fill in all required fields (Chat Title, Prompt, and Auth Token)');
      setResponseType('error');
      return;
    }

    setIsLoading(true);
    setResponse('');
    setStreamingResponse('');

    try {
      const chatId = await createChat(formData.chatTitle);
      const result = await sendCompletion(chatId, formData.prompt, formData.model);
      
      setResponse(JSON.stringify(result, null, 2));
      setResponseType('success');
      
      saveToHistory({
        ...formData,
        chatId
      }, result);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setResponse(`Error: ${errorMessage}`);
      setResponseType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCurlImport = (curlData: CurlData): void => {
    try {
      if (curlData.data.prompt) {
        updateFormData({ prompt: curlData.data.prompt });
      }
      if (curlData.data.title) {
        updateFormData({ chatTitle: curlData.data.title });
      }
      if (curlData.data.model) {
        updateFormData({ model: curlData.data.model });
      }
    } catch (error) {
      alert('Failed to import cURL data');
    }
  };

  const handleHistorySelect = (item: HistoryItem): void => {
    updateFormData({
      chatTitle: item.request.chatTitle,
      prompt: item.request.prompt,
      model: item.request.model
    });
  };

  const clearHistory = (): void => {
    setHistory([]);
    saveToLocalStorage('requestHistory', []);
  };

  const clearResponse = (): void => {
    setResponse('');
    setResponseType('');
    setStreamingResponse('');
  };

  const selectedModel = AI_MODELS.find(m => m.value === formData.model);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">AI Chat API Tester</h1>
        <div className="text-sm text-gray-600">
          Model: <span className="font-medium text-blue-600">{selectedModel?.label}</span>
          {selectedModel?.category === 'premium' && (
            <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
              Premium
            </span>
          )}
        </div>
      </div>
      
      <CurlImporter onImport={handleCurlImport} />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Auth Token Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bearer Token *
          </label>
          <input
            type="password"
            value={formData.authToken}
            onChange={(e) => updateFormData({ authToken: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Bearer eyJhbGciOiJIUzI1NiIs..."
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Get this from your browser's Network tab when using AI Fiesta
          </p>
        </div>

        {/* Cookies Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cookies (optional)
          </label>
          <input
            type="text"
            value={formData.cookies}
            onChange={(e) => updateFormData({ cookies: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="__cf_bm=mXX4Nje73jWq..."
          />
        </div>

        {/* Model Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Model
          </label>
          <select
            value={formData.model}
            onChange={(e) => updateFormData({ model: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {AI_MODELS.map((model) => (
              <option key={model.value} value={model.value}>
                {model.label} {model.category === 'premium' ? '⭐' : ''}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Chat Title"
          value={formData.chatTitle}
          onChange={(e) => updateFormData({ chatTitle: e.target.value })}
          placeholder="Enter chat title..."
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt *
          </label>
          <textarea
            value={formData.prompt}
            onChange={(e) => updateFormData({ prompt: e.target.value })}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter your prompt here..."
            required
          />
        </div>

        <div className="flex space-x-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Request...
              </div>
            ) : (
              'Send Request'
            )}
          </Button>
          
          <Button
            type="button"
            variant="secondary"
            onClick={clearResponse}
          >
            Clear Response
          </Button>
        </div>
      </form>

      <ResponseDisplay 
        response={response}
        responseType={responseType}
        isLoading={isLoading}
      />

      <RequestHistory
        history={history}
        onSelectItem={handleHistorySelect}
        onClearHistory={clearHistory}
      />
    </div>
  );
};
