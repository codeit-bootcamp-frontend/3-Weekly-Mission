import { getSharedPageFolderInfo } from "@/apis/api";
import { SharedPageFolderInfoInterface, UrlQuery } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useShareDescription = () => {
    const router = useRouter();
    const { folderId } = router.query as UrlQuery;

    const [SharedPageFolderInfo, setSharedPageFolderInfo] = useState<
        SharedPageFolderInfoInterface[]
    >([]);

    useEffect(() => {
        try {
            (async () => {
                if (folderId) {
                    const { data } = await getSharedPageFolderInfo(folderId);
                    return setSharedPageFolderInfo(() => [...data]);
                }
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return { SharedPageFolderInfo };
};
