import { useEffect, useState } from "react";
import { getSampleFolder } from "../api";
export interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Links[];
}

export interface Links {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function useGetFolderAsync() {
  const [data, setData] = useState<Folder[]>();

  useEffect(() => {
    (async () => {
      const { folder } = await getSampleFolder();
      setData(folder);
    })();
  }, []);

  return data;
}
