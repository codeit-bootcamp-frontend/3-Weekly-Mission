import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import { defaultInstance } from "../utils/instance";
import { SharedFolderIdType, SharedUserIdType } from "@/types";

/**
 *
 * @returns FolderList
 */
export const getFolderList = async (id = 11) => {
    try {
        const { data } = await defaultInstance.get(`users/${id}/folders`);
        return getFormattedCamelCaseData(data);
    } catch (error) {
        console.error(error);
    }
};

/**
 *
 * @returns linkList
 */
export const getLinkList = async (id = 11) => {
    try {
        const { data } = await defaultInstance.get(`users/${id}/links`);
        return getFormattedCamelCaseData(data);
    } catch (error) {
        console.error(error);
    }
};

/**
 *
 * @param { number } id
 * @returns FilteredLinkList
 */
export const getFilteredLinkList = async (id: number) => {
    const { data } = await defaultInstance.get(`users/11/links?folderId=${id}`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns FolderPageUser
 */
export const getFolderPageUser = async (id = 11) => {
    const { data } = await defaultInstance.get(`users/${id}`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns SharedPageUser
 */
export const getSharedPageUser = async () => {
    const { data } = await defaultInstance.get("sample/user");
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns SharedPageInfo
 */
export const getSharedPageInfo = async () => {
    const { data } = await defaultInstance.get("sample/folder");
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @param { SharedUserIdType } sharedUserId
 * @returns SharedPageFolder
 */
export const getSharedPageFolder = async (sharedUserId: SharedUserIdType) => {
    const { data } = await defaultInstance.get(`users/${sharedUserId}/folders`);
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @param { SharedFolderIdType } sharedFolderId
 * @param { SharedUserIdType } sharedUserId
 * @returns SharedPageLinkList
 */
export const getSharedPageLinkList = async (
    sharedFolderId: SharedFolderIdType,
    sharedUserId: SharedUserIdType
) => {
    const { data } = await defaultInstance.get(
        `users/${sharedUserId}/links?folderId=${sharedFolderId}`
    );
    return getFormattedCamelCaseData(data);
};
