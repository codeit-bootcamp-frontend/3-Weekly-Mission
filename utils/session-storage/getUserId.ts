import { USER_ID } from '@/constant/web-storage/sessionStorage';

export const getUserId = (): string | null => {
  const stringifiedUserId = sessionStorage.getItem(USER_ID);

  return stringifiedUserId ? JSON.parse(stringifiedUserId) : null;
};
