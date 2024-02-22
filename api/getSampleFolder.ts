import axios from "@/api/axios";

export default async function getSampleFolder() {
  const response = await axios.get("/sample/folder");
  const result = response.data;
  return result;
}
