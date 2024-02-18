import { useEffect, useState } from "react";
import { getFolderData, Folder } from "@/api/api";

export function useFolderData() {
  const [folderData, setFolderData] = useState<Folder[] | null>(null);
  // const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getFolderData();
        setFolderData(data);
        // setLoadingError(null);
      } catch (e) {
        console.error(e);
        return;
      } finally {
      }
    };

    handleLoadFolder();
  }, []);

  return { folderData };
}
