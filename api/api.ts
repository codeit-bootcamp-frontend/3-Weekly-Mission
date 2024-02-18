import { ALL_LINKS_ID } from "../components/Folder/constants";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData() {
  // const response = await fetch(`${BASE_URL}/uses/1`);
  const response = await fetch(`${BASE_URL}/users/1`); // 로그인 테스트
  const body = await response.json();

  return body;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export async function getFolderData(): Promise<{ data: Folder[] }> {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export interface Link {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

export async function getLinkDataByFolderId(
  folderId: string | number
): Promise<{ data: Link[] }> {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const response = await fetch(`${BASE_URL}/users/1/links${queryString}`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
