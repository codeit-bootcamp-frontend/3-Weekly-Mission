import { useEffect } from 'react';

import { debounce } from './debounce';
import { DebouncedFunction, FunctionWithArguments } from './types';

export const useDebounce = <T extends FunctionWithArguments>(fn: T, wait: number): DebouncedFunction<T> => {
  const [debouncedFunc, teardown] = debounce<T>(fn, wait);

  useEffect(() => () => teardown(), []);

  return debouncedFunc;
};
