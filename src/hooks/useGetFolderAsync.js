import { useEffect, useState } from "react";

export default function useGetFolderAsync(asyncFunction) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
        const {folder} = await asyncFunction();
        setData(folder);
    })();
  }, [asyncFunction]);

  return data;
}
