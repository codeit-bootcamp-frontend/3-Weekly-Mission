import { useEffect, useState } from "react";
import { getSampleFolder } from "../api";
export interface IFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: ILinks[];
}

export interface ILinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function useGetFolderAsync() {
  const [data, setData] = useState<IFolder[]>();

  useEffect(() => {
    (async () => {
      const { folder } = await getSampleFolder();
      setData(folder);
    })();
  }, []);

  return data;
}
