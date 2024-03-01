import { getSharedPageFolderInfo } from "@/apis/api";
import { SharedPageFolderInfoInterface } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useShareDescription = () => {
    const router = useRouter();
    const { folderId: SharedFolderId } = router.query;

    const [SharedPageFolderInfo, setSharedPageFolderInfo] = useState<
        SharedPageFolderInfoInterface[]
    >([]);

    useEffect(() => {
        try {
            (async () => {
                const { data } = await getSharedPageFolderInfo(SharedFolderId);
                console.log(data);
                return setSharedPageFolderInfo(() => [...data]);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return { SharedPageFolderInfo };
};
