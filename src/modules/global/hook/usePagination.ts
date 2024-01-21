/* eslint-disable react-hooks/exhaustive-deps */
// import { dir } from "console";
import { useCallback, useEffect, useState } from 'react';
// import type { IListRumah } from '@global/data';
// import { SortingRule } from "react-table";

export const usePagination = (
  service: (params: {
    page: number; // halaman
  }) => any,
) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetch = useCallback(async (page: number) => {
    const response = await service({
      page,
    });
    if (!response) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return response;
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetch(pageIndex)
      .then((json) => {
        if (json) {
          setData(() => json.data?.data);
          setPageCount(() => json.data?.total_pages);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        return e;
        // throw Error(e);
      });
  }, [pageIndex]);

  const reload = useCallback(() => {
    setIsLoading(true);
    fetch(1)
      .then((json) => {
        if (json) {
          // setPageCount(() => json.pagination.totalRows);
          setPageCount(() => json.data?.total_pages);
          setData(() => json.data?.data);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        return e;
      });
  }, []);

  return {
    reload,
    data,
    pageIndex,
    pageCount,
    isLoading,
    setData,
    setPageIndex,
  };
};
