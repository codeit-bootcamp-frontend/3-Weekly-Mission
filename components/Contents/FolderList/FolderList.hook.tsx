import { getRefinedFolderList, getRefinedUser } from "@/apis/services";
import { FolderInterFace } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetFolderList = () => {
    // 폴더 리스트를 가져온다.
    const [folderList, setFolderList] = useState([]);

    useEffect(() => {
        (async () => {
            const refinedFolderList = await getRefinedFolderList();
            setFolderList(refinedFolderList);
        })();
    }, []);

    return { folderList };
};

export const useGetUserId = () => {
    // userId 가져오기
    const [userId, setUserId] = useState();

    useEffect(() => {
        (async () => {
            const { id } = await getRefinedUser();
            setUserId(id);
        })();
    }, []);

    return { userId };
};

export const useHandleFolderClick = (
    folderList: any,
    setCurrentFolderName: any,
    setCurrentFolderId: any,
    onOverviewFolderButtonClick: any,
    onFilteredFolderButtonClick: any,
    createSharingUrl: any,
    folderId?: string,
    userId?: string
) => {
    useEffect(() => {
        if (!folderId) {
            setCurrentFolderName("전체");
        }
        if (folderId) {
            const folder = folderList?.find(
                (folder: FolderInterFace) => folder.id === Number(folderId)
            );
            setCurrentFolderId(Number(folderId));
            setCurrentFolderName(folder?.name);
        }
    }, [folderId]);

    // 전체 폴더 클릭
    const handleOverviewFolderClick = () => {
        setCurrentFolderId(0);
        setCurrentFolderName("전체");
        onOverviewFolderButtonClick();
    };

    // 폴더 클릭
    const handleFolderClick = (folderId: number, folderName: string) => {
        setCurrentFolderId(folderId);
        setCurrentFolderName(folderName);
        onFilteredFolderButtonClick(folderId);
        // URL 생성
        if (userId) {
            createSharingUrl(userId, folderId);
        }
    };

    return { handleOverviewFolderClick, handleFolderClick };
};
