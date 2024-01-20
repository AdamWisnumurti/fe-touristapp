import { twMerge } from 'tailwind-merge';

export interface ILabel {
  name?: string;
  label: string;
  required?: boolean;
  classNameLabel?: string;
  filled?: string | number;
}

export const Label = ({
  label,
  name,
  required,
  classNameLabel,
  filled,
}: ILabel) => {
  return (
    <label
      htmlFor={name || label}
      className={twMerge(
        required && "after:content-['*'] after:ml-1 after:text-red-500",
        filled
          ? 'text-sm text-neutral-70 font-normal'
          : 'text-base font-medium text-neutral-90',
        classNameLabel,
      )}
    >
      {label}
    </label>
  );
};
