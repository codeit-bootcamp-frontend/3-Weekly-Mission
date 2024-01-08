import { useEffect, useState } from "react";
import { getLinkData } from "../apis/api";

export function useFolderLink() {
  const userId = 1;
  const [linkData, setLinkData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getLinkData(userId);
        setLinkData(data);
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }

      console.log(linkData);
    };

    handleLoadFolder();
  }, []);

  return { linkData, loadingError };
}
