/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer, useReducer } from 'react';

const useToggle = (initial: any = false) => {
  const [state, toggleState] = useReducer<Reducer<boolean, void>, any>((prev) => !prev, initial, Boolean);

  return [state, toggleState] as const;
};

export { useToggle };
