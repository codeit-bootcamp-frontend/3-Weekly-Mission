import instance from "@/libs/axios";
import axios from "axios";

const useEmailDuplicate = (setError:any) => {

  const isEmailDuplicate = async (email: string) => {
    try {
      const res = await instance.post("/check-email", {
        email: email,
      });
    } catch (e: any) {
      if (e.response.status === 409) {
        setError("email", {
          type: "manual",
          message: "이미 사용 중인 이메일입니다.",
        });
      }
    }
  };
  return isEmailDuplicate
}

export default useEmailDuplicate

//https://bootcamp-api.codeit.kr/api/check-email 이렇게는 되는데
//   /check-email 이렇게는 왜 안될까요.
//axios 대신에 instance 넣으면 가능하네요!