import { URL_DOMAIN } from "@/Constants/Constants";
import { SharedFolderIdType, SharedUserIdType } from "@/types";
import getFetch from "@/utils/getFetch";
import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";

// ToDo fetch 함수 정리할 것
/**
 *
 * @returns Folderdata
 */
export const getFolderData = async () => {
    const res = await getFetch(URL_DOMAIN, "api/users/11/folders");
    const result = await res.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns TotalLinkdata
 */
export const getLinkData = async () => {
    const res = await getFetch(URL_DOMAIN, "api/users/11/links");
    const result = await res.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @param { number } id
 * @returns FilteredLinkdata
 */
export const getFilteredLinkData = async (id: number) => {
    const res = await getFetch(URL_DOMAIN, `api/users/11/links?folderId=${id}`);
    const result = await res.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns FolderPageUserData
 */
export const getFolderPageUserData = async () => {
    const res = await getFetch(URL_DOMAIN, "api/users/11");
    const result = await res.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns SharedPageUserData
 */
export const getSharedPageUserData = async () => {
    const res = await getFetch(URL_DOMAIN, "api/sample/user");
    const result = await res;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns SharedPageInfoData
 */
export const getSharedPageInfoData = async () => {
    const res = await getFetch(URL_DOMAIN, "api/sample/folder");
    const result = await res.folder;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @param { SharedUserIdType } sharedUserId
 * @returns SharedPageFolderData
 */
export const getSharedPageFolderData = async (
    sharedUserId: SharedUserIdType
) => {
    const res = await getFetch(URL_DOMAIN, `api/users/${sharedUserId}/folders`);
    const result = await res.data;
    console.log(result);
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @param { SharedFolderIdType } sharedFolderId
 * @param { SharedUserIdType } sharedUserId
 * @returns SharedPageLinkListData
 */
export const getSharedPageLinkListData = async (
    sharedFolderId: SharedFolderIdType,
    sharedUserId: SharedUserIdType
) => {
    const res = await getFetch(
        URL_DOMAIN,
        `api/users/${sharedUserId}/links?folderId=${sharedFolderId}`
    );
    const result = await res.data;
    return getFormattedCamelCaseData(result);
};
