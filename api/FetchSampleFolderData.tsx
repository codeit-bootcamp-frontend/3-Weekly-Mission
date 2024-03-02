import { useEffect, useState } from "react";

export interface LinksType {
  id: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

export interface FolderData {
  folder: {
    owner: {
      profileImageSource: string;
      name: string;
    };
    name: string;
    links: LinksType[];
  };
}

function FetchSharedData(): FolderData | null {
  const [SharedData, setSharedData] = useState(null);

  useEffect(() => {
    async function getSharedData() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
          // "https://bootcamp-api.codeit.kr/api/users/8595/folders"
        );
        const result = await response.json();
        console.log(result);
        setSharedData(result);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
        throw new Error("데이터를 가져오는 중에 오류 발생!");
      }
    }
    getSharedData();
  }, []);

  return SharedData;
}

export default FetchSharedData;
