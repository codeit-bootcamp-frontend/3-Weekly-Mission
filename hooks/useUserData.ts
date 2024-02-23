import { useEffect, useState } from "react";
import { getUserData } from "@/api/api";
import { User } from "@/@types/api/interface";

export function useUserData() {
  const [userData, setUserData] = useState<User | null>(null);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기
    const handleLoadUser = async () => {
      try {
        const { data } = await getUserData();
        setUserData(data[0]);
      } catch (e) {
        console.error(e);
        return;
      } finally {
      }
    };

    handleLoadUser();
  }, []);

  return { userData };
}
