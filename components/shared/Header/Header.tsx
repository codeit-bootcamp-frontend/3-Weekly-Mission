/* eslint-disable @next/next/no-img-element */
import { SharedFolderInterface, SharedUserInterface } from "@/types/types";
import * as S from "./Header.style";

export default function Header({
  sharedUser,
  sharedFolder,
}: {
  sharedFolder?: SharedFolderInterface;
  sharedUser?: SharedUserInterface;
}) {
  if (!sharedUser || !sharedFolder) {
    return <S.Header>공유 받은 폴더가 없습니다.</S.Header>;
  }
  return (
    <S.Header>
      <S.Section>
        <S.Div>
          <img src={sharedUser.profileImageSource} alt="프로필 이미지" />
        </S.Div>
        <S.User>{sharedUser.name}</S.User>
        <S.Folder>{sharedFolder?.folder.name}</S.Folder>
      </S.Section>
    </S.Header>
  );
}
