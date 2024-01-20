import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@global/component';

export const PageNotFound = () => {
  const router = useRouter();
  return (
    <div
      id="popup-modal"
      className="fixed z-50 mx-auto flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gradient-to-br from-[#787777] to-[#E9E9E9] p-4 md:inset-0"
    >
      <div className="relative h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-gray-100 shadow-lg dark:bg-gray-100">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 h-16 w-16 text-red-500 dark:text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-darkgrey dark:text-darkgrey mb-5 pb-2 text-lg font-normal">
              Halaman tidak ditemukan
            </h3>
            <div className="flex justify-center">
              <Button onClick={() => router.push('/')}>Back To Home</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
