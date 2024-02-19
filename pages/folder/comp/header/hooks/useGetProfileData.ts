import { useCallback, useEffect, useState } from 'react';

import { getProfileData, IProfileData } from '@api/folder-page/getProfileData';

// {
//   "data": [
//     {
//       "id": 1,
//       "created_at": "2023-06-04T13:03:01+00:00",
//       "name": "코드잇",
//       "image_source": "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
//       "email": "codeit@codeit.com",
//       "auth_id": "b9d4649a-8d92-4776-8f69-80abe2786721"
//     }
//   ]
// }

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState<IProfileData | null>(null);

  const fetchAndSetProfileData = useCallback(async () => {
    // const { data } = await getProfileData();
    const res = await getProfileData();

    if (!res) return;

    const { data } = res;
    setProfileData(data[0]); // 로그인 유저 정보가 대체 왜 배열로 오는 거 🤔❓❓❓❓?
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);

  return profileData;
};

export { useGetProfileData };
