export async function getMyFolders(id) {
  const API_BASE_URL_FOLDER_MY = `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`
  const response = await fetch(API_BASE_URL_FOLDER_MY)
  const folders = await response.json();
  return folders;
}
// id를 인수로 받아서 폴더 마다 다른 파일을 불러온다 