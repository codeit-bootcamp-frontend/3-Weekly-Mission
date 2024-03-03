type User = { email: string; password: string };

export async function getUserByAccessToken(accessToken: string) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/users', {
    method: 'GET',
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${accessToken}`,
    },
  });
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

export async function getFoldersByAccessToken(accessToken) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/folders', {
    method: 'GET',
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const body = await response.json();

  return body;
}

export async function getFolderById(folderId: number) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/folders/${folderId}`
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

export async function getLinksByAccessToken(accessToken: string) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/links', {
    method: 'GET',
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const body = await response.json();

  return body;
}

export async function getFolderLinks(accessToken: string, folderId: number) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/links?folderId=${folderId}`,
    {
      method: 'GET',
      headers: {
        accept: '*/*',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const body = await response.json();

  return body;
}

export async function getLinksById(userId: number, folderId = 0) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links?folderId=${folderId}`
  );
  const body = await response.json();

  return body;
}

export async function postSignin(user: User) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return response;
}

export async function checkEmail(userEmail: { email: string }) {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/check-email',
    {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userEmail),
    }
  );
  const body = await response.json();

  return body;
}

export async function postSignup(user: User) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return response;
}
