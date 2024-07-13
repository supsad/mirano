import { useEffect, useState, useCallback } from 'react';
import debounce from '@utils/debounce';

const useWindowDimensions = (delay = 0) => {
  const hasWindow =  typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return { width, height };
  }, [hasWindow]);
  
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      const debouncedHandleResize = debounce(handleResize, delay);
      window.addEventListener('resize', debouncedHandleResize);
      return () => window.removeEventListener('resize', debouncedHandleResize);
    }
  }, [delay, getWindowDimensions, hasWindow]);
  
  return windowDimensions;
};

export default useWindowDimensions;
