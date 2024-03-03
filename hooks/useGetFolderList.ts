import { getUserFolderList } from "@/api/api";
import { useEffect, useState } from "react";

export interface UserFolderList {
  id: number;
  created_at: string;
  name: string;
  favorite: boolean;
  link: {
    count: number;
  };
}

export default function useGetFolderList(id:string): UserFolderList[] | undefined {
  const [folderList, setFolderList] = useState<UserFolderList[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getUserFolderList(id);
      setFolderList(data);
    })();
  });

  return folderList;
}
