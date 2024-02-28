import { FolderInterface } from "@/types/types";
import * as S from "./RenameModal.style";

export default function RenameModal({ folder }: { folder: FolderInterface }) {
  return (
    <S.Content>
      <S.Title>폴더 이름 변경</S.Title>
      <S.Input placeholder={folder.name} />
      <S.Button>변경하기</S.Button>
    </S.Content>
  );
}
