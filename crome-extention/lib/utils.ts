// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const saveToLocalStorage = (key: string, data: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }
  return defaultValue;
};

export const parseCurl = (curlCommand: string): { url: string; data: any } => {
  try {
    // Extract URL
    const urlMatch = curlCommand.match(/curl\s+['"]?([^'"?\s]+)['"]?/);
    
    // Extract JSON data from various curl formats
    const dataMatch = curlCommand.match(/--data-raw\s+['"]({.*})['"]/) || 
                     curlCommand.match(/-d\s+['"]({.*})['"]/) ||
                     curlCommand.match(/--data\s+['"]({.*})['"`]/);
    
    if (urlMatch && dataMatch) {
      const url = urlMatch[1];
      const data = JSON.parse(dataMatch[1]);
      
      return { url, data };
    }
    
    throw new Error('Could not parse cURL command');
  } catch (error) {
    throw new Error('Invalid cURL format or JSON data');
  }
};
