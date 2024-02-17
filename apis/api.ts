import { ALL_LINKS_ID } from "../components/Folder/constants";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData() {
  // const response = await fetch(`${BASE_URL}/uses/1`);
  const response = await fetch(`${BASE_URL}/users/1`); // 로그인 테스트
  const body = await response.json();

  return body;
}

export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/users/2/folders`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export async function getLinkDataByFolderId(folderId: string | number) {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const response = await fetch(`${BASE_URL}/users/1/links${queryString}`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
