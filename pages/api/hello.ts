export async function getUser() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  const body = await response.json();

  return body;
}

export async function getUserById(id: number) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}`
  );
  const body = await response.json();

  return body;
}

export async function getFolder() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const body = await response.json();

  return body;
}

export async function getFoldersById(id = 1) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}/folders`
  );
  const body = await response.json();

  return body;
}

export async function getLinksById(id = 0) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links${
      id ? `?folderId=${id}` : ''
    }`
  );
  const body = await response.json();

  return body;
}
