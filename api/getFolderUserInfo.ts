import axios from "@/api/axios";

export default async function getFolderUserInfo() {
  const response = await axios.get("/users/1");
  const result = response.data;
  return result;
}
