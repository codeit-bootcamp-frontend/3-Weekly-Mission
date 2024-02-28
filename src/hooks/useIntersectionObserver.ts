import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(
  targets: HTMLDivElement[],
  setIsShow: (vlaue: boolean) => void
) {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const isIntersecting: { [name: string]: boolean } = {};
    observer.current = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        const element = entry.target.innerHTML;
        if (entry.isIntersecting) {
          isIntersecting[element] = true;
          setIsShow(false);
          break;
        } else {
          isIntersecting[element] = false;
          const check = Object.values(isIntersecting);

          if (
            check.every((element) => {
              return !element;
            })
          ) {
            setIsShow(true);
          }
        }
      }
    });

    targets.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      targets.forEach((element) => {
        if (observer.current) {
          observer.current.unobserve(element);
        }
      });
    };
  }, [targets]);
}
