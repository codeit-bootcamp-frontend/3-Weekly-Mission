import { CardInterface, FolderInterface, ModalInterface } from "@/types/types";
import * as S from "./CardList.style";
import Card from "../Card/Card";

export default function CardList({
  cardList,
  onClick,
  folderList,
  keyword = "",
}: {
  cardList?: CardInterface[];
  onClick?: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
  keyword?: string;
}) {
  if (!cardList || cardList.length === 0) {
    return <S.NoList>저장된 링크가 없습니다.</S.NoList>;
  }
  if (keyword) {
    const term = keyword.toLowerCase().split(" ").join("");

    cardList = cardList.filter((card) => {
      const text = `${card.description}${card.url}${card.title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return text.includes(term);
    });
  }
  return (
    <S.Section>
      {cardList?.map((card) => {
        return (
          <Card
            card={card}
            key={card.id}
            folderList={folderList}
            onClick={onClick}
          />
        );
      })}
    </S.Section>
  );
}
