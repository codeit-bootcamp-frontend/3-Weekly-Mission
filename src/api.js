const API_BASE_URL = "https://bootcamp-api.codeit.kr";
export async function getUserId() {
  const response = await fetch(`${API_BASE_URL}/api/sample/user`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  return await response.json();
}

export async function getUserFolders(userId) {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}/folders`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  return await response.json();
}

export async function getUserProfile(userId) {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  return await response.json();
}

export async function getUserLinks(userId, folderId) {
  const response = await fetch(
    `${API_BASE_URL}/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  return await response.json();
}
