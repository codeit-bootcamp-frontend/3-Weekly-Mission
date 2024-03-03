import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export type User = {
  email: string;
  password: string;
};

export async function getLinksByUserIdAndFolderId(
  userId: number,
  folderId: string
) {
  const url = folderId
    ? `${BASE_URL}/users/${userId}/links?folderId=${folderId}`
    : `${BASE_URL}/users/${userId}/links`;

  const { data } = await axios.get(url);

  if (!data) {
    throw new Error("폴더별 링크 정보 로딩에 실패했습니다.");
  }
  return data;
}

export async function getFoldersByUserId(userId: number) {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}/folders`);

  if (!data) {
    throw new Error("나의 폴더 정보 로딩에 실패했습니다.");
  }
  return data;
}

export async function getUserProfileById(userId: number) {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);

  if (!data) {
    throw new Error("유저 정보 로딩에 실패했습니다.");
  }
  return data[0];
}

export async function getFolderInfoByFolderId(folderId: string) {
  const { data } = await axios.get(`${BASE_URL}/folders/${folderId}`);

  if (!data) {
    throw new Error("폴더 정보 로딩에 실패했습니다.");
  }
  return data[0];
}

export async function checkEmail(email: string) {
  const { data } = await axios.post(`${BASE_URL}/users/check-email`, { email });
  console.log(data);
  if (!data) {
    throw new Error("이메일 중복 확인에 실패했습니다.");
  }
  return data;
}

export async function createUser(userData: User) {
  const { data } = await axios.post(`${BASE_URL}/auth/sign-up`, userData);

  if (!data) {
    throw new Error("회원가입에 실패했습니다.");
  }
  return data;
}

export async function login(loginRequest: User) {
  const { data } = await axios.post(`${BASE_URL}/auth/sign-in`, loginRequest);

  if (!data) {
    throw new Error("회원가입에 실패했습니다.");
  }
  return data;
}
