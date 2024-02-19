import { useEffect, useState } from "react";
import { getSampleFolderData, SampleFolder } from "@/api/api";

export function useSampleFolderData() {
  const [folderData, setFolderData] = useState<SampleFolder | null>(null);

  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { folder } = await getSampleFolderData();
        setFolderData(folder);
        console.log("folderData", folderData);
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
