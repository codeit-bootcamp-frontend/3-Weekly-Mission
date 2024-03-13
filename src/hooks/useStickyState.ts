import { useState, Dispatch, SetStateAction } from 'react';

export interface StickyStateHook {
  (defaultValue: boolean): [boolean, Dispatch<SetStateAction<boolean>>];
}

const useStickyState: StickyStateHook = (defaultValue) => {
  const [isSticky, setIsSticky] = useState<boolean>(defaultValue);
  return [isSticky, setIsSticky];
};

export default useStickyState;
