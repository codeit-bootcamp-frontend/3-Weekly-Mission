import styled from "styled-components";
import { MouseEvent, useState } from "react";
import calculatePassedTime from "@/utils/calculatePassedTime";
import getFormattedDate from "@/utils/getFormattedDate";

import { DEFALUT_MODAL_VALUE } from "@/constants/constants";
import { ShowModal } from "@/types";
import Image from "next/image";
import { LinkInterface } from "@/interfaces";

interface CardDescriptionProps {
    link: LinkInterface;
    onDeleteButtonClick: ShowModal;
}

const CardDescription = ({
    link,
    onDeleteButtonClick,
}: CardDescriptionProps) => {
    const [kebabToggle, setKebabToggle] = useState(false);

    const handleKebabToggle = () => {
        setKebabToggle(!kebabToggle);
    };

    return (
        <CardDescriptionWrapper>
            <TimePassedBox>
                {calculatePassedTime(link.createdAt)}
                <KebabBtn
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        handleKebabToggle();
                    }}
                >
                    <Image
                        src="/images/kebab.svg"
                        alt="더보기 케밥 버튼"
                        width={21}
                        height={17}
                    />
                </KebabBtn>
                {kebabToggle ? (
                    <KebabMenuBox>
                        <KebabMenuDeleteButton
                            type="button"
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                onDeleteButtonClick({
                                    ...DEFALUT_MODAL_VALUE,
                                    type: "DeleteLink",
                                    url: link.url,
                                });
                            }}
                        >
                            삭제하기
                        </KebabMenuDeleteButton>
                        <KebabMenuAddFolderBtn>
                            폴더에 추가
                        </KebabMenuAddFolderBtn>
                    </KebabMenuBox>
                ) : null}
            </TimePassedBox>
            <Description>{link.description}</Description>
            <CreatedAt>{getFormattedDate(link.createdAt)}</CreatedAt>
        </CardDescriptionWrapper>
    );
};

export const CardDescriptionWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 135px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
    background: #fff;
`;

const TimePassedBox = styled.div`
    color: #666;
    font-family: Pretendard;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Description = styled.div`
    overflow: hidden;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

const CreatedAt = styled.div`
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
`;

const KebabBtn = styled.button`
    width: 21px;
    height: 17px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const KebabMenuBox = styled.div`
    display: flex;
    width: 100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    position: absolute;
    right: -80px;
    top: 16px;
`;

const KebabMenuDeleteButton = styled.button`
    display: flex;
    padding: 7px 12px;
    justify-content: center;
    gap: 10px;
    align-self: stretch;
    color: var(--gray-light-gray-100, #333236);
    font-family: Pretendard;
    background: var(--gray-light-gray-00, #fff);
    box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const KebabMenuAddFolderBtn = styled.button`
    display: flex;
    padding: 7px 12px;
    justify-content: center;

    gap: 10px;
    align-self: stretch;
    background: var(--Linkbrary-gray10, #e7effb);
    color: var(--Linkbrary-primary-color, #6d6afe);
    font-family: Pretendard;
`;

export default CardDescription;
