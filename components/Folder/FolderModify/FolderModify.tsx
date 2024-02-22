import DeleteModal from "@/components/modals/DeleteModal/DeleteModal";
import RenameModal from "@/components/modals/RenameModal/RenameModal";
import ShareModal from "@/components/modals/ShareModal/ShareModal";
import { FolderInterface, ModalInterface } from "@/types/types";
import * as S from "./FolderModify.style";
import Image from "next/image";

function Title({ title }: { title: string }) {
  return <S.Title>{title}</S.Title>;
}

export default function FolderModify({
  folder,
  onClick,
}: {
  folder: FolderInterface;
  onClick: (m: ModalInterface) => void;
}) {
  const handleModify = (id: string) => {
    if (id === "folderShare") {
      const newModal = {
        coponent: <ShareModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "folderRename") {
      const newModal = {
        component: <RenameModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "folderDelete") {
      const newModal = {
        component: <DeleteModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    } else {
      return;
    }
  };

  return (
    <S.MainDiv>
      <Title title={folder.name} />
      {folder.name !== "전체" && (
        <S.ModifyBox>
          <S.ButtonBox>
            <S.Button
              onClick={() => {
                handleModify("folderShare");
              }}
            >
              <Image
                src={"/assets/Icons/share-icon.svg"}
                alt="공유 아이콘 이미지"
                width={19}
                height={19}
              />
              공유
            </S.Button>
            <S.Button
              onClick={() => {
                handleModify("folderRename");
              }}
            >
              <Image
                src={"/assets/Icons/rename-icon.svg"}
                alt="이름변경 아이콘 이미지"
                width={19}
                height={19}
              />
              이름 변경
            </S.Button>
            <S.Button
              onClick={() => {
                handleModify("folderDelete");
              }}
            >
              <Image
                src={"/assets/Icons/delete-icon.svg"}
                alt="삭제 아이콘 이미지"
                width={19}
                height={19}
              />
              삭제
            </S.Button>
          </S.ButtonBox>
        </S.ModifyBox>
      )}
    </S.MainDiv>
  );
}
