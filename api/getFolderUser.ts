import axios from "@/api/axios";

export default async function getFolderUser() {
  const response = await axios.get("/users/1");
  const result = response.data;
  return result;
}
