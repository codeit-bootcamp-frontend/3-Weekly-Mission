import share_svg from "../../image/share.svg";
import pen_svg from "../../image/pen.svg";
import Delete_svg from "../../image/Delete.svg";
import ModalMessge from "../modal/ModalMessage";
import { useState } from "react";
import useUserFolderListData from "../../Hook/useUserFolderListData";
import "./FolderActionBtn.css";
import { UserFolderType } from "../../Hook/Types";

// 모달에 폴더이름 전달해주기 위핸 props
function FolderAtionBtns({ folderLists }: { folderLists: UserFolderType[] }) {
  const [snsmodalOpen, setSnsModalOpen] = useState(false);
  const [namemodalOpen, setNameModalOpen] = useState(false);
  const [folderRemoveModal, setFolderRemoveModal] = useState(false);

  const handleShareModal = () => {
    setSnsModalOpen(true);
  };

  const handlechangModal = () => {
    setNameModalOpen(true);
  };

  const handleRemoveModal = () => {
    setFolderRemoveModal(true);
  };

  return (
    <div className="FolderActionBtnArea">
      <span>유용한 글</span>

      <div className="FolderActionBtnBox">
        <button onClick={handleShareModal}>
          <img src={share_svg} alt="공유 버튼" />
          공유
        </button>

        <button onClick={handlechangModal}>
          <img src={pen_svg} alt="이름 변경 버튼" />
          이름 변경
        </button>

        <button onClick={handleRemoveModal}>
          <img src={Delete_svg} alt="삭제" />
          삭제
        </button>

        {snsmodalOpen ? (
          <ModalMessge
            modalOpen={snsmodalOpen}
            close={setSnsModalOpen}
            headerText={"공유"}
            folderName={"폴더"}
            icon={true}
          />
        ) : null}

        {namemodalOpen ? (
          <ModalMessge
            modalOpen={namemodalOpen}
            close={setNameModalOpen}
            headerText={"폴더 이름 변경"}
            placeholder={"유용한 팁"}
            buttonText={"변경하기"}
            type={"blue"}
          />
        ) : null}
        {folderRemoveModal ? (
          <ModalMessge
            modalOpen={folderRemoveModal}
            close={setFolderRemoveModal}
            headerText={"폴더 삭제"}
            folderName={"폴더"}
            buttonText={"삭제하기"}
            type={"red"}
          />
        ) : null}
      </div>
    </div>
  );
}

export const FolderAtionBtn = () => {
  const { folderLists } = useUserFolderListData();

  return <FolderAtionBtns folderLists={folderLists} />;
};
