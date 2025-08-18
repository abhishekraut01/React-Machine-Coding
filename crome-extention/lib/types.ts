// lib/types.ts
export interface ChatRequest {
  id: string;
  title: string;
  folderId: string | null;
}

export interface CompletionRequest {
  chatId: string;
  model: string;
  modelCount: number;
  assetIds: string[];
  type: string;
  groupId: string;
  prompt: string;
  assistantMessageId: string;
}

export interface ApiResponse {
  data?: any;
  message?: string;
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  request: {
    chatTitle: string;
    prompt: string;
    model: string;
    chatId: string;
  };
  response: any;
}

export interface CurlData {
  url: string;
  data: any;
}

export type ResponseType = 'success' | 'error' | '';

export interface ProxyRequest {
  url: string;
  method: string;
  data: any;
}


// lib/types.ts
export interface ChatRequest {
  id: string;
  title: string;
  folderId: string | null;
}

export interface CompletionRequest {
  chatId: string;
  model: string;
  modelCount: number;
  assetIds: string[];
  type: string;
  groupId: string;
  prompt: string;
  assistantMessageId: string;
}

export interface ApiResponse {
  data?: any;
  message?: string;
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  request: {
    chatTitle: string;
    prompt: string;
    model: string;
    chatId: string;
  };
  response: any;
}

export interface ProxyRequest {
  url: string;
  method: string;
  data: any;
  authToken?: string;
  cookies?: string;
}

// Available AI models
export interface AIModel {
  value: string;
  label: string;
  category: 'premium' | 'free';
}

export const AI_MODELS: AIModel[] = [
  { value: 'claude', label: 'Claude Sonnet 4', category: 'premium' },
  { value: 'gpt-4', label: 'GPT-4', category: 'premium' },
  { value: 'gpt-3.5', label: 'ChatGPT 3.5', category: 'free' },
  { value: 'gemini', label: 'Gemini Pro', category: 'premium' },
  { value: 'deepseek', label: 'DeepSeek', category: 'free' },
  { value: 'perplexity', label: 'Perplexity Sonar Pro', category: 'premium' },
  { value: 'grok', label: 'Grok 4', category: 'premium' }
];
