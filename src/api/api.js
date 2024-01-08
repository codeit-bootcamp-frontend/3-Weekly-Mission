const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getLinksByUserIdAndFolderId(userId, folderId = "") {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/links?folderId=${folderId}`
  );
  if (!response.ok) {
    throw new Error("폴더별 링크 정보 로딩에 실패했습니다.");
  }
  return await response.json();
}

export async function getFoldersSample() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("샘플 폴더 정보 로딩에 실패했습니다.");
  }
  return await response.json();
}

export async function getFoldersById(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("나의 폴더 정보 로딩에 실패했습니다.");
  }
  return await response.json();
}

export async function getUserProfileById(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error("유저 정보 로딩에 실패했습니다.");
  }
  return await response.json();
}
