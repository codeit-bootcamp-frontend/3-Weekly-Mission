import { axiosInstance } from "./axiosInstance";

export default async function getUser() {
  const response = await axiosInstance.get("users/1");
  return response?.data;
}
