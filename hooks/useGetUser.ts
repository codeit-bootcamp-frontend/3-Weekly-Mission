import { useEffect, useState } from "react";
import { getSampleUser, getUser } from "../api";

interface UserData {
  [key: string]: any;
}

export default function useGetUser(isSticky: boolean): any {
  const [data, setData] = useState<UserData>();

  useEffect(() => {
    (async () => {
      if (isSticky) {
        const data = await getSampleUser();
        const { profileImageSource, email } = data;
        setData([profileImageSource, email]);
      } else {
        const { data } = await getUser();
        console.log(data);

        const { image_source, email } = data[0];
        setData([image_source, email]);
      }
    })();
  }, [isSticky]);

  return data;
}
