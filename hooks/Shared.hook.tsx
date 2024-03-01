import { useEffect, useRef, useState } from "react";
import {
    CardInterface,
    FolderDataInterface,
    SharedPageInfoInterface,
    UserDataInterface,
} from "@/interfaces";
import { SharedFolderIdType, SharedUserIdType } from "@/types";
import { useRouter } from "next/router";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { ParsedUrlQuery } from "querystring";
import { getSharedPageFolderInfo, getSharedPageLinkList } from "@/apis/api";

// Header의 유저 프로필 데이터 및 로그인 여부
export const useSharedPageLogin = () => {
    const [login, setLogin] = useState(true);
    return { login };
};

interface SharedPageUrlQueryInterface extends ParsedUrlQuery {
    user: string;
    folder: string;
}

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
    sharedUserId = "1007",
    sharedFolderId: SharedFolderIdType
) => {
    const [cardListData, setCardListData] = useState<CardInterface[]>();
    const originalCardListData = useRef([]);

    useEffect(() => {
        try {
            if (sharedFolderId && sharedUserId) {
                (async () => {
                    const { data } = await getSharedPageLinkList(
                        sharedUserId,
                        sharedFolderId
                    );
                    setCardListData(data);
                    originalCardListData.current = data;
                })();
            }
        } catch (err) {
            console.error(err);
        }
    }, [sharedFolderId, sharedUserId]);

    return {
        cardListData,
        setCardListData,
        originalCardListData,
    };
};
