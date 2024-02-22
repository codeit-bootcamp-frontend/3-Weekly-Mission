import axios from "@/api/axios";

export default async function getUserProfile() {
  const response = await axios.get("/sample/user");
  const result = response.data;
  return result;
}
