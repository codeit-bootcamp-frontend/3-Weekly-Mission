import { fetchWithGet } from '@api/instance/fetchWithGet';

// {
//   "data": [
//     {
//       "id": 2363,
//       "created_at": "2024-03-04T11:57:34.204412+00:00",
//       "name": "정수원",
//       "image_source": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
//       "email": "tester101@codeit.kr",
//       "auth_id": "069d8316-28d8-4f9a-90da-e608d669e57a"
//     }
//   ]
// }

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
