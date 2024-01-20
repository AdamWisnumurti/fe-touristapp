import React from 'react';
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export const AccordionItem = ({
  isOpen,
  toggleOpen,
  title,
  children,
  weight = 'font-semibold',
}: {
  isOpen: boolean;
  toggleOpen: () => void;
  title: string;
  children?: React.ReactNode;
  weight?: string;
}) => {
  return (
    <div className="rounded-xl bg-white">
      <div
        className="flex cursor-pointer justify-between p-4"
        onClick={toggleOpen}
      >
        <p
          className={twMerge(
            isOpen ? 'text-neutral-800' : 'text-neutral-800',
            weight,
            'text-base',
          )}
        >
          {title}
        </p>
        <p>
          {isOpen ? (
            <span className="text-neutral-800">
              <MdKeyboardArrowUp size={24} />
            </span>
          ) : (
            <MdOutlineKeyboardArrowDown size={24} />
          )}
        </p>
      </div>
      {isOpen && (
        <div className=" p-4 pt-0 text-sm font-normal">
          <div className="">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
