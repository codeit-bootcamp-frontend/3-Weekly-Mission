import {
    getFilteredLinkList,
    getFolderList,
    getLinkList,
    getSharedPageFolderInfo,
    getSharedPageOwnerInfo,
    getUser,
} from "../api";

// services 폴더는 API 요청을 보낸후 받은 데이터를 가공하는 역할을 한다.
export const getRefinedUser = async () => {
    try {
        const user = await getUser();
        const refinedUser = user.data[0];
        return refinedUser;
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedFolderList = async () => {
    try {
        const folderList = await getFolderList();
        const refinedFolderList = folderList.data.folder;
        return refinedFolderList;
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedLinkList = async () => {
    try {
        const linkList = await getLinkList();
        const refinedFolderList = linkList.data.folder;
        return refinedFolderList;
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedFilteredLinkList = async () => {
    try {
        const FilteredlinkList = await getFilteredLinkList();
        const refinedFilteredFolderList = FilteredlinkList.data.folder;
        return refinedFilteredFolderList;
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedSharedPageFolderInfo = async (folderId: string) => {
    try {
        const sharedPageFolderInfo = await getSharedPageFolderInfo(folderId);
        const refinedSharedPageFolderInfo = sharedPageFolderInfo.data[0];
        return refinedSharedPageFolderInfo;
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedSharedPageOwnerInfo = async (folderId: string) => {
    try {
        const sharedPageOwnerInfo = await getSharedPageOwnerInfo(folderId);
        const refinedSharedPageOnwerInfo = sharedPageOwnerInfo.data[0];
        return refinedSharedPageOnwerInfo;
    } catch (error) {
        console.error(error);
    }
};
