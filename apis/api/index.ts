import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import { defaultInstance } from "../utils/instance";
import { SharedFolderIdType, SharedUserIdType } from "@/types";
import { getAccessToken } from "@/utils/getAccessToken";

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
 * @param { string } id
 * @returns sharedPageFolderInfo
 */
export const getSharedPageFolderInfo = async (id = "41") => {
    const { data } = await defaultInstance.get(`folders/${id}`);
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

// 새로운 api 목록
export const getUser = async () => {
    const { data } = await defaultInstance.get("users", {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return getFormattedCamelCaseData(data);
};

export const getFolderList = async () => {
    const { data } = await defaultInstance.get(`folders`, {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns linkList
 */
export const getLinkList = async () => {
    try {
        const { data } = await defaultInstance.get(`links`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
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
export const getFilteredLinkList = async () => {
    const { data } = await defaultInstance.get("links?folderId=1", {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return getFormattedCamelCaseData(data);
};
