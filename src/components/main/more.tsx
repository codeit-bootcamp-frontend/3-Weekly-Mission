import { useState } from "react";
import DeleteModal from "components/modal/deleteModal";
import AddFolderModal from "components/modal/addFolderModal";
import PopupMessage from "components/modal";
import { MyFolders } from "types";

interface PropsMore {
    folder: any;
}

export const More = ({ folder }: PropsMore) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsOpen(!isOpen);
    const target = e.target as HTMLElement
    const text = target.textContent
    if (text !== null) {
      setModal(text);
    }
  };
  const handlePopupMessage = (value: boolean) => {
    setIsOpen(value);
  };
  return (
    <div className="More">
      <span className="text" onClick={handleClick}>
        추가하기
      </span>
      <span className="text" onClick={handleClick}>
        삭제하기
      </span>
      {
        <PopupMessage
          modalOpen={isOpen}
          onClick={handlePopupMessage}
          component={
            modal === "추가하기" ? (
              <AddFolderModal folder={folder.name} isSubtext={true} />
            ) : (
              <DeleteModal />
            )
          }
        />
      }
    </div>
  );
}
