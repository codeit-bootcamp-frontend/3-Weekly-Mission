import { ModalInterface } from "@/types/types";
import AddModal from "../../modals/AddModal/AddModal";
import * as S from "./FolderPopModal.style";

export default function FolderPopModal({
  onClick,
}: {
  onClick: (m: ModalInterface) => void;
}) {
  const handleCreate = (id: string) => {
    if (id === "folderCreate") {
      const newModal: ModalInterface = {
        component: <AddModal />,
        show: true,
      };
      onClick(newModal);
    }
  };

  return (
    <S.MainDiv>
      <S.Button
        onClick={() => {
          handleCreate("folderCreate");
        }}
      >
        폴더 추가 +
      </S.Button>
    </S.MainDiv>
  );
}
