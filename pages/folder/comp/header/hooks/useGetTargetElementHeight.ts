import { MutableRefObject, useEffect, useState } from 'react';

export const useGetTargetElementHeight = <T extends HTMLElement>(targetRef: MutableRefObject<T | null>) => {
  const [targetHeight, setTargetHeight] = useState<number>();

  useEffect(() => {
    if (targetRef.current) {
      setTargetHeight(targetRef.current.clientHeight);
    }
  }, []);

  return { targetHeight };
};
