import { useEffect, useRef, useState } from "react";
import { LinkInterface } from "@/interfaces";
import { SharedFolderIdType } from "@/types";
import { getSharedPageLinkList } from "@/apis/api";

// sharedPage의 카드 리스트 데이터를 가져오는 훅
export const useGetShareLinkList = (
    sharedUserId = "1007",
    sharedFolderId: SharedFolderIdType
) => {
    const [LinkList, setLinkList] = useState<LinkInterface[]>();
    const originalLinkList = useRef([]);

    useEffect(() => {
        try {
            if (sharedFolderId && sharedUserId) {
                (async () => {
                    const { data } = await getSharedPageLinkList(
                        sharedUserId,
                        sharedFolderId
                    );
                    setLinkList(data);
                    originalLinkList.current = data;
                })();
            }
        } catch (err) {
            console.error(err);
        }
    }, [sharedFolderId, sharedUserId]);

    return {
        LinkList,
        setLinkList,
        originalLinkList,
    };
};
