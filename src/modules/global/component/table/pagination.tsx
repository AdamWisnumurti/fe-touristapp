import type { Dispatch, SetStateAction } from 'react';
import React, { useCallback } from 'react';
import {
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

interface IPagination {
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

export const Pagination = ({
  pageIndex,
  setPageIndex,
  pageCount,
}: IPagination) => {
  const handlePageIndex = useCallback(
    (index: number) => {
      setPageIndex(index);
    },
    [setPageIndex],
  );

  const handleFirst = useCallback(() => {
    setPageIndex(1);
  }, [setPageIndex]);

  const handleLast = useCallback(() => {
    setPageIndex(pageCount);
  }, [setPageIndex, pageCount]);

  const handlePrevious = useCallback(() => {
    if (pageIndex !== 1) {
      setPageIndex(pageIndex - 1);
    }
  }, [pageIndex, setPageIndex]);

  const handleNext = useCallback(() => {
    if (pageIndex !== pageCount) {
      setPageIndex(pageIndex + 1);
    }
  }, [pageIndex, pageCount, setPageIndex]);

  const listPages = useCallback((index: number, count: number) => {
    if (index < 3) {
      return [1, 2, 3, 4, 5];
    }
    if (index > count - 3) {
      return [count - 4, count - 3, count - 2, count - 1, count];
    }
    return [index - 2, index - 1, index, index + 1, index + 2];
  }, []);

  return (
    <div className="grid w-full place-items-center overflow-x-scroll rounded-lg py-8 lg:overflow-visible">
      <ul className="flex items-center space-x-3">
        <li>
          <span
            className={twMerge(
              pageIndex > 1
                ? 'text-primary cursor-pointer'
                : 'text-neutral-40 cursor-not-allowed',
              'mx-1 flex items-center justify-center rounded bg-transparent p-0 text-sm transition duration-150 ease-in-out',
            )}
            aria-label="Prev"
            onClick={handleFirst}
          >
            <HiMiniChevronDoubleLeft size={20} />
          </span>
        </li>

        <li>
          <span
            className={twMerge(
              pageIndex > 1
                ? 'text-primary cursor-pointer'
                : 'text-neutral-40 cursor-not-allowed',
              'mx-1 flex items-center justify-center rounded bg-transparent p-0 text-sm transition duration-150 ease-in-out',
            )}
            aria-label="Prev"
            onClick={handlePrevious}
          >
            <HiMiniChevronLeft size={20} />
          </span>
        </li>

        {listPages(pageIndex, pageCount).map((item, key) => {
          return (
            <li key={key}>
              <span
                className={twMerge(
                  pageIndex === item
                    ? 'bg-primary border-primary text-white cursor-pointer'
                    : 'border-neutral-20 bg-white text-neutral-60',
                  'mx-1 flex h-9 min-w-[37px] px-3 cursor-pointer border items-center justify-center rounded py-0 text-sm transition duration-150 ease-in-out',
                )}
                aria-label="Prev"
                onClick={() => handlePageIndex(item)}
              >
                {item}
              </span>
            </li>
          );
        })}

        <li>
          <span
            className={twMerge(
              pageIndex !== pageCount
                ? 'text-primary cursor-pointer'
                : 'text-neutral-40 cursor-not-allowed',
              'mx-1 flex cursor-pointer items-center justify-center rounded bg-transparent p-0 text-sm transition duration-150 ease-in-out',
            )}
            aria-label="Next"
            onClick={handleNext}
          >
            <HiMiniChevronRight size={20} />
          </span>
        </li>

        <li>
          <span
            className={twMerge(
              pageIndex !== pageCount
                ? 'text-primary cursor-pointer'
                : 'text-neutral-40 cursor-not-allowed',
              'mx-1 flex cursor-pointer items-center justify-center rounded bg-transparent p-0 text-sm transition duration-150 ease-in-out',
            )}
            aria-label="Next"
            onClick={handleLast}
          >
            <HiMiniChevronDoubleRight size={20} />
          </span>
        </li>
      </ul>
    </div>
  );
};
