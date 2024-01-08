import { useEffect, useState } from "react";
import { getFolderData } from "../apis/api";

export function useFolderData() {
  const userId = 1;
  const [folderData, setFolderData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getFolderData(userId);
        setFolderData(data);
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }
    };

    handleLoadFolder();
  }, []);

  return { folderData, loadingError };
}
