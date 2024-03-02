import styled from "styled-components";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    SharedPageFolderInfoInterface,
    SharedPageOwnerInfoInterface,
    UrlQuery,
} from "@/interfaces";
import {
    getRefinedSharedPageFolderInfo,
    getRefinedSharedPageOwnerInfo,
} from "@/apis/services";

const ShareDescription = () => {
    const router = useRouter();
    const { folderId } = router.query as UrlQuery;
    // SharedPage의 folder 데이터 가져오기

    const [SharedPageFolderInfo, setSharedPageFolderInfo] =
        useState<SharedPageFolderInfoInterface>();
    useEffect(() => {
        (async () => {
            if (folderId) {
                const refinedSharedPageFolderInfo =
                    await getRefinedSharedPageFolderInfo(folderId);
                setSharedPageFolderInfo(refinedSharedPageFolderInfo);
            }
        })();
    }, [folderId]);

    const [sharedPageOwnerInfo, setSharedPageOwnerInfo] =
        useState<SharedPageOwnerInfoInterface>();

    useEffect(() => {
        (async () => {
            const refinedSharedPageOwnerInfo =
                await getRefinedSharedPageOwnerInfo("1007");
            setSharedPageOwnerInfo(refinedSharedPageOwnerInfo);
        })();
    }, []);

    if (
        SharedPageFolderInfo === undefined ||
        sharedPageOwnerInfo === undefined
    ) {
        return null;
    }

    return (
        <Background>
            <ShareDescriptionWrapper>
                <Image
                    src={sharedPageOwnerInfo?.imageSource}
                    alt="코드잇 마크"
                    width={60}
                    height={60}
                />
                <span>{sharedPageOwnerInfo?.name}</span>
                <div>{SharedPageFolderInfo?.name}</div>
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
