import { AxiosError } from "axios";
import axios from "./axios";

//테스트 하려고 임시로 저장해놨습니다.
const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IktLNE05TGFmMXkzWEI0M0kiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzEwMDQzNzg2LCJpYXQiOjE3MDk0Mzg5ODYsImlzcyI6Imh0dHBzOi8vanB2ZG9weWdibHJlZnpvbmV2ZnEuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6Ijk1NTgwMWE4LTg1YzUtNDY3Mi1iNzI5LTYxMmU2NDZhNjQwYSIsImVtYWlsIjoidGVzdEBjb2RlaXQuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MDk0Mzg5ODZ9XSwic2Vzc2lvbl9pZCI6ImI2MDczMTc3LWJiNjEtNDdhNS1iYTc1LWU3ZmE4NDA0MWJjNCJ9.p5Pw2-hlSU5I1KblhlVdbo-AAm9dlehittV57c3C01o";

export interface FolderData {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}
// 폴더 정보
export async function getUserFolder(folderId: string) {
  const response = await axios.get(`/folders/${folderId}`, {
    headers: {
      Authorization,
    },
  });
  if (typeof response.data === "object" && response.data[0])
    return response.data[0];

  return;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
// 유저 정보
export async function getUser(userId: string) {
  const response = await axios.get(`/users/${userId}`);
  if (typeof response.data === "object" && response.data[0]) {
    return response.data[0];
  }
  return;
}

export interface UserFolder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
}
// 유저가 가진 폴더 리스트
export async function getUserFolderList(userId: string) {
  const response = await axios.get(`/users/${userId}/folders`);
  return response.data;
}

export interface UserFolderLinkData {
  id: number;
  favorite?: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

// 유저가 가진 폴더의 링크리스트
export async function getUserFolderLinkList(folderId: string) {
  const response = await axios.get(`/folders/${folderId}/links`);
  return response.data;
}
export interface UserLinkData {
  id: number;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}
// 유저가 가진 링크 리스트
export async function getUserLinkList(userId: string) {
  const response = await axios.get(`/users/${userId}/links`, {
    headers: { Authorization },
  });
  return response.data;
}

interface PostSignData {
  email: string;
  password: string;
  setError: (email: string, object: { type: string; message: string }) => void;
}
export async function postSignIn({ email, password, setError }: PostSignData) {
  try {
    const response = await axios.post("/auth/sign-in", {
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.message);

      if (e.response?.status === 400) {
        setError("email", {
          type: "custom",
          message: "이메일을 확인해 주세요.",
        });
        setError("password", {
          type: "custom",
          message: "비밀번호를 확인해 주세요.",
        });
      }
    }
    return;
  }
}

export async function postSignUp({ email, password }: PostSignData) {
  const response = await axios.post("/auth/sign-up", {
    email,
    password,
  });
  return response.data;
}

export async function checkEmail({ email, setError }: PostSignData) {
  try {
    const response = await axios.post("/users/check-email", { email });
    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.message);
      if (e.response?.status === 409)
        setError("email", {
          type: "custom",
          message: "이미 사용중인 이메일입니다.",
        });
    }
    return;
  }
}
