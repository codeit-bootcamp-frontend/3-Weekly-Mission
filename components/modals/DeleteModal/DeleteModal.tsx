import { FolderInterface } from "@/types/types";
import * as S from "./DeleteModal.style";

export default function DeleteModal({ folder }: { folder: FolderInterface }) {
  return (
    <S.Content>
      <S.Title>폴더 삭제</S.Title>
      <S.Description>{folder.name}</S.Description>
      <S.Button>삭제하기</S.Button>
    </S.Content>
  );
}
