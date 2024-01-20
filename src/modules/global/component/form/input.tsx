import type { InputHTMLAttributes } from 'react';
import React, { useRef, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { ILabel } from './label-form';
import { Label } from './label-form';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'numeric' | 'password' | 'email' | 'date' | 'number' | 'file';
  placeholder?: string;
  name?: string;
  isError?: boolean;
  errorMessage?: string;
  value: string | number;
  disabled?: boolean;
  classNameWrapper?: string;
  classNameInput?: string;
  subfix?: string;
  prefix?: string;
}
interface IInputLbalel extends IInput, ILabel {}

export const Input = ({
  type = 'text',
  placeholder = 'Input here',
  name,
  isError,
  classNameInput,
  ...props
}: IInput) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={twMerge(
        isError ? 'mb-1 outline-red-900' : 'mb-2 focus:outline-primary',
        'border p-2 my-2 rounded-md w-full px-3 py-2 h-10 border-neutral-40 text-neutral-90 bg-neutral-10',
        classNameInput,
      )}
      {...props}
    />
  );
};

export const InputDate = ({
  placeholder = 'Pilih Tanggal',
  name,
  isError,
  classNameInput,
  label,
  handleChange,
  value,
}: any) => {
  const [inputType, setInputType] = useState<string>('text');

  return (
    <div className={twMerge('flex flex-col')}>
      <Label label={label} />
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        className={twMerge(
          isError
            ? 'mb-1 outline-red-900'
            : 'mb-2 focus: outline-none focus:border focus:border-primary',
          'border p-2 my-2 rounded-md w-full px-3 py-2 h-10 border-neutral-40 text-neutral-90 bg-neutral-10 text-sm',
          classNameInput,
        )}
        onFocus={() => {
          setInputType('date');
        }}
        onBlur={() => {
          setInputType('text');
        }}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

interface IInputFileInterface {
  label: string;
  disabled?: boolean;
  documentName?: string;
  handleFile: any;
}

export const InputFile = (props: IInputFileInterface) => {
  const inputFileForm = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputFileForm.current) {
      inputFileForm.current.click();
    }
  };

  return (
    <div className={twMerge('flex flex-col w-full justify-start')}>
      <div className="flex justify-start">
        <Label label={props.label} />
      </div>
      <div
        className={twMerge(
          'border-neutral-40',
          props.disabled ? 'bg-neutral-20 border-neutral-20' : ' bg-neutral-10',
          ' p-2 mt-2 rounded-md w-full px-3 py-2 h-10 border text-neutral-90 flex items-center cursor-text',
        )}
      >
        <input
          type="file"
          className="file-input file-input-md hidden w-full file:w-full file:justify-start file:rounded-md file:border-none file:border-gray-300 file:bg-transparent file:font-normal file:capitalize file:text-gray-400"
          onChange={props.handleFile}
          ref={inputFileForm}
          // accept=".pdf"
        />
        <div className="flex w-full justify-start text-sm">
          {props.documentName ? (
            <div>{props.documentName}</div>
          ) : (
            <p className="text-neutral-40">Unggah Dokumen</p>
          )}
        </div>
        <div
          className="bg-secondary flex cursor-pointer items-center rounded-md px-4 py-1 text-sm font-semibold text-[#5BB24A]"
          onClick={handleClick}
        >
          Upload
        </div>
      </div>
    </div>
  );
};

export const InputLabel = ({
  label,
  type = 'text',
  name,
  placeholder = 'Input here',
  isError = false,
  errorMessage = '',
  required = false,
  classNameWrapper,
  classNameInput,
  classNameLabel,
  subfix,
  prefix,
  filled = '',
  disabled,
  ...props
}: IInputLbalel) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHidden, setIsHidden] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={twMerge('flex flex-col', classNameWrapper)}>
      <Label
        label={label}
        required={required}
        classNameLabel={classNameLabel}
        filled={filled}
      />
      <div
        className={twMerge(
          'border-neutral-40',
          !isError && isFocused && 'border-primary',
          isError && isFocused && ' border-red-500 ',
          disabled ? 'bg-neutral-20 border-neutral-20' : ' bg-gray-10',
          ' p-2 mt-1 rounded-md w-full px-3 py-2 h-10 border text-neutral-90 flex items-center cursor-text',
          classNameInput,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleDivClick}
      >
        <span className="pr-1 text-sm">{prefix || ''}</span>
        <input
          type={type === 'password' && !isHidden ? 'text' : type}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          className={twMerge(
            disabled ? 'bg-neutral-20' : 'bg-transparent',
            'h-10 w-full outline-none autofill:bg-none text-sm',
          )}
          disabled={disabled}
          {...props}
        />
        {subfix && (
          <span className="w-full pl-1 text-end text-sm">{subfix || ''}</span>
        )}
        {type === 'password' && (
          <span
            className="flex cursor-pointer justify-end pl-1 text-end text-sm text-neutral-40"
            onClick={() => setIsHidden((curr) => !curr)}
          >
            {isHidden ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </span>
        )}
      </div>
      {isError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputLabel;
