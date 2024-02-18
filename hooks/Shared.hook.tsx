import { useEffect, useRef, useState } from "react";
import getFetch from "@/utils/getFetch";
import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import {
    CardInterface,
    FolderDataInterface,
    SharedPageInfoInterface,
    SharedPageUserDataInterface,
} from "@/interfaces";
import { SharedFolderIdType, SharedUserIdType } from "@/types";
import { useRouter } from "next/router";

// Header의 유저 프로필 데이터 및 로그인 여부
export const useSharedPageLogin = () => {
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState<SharedPageUserDataInterface>();

    useEffect(() => {
        try {
            getFetch("bootcamp-api.codeit.kr", "api/sample/user").then(
                (user) => {
                    const formattedUser = getFormattedCamelCaseData(user);
                    setUserData({ ...formattedUser });
                    setLogin(true);
                }
            );
        } catch (error) {
            console.error(error);
        }
    }, []);

    return { login, userData };
};

// sharedPage의 id와 현재 로그인된 유저의 id를 가져오는 훅
export const useGetSharedPageIds = () => {
    const router = useRouter();
    const { user, folder } = router.query;
    console.log("user : ", user, "folder : ", folder);

    const [sharedUserId, setSharedUserId] = useState<SharedUserIdType>(null);
    const [sharedFolderId, setSharedFolderId] =
        useState<SharedFolderIdType>(null);

    useEffect(() => {
        setSharedUserId(user);
        setSharedFolderId(folder);
    }, []);

    return { sharedUserId, sharedFolderId };
};

// 사용자가 아닌 공유한 사람, 공유 페이지의 데이터 정보
export const useGetSharedPageInfo = () => {
    const [sharedPageInfo, setSharedPageInfo] =
        useState<SharedPageInfoInterface>();
    const [isLoadingSharedPageInfo, setIsLoadingSharedPageInfo] =
        useState(false);
    // 타입스크립트 v4.4 부터는 error의 object가 unknown type으로 정의
    const [sharedPageInfoError, setSharedPageInfoError] = useState<unknown>();

    useEffect(() => {
        try {
            setIsLoadingSharedPageInfo(true);
            getFetch("bootcamp-api.codeit.kr", `api/sample/folder`)
                .then((data) => {
                    return data.folder;
                })
                .then((result) => {
                    setSharedPageInfo(() => {
                        return result;
                    });
                });
        } catch (err) {
            setSharedPageInfoError(err);
        } finally {
            setIsLoadingSharedPageInfo(false);
        }
    }, []);

    return { sharedPageInfo, isLoadingSharedPageInfo, sharedPageInfoError };
};

// useGetFolderListData로 폴더 데이터를 가져온 후, 현재 페이지의 폴더 이름을 가져온다.
export const useGetFolderListData = (
    sharedUserId: SharedUserIdType,
    sharedFolderId: SharedFolderIdType
) => {
    const [folderListData, setFolderListData] = useState([]);
    const [isLoadingFolderListData, setIsLoadingFolderListData] =
        useState(false);
    const [folderListDataError, setFolderListDataError] = useState<unknown>();

    useEffect(() => {
        try {
            setIsLoadingFolderListData(true);
            if (sharedFolderId) {
                getFetch(
                    "bootcamp-api.codeit.kr",
                    `api/users/${sharedUserId}/folders`
                )
                    .then((res) => {
                        return res.data;
                    })
                    .then((result) => {
                        return setFolderListData(result);
                    });
            }
        } catch (err) {
            setFolderListDataError(err);
        } finally {
            setIsLoadingFolderListData(false);
        }
    }, [sharedUserId]);

    return { folderListData, isLoadingFolderListData, folderListDataError };
};

export const useGetSharePageFolderName = (
    folderListData: FolderDataInterface[],
    sharedFolderId: SharedFolderIdType
) => {
    const [sharePageFolderName, setSharePageFolderName] = useState<
        string | undefined
    >("");

    useEffect(() => {
        const foundFolder: FolderDataInterface | undefined =
            folderListData?.find((folder) => {
                return folder?.id === Number(sharedFolderId);
            });
        setSharePageFolderName(foundFolder?.name);
    }, [folderListData, sharedFolderId]);

    return { sharePageFolderName };
};

// sharedPage의 카드 리스트 데이터를 가져오는 훅
export const useGetShareCardList = (
    sharedFolderId: SharedFolderIdType,
    sharedUserId: SharedUserIdType
) => {
    const [cardListData, setCardListData] = useState<CardInterface[]>();
    const [isLoadingSetCardListData, setIsLoadingSetCardListData] =
        useState(false);
    const [cardListDataError, setCardListDataError] = useState<unknown>();
    const originalCardListData = useRef([]);

    useEffect(() => {
        try {
            setIsLoadingSetCardListData(true);
            if (sharedFolderId && sharedUserId) {
                getFetch(
                    "bootcamp-api.codeit.kr",
                    `api/users/${sharedUserId}/links?folderId=${sharedFolderId}`
                )
                    .then((res) => {
                        return res.data;
                    })
                    .then((result) => {
                        // sample 데이터의 link부분의 key를 카멜 케이스에서 스네이크 케이스로 변환
                        const formattedData = getFormattedCamelCaseData(result);
                        setCardListData(formattedData);
                        originalCardListData.current = formattedData;
                    });
            }
        } catch (err) {
            setCardListDataError(err);
        } finally {
            setIsLoadingSetCardListData(false);
        }
    }, [sharedFolderId, sharedUserId]);

    return {
        cardListData,
        setCardListData,
        isLoadingSetCardListData,
        cardListDataError,
        originalCardListData,
    };
};
