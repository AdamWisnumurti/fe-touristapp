import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ISubHeader {
  text: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export const SubHeader = ({ text, size }: ISubHeader) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      case '3xl':
        return 'text-[32px]';
      case '4xl':
        return 'text-[36px]';
      default:
        return 'text-[28px]';
    }
  }, [size]);
  return (
    <p className={twMerge(sizeClass, 'text-neutral-800 font-semibold')}>
      {text}
    </p>
  );
};

export default SubHeader;
