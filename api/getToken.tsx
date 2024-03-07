import { axiosInstance } from "./axiosInstance";

export default async function getToken(refreshToken = "") {
  if (!refreshToken) return;

  const response = await axiosInstance.post("/refresh-token", {
    refresh_token: refreshToken,
  });
  return response?.data;
}
