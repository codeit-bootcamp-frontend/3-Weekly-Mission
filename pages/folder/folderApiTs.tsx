import axiosInstance from "../../lib/axios";
import { FolderId, LinkId, ProfileId } from "./type";

export async function ProfileApi(userProfileId: number): Promise<ProfileId> {
  try {
    const url = `users/${userProfileId}`;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed");
  }
}

export async function GetFolderId(userProfileId: number): Promise<FolderId[]> {
  try {
    const url = `users/${userProfileId}/folders`;
    const response = await axiosInstance.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function ShowAll(userProfileId: number): Promise<LinkId[]> {
  try {
    const url = `users/${userProfileId}/links`;
    const response = await axiosInstance.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
}
