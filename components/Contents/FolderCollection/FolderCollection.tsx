import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { DEFALUT_MODAL_VALUE } from "@/constants/constants";
import { ShowModal } from "@/types";
import { FolderDataInterface, FolderInterface } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";

interface FolderCollectionProps {
    onButtonClick: ShowModal;
    folderList?: FolderDataInterface[];
    onOverviewFolderButtonClick: () => void;
    onFilteredFolderButtonClick: (id: number) => void;
    userData: any;
}

const FolderCollection = ({
    onButtonClick,
    folderList,
    onOverviewFolderButtonClick,
    onFilteredFolderButtonClick,
    userData,
}: FolderCollectionProps) => {
    // Think currentFolderId와 currentFolderName을 객체로 관리하는 편이 옳은가?
    // 객체로 관리하다면 확장성이 높아질까? const [currentFolder, setCurrentFolder] = useState({id: 0, name: "전체"}); 이런 느낌?

    const router = useRouter();
    const { folderId } = router.query;

    const [currentFolderId, setCurrentFolderId] = useState(0);
    const [currentFolderName, setCurrentFolderName] = useState<string>("전체");

    // 초기 폴더 설정
    useEffect(() => {
        if (!folderId) {
            setCurrentFolderName("전체");
        }
        if (folderId) {
            const folder = folderList?.find(
                (folder) => folder.id === Number(folderId)
            );
            setCurrentFolderId(Number(folderId));
            setCurrentFolderName(folder?.name);
        }
    }, [folderList, folderId]);

    // URL 생성
    const sharingUrl = useRef("");

    const createSharingUrl = (userId: number, folderId: number) => {
        sharingUrl.current = `${window.location.origin}/shared?user=${userId}&folder=${folderId}`;
    };

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
        if (userData) {
            createSharingUrl(userData.id, folderId);
        }
    };

    if (folderList === undefined || userData === undefined) {
        return null;
    }

    return (
        <>
            <FolderWrapper>
                <div>
                    <FolderButtonContainer>
                        <FolderButton
                            type="button"
                            $isClicked={0 === currentFolderId ? true : false}
                            onClick={handleOverviewFolderClick}
                        >
                            전체
                        </FolderButton>
                        {folderList?.map((folder) => {
                            return (
                                <FolderButton
                                    type="button"
                                    $isClicked={
                                        folder.id === currentFolderId
                                            ? true
                                            : false
                                    }
                                    key={folder.id}
                                    onClick={() => {
                                        handleFolderClick(
                                            folder.id,
                                            folder.name
                                        );
                                    }}
                                >
                                    {folder.name}
                                </FolderButton>
                            );
                        })}
                    </FolderButtonContainer>
                    <CreateFolderButton
                        onClick={() => {
                            onButtonClick({
                                ...DEFALUT_MODAL_VALUE,
                                type: "CreateFolder",
                                folderName: "",
                            });
                        }}
                    >
                        <span>폴더추가</span>
                        <Image
                            src="/images/add.svg"
                            alt="폴더 더보기 사진"
                            width={16}
                            height={16}
                        />
                    </CreateFolderButton>
                </div>
            </FolderWrapper>

            <FolderToolbarWrapper>
                <div>{currentFolderName}</div>
                {currentFolderId !== 0 ? (
                    <FolderToolbarBox>
                        <button
                            type="button"
                            onClick={() => {
                                // data에 title, description, sourceImg가 들어가야한다.
                                onButtonClick({
                                    ...DEFALUT_MODAL_VALUE,
                                    type: "ShareFolder",
                                    folderName: currentFolderId,
                                    sharingUrl: sharingUrl.current,
                                });
                            }}
                        >
                            <Image
                                src="/images/share.svg"
                                alt="폴더 도구 모음 공유 버튼"
                                width={18}
                                height={18}
                            />
                            <span>공유</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                onButtonClick({
                                    ...DEFALUT_MODAL_VALUE,
                                    type: "ChangeFolderName",
                                    folderName: currentFolderId,
                                });
                            }}
                        >
                            <Image
                                src="/images/pen.svg"
                                alt="폴더 도구 모음 수정 버튼"
                                width={18}
                                height={18}
                            />
                            <span>이름 변경</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                onButtonClick({
                                    ...DEFALUT_MODAL_VALUE,
                                    type: "DeleteFolder",
                                    folderName: currentFolderId,
                                });
                            }}
                        >
                            <Image
                                src="/images/trash_can.svg"
                                alt="폴더 도구 모음 삭제 버튼"
                                width={15}
                                height={16}
                            />
                            <span>삭제</span>
                        </button>
                    </FolderToolbarBox>
                ) : null}
            </FolderToolbarWrapper>
        </>
    );
};

const FolderWrapper = styled.div`
    width: 1060px;
    margin-bottom: 24px;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    @media (max-width: 1123px) {
        width: 704px;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 8px;
    }
`;

const FolderButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;

const FolderButton = styled.button<{ $isClicked: boolean }>`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;
    color: #000;
    font-family: Pretendard;
    margin: 0 8px 8px 0;

    ${(props) =>
        props.$isClicked
            ? `color: #fff;
        background: var(--Linkbrary-primary-color, #6d6afe);`
            : ""}

    @media (max-width: 767px) {
        padding: 6px 10px;
        font-size: 14px;
        margin-bottom: 16px;
    }
`;

const CreateFolderButton = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;

    span {
        color: #6d6afe;
        text-align: center;
        font-family: Abel;
        font-size: 16px;
        letter-spacing: -0.3px;
        white-space: nowrap;
    }

    img {
        width: 16px;
        height: 16px;
        content: url("/images/add.svg");
    }

    @media (max-width: 767px) {
        display: flex;
        padding: 8px 24px;
        gap: 20px;
        border-radius: 20px;
        border: 1px solid var(--Linkbrary-white, #fff);
        background: var(--Linkbrary-primary-color, #6d6afe);
        position: fixed;
        bottom: 101px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;

        span {
            color: var(--Linkbrary-gray10, #e7effb);
            text-align: center;
            font-family: Abel;
            font-size: 16px;
            letter-spacing: -0.3px;
        }

        img {
            content: url("/images/mobile_add.svg");
        }
    }
`;

const FolderToolbarWrapper = styled.div`
    width: 1060px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    div {
        color: #000;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.2px;
    }

    @media (max-width: 1123px) {
        width: 704px;
    }

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        gap: 12px;
    }
`;

const FolderToolbarBox = styled.div`
    display: flex;
    gap: 16px;
    button {
        display: flex;
        align-items: center;
        color: var(--Linkbrary-gray60, #9fa6b2);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        img {
            margin-right: 4px;
        }
    }
`;

export default FolderCollection;
