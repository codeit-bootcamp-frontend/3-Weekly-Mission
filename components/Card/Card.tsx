import React from "react";
import { getCreateDay, getTimeDifference } from "../../utils/util";
import Kebab from "../Kebab/Kebab";
import { ModalButtonClickType } from "../../types/types";
import { CardItem } from "../../types/dataTypes";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { defaultImg, starIcon } from "@/public/img";

interface Props {
  handleModalButtonClick: ModalButtonClickType | null;
  item: CardItem;
  toggle: boolean;
}

export default function Card({ handleModalButtonClick, item, toggle }: Props) {
  const { createdAt, description, imageSource, url, title } = item;
  const dateTimeString = createdAt;
  const timeAgo = getTimeDifference(dateTimeString);
  const createdDay = getCreateDay(dateTimeString);
  const imgAlt = `${title} 새창으로 바로가기 이미지`;
  const imgSource = imageSource ?? defaultImg.src;

  return (
    <>
      <Link href={url}>
        <CardImg src={imgSource} alt={imgAlt} />
      </Link>
      {toggle && (
        <StarImg
          width={34}
          height={34}
          priority
          src={starIcon}
          alt="별모양 아이콘"
        />
      )}
      <Info>
        {toggle && (
          <Kebab handleModalButtonClick={handleModalButtonClick} url={url} />
        )}
        <TimeAgoSpan>{timeAgo}</TimeAgoSpan>
        <Description>{description}</Description>
        <CreatedDaySpan>{createdDay}</CreatedDaySpan>
      </Info>
    </>
  );
}

const CardImg = styled.img`
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 20rem;
  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 765px) {
    height: 192px;
  }
`;

const StarImg = styled(Image)`
  position: absolute;
  width: 34px;
  height: 34px;
  right: 15px;
  top: 15px;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px 15px;
  border-radius: 0px 0px 15px 15px;
  background: #fff;
  border: 1px solid #fefefe;
`;

const TimeAgoSpan = styled.span`
  font-size: 13px;
  color: #666;
  font-weight: var(--small-font-weight);
`;

const Description = styled.p`
  color: #000;
  font-size: var(--small-font-size);
  font-weight: var(--small-font-weight);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const CreatedDaySpan = styled.span`
  color: #333;
  height: 19px;
  align-self: stretch;
  font-size: 14px;
  font-weight: 400;
`;
