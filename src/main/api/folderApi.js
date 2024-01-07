const API_BASE_URL_FOLDER_ALREADY = 'https://bootcamp-api.codeit.kr/api/users/1/folders';

export async function getAlreadyFolders() {
  const response = await fetch(API_BASE_URL_FOLDER_ALREADY)
  const alreadyFolders = await response.json();
  return alreadyFolders;
}