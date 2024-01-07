export async function getOwner() {
  const API_BASE_URL_OWNER = 'https://bootcamp-api.codeit.kr/api/sample/folder';
  const response = await fetch(API_BASE_URL_OWNER)
  const folders = await response.json();
  return folders;
}
