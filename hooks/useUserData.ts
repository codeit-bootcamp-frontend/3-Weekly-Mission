import { useEffect, useState } from "react";
import { getUserData } from "@/apis/api";

export function useUserData() {
  const [userData, setUserData] = useState<any>();
  // const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기
    const handleLoadUser = async () => {
      try {
        const { data } = await getUserData();
        setUserData(data[0]);
        // setLoadingError(null);
      } catch (e) {
        // setLoadingError(e);
        console.error(e);
        return;
      } finally {
      }
    };

    handleLoadUser();
  }, []);

  return { userData };
}
