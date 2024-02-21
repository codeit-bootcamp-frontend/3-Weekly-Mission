import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_SAMPLE_PROFILE_DATA_API = '/api/sample/user';

export interface ISampleProfileDataResponse {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

const getSampleProfileData = async () => {
  return fetchWithGet<ISampleProfileDataResponse>(GET_SAMPLE_PROFILE_DATA_API);
};

export { getSampleProfileData };
