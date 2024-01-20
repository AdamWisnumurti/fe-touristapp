import { useCallback, useState } from 'react';

export const useInput = (initState: any) => {
  const [data, setData] = useState<typeof initState>(initState);
  const handleInput = useCallback(
    (obj: string, value: string | number) => {
      setData({ ...data, [obj]: value });
    },
    [data],
  );
  return [data, handleInput];
};
