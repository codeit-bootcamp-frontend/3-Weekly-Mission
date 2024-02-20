import { URL_DOMAIN } from "@/Constants/Constants";
import getFetch from "@/utils/getFetch";
import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";

// ToDo fetch 함수 정리할 것
/**
 *
 * @returns formatted camelCase Folderdata
 */
export const getFolderData = async () => {
    const data = await getFetch(URL_DOMAIN, "api/users/11/folders");
    const result = await data.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns formatted camelCase TotalLinkdata
 */
export const getLinkData = async () => {
    const data = await getFetch(URL_DOMAIN, "api/users/11/links");
    const result = await data.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @param { number } id
 * @returns formatted camelCase FilteredLinkdata
 */
export const getFilteredLinkData = async (id: number) => {
    const data = await getFetch(
        URL_DOMAIN,
        `api/users/11/links?folderId=${id}`
    );
    const result = await data.data;
    return getFormattedCamelCaseData(result);
};

/**
 *
 * @returns formatted camelCase FolderPageUserdata
 */
export const getFolderPageUserData = async () => {
    const data = await getFetch(URL_DOMAIN, "api/users/11");
    const result = await data.data;
    return getFormattedCamelCaseData(result);
};
