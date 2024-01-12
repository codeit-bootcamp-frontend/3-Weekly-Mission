import { UserLinkData } from "./Api.js";
import { useState, useEffect } from "react";

export default function useUserLinkData(folderId) {
  const [linkData, setLinkData] = useState([]);
  
  useEffect(() => {
  async function fetchUserLinkData() {
    try {
      const response = await UserLinkData(folderId);
      const result = response.data; // response 안에 있는 links 데이터
      setLinkData(result); // links 데이터를 cardData에 저장
    } catch (error) {
      console.log('링크 데이터를 불러오는 중 에러 발생:',error);
    }
  }
    fetchUserLinkData();
  }, [folderId]);

  return {linkData}
}


// export default function useUserLinkData() {
//   const [cardData, setCardData] = useState([]);
  
//   useEffect(() => {
//   async function fetchUserLinkData() {
//     try {
//       const response = await UserLinkData();
//       const result = response.data; // response 안에 있는 links 데이터
//       setCardData(result); // links 데이터를 cardData에 저장
//     } catch (error) {
//       console.log('Error');
//     }
//   }
//     fetchUserLinkData();
//   }, []);

//   return {cardData}
// }