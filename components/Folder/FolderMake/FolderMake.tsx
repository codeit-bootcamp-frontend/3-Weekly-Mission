import AddModal from "@/components/modals/AddModal/AddModal";
import { ModalInterface } from "@/types/types";
import * as S from "./FolderMake.style";

export default function FolderMake({
  onClick,
}: {
  onClick: (m: ModalInterface) => void;
}) {
  const handleCreate = (id: "folderCreate" | string) => {
    if (id === "folderCreate") {
      const newModal: ModalInterface = {
        component: <AddModal />,
        show: true,
      };
      onClick(newModal);
    }
  };

  return (
    <S.Container>
      <S.Button
        onClick={() => {
          handleCreate("folderCreate");
        }}
      >
        폴더 추가 +
      </S.Button>
    </S.Container>
  );
}
