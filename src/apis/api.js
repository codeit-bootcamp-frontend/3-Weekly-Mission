const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getFolderData(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getLinkData(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/links`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
