interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'numeric' | 'password' | 'email' | 'date' | 'file';
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
interface ILabel {
  name?: string;
  label: string;
  required?: boolean;
  classNameLabel?: string;
  filled?: string | number;
}

export interface IInputLbalel extends IInput, ILabel {}
