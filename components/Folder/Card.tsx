/* eslint-disable @next/next/no-img-element */
import { calcTime, formatDateString } from "./TimeUtils";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { AddModal, DeleteLinkModal } from "./modal/Modal";
import { LinkId } from "@/pages/folder/type";
import * as S from "./Style";

export default function Card({ data }: { data: LinkId }) {
  const formatDate = formatDateString(data.created_at);
  const createdTime = calcTime(data.created_at);
  const [emptyImg, setEmptyImg] = useState<StaticImageData | string>("");
  const [kebab, setKebab] = useState(false);
  const [ago, setAgo] = useState("");
  const [modal, setModal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const showEmptyImage = () => {
    if (data.image_source == undefined) {
      setEmptyImg("/assets/Images/tag.png");
    } else {
      setEmptyImg(data.image_source);
    }
  };

  useEffect(showEmptyImage, [data.image_source]);

  const handleKebab = () => {
    setKebab((prevKebab) => !prevKebab);
  };

  const calcTimeAgo = (createdTime: number) => {
    if (createdTime < 2) {
      return "1 minute ago";
    } else if (createdTime <= 59) {
      return `${createdTime} minutes ago`;
    } else if (createdTime / 60 <= 23) {
      return `${Math.ceil(createdTime / 60)} hour ago`;
    } else if (createdTime / 60 >= 24 && createdTime / 60 / 24 < 2) {
      return `1 day ago`;
    } else if (createdTime / 60 / 24 >= 2 && createdTime / 60 / 24 <= 30) {
      return `${Math.ceil(createdTime / 60 / 24)} days ago`;
    } else if (createdTime / 60 / 24 > 30 && createdTime / 60 / 24 <= 60) {
      return `1 month ago`;
    } else if (createdTime / 60 / 24 > 60 && createdTime / 60 / 24 <= 365) {
      return `${Math.ceil(createdTime / 60 / 24 / 30)} months ago`;
    } else if (createdTime / 60 / 24 > 365 && createdTime / 60 / 24 <= 730) {
      return `1 year ago`;
    } else {
      return `${Math.ceil(createdTime / 60 / 24 / 365)} years ago`;
    }
  };

  useEffect(() => {
    const ago = calcTimeAgo(createdTime);
    setAgo(ago);
  }, [createdTime]);

  const handleDelete = () => {
    setModal("DeleteLinkModal");
    setOpenModal(true);
  };

  const handleAdd = () => {
    setModal("AddModal");
    setOpenModal(true);
  };

  const handleClose = () => {
    setModal(null);
    setOpenModal(false);
  };

  return (
    <>
      <S.Card>
        <Link href={`${data.url}`} target="_blank" rel="noopener noreferrer">
          <S.CardWrapper>
            {data.image_source === undefined ? (
              <>
                <S.EmptyImg src={`${emptyImg}`} alt={`${data.title}`} />
                <S.EmptyImg
                  src={"/assets/Icons/logo.svg"}
                  alt="로고 아이콘 이미지"
                />
              </>
            ) : (
              <S.CardImg src={`${emptyImg}`} alt={`${data.title}`} />
            )}
          </S.CardWrapper>
        </Link>
        <S.StarImg
          src={"/assets/Icons/star.svg"}
          alt="즐겨찾기 별 아이콘 이미지"
        />
        <S.CardText className="cardText">
          <S.KebabBox>
            <S.Ago>{`${ago}`}</S.Ago>
            <S.Kebab onClick={handleKebab}>
              <img src={"/assets/Icons/kebab.svg"} alt="케밥 아이콘 이미지" />
            </S.Kebab>
            {kebab && (
              <S.KebabSelect>
                <S.KebabOption onClick={handleDelete}>삭제하기</S.KebabOption>
                <S.KebabOption onClick={handleAdd}>폴더에 추가</S.KebabOption>
              </S.KebabSelect>
            )}
          </S.KebabBox>
          <S.Description>{`${data.description}`}</S.Description>
          <S.CardDate>{`${formatDate}`}</S.CardDate>
        </S.CardText>
      </S.Card>
      {openModal && modal === "DeleteLinkModal" && (
        <DeleteLinkModal onClose={handleClose} />
      )}
      {openModal && modal === "AddModal" && <AddModal onClose={handleClose} />}
    </>
  );
}
