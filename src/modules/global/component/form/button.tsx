import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type VariantTypes =
  | 'primary'
  | 'primary-text'
  | 'secondary'
  | 'danger'
  | 'white'
  | 'white-text'
  | 'gray'
  | 'primary-outline'
  | 'danger-outline';
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  variant?: VariantTypes;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  classWrapper?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'lg',
  isLoading,
  className,
  classWrapper,
  ...props
}: ButtonProps) => {
  const variantButton = useMemo(() => {
    switch (variant) {
      case 'primary':
        return `text-white bg-primary hover:bg-opacity-90 disabled:text-neutral-40 disabled:bg-neutral-20 disabled:border-neutral-30 focus:outline-2 focus:ring-primary`;
      case 'primary-text':
        return `text-primary bg-transparent hover:opacity-80 dark:bg-transparent dark:hover:bg-opacity-90 disabled:opacity-60`;
      case 'secondary':
        return `text-white bg-secondary hover:bg-opacity-90 disabled:text-neutral-40 disabled:bg-neutral-20 disabled:border-neutral-30 focus:outline-2 focus:ring-secondary`;
      case 'danger':
        return `text-white bg-red-700 dark:bg-red-700 dark:hover:bg-opacity-90 dark:focus:ring-danger-200 border border-red-700 hover:border-red-300`;
      case 'white':
        return `text-white bg-transparent dark:bg-transparent disabled:opacity-60 border border-white`;
      case 'white-text':
        return `text-white bg-transparent dark:bg-transparent disabled:opacity-60`;
      case 'gray':
        return `text-neutral-100 bg-neutral-20 dark:bg-neutral-20 disabled:opacity-60 border border-neutral-20`;
      case 'primary-outline':
        return `bg-transparent text-primary outline outline-primary hover:bg-opacity-90 focus:outline-2 focus:ring-primary dark:hover:bg-opacity-90 dark:focus:ring-primary`;
      case 'danger-outline':
        return `bg-white text-red-700 outline outline-red-700 hover:bg-opacity-90 focus:outline-2 focus:ring-red-300 dark:hover:bg-opacity-90 dark:focus:ring-red-300}`;
      default:
        return `text-white bg-primary hover:bg-opacity-90 dark:bg-primary dark:hover:bg-opacity-90 dark:focus:ring-primary focus:ring-primary `;
    }
  }, [variant]);
  const baseClass =
    'font-semibold rounded-[6px] text-center align-center items-center flex justify-center disabled:cursor-not-allowed cursor-pointer';

  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'lg':
        return ['h-[43px]', 'font-semibold', 'text-lg', 'px-4', 'py-2'];
      case 'md':
        return ['h-[36px]', 'text-base', 'font-semibold', 'px-4', 'py-1.5'];
      case 'sm':
        return ['h-[29px]', 'text-sm', 'font-semibold', 'px-4', 'py-1'];
      default:
        return ['min-h-6', 'text-base', 'px-4', 'py-3'];
    }
  }, [size]);

  return (
    <button
      className={twMerge(
        variantButton,
        sizeClasses,
        baseClass,
        className,
        classWrapper,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="my-0.5 animate-spin" />
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
