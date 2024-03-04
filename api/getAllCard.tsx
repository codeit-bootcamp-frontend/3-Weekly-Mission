import { CardInterface } from "@/types/types";
import { axiosInstance } from "./axiosInstance";

export default async function getAllCard(userId = "", folderId = "") {
  let url = `${userId}/links?`;
  const searchUrl = new URLSearchParams();
  if (folderId !== "") {
    searchUrl.append("folderId", folderId);
    url += searchUrl.toString();
  }
  const response = await axiosInstance.get(`${url}`);
  const data = response?.data?.data;
  return data?.folder;
}
