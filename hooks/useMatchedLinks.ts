import { useCallback, useEffect, useState } from 'react';

import { useDebounce } from '@utils/debounce';
import { filterMatchedDatas } from '@utils/search/filterMatchedDatas';

type Obj = Record<string | number | symbol, any>;
type TotalLinks = Array<Obj>;
type MatchingFields<T extends TotalLinks> = T extends Array<infer U> ? Array<keyof U & string> : never;

export const useMatchedLinks = <T extends TotalLinks>(
  links: T,
  input: string | undefined,
  matchingFields: MatchingFields<T>,
  wait: number = 300,
): T => {
  const [matchedLinks, setMatchedLinks] = useState<T>(links);

  const handleMatchedLinks = useCallback(
    useDebounce(() => setMatchedLinks(links.filter((l) => filterMatchedDatas(l, input, matchingFields)) as T), wait),
    [links, input],
  );

  useEffect(() => {
    handleMatchedLinks();
  }, [handleMatchedLinks]);

  return matchedLinks;
};
