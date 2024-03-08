import { LocalStorageKeys } from "@/constants/constants";

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.AceessToken, accessToken);
};
