import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/libs/axios";


const useSignIn = (setError : any) => {
  const router = useRouter();

  const getSignIn = async (data: any) => {
    try {
      const res = await axios.post("/sign-in", data);
      localStorage.setItem("accessToken", res.data.accessToken);
      router.push("/folder");
    } catch (e: any) {
      if (e.response.status === 400) {
        setError("email", {
          type: "manual",
          message: "이메일을 확인해주세요",
        });
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해주세요",
        });
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);

  return getSignIn;
};

export default useSignIn;

//data 랑 error의 타입은 무엇인가?
//setError의 타입은 무엇인가? 함수라 void?
//error도 any로 두고 찾아보기 -> any로 두면 타입을 좁히기 힘들다.
//현재 data는 들어있는게 없어서 any로 둠
//error의 타입은 unknown이다. -> 타입 좁히기 해주기
//instanceof Error / AxiosError ?
// localStorage.setItem("accessToken", res.data.accessToken);
// 로컬스토리지에 토큰을 저장할때 "accessToken" 이건 키고  res.data.accessToken는 value가 들어와야 하는데 undefined가 들어온다.
