import { useEffect, useRef } from "react";

export function useInitializationEffect(callBack, x) {
  const a = useRef(false);
  useEffect(() => {
    if (a.current) {
      callBack();
    }
    a.current = true;
  }, x);
  return a;
}
