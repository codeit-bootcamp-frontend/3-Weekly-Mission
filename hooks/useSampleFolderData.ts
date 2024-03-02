import { useEffect, useState } from "react";
import { getSampleFolderData } from "@/api/api";
import { SampleFolder } from "@/@types/api/interface";

export function useSampleFolderData() {
  const [folderData, setFolderData] = useState<SampleFolder | null>(null);

  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { folder } = await getSampleFolderData();
        setFolderData(folder);
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
