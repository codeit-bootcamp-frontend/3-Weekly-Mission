import { useEffect, useState } from "react";
import { getUserData, User } from "@/api/api";

export function useUserData() {
  const [userData, setUserData] = useState<User | null>(null);
  console.log(userData);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기
    const handleLoadUser = async () => {
      try {
        const { data } = await getUserData();
        console.log("data", data);
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
