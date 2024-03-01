import styled from "styled-components";
import {
    SharedPageFolderInfoInterface,
    SharedPageInfoInterface,
} from "../../interfaces";
import Image from "next/image";

import { useEffect, useState } from "react";
import { getSharedPageFolderInfo } from "@/apis/api";
import { useRouter } from "next/router";

interface ShareDescriptionProps {
    sharedPageInfo?: SharedPageInfoInterface;
    sharePageFolderName?: string;
    SharedPageFolderInfo?: SharedPageFolderInfoInterface;
}

const ShareDescription = ({
    sharedPageInfo,
    sharePageFolderName,
}: ShareDescriptionProps) => {
    const router = useRouter();
    const { folderId: SharedFolderId } = router.query;

    const [SharedPageFolderInfo, setSharedPageFolderInfo] = useState<
        SharedPageFolderInfoInterface[]
    >([{}]);

    useEffect(() => {
        try {
            (async () => {
                const { data } = await getSharedPageFolderInfo(SharedFolderId);
                return setSharedPageFolderInfo(() => [...data]);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <Background>
            <ShareDescriptionWrapper>
                <Image
                    src={sharedPageInfo?.owner?.profileImageSource || ""}
                    alt="코드잇 마크"
                    width={60}
                    height={60}
                />
                <span>{sharedPageInfo?.owner?.name}</span>
                <div>{SharedPageFolderInfo[0].name}</div>
            </ShareDescriptionWrapper>
        </Background>
    );
};

const Background = styled.div`
    box-sizing: border-box;
    background: var(--gray5);
    padding: 113px 32px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        padding: 87px 32px 40px;
    }
`;

const ShareDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--primary-purple-70, #8f00ff);
        margin-bottom: 12px;
    }

    span {
        color: var(--text-color-light-mode, #000);
        font-family: Pretendard;
        font-size: 16px;
        margin-bottom: 20px;
    }

    div {
        color: #000;
        font-family: Pretendard;
        font-size: 40px;
    }
`;

export default ShareDescription;
