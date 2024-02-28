/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CardInterface, FolderInterface, ModalInterface } from "@/types/types";
import calcDate from "@/utils/calcDate";
import Star from "../Button/Star/Star";
import Kebab from "../Button/Kebab/Kebab";
import * as S from "./Card.style";
import formatDate from "@/utils/formatDate";

export default function Card({
  card,
  folderList,
  onClick,
}: {
  card: CardInterface;
  folderList?: FolderInterface[];
  onClick?: (m: ModalInterface) => void;
}) {
  const unit = calcDate(card.created_at || card.createdAt);

  return (
    <>
      <S.MainDiv>
        {onClick && (
          <>
            <Star card={card} />
            <Kebab card={card} folderList={folderList} onClick={onClick} />
          </>
        )}
        <Link href={card.url} target="_blank" rel="noreferrer noopener">
          <S.ImageSection>
            <img
              src={
                card.image_source ||
                card.imageSource ||
                "/assets/Icons/no-img-card.svg"
              }
              alt={card.title}
            />
          </S.ImageSection>
          <S.TextSection>
            <S.Time>{unit}</S.Time>
            <S.Description>{card.description}</S.Description>
            <S.Created>
              {formatDate(card.created_at || card.createdAt)}
            </S.Created>
          </S.TextSection>
        </Link>
      </S.MainDiv>
    </>
  );
}
