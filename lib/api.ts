import { Folder, FolderLink, SampleFolder, User, Token } from "./types";

const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const postSignin = async (email: string, password: string): Promise<{ data: Token }> => {
  const response = await fetch(`${API_BASE_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getUser = async (): Promise<{ data: User[] }> => {
  const response = await fetch(`${API_BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getFolder = async (): Promise<{ data: Folder[] }> => {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getSampleFolder = async (): Promise<{ folder: SampleFolder }> => {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getFolderLinks = async (folderId?: number): Promise<{ data: FolderLink[] }> => {
  let response;
  if (!folderId) {
    response = await fetch(`${API_BASE_URL}/users/1/links`);
  } else {
    response = await fetch(`${API_BASE_URL}/users/1/links?folderId=${folderId}`);
  }

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};
