import type { RefObject } from 'react';
import { useState, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDivElement>) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return isClicked;
};

export default useClickOutside;
