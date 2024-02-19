import { useCallback, useEffect, useState } from 'react';

import { getSampleUserFolders, type ISampleUserFoldersResponse } from '@api/shared-page/getSampleUserFolders';

type TLinks = ISampleUserFoldersResponse['folder']['links'];
type TUserInfo = Omit<ISampleUserFoldersResponse['folder'], 'links'>;

const useGetUserFolders = () => {
  const [userFolders, setUserFolders] = useState<{ links: TLinks | []; userInfo: TUserInfo | null }>({
    links: [],
    userInfo: null,
  });

  const fetchAndSetFolders = useCallback(async () => {
    const res = await getSampleUserFolders();

    if (res) {
      const {
        folder: { links, ...rest },
      } = res;
      setUserFolders({ links, userInfo: rest });
    }
  }, []);

  useEffect(() => {
    fetchAndSetFolders();
  }, [fetchAndSetFolders]);

  return userFolders;
};

export { useGetUserFolders };
