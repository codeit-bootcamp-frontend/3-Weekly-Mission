import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_PROFILE_DATA_API = '/api/users/1';

export interface IProfileData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

interface IProfileDataResponse {
  data: IProfileData[];
}

const getProfileData = async () => {
  return fetchWithGet<IProfileDataResponse>(GET_PROFILE_DATA_API);
};

export { getProfileData };
