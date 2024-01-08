const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export async function getUser() {
  const url = `${BASE_URL}sample/user`;
  const response = await fetchJson(url);
  return response;
}

export async function getShredCardList() {
  const url = `${BASE_URL}sample/folder`;
  const response = await fetchJson(url);
  return response;
}

export async function getFolderList() {
  const url = `${BASE_URL}users/1/folders`;
  const response = await fetchJson(url);
  return response;
}
export async function getLinkList() {
  const url = `${BASE_URL}users/1/links`;
  const response = await fetchJson(url);
  return response;
}

export async function getFolderData(id) {
  const url = `${BASE_URL}users/1/links?folderId=${id}`;
  const response = await fetchJson(url);
  return response;
}
