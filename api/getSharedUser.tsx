import { axiosInstance } from "./axiosInstance";

export default async function getSharedUser() {
  const response = await axiosInstance.get("sample/user");
  return response?.data;
}
