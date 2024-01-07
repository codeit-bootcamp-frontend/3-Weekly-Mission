export async function UserId() {
  const response = await fetch(
    `${process.env.REACT_APP_URL_DOMAIN_SAMPLE}/user`,
    {
      method: "GET",
      headers: {
        accept: "*/*", // 모든 미디어 타입 허용
      },
    }
  );
  const body = await response.json();
  return body;
}

export async function UserFolder(userId) {
  const response = await fetch(
    `${process.env.REACT_APP_URL_DOMAIN.USERS}/${userId}/folders`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const body = await response.json();
  return body;
}

export async function UserProfile(userId) {
  const response = await fetch(
    `${process.env.REACT_APP_URL_DOMAIN_USERS}/${userId}`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const body = await response.json();
  return body;
}

export async function UserLink(userId, folderId) {
  const response = await fetch(
    `${process.env.REACT_APP_URL_DOMAIN_USERS}/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const body = await response.json();
  return body;
}
