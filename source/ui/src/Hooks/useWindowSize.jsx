import { useState, useEffect } from 'react';
import { debounce } from 'debounce';

const useWindowSize = () => {
  const isWindowClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState(isWindowClient ? window.innerWidth : undefined);

  useEffect(() => {
    const setSize = () => setWindowSize(window.innerWidth);

    if (isWindowClient) {
      window.addEventListener('resize', debounce(setSize, 100));
      return () => window.removeEventListener('resize', debounce(setSize, 100));
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
};

export default useWindowSize;
