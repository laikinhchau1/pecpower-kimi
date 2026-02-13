import { useState, useEffect, useCallback } from 'react';

export interface AdminData {
  vi: Record<string, any>;
  en: Record<string, any>;
}

const STORAGE_KEY = 'hydropower_admin_data';

const defaultData: AdminData = {
  vi: {},
  en: {},
};

export function useAdmin() {
  const [data, setData] = useState<AdminData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse admin data:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const updateContent = useCallback((lang: 'vi' | 'en', key: string, value: any) => {
    setData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [key]: value,
      },
    }));
  }, []);

  const updateNestedContent = useCallback((lang: 'vi' | 'en', path: string, value: any) => {
    setData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData[lang];
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in current)) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  }, []);

  const getContent = useCallback((lang: 'vi' | 'en', key: string, defaultValue: any = '') => {
    return data[lang]?.[key] ?? defaultValue;
  }, [data]);

  const getNestedContent = useCallback((lang: 'vi' | 'en', path: string, defaultValue: any = '') => {
    const keys = path.split('.');
    let current = data[lang];
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return defaultValue;
      }
    }
    
    return current ?? defaultValue;
  }, [data]);

  const resetData = useCallback(() => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify(data, null, 2);
  }, [data]);

  const importData = useCallback((jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.vi && parsed.en) {
        setData(parsed);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  }, []);

  const mergeWithOriginal = useCallback(async (originalData: AdminData) => {
    setData(prev => ({
      vi: { ...originalData.vi, ...prev.vi },
      en: { ...originalData.en, ...prev.en },
    }));
  }, []);

  return {
    data,
    isLoaded,
    updateContent,
    updateNestedContent,
    getContent,
    getNestedContent,
    resetData,
    exportData,
    importData,
    mergeWithOriginal,
    setData,
  };
}
