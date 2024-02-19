import { MutableRefObject, useEffect, useState } from 'react';

import { useObserverOnScroll } from '@hooks/useObserverOnScroll';

type MutateVisibleState<T extends HTMLElement, U> =
  | (({
      isTargetVisible,
      isIntersecting,
      target,
    }: {
      isTargetVisible: boolean;
      isIntersecting: boolean;
      target: T | null;
    }) => U)
  | boolean;

export const useTargetVisibleState = <T extends HTMLElement, U>(
  ref: MutableRefObject<T | null>,
  mutate?: MutateVisibleState<T, U>,
) => {
  const [isTargetVisible, setTargetVisibleState] = useState(true);

  const {
    intersetcionResult: { isIntersecting, target },
  } = useObserverOnScroll(ref);

  useEffect(() => {
    if (!mutate) {
      setTargetVisibleState(isIntersecting);

      return;
    }

    const mutatedResult: boolean =
      typeof mutate === 'function' ? !!mutate({ isIntersecting, target, isTargetVisible }) : mutate;

    if (mutatedResult) {
      setTargetVisibleState(true);
    } else {
      setTargetVisibleState(false);
    }
  }, [isIntersecting, mutate]);

  return isTargetVisible;
};
