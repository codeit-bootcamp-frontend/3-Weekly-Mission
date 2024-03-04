import { useCallback, useEffect, useState } from 'react';

import { getSortedFolderLinksData, TFolderLink } from '@api/folder-page/getSortedFolderLinksData';

const useGetSortedFolderLinksData = (folderIdAndName: { folderId: 'total' | number; folderName: string }) => {
  const [sortedLinks, setSortedLinks] = useState<TFolderLink[]>([]);

  const fetchAndSetSortedLinks = useCallback(async (folderId: '' | number) => {
    try {
      const res = await getSortedFolderLinksData(folderId);

      const {
        data: { folder },
      } = res;
      setSortedLinks(folder);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAndSetSortedLinks(folderIdAndName.folderId === 'total' ? '' : folderIdAndName.folderId);
  }, [fetchAndSetSortedLinks, folderIdAndName]);

  return sortedLinks;
};

export { useGetSortedFolderLinksData };
