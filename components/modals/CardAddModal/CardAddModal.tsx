import { MouseEvent } from "react";
import { CardInterface, FolderInterface } from "@/types/types";
import * as S from "./CardAddModal.style";

export default function CardAddModal({
  card,
  folderList,
}: {
  card: CardInterface;
  folderList?: FolderInterface[];
}) {
  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    (e.target as Element).classList.toggle("checked");
  };

  return (
    <S.Content>
      <S.Title>폴더에 추가</S.Title>
      <S.Description>{card.url}</S.Description>
      {folderList?.map((folder) => {
        return (
          <S.Checkbox key={folder.id} onClick={handleToggle}>
            {folder?.name}
            <S.Count>{folder?.link?.count}개 링크</S.Count>
          </S.Checkbox>
        );
      })}
      <S.Button>추가하기</S.Button>
    </S.Content>
  );
}
