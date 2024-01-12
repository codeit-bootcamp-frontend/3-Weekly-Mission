const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function UserIdData(){
  const response = await fetch(`${API_BASE_URL}/api/users/1`);
  const data = await response.json();
  return data;
}

export async function UserFolderListData() {
  const response =await fetch( `${API_BASE_URL}users/1/folders`);
  const data = await response.json();
  return data;
}

export async function UserLinkData() {
  const response =await fetch(`${API_BASE_URL}users/1/links`);
  const data = await response.json();
  return data;
}

export async function UseIdFolderData(id) {
  const response =await fetch(`${API_BASE_URL}users/1/links?folderId=${id}`);
  const data = await response.json();
  return data;
}

