import { CardInterface } from "@/types/types";
import { axiosInstance } from "./axiosInstance";

export default async function getAllCard(id = "") {
  let url = "users/1/links?";
  const searchUrl = new URLSearchParams();
  if (id !== "") {
    searchUrl.append("folderId", id);
    url += searchUrl.toString();
  }
  const response = await axiosInstance.get(`${url}`);
  const data: CardInterface[] = response?.data?.data;
  return data;
}
