import { useEffect, useState } from "react";
import { getFolderList } from "../api";

interface UserFolderList {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export default function useGetFolderList(): any {
  const [folderList, setFolderList] = useState<UserFolderList[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getFolderList();
      setFolderList(data);
    })();
  }, []);

  return folderList;
}
