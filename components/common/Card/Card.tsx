import { CardInterface, FolderInterface, ModalInterface } from "@/types/types";
import calcDate from "@/utils/calcDate";
import * as S from "./Card.style";

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
      <S.MainDiv>{onClick && <></>}</S.MainDiv>
    </>
  );
}
