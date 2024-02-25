import { useEffect, useState } from "react";
import { getUserFolder } from "../api";

export interface UserFolderData {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export default function useGetUserFolder() {
  const [data, setData] = useState<UserFolderData[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getUserFolder();
      setData(data);
    })();
  }, []);

  return data;
}
