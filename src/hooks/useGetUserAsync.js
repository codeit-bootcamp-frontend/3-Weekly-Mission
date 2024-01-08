import { useEffect, useState } from "react";

export default function useGetUserAsync(asyncFunction) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await asyncFunction();
      const { image_source, email } = data[0];
      setData([image_source, email]);
    })();
  }, [asyncFunction]);

  return data;
}
