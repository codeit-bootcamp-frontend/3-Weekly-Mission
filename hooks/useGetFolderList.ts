import { useEffect, useState } from "react";
import { getFolderList } from "../api";

export interface FolderList {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export default function useGetFolderListAsync() : any {
  const [folderList, setFolderList] = useState<FolderList[]>();

  useEffect(() => {
    (async () => {
        const {data} = await getFolderList();
        setFolderList(data);
    })();
  }, []);

  return folderList;
}
