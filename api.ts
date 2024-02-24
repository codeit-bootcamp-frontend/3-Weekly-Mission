const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getSampleUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  return body;
}

export async function getSampleFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  return body;
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/users/8`);
  const body = await response.json();
  return body;
}

export async function getUserFolder() {
  const response = await fetch(`${BASE_URL}/users/8/links`);
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}/users/8/folders`);
  const body = await response.json();
  return body;
}

export async function postSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();
  return result;
}

export async function postSignUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${BASE_URL}/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  console.log(response);
  const result = await response.json();
  return result;
}

export async function checkEmail({
  email,
  setError,
}: {
  email: string;
  setError: any;
}) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok)
    setError("email", {
      type: "custom",
      message: "이미 사용중인 이메일입니다.",
    });

  return response.ok;
}
