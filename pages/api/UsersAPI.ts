import { CODEIT_API } from "@/public/URL";

export async function FetchUserData() {
  const response = await fetch(`${CODEIT_API}/users/1`);
  const data = await response.json();

  return data;
}

export async function FetchFolderData() {
  const response = await fetch(`${CODEIT_API}/users/1/folders`);
  const data = await response.json();

  return data;
}

export async function FetchLinkData() {
  const response = await fetch(`${CODEIT_API}/users/1/links`);
  const data = await response.json();

  return data;
}
