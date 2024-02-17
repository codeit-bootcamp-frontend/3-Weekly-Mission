import { useState } from "react";
import styled, { css } from "styled-components";

import check from "@/public/images/check.svg";
import { FolderDataInterface } from "@/interfaces";

interface ModalFolderListProps {
    folder: FolderDataInterface;
}

const ModalFolderList = ({ folder }: ModalFolderListProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleIsChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        // isChecked 상태에 따라 css 변화를 준다.
        <FolderList isChecked={isChecked} onClick={handleIsChecked}>
            <div>
                <FolderListTitle>{folder.name}</FolderListTitle>
                <FolderListCount>{folder.link.count}개 링크</FolderListCount>
            </div>
            {isChecked ? <FolderListCheckImg src={check} /> : null}
        </FolderList>
    );
};

const FolderList = styled.li<{ isChecked: boolean }>`
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    ${(props) =>
        props.isChecked
            ? css`
                  border-radius: 8px;
                  background: var(--Linkbrary-bg, #f0f6ff);

                  &FolderListTitle {
                      color: #6d6afe;
                  }
              `
            : null}

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

const FolderListTitle = styled.div`
    color: #373740;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;

const FolderListCount = styled.div`
    color: #9fa6b2;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
`;

const FolderListCheckImg = styled.img`
    width: 14px;
    height: 14px;
`;

export default ModalFolderList;
