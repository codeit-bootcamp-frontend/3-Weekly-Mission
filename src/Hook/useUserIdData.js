import { UserIdData } from "./Api";
import { useEffect, useState } from "react";

export default function useUserIdData() {
  const [userIdDatas, setUserIdDatas] = useState(null);

  useEffect(() => {
  async function fetchUserIdData() {
    try {
      const response = await UserIdData();
      const result = response.data // 응답에서 'data' 속성에 접근
      setUserIdDatas(result);
    } catch (error) {
      console.log('프로필 데이터를 불러오는 중 에러 발생:', error);
    }
  }
    fetchUserIdData();
  }, []);
  return {userIdDatas}
}



// export default function useUserIdData() {
//   const [userIdDatas, setUserIdDatas] = useState(null);

//   async function fetchUserIdData() {
//     try {
//       const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
//       const data = await response.json();
//       const result = data.data; // 응답에서 'data' 속성에 접근
//       setUserIdDatas(result);
//     } catch (error) {
//       console.log('프로필 데이터를 불러오는 중 에러 발생:', error);
//     }
//   }
//   useEffect(() => {
//     fetchUserIdData();
//   }, []);
//   return {userIdDatas}
// }


// export default function useUserIdData() {
//   const [userIdDatas, setUserIdDatas] = useState(null);

//   const fetchUserIdData = async () => {
//     try {
//       const response = await UserIdData();
//       const result = response.data; // 응답에서 'data' 속성에 접근
//       setUserIdDatas(result);
//     } catch (error) {
//       console.log('프로필 데이터를 불러오는 중 에러 발생:', error);
//     }
//   };
//   useEffect(() => {
//     fetchUserIdData();
//   }, []);
//   return {userIdDatas}
// }




// export default function useUserIdDate() {
//   const [userIdDatas, setUserIdDatas] = useState(null);

//   const fetchUserIdData = async () => {
//     try {
//       const {response} = await UserIdData();
//       setUserIdDatas(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchUserIdData();
//   }, []);

//   return {userIdDatas}  
    
// }



