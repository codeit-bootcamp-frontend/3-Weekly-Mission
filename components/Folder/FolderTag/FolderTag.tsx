import FolderInterface from "@/types/types";
import * as S from "./FolderTag.style";

function Tag({
  folder,
  onClick,
  clicked = false,
}: {
  folder: FolderInterface;
  onClick: (folder: FolderInterface) => void;
  clicked?: boolean;
}) {
  const handleButton = () => {
    if (folder) {
      onClick(folder);
    }
  };

  // 선택했을 때 clicked 여부
  return <S.TagButton onClick={handleButton}>{folder.name}</S.TagButton>;
}

export default function FolderTag({
  folders,
  clicked,
  onClick,
}: {
  folders: FolderInterface[];
  clicked: FolderInterface;
  onClick: (folder: FolderInterface) => void;
}) {
  return (
    <S.FolderTagDiv>
      <S.FolderTagBox>
        {folders?.map((folder) => {
          return (
            <Tag
              folder={folder}
              key={folder.id}
              onClick={onClick}
              clicked={clicked.id === folder.id}
            />
          );
        })}
      </S.FolderTagBox>
    </S.FolderTagDiv>
  );
}
