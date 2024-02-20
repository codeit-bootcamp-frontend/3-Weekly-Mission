import { FolderDataInterface } from "../interfaces";

const getTargetFolderName = (
    folderListData: FolderDataInterface[],
    sharedFolderId: number
) => {
    const foundFolder = folderListData?.find((folder) => {
        return folder?.id === Number(sharedFolderId);
    });
    return foundFolder;
};

export default getTargetFolderName;
