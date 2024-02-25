import { useEffect, useState } from "react";
import { getSampleFolder } from "../api";
export interface Links {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Links[];
}

export default function useGetFolder() {
  const [data, setData] = useState<SampleFolder[]>();

  useEffect(() => {
    (async () => {
      const { folder } = await getSampleFolder();
      setData(folder);
    })();
  }, []);

  return data;
}
