import { USER_ID } from '@/constant/web-storage/sessionStorage';

export const setUserId = (userId?: number) => {
  if (userId) {
    sessionStorage.setItem(USER_ID, JSON.stringify(userId));
  }
};
