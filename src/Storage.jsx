import { useState, useEffect } from 'react';

function useStorage(stroageValue, initialValue = '') {

  const [hookValue, setHookValue] = useState(() => {

    const storedValue = localStorage.getItem(stroageValue);
    
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {

    sessionStorage.setItem(stroageValue, hookValue);

    localStorage.setItem(stroageValue, hookValue);
    
  }, [stroageValue, hookValue]);

  return [hookValue, setHookValue];
}

export default useStorage;
