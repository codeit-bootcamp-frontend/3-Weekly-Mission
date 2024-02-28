import type { Link, MyFolders, OwnerData, userData } from "types";

const API_BASE_URL: string = "https://bootcamp-api.codeit.kr";

export async function getUserData(): Promise<userData> {
  const API_BASE_URL_USER= `${API_BASE_URL}/api/sample/user`;
  const response = await fetch(API_BASE_URL_USER);
  const result = await response.json();
  return result;
}

export async function getMyFolders(): Promise<{ data: MyFolders[] }> {
  const API_BASE_URL_FOLDER = `${API_BASE_URL}/api/users/1/folders`;
  const response = await fetch(API_BASE_URL_FOLDER)
  const folders = await response.json();
  return folders;
}

export async function getOwner(): Promise<{ folder: OwnerData }> {
  const API_BASE_URL_OWNER = `${API_BASE_URL}/api/sample/folder`;
  const response = await fetch(API_BASE_URL_OWNER)
  const folders = await response.json();
  console.log(folders);
  return folders;
}

export async function getLinks(id: number | null): Promise<{ data: Link[] }> {
  const API_BASE_URL_LINKS = `${API_BASE_URL}/api/users/1/links${ id ? `?folderId=${id}` : " "}`
  const response = await fetch(API_BASE_URL_LINKS)
  const folders = await response.json();
  return folders;
}


// api의 response 값도 타입을 지정해줘야 한다.  