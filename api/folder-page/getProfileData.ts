import { getWithAccessToken } from '@api/instance/getWithAccessToken';

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

const GET_PROFILE_DATA_API = '/api/users';

const getProfileData = async () => {
  return getWithAccessToken<IProfileDataResponse>(GET_PROFILE_DATA_API);
};

export { getProfileData };
