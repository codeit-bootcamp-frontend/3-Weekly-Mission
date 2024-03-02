import { UseFormSetError } from "react-hook-form";
import { FormData } from "./components/account/SigninForm";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

// 반복되는 코드 함수로 추상화

export async function getSampleData(url: string) {
  const response = await fetch(`${BASE_URL}${url}`);
  const body = await response.json();
  return body;
}

export async function getUserFolderInfo(id: string) {
  const response = await fetch(`${BASE_URL}/folders/${id}`);
  const body = await response.json();
  return body;
}

export async function getUser(id: string) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const { data } = await response.json();
  console.log(data);
  return data[0];
}

export async function getUserFolder(id: string) {
  const response = await fetch(`${BASE_URL}/users/${id}/links`);
  const body = await response.json();
  return body;
}

export async function getFolderList(id: string) {
  const response = await fetch(`${BASE_URL}/users/${id}/folders`);
  const body = await response.json();
  return body;
}

interface PostSignData {
  email: string;
  password?: string;
  setError: UseFormSetError<FormData>;
}

async function customFetch(url: string, ...rest: any) {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...rest }),
  });
  return response;
}

export async function postSignIn({ email, password, setError }: PostSignData) {
  const response = await customFetch("sign-in", email, password);

  if (response.ok) {
    const { data } = await response.json();
    return data;
  } else {
    setError("email", {
      type: "custom",
      message: "이메일을 확인해 주세요.",
    });
    setError("password", {
      type: "custom",
      message: "비밀번호를 확인해 주세요.",
    });

    return;
  }
}

export async function postSignUp({ email, password }: PostSignData) {
  const response = await customFetch("sign-up", email, password);
  const { data } = await response.json();
  return data;
}

export async function checkEmail({ email, setError }: PostSignData) {
  const response = await customFetch('check-email', email);

  if (!response.ok)
    setError("email", {
      type: "custom",
      message: "이미 사용중인 이메일입니다.",
    });

  return response.ok;
}
