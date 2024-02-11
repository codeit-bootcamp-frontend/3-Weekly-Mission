import share_svg from "../../image/share.svg";
import pen_svg from "../../image/pen.svg";
import Delete_svg from "../../image/Delete.svg";
import ModalMessge from "../modal/ModalMessage";
import { useState } from "react";
import "./FolderActionBtn.css";
import SnsShareModal from "../modal/SnsShareModal";

export default function FolderAtionBtn() {
  const [namemodalOpen, setNameModalOpen] = useState(false);
  const [snsmodalOpen, setSnsModalOpen] = useState(false);
  const [folderRemoveModal, setFolderRemoveModal] = useState(false);

  const handleShareModal=(e) => {
    e.preventDefault();
    setSnsModalOpen(true);
  }

  const handlePopMessage = (e) => {
    e.preventDefault();
    setNameModalOpen(true);
  };

  const close = () => {
    setNameModalOpen(false);
    setSnsModalOpen(false);
  };

  return (
    <div className="FolderActionBtnArea">
      <span>유용한 글</span>
      <div className="FolderActionBtnBox">

        <button onClick={(e) => handleShareModal(e)}>
          <img src={share_svg} alt="공유 버튼" />
          공유
        </button>


        <button onClick={(e) => handlePopMessage(e)}>
          <img src={pen_svg} alt="이름 변경 버튼" />
          이름 변경
        </button>



        <button>
          <img src={Delete_svg} alt="삭제" />
          삭제
        </button>

      </div>
    </div>
  );
}
