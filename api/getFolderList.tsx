import { axiosInstance } from "./axiosInstance";

export default async function getFolderList() {
  const response = await axiosInstance.get("users/1/folders");
  return response?.data;
}
