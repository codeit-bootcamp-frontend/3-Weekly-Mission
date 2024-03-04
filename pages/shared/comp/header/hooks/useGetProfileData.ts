import { useCallback, useEffect, useState } from 'react';

import { getProfileData, IProfileData } from '@api/folder-page/getProfileData';

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState<IProfileData | null>(null);

  const fetchAndSetProfileData = useCallback(async () => {
    try {
      const res = await getProfileData();

      const data = res.data[0];

      setProfileData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);

  return profileData;
};

export { useGetProfileData };
