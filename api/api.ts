import { ALL_LINKS_ID } from "../components/Folder/constants";
import { User, Folder, SampleFolder, Link } from "@/@types/api/interface";
import { BASE_URL } from "@/constants/constant";

export async function getUserData(): Promise<{ data: User[] }> {
  const response = await fetch(`${BASE_URL}/users/1`);
  const body = await response.json();

  return body;
}

export async function getFolderData(): Promise<{ data: Folder[] }> {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export async function getSampleFolderData(): Promise<{ folder: SampleFolder }> {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
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
