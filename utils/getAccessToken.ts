import { LocalStorageKeys } from "@/constants/constants";

export const getAccessToken = () => {
    return localStorage.getItem(LocalStorageKeys.AceessToken);
};
