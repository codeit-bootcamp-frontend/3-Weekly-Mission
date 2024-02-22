import axios from "@/api/axios";

export default async function getFolderFilterKeywords() {
  const response = await axios.get("/users/1/folders");
  const result = response.data;
  return result;
}
