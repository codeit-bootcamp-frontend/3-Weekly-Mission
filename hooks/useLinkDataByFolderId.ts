import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "@/api/api";
import { Link } from "@/@types/api/interface";

export function useLinkDataByFolderId(folderId: string) {
  const [linkData, setLinkData] = useState<Link[] | null>(null);
  // const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getLinkDataByFolderId(folderId);
        setLinkData(data);
        // setLoadingError(null);
      } catch (e) {
        console.error(e);
        return;
      } finally {
      }

      console.log(linkData);
    };

    handleLoadFolder();
  }, []);

  return { linkData };
}
