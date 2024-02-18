import { useEffect, useState } from "react";
import { getSampleUser, getUser } from "../api";

export default function useGetUserAsync(isSticky) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      if (isSticky) {
        const data = await getSampleUser();
        const { profileImageSource, email } = data;
        setData([profileImageSource, email]);

      } else {
        const {data} = await getUser();
        console.log(data);

        const { image_source, email } = data[0];
        setData([image_source, email]);
      }
    })();
  }, [isSticky]);

  return data;
}
