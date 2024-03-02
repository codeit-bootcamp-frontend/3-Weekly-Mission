import { useEffect, useState } from "react";

interface UserData {
  email: string;
}

function FetchUserData(): UserData | null {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const result = await response.json();
        console.log(result);

        setUserData(result);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
        throw new Error("데이터를 가져오는 중에 오류 발생!");
      }
    }
    getUser();
  }, []);

  return userData;
}

export default FetchUserData;
