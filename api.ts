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
  setError,
}: {
  email: string;
  password: string;
  setError: any;
}) {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { data } = await response.json();
    return data;
  } else {
    setError("email", {
      type: "custom",
      message: "이메일을 확인해 주세요.",
    });
    setError("password", {
      type: "custom",
      message: "비밀번호를 확인해 주세요.",
    });

    return;
  }
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
  
  const {data} = await response.json();
  return data;
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
