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
        return `text-primary bg-transparent hover:bg-secondary dark:bg-transparent dark:hover:bg-secondary disabled:opacity-60`;
      case 'secondary':
        return `text-primary bg-transparent  hover:bg-secondary dark:bg-transparent dark:hover:bg-secondary border border-primary`;
      case 'danger':
        return `text-white bg-danger-100 dark:bg-danger-100 dark:hover:bg-secondary dark:focus:ring-danger-200 border border-danger-100 hover:border-danger-200`;
      case 'white':
        return `text-white bg-transparent dark:bg-transparent disabled:opacity-60 border border-white`;
      case 'white-text':
        return `text-white bg-transparent dark:bg-transparent disabled:opacity-60`;
      case 'gray':
        return `text-neutral-100 bg-neutral-20 dark:bg-neutral-20 disabled:opacity-60 border border-neutral-20`;
      case 'primary-outline':
        return `bg-transparent text-primary outline outline-primary hover:bg-secondary focus:outline-2 focus:ring-primary dark:hover:bg-secondary dark:focus:ring-primary`;
      case 'danger-outline':
        return `bg-white text-danger-100 outline outline-danger-100 hover:bg-secondary focus:outline-2 focus:ring-danger-200 dark:hover:bg-secondary dark:focus:ring-danger-200}`;
      default:
        return `text-white bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-primary focus:ring-primary `;
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
