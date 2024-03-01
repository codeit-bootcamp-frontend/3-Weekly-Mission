import axios from "@/api/axios";

export default async function getFolderLinks(id: number) {
  const response = await axios.get(`/users/1/links?folderId=${id}`);
  const result = response.data;
  return result;
}
