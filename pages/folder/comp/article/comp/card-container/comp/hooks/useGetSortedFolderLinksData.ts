import { useCallback, useEffect, useState } from 'react';

import { getSortedFolderLinksData, TFolderLink } from '@api/folder-page/getSortedFolderLinksData';

const useGetSortedFolderLinksData = (folderId: '' | number) => {
  const [sortedLinks, setSortedLinks] = useState<TFolderLink[] | null>(null);

  const fetchAndSetSortedLinks = useCallback(async () => {
    const res = await getSortedFolderLinksData(folderId);

    if (!res) return;

    const { data } = res;
    setSortedLinks(data);
  }, [folderId]);

  useEffect(() => {
    fetchAndSetSortedLinks();
  }, [fetchAndSetSortedLinks]);

  return sortedLinks;
};

export { useGetSortedFolderLinksData };
