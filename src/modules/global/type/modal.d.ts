import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
}
export interface DeleteModalProps {
  modal: ModalProps;
  setModal: (value: ModalProps) => any;
  action: (value: string) => void;
  type: string;
}
export interface ResponseModalProps {
  modal: ModalProps;
  setModal: (value: ModalProps) => void;
}
