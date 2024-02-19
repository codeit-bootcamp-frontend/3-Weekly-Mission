import { MutableRefObject, useEffect, useState } from 'react';

// (false가 됐을 때 바닥에 nav 나오게 하면 되겠다.)
// 교차 중인지 여부
// 교차 중인 타겟
// 교차 중인 타겟의 정보
type TIntersetcionResult<T = HTMLElement> = {
  isIntersecting: boolean;
  target: T | null;
};

export const useObserverOnScroll = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  options?: IntersectionObserverInit,
) => {
  const [intersetcionResult, setIntersetcionResult] = useState<TIntersetcionResult<T>>({
    isIntersecting: false,
    target: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersetcionResult({
          isIntersecting: entry.isIntersecting,
          target: entry.target as T,
        });
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { intersetcionResult };
};
