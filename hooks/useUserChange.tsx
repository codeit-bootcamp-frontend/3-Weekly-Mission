import { getUser } from "@/apis/user";
import { NavbarUserInfo } from "@/types/userType";
import camelcaseKeys from "camelcase-keys";
import { SetStateAction, useEffect } from "react";

type SetUser = React.Dispatch<SetStateAction<NavbarUserInfo | undefined>>;

const useUserChange = (setUser: SetUser) => {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("accessToken");
  }
  const checkUser = async () => {
    if (!accessToken) {
      return;
    }
    try {
      const res = await getUser();
      const userInfo: NavbarUserInfo = res.data[0];
      if (!userInfo) {
        throw new Error("유저 정보가 없습니다!");
      }
      const camelUserInfo = camelcaseKeys(userInfo, { deep: true });
      setUser(camelUserInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [accessToken]);
};

export default useUserChange;
