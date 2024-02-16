import { useEffect } from "react";
import { VoidFunc } from "../types/functionType";

export default function useEffectOnce(callback: VoidFunc) {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
