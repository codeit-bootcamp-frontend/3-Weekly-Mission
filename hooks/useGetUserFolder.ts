import { useEffect, useState } from "react";
import { getUserFolder } from "../api";

export interface Data {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export default function useGetUserFolderAsync() {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getUserFolder();
      setData(data);
    })();
  }, []);

  return data;
}
