import { axiosInstance } from "./axiosInstance";

export default async function getSharedFolder() {
  const response = await axiosInstance.get("sample/folder");
  return response?.data;
}
