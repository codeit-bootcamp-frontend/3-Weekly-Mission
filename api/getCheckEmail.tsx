import { axiosInstance } from "./axiosInstance";

export default async function getCheckEmail(email = "") {
  try {
    const response = await axiosInstance.post(`check-email`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    return;
  }
}
