import { useCallback, useEffect, useState } from 'react';

import { IProfileData } from '@api/folder-page/getProfileData';
import { getSampleProfileData } from '@api/shared-page/getSampleProfileData';

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState<IProfileData | null>(null);

  const fetchAndSetProfileData = useCallback(async () => {
    const data = await getSampleProfileData();

    if (data) {
      setProfileData({
        id: data.id,
        created_at: '',
        name: data.name,
        email: data.email,
        image_source: data.profileImageSource,
        auth_id: '',
      });
    }
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);

  return profileData;
};

export { useGetProfileData };
