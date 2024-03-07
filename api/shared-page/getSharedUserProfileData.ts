import { fetchWithGet } from '@api/instance/fetchWithGet';

export interface SharedUserProfile {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface SharedUserProfileResponse {
  data: SharedUserProfile[];
}

const GET_SHARED_USER_PROFILE_API = '/api/users';

export const getSharedUserProfileData = async (userId: number) => {
  return fetchWithGet<SharedUserProfileResponse>(`${GET_SHARED_USER_PROFILE_API}/${userId}`);
};
