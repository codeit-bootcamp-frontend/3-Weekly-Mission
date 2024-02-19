import { ALL_LINKS_ID } from "../components/Folder/constants";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export interface User {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export async function getUserData(): Promise<{ data: User[] }> {
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

export interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: [
    {
      id: number;
      createdAt: string;
      url: string;
      title: string;
      description: string;
      imageSource: string;
    }
  ];
  count: number;
}

export async function getSampleFolderData(): Promise<{ folder: SampleFolder }> {
  const response = await fetch(`${BASE_URL}/sample/folder`);
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
