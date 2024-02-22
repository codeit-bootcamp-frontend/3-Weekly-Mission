import axios from "@/api/axios";

export default async function getAllFolderLinks() {
  const response = await axios.get("/users/1/links");
  const result = response.data;
  return result;
}
