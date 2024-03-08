import { useCallback, useEffect, useState } from 'react';

import { getProfileData, IProfileData } from '@api/folder-page/getProfileData';
import { setUserId } from '@utils/session-storage/setUserId';

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState<IProfileData | null>(null);

  const fetchAndSetProfileData = useCallback(async () => {
    try {
      const res = await getProfileData();
      const { data } = res;

      setUserId(data[0].id);

      setProfileData(data[0]); // 로그인 유저 정보가 대체 왜 배열로 오는 거 🤔❓❓❓❓?}
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
