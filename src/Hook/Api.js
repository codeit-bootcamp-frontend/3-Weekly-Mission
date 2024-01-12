const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function UserIdData(){
  const response = await fetch(`${API_BASE_URL}/api/users/1`);
  const data = await response.json();
  return data;
}

export async function UserFolderListData() {
  const response = await fetch(`${API_BASE_URL}/api/users/1/folders`);
  const data = await response.json();
  return data;
}

export async function UserLinkData(folderId) {
  const queryString = folderId ? `folderId=${folderId}` : '';
  const response =await fetch(`${API_BASE_URL}/api/users/1/links?${queryString}`);
  const data = await response.json();
  return data;
}

