import { LocalStorageKeys } from "@/Constants/Constants";

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.AceessToken, accessToken);
};
