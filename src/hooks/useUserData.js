import { useEffect, useState } from "react";
import { getUserData } from "../apis/api";

export function useUserData() {
  const userId = 1;
  const [userData, setUserData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기
    const handleLoadUser = async () => {
      try {
        const { data } = await getUserData(userId);
        setUserData(data[0]);
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }

      // console.log("userdata", userData);
    };

    handleLoadUser();
  }, []);

  return { userData, loadingError };
}
