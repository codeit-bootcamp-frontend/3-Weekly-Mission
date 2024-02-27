import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/libs/axios";

const useSignUp = () => {
  const router = useRouter();

  const getSignUp = async (data: any) => {
    try {
      const res = await axios.post("/sign-up", data);
      localStorage.setItem("accessToken", res.data.accessToken);
      router.push("/folder");
    } catch (e) {
      console.log(e, "error");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);
  return getSignUp;
};

export default useSignUp;
