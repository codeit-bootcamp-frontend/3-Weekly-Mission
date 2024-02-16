import { UserLinkData } from "./Api";
import { useState, useEffect } from "react";
import { LinkType } from "./Types";

export default function useUserLinkData(folderId: number) {
  const [linkData, setLinkData] = useState<LinkType[]>([]);

  useEffect(() => {
    async function fetchUserLinkData() {
      try {
          const response = await UserLinkData(folderId);
          const result = response.data; // response 안에 있는 links 데이터
          setLinkData(result); // links 데이터를 linkData에 저장
      } catch (error) {
        console.log("링크 데이터를 불러오는 중 에러 발생:", error);
      }
    }
    fetchUserLinkData();
  }, [folderId]); 

  return { linkData };
}
