import type { TextareaHTMLAttributes } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Label } from './label-form';

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  name?: string;
  isError?: boolean;
  errorMessage?: string;
}

export interface ITextAreabalel extends ITextArea {
  label: string;
}

export const TextAreaLabel = ({
  label,
  name,
  placeholder = 'Input here',
  value,
  isError = false,
  errorMessage = '',
  ...props
}: ITextAreabalel) => {
  return (
    <div className="flex flex-col">
      <Label label={label || ''} />
      <textarea
        // type={type}
        name={name}
        placeholder={placeholder}
        // onChange={onChange}
        value={value}
        className={twMerge(
          isError ? 'mb-1' : 'mb-2',
          props?.disabled ? 'bg-neutral-20 border-neutral-20' : ' bg-white',
          ' p-2 mt-1 rounded-md w-full px-3 py-2 h-20 border border-neutral-40 text-neutral-90 flex items-center cursor-text focus:outline-primary',
        )}
        {...props}
      />
      {isError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default TextAreaLabel;
