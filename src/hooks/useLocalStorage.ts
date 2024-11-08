import { useEffect, useState } from "react";

// Utility function to get stored value from local storage or return a default value
const getStoredValue = <T>(key: string, defaultValue: T): T => {
  try {
    const savedItem = localStorage.getItem(key);
    if (savedItem) {
      return JSON.parse(savedItem);
    }
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
  }
  return defaultValue;
};

// Custom hook to manage state with local storage
export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    getStoredValue(key, defaultValue)
  );

  useEffect(() => {
    // Save to local storage only if the value has changed
    const storedValue = getStoredValue(key, defaultValue);
    if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, defaultValue]);

  // Sync with localStorage changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue ? JSON.parse(event.newValue) : defaultValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, defaultValue]);

  return [value, setValue];
};
