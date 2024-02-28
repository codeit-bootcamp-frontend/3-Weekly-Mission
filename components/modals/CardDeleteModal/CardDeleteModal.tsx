import { CardInterface } from "@/types/types";
import * as S from "./CardDeleteModal.style";

export default function CardDeleteModal({ card }: { card: CardInterface }) {
  return (
    <S.Content>
      <S.Title>링크 삭제</S.Title>
      <S.Description>{card.url}</S.Description>
      <S.Button>삭제하기</S.Button>
    </S.Content>
  );
}
