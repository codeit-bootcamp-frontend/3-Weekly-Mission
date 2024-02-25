const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getSampleUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  return body;
}

export async function getSampleFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  return body;
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/users/8`);
  const body = await response.json();
  return body;
}

export async function getUserFolder() {
  const response = await fetch(`${BASE_URL}/users/8/links`);
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}/users/8/folders`);
  const body = await response.json();
  return body;
}
