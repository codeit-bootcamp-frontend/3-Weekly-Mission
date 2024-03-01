import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import { defaultInstance } from "../utils/instance";
import { SharedFolderIdType, SharedUserIdType } from "@/types";
import { getAccessToken } from "@/utils/getAccessToken";

// 새로운 api 목록
/**
 *
 * @returns User
 */
export const getUser = async () => {
    const { data } = await defaultInstance.get("users", {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return getFormattedCamelCaseData(data);
};

/**
 *
 * @returns FolderList
 */
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
 *
 * @returns filteredLinkList
 */
export const getFilteredLinkList = async () => {
    const { data } = await defaultInstance.get("links?folderId=1", {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
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
