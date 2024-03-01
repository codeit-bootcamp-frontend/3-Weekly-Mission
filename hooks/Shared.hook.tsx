import { useEffect, useRef, useState } from "react";
import { CardInterface } from "@/interfaces";
import { SharedFolderIdType } from "@/types";
import { getSharedPageLinkList } from "@/apis/api";

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
