import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(targets: HTMLDivElement[]) {
  const [showFixedAddLink, setShowFixedAddLink] = useState(false);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const isIntersecting: { [name: string]: boolean } = {};
    observer.current = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        const element = entry.target.innerHTML;
        if (entry.isIntersecting) {
          isIntersecting[element] = true;
          setShowFixedAddLink(false);
          break;
        } else {
          isIntersecting[element] = false;
          const check = Object.values(isIntersecting);

          if (
            check.every((element) => {
              return !element;
            })
          ) {
            setShowFixedAddLink(true);
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
  }, []);

  return showFixedAddLink;
}
