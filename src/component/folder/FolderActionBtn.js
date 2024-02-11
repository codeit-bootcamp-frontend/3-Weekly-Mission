import share_svg from "../../image/share.svg";
import pen_svg from "../../image/pen.svg";
import Delete_svg from "../../image/Delete.svg";
import ModalMessge from "../modal/ModalMessage";
import { useState } from "react";
import "./FolderActionBtn.css";
import SnsShareModal from "../modal/SnsShareModal";

export default function FolderAtionBtn() {
  const [snsmodalOpen, setSnsModalOpen] = useState(false);
  const [namemodalOpen, setNameModalOpen] = useState(false);
  const [folderRemoveModal, setFolderRemoveModal] = useState(false);

  const handleShareModal = (e) => {
    e.preventDefault();
    setSnsModalOpen(true);
  };

  const handlechangModal = (e) => {
    e.preventDefault();
    setNameModalOpen(true);
  };

  const handleRemoveModal = (e) => {
    e.preventDefault();
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
            folderName={"폴더이름"}
            icon={true}
          />
        ) : null}

        {namemodalOpen ? (
          <ModalMessge
            modalOpen={namemodalOpen}
            close={setNameModalOpen}
            headerText={"폴더 이름 변경"}
            placeholder={'유용한 팁'}
            buttonText={"변경하기"}
            type={"blue"}
          />
        ) : null}
        {folderRemoveModal ? (
          <ModalMessge 
          modalOpen={folderRemoveModal}
          close={setFolderRemoveModal}
          headerText={"폴더 삭제"}
          folderName={"폴더이름"}
          buttonText={"삭제하기"}
          type={"red"}
           />
        ) : null}
      </div>
    </div>
  );
}
