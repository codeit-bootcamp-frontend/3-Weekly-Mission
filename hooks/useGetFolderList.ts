import { useEffect, useState } from "react";
import { getFolderList } from "../api";

export interface UserFolderList {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export default function useGetFolderList(id:string): UserFolderList[] | undefined {
  const [folderList, setFolderList] = useState<UserFolderList[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getFolderList(id);
      setFolderList(data);
    })();
  }, []);

  return folderList;
}
