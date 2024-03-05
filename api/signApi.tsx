export async function signInAPI(email: string, password: string) {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
}

export async function checkEmail(email: string) {
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
  return response;
}

export async function signUpAPI(email: string, password: string) {
  return fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}
