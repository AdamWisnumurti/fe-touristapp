import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@global/component';

export const PageNotFound404 = () => {
  const router = useRouter();
  return (
    <div
      id="popup-modal"
      className="fixed z-50 mx-auto flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-20 p-4 md:inset-0"
    >
      <div className="relative h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-white">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 h-20 w-20 text-red-500 dark:text-red-500"
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
            <h3 className="mb-5 pb-2 text-xl font-semibold text-neutral-100 dark:text-neutral-100">
              Page Not Found
            </h3>
            <div className="flex justify-center">
              <Button onClick={() => router.push('/')} size="md">
                Back To Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound404;
