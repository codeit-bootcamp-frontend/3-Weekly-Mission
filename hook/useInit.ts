import { DependencyList, useEffect, useRef } from "react";

export function useEffectAfterMount(callBack: () => void, x: DependencyList) {
  const a = useRef(false);
  useEffect(() => {
    if (a.current) {
      callBack();
    }
    a.current = true;
  }, x);
  return a;
}
