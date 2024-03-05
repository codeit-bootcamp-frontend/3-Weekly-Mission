import { AxiosError } from "axios";
import axios from "./axios";

export async function getEmailCheck(email: object) {
  let message = "";
  try {
    const res = await axios.post("check-email", email);

    if (res.status === 200) {
      return;
    }

    return message;
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 409) {
        message = "이미 사용 중인 이메일입니다.";
        return message;
      }
    }
    message = "올바른 이메일 주소가 아닙니다.";
    return message;
  }
}
function getErrorRequest(e: unknown) {
  if (e instanceof AxiosError) {
    return e.request;
  }
  throw new Error(`AxiosError와 다른 오류 발생!! : ${e}`);
}

export async function postSignUp(data: object) {
  try {
    const res = await axios.post("sign-up", data);
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.data.accessToken);
    }
    return res;
  } catch (e) {
    return getErrorRequest(e);
  }
}

export async function postSignIn(data: object) {
  try {
    const res = await axios.post("sign-in", data);
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.data.accessToken);
    }
    return res;
  } catch (e) {
    return getErrorRequest(e);
  }
}

export async function getUser() {
  try {
    const res = await axios.get(`/users`);
    return res.data;
  } catch (e) {
    return getErrorRequest(e);
  }
}
