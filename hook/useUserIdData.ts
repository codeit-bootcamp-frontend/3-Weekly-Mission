import { UserIdData } from "../libs/Api";
import { useEffect, useState } from "react";
import { UserIdType } from "../types/Types";

export default function useUserIdData() {
  const [userIdDatas, setUserIdDatas] = useState<UserIdType[] | null>(null);

  useEffect(() => {
    async function fetchUserIdData() {
      try {
        const response = await UserIdData();
        const result = response.data; // 응답에서 'data' 속성에 접근
        setUserIdDatas(result);
      } catch (error) {
        console.log("프로필 데이터를 불러오는 중 에러 발생:", error);
      }
    }
    fetchUserIdData();
  }, []);
  return { userIdDatas };
}
