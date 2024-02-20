import { axiosInstance } from '@/util/axiosInstance';
import { useAsync } from '@/util/useAsync';

export const useGetUser = () => {
  const getUser = () => axiosInstance.get('sample/user');
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
