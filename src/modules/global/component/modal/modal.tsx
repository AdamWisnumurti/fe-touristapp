import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import React, { Fragment, useMemo } from 'react';
import { HiXCircle } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

export const Modal = ({
  isOpen,
  toggleClose,
  children,
  modalTitle,
  size = 'lg',
}: {
  isOpen: boolean;
  toggleClose: () => void;
  children?: ReactNode;
  modalTitle?: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}) => {
  const maxSizeClass = useMemo(() => {
    switch (size) {
      case 'lg':
        return 'md:max-w-lg';
      case 'xl':
        return 'md:max-w-xl';
      case '2xl':
        return 'md:max-w-2xl';
      case '3xl':
        return 'md:max-w-3xl';
      case '4xl':
        return 'md:max-w-4xl';
      case '5xl':
        return 'md:max-w-5xl';
      case '6xl':
        return 'md:max-w-6xl';
      default:
        return 'md:max-w-lg';
    }
  }, [size]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="max-w relative z-[51]" onClose={toggleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="font-poppins fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={twMerge(
                  maxSizeClass,
                  'w-full max-w-sm rounded-xl bg-white text-center',
                )}
                data-cy="modal-add"
              >
                <Dialog.Title className="flex items-center justify-between rounded-t-xl bg-primary p-4 font-semibold text-white">
                  <span className="font-semibold capitalize">
                    {modalTitle || ''}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={toggleClose}
                    data-cy="modal-add-close-button"
                  >
                    <HiXCircle size={20} />
                  </span>
                </Dialog.Title>
                {/* Children Error */}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
