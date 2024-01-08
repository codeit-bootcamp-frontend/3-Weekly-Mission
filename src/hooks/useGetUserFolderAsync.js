import { useEffect, useState } from "react";

export default function useGetUserFolderAsync(asyncFunction) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
        const {data} = await asyncFunction();
        setData(data);
    })();
  }, [asyncFunction]);

  return data;
}
