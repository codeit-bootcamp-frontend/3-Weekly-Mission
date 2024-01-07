const API_BASE_URL_FOLDER_ALL = 'https://bootcamp-api.codeit.kr/api/users/1/links';

export async function getAllFolders() {
  const response = await fetch(API_BASE_URL_FOLDER_ALL)
  const datas = await response.json();
  return datas;
}