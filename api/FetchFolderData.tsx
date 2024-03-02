import { FolderData } from "./FetchSampleFolderData";
import { useEffect, useState } from "react";

function FetchFolderData({ folderId }: any): FolderData | null {
  const [folderData, setfolderData] = useState(null);

  useEffect(() => {
    async function getFolder() {
      try {
        let url;
        if (folderId) {
          url = `https://bootcamp-api.codeit.kr/api/users/8595/links?folderId=${folderId}`;
        } else {
          url = `https://bootcamp-api.codeit.kr/api/users/8595/links`;
        }
        const response = await fetch(url);
        const result = await response.json();
        setfolderData(result);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
        throw new Error("데이터를 가져오는 중에 오류 발생!");
      }
    }
    getFolder();
  }, [folderId]);

  return folderData;
}

export default FetchFolderData;
