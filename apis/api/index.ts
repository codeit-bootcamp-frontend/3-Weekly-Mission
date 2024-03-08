import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import { defaultInstance, instanceAddedAccessToken } from "../utils/instance";

/**
 *
 * @returns User
 */
export const getUser = async () => {
    const { data } = await instanceAddedAccessToken.get("users");
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns FolderList
 */
export const getFolderList = async () => {
    const { data } = await instanceAddedAccessToken.get(`folders`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns linkList
 */
export const getLinkList = async () => {
    const { data } = await instanceAddedAccessToken.get(`links`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 *
 * @returns filteredLinkList
 */
export const getFilteredLinkList = async () => {
    const { data } = await instanceAddedAccessToken.get("links?folderId=1");
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns SharedPageInfo
 */
export const getSharedPageFolderInfo = async (folderId: string) => {
    const { data } = await defaultInstance.get(`folders/${folderId}`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns SharedPageOwnerInfo
 */
export const getSharedPageOwnerInfo = async (userId: string) => {
    const { data } = await defaultInstance.get(`users/${userId}`);
    return getFormattedCamelCaseData(data);
};

export const getSharedPageLinkList = async (
    userId: string,
    folderId: string
) => {
    const { data } = await defaultInstance.get(
        `users/${userId}/links?folderId=${folderId}`
    );
    return getFormattedCamelCaseData(data);
};
