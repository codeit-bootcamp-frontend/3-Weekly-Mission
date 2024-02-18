import { useEffect, useState } from "react";
import { getFolderList } from "../api";

export default function useGetFolderListAsync() {
  const [folderList, setFolderList] = useState(null);

  useEffect(() => {
    (async () => {
        const {data} = await getFolderList();
        setFolderList(data);
    })();
  }, []);

  return folderList;
}
