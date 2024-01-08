import { useEffect, useState } from "react";

export default function useGetFolderListAsync(asyncFunction) {
  const [folderList, setFolderList] = useState(null);

  useEffect(() => {
    (async () => {
        const {data} = await asyncFunction();
        setFolderList(data);
    })();
  }, [asyncFunction]);

  return folderList;
}
